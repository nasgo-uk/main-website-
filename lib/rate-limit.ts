import { NextRequest, NextResponse } from 'next/server';

const ratelimit = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(identifier: string, limit: number = 5, window: number = 60000): boolean {
    const now = Date.now();
    const record = ratelimit.get(identifier);

    if (!record || now > record.resetAt) {
        ratelimit.set(identifier, { count: 1, resetAt: now + window });
        return true;
    }

    if (record.count >= limit) {
        return false;
    }

    record.count++;
    return true;
}

export function getIP(request: NextRequest): string {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }
    return "unknown";
}
