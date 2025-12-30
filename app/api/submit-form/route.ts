import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { checkRateLimit, getIP } from '@/lib/rate-limit';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

// Schema matches RegistrationData but with validation
const formSchema = z.object({
    type: z.enum(['waitlist', 'contact', 'company_lead', 'newsletter', 'demo_booking']),
    sourcePage: z.string().max(100),
    email: z.string().email().optional().or(z.literal('')),
    name: z.string().max(100).optional(),
    phone: z.string().max(50).optional(),
    companyName: z.string().max(100).optional(),
    fleetSize: z.string().max(50).optional(),
    userType: z.string().max(50).optional(),
    message: z.string().max(5000).optional(),
    subject: z.string().max(200).optional(),
    earlyAccess: z.boolean().optional(),
    metadata: z.any().optional(),
    // Honeypot field (should be empty)
    website: z.string().optional()
});

export async function POST(request: NextRequest) {
    try {
        const ip = getIP(request);

        // 1. Rate Limiting
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // 2. CSRF Check
        const headerToken = request.headers.get('X-CSRF-Token');
        const cookieToken = request.cookies.get('csrf-token')?.value;

        if (!headerToken || !cookieToken || headerToken !== cookieToken) {
            return NextResponse.json(
                { error: 'Invalid or missing CSRF token' },
                { status: 403 }
            );
        }

        const body = await request.json();

        // 3. Honeypot Check
        if (body.website) {
            // Silent failure for bots
            return NextResponse.json({ success: true, id: 'bot-filtered' });
        }

        // 4. Input Validation
        const validation = formSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: validation.error },
                { status: 400 }
            );
        }

        const data = validation.data;

        // 5. Sanitization
        const sanitizedData = {
            ...data,
            name: data.name ? purify.sanitize(data.name) : undefined,
            email: data.email ? purify.sanitize(data.email) : undefined,
            message: data.message ? purify.sanitize(data.message) : undefined,
            companyName: data.companyName ? purify.sanitize(data.companyName) : undefined,
            subject: data.subject ? purify.sanitize(data.subject) : undefined,
        };

        // 6. Secure Write to Firestore
        // Note: We use the server timestamp and request headers for metadata
        const docRef = await addDoc(collection(db, 'registrations'), {
            ...sanitizedData,
            createdAt: serverTimestamp(),
            userAgent: request.headers.get('user-agent') || 'unknown',
            language: request.headers.get('accept-language') || 'unknown',
            ip: ip // Optional: Log IP for security auditing
        });

        return NextResponse.json({ success: true, id: docRef.id });

    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
