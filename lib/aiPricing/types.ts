// AI Pricing Types

export type ServiceCategory =
    | 'cleaning'
    | 'handyman'
    | 'tech'
    | 'wellness'
    | 'automotive'
    | 'gardening'
    | 'logistics';

export type PhotoRequirement = 'required' | 'optional' | 'forbidden';

export interface ServiceQuestion {
    id: string;
    question: string;
    questionAr: string;
    type: 'select' | 'multiselect' | 'text' | 'number';
    required: boolean;
    options?: QuestionOption[];
}

export interface QuestionOption {
    value: string;
    label: string;
    labelAr: string;
    priceModifier: number;
}

export interface ServiceConfig {
    id: string;
    name: string;
    nameAr: string;
    category: ServiceCategory;

    // Photo Configuration
    photoRequirement: PhotoRequirement;
    minPhotos: number;
    maxPhotos: number;

    // AI Validation
    validImageContent: string[];
    invalidImageContent: string[];

    // User Instructions
    photoInstructions: string[];
    photoInstructionsAr: string[];

    // Pricing
    basePrice: number;
    minPrice: number;
    maxPrice: number;
    pricingFactors: ('area' | 'condition' | 'urgency' | 'quantity' | 'complexity')[];

    // Questions (for non-photo services)
    questions?: ServiceQuestion[];

    // Privacy & Safety
    isSensitive: boolean;
    genderPreferenceRequired: boolean;
    requiresCertification?: string[];
}

export interface PricingRequest {
    serviceId: string;
    photos?: string[]; // Base64 encoded images
    answers?: Record<string, string | string[]>;
    urgency?: 'normal' | 'urgent' | 'emergency';
}

export interface PricingResponse {
    success: boolean;
    price?: {
        amount: number;
        currency: string;
        breakdown: PriceBreakdown[];
    };
    confidence: number; // 0-100
    reasoning: string;
    reasoningAr: string;
    validationErrors?: ValidationError[];
    warnings?: string[];
}

export interface PriceBreakdown {
    item: string;
    itemAr: string;
    amount: number;
}

export interface ValidationError {
    code: string;
    message: string;
    messageAr: string;
}

export interface PhotoValidationResult {
    isValid: boolean;
    contentDetected: string;
    reason: string;
    reasonAr: string;
}
