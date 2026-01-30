import { NextRequest, NextResponse } from 'next/server';
import { getAIPricing, validatePhoto } from '@/lib/aiPricing/geminiService';
import { PricingRequest } from '@/lib/aiPricing/types';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.serviceId) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Service ID is required',
                    errorAr: 'معرف الخدمة مطلوب'
                },
                { status: 400 }
            );
        }

        const pricingRequest: PricingRequest = {
            serviceId: body.serviceId,
            photos: body.photos || [],
            answers: body.answers || {},
            urgency: body.urgency || 'normal'
        };

        const result = await getAIPricing(pricingRequest);

        return NextResponse.json(result);
    } catch (error) {
        console.error('AI Pricing API error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                errorAr: 'خطأ في الخادم'
            },
            { status: 500 }
        );
    }
}

// Endpoint to validate a single photo
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.photo || !body.serviceId) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Photo and service ID are required',
                    errorAr: 'الصورة ومعرف الخدمة مطلوبان'
                },
                { status: 400 }
            );
        }

        const result = await validatePhoto(body.photo, body.serviceId);

        return NextResponse.json(result);
    } catch (error) {
        console.error('Photo validation API error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                errorAr: 'خطأ في الخادم'
            },
            { status: 500 }
        );
    }
}
