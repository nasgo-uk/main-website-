import { GoogleGenerativeAI } from '@google/generative-ai';
import {
    PricingRequest,
    PricingResponse,
    PhotoValidationResult,
    ServiceConfig,
    ValidationError
} from './types';
import { getServiceConfig } from './serviceConfigs';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Main function to get AI pricing for a service
 */
export async function getAIPricing(request: PricingRequest): Promise<PricingResponse> {
    const config = getServiceConfig(request.serviceId);

    if (!config) {
        return {
            success: false,
            confidence: 0,
            reasoning: 'Unknown service type',
            reasoningAr: 'نوع خدمة غير معروف',
            validationErrors: [{
                code: 'INVALID_SERVICE',
                message: 'Service not found',
                messageAr: 'الخدمة غير موجودة'
            }]
        };
    }

    // Validate request
    const validationErrors = validateRequest(config, request);
    if (validationErrors.length > 0) {
        return {
            success: false,
            confidence: 0,
            reasoning: 'Validation failed',
            reasoningAr: 'فشل التحقق',
            validationErrors
        };
    }

    try {
        // Calculate price based on service type
        if (config.photoRequirement === 'required' && request.photos && request.photos.length > 0) {
            // Use AI to analyze photos and determine price
            return await calculatePriceFromPhotos(config, request);
        } else {
            // Use questions/answers to determine price
            return calculatePriceFromAnswers(config, request);
        }
    } catch (error) {
        console.error('AI Pricing error:', error);
        return {
            success: false,
            confidence: 0,
            reasoning: 'Error calculating price',
            reasoningAr: 'خطأ في حساب السعر',
            validationErrors: [{
                code: 'AI_ERROR',
                message: 'Failed to calculate price',
                messageAr: 'فشل في حساب السعر'
            }]
        };
    }
}

/**
 * Validate the pricing request
 */
function validateRequest(config: ServiceConfig, request: PricingRequest): ValidationError[] {
    const errors: ValidationError[] = [];

    // Check photo requirements
    if (config.photoRequirement === 'required') {
        if (!request.photos || request.photos.length < config.minPhotos) {
            errors.push({
                code: 'MIN_PHOTOS_NOT_MET',
                message: `Please upload at least ${config.minPhotos} photo(s)`,
                messageAr: `يرجى رفع ${config.minPhotos} صورة على الأقل`
            });
        }
        if (request.photos && request.photos.length > config.maxPhotos) {
            errors.push({
                code: 'MAX_PHOTOS_EXCEEDED',
                message: `Maximum ${config.maxPhotos} photos allowed`,
                messageAr: `الحد الأقصى ${config.maxPhotos} صور`
            });
        }
    }

    // Check required questions
    if (config.questions) {
        for (const question of config.questions) {
            if (question.required && (!request.answers || !request.answers[question.id])) {
                errors.push({
                    code: 'REQUIRED_ANSWER_MISSING',
                    message: `Please answer: ${question.question}`,
                    messageAr: `يرجى الإجابة: ${question.questionAr}`
                });
            }
        }
    }

    return errors;
}

/**
 * Calculate price using AI photo analysis
 */
async function calculatePriceFromPhotos(
    config: ServiceConfig,
    request: PricingRequest
): Promise<PricingResponse> {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build the prompt
    const prompt = buildPricingPrompt(config, request);

    // Prepare image parts
    const imageParts = request.photos?.map(photo => ({
        inlineData: {
            mimeType: 'image/jpeg',
            data: photo.replace(/^data:image\/\w+;base64,/, '')
        }
    })) || [];

    try {
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();

        // Parse JSON response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);

            // Ensure price is within range
            let finalPrice = parsed.price || config.basePrice;
            finalPrice = Math.max(config.minPrice, Math.min(config.maxPrice, finalPrice));

            // Apply urgency modifier
            if (request.urgency === 'urgent') {
                finalPrice = Math.round(finalPrice * 1.25);
            } else if (request.urgency === 'emergency') {
                finalPrice = Math.round(finalPrice * 1.5);
            }

            return {
                success: true,
                price: {
                    amount: finalPrice,
                    currency: 'GBP',
                    breakdown: parsed.breakdown || [
                        { item: config.name, itemAr: config.nameAr, amount: finalPrice }
                    ]
                },
                confidence: parsed.confidence || 85,
                reasoning: parsed.reasoning || 'Price calculated based on photo analysis',
                reasoningAr: parsed.reasoningAr || 'تم حساب السعر بناءً على تحليل الصور'
            };
        }

        // Fallback to base price
        return {
            success: true,
            price: {
                amount: config.basePrice,
                currency: 'GBP',
                breakdown: [{ item: config.name, itemAr: config.nameAr, amount: config.basePrice }]
            },
            confidence: 60,
            reasoning: 'Using estimated price',
            reasoningAr: 'استخدام السعر التقديري'
        };
    } catch (error) {
        console.error('Gemini API error:', error);
        throw error;
    }
}

/**
 * Calculate price from answers (for services without photos)
 */
function calculatePriceFromAnswers(
    config: ServiceConfig,
    request: PricingRequest
): PricingResponse {
    let totalPrice = config.basePrice;
    const breakdown: { item: string; itemAr: string; amount: number }[] = [];

    // Add base price
    breakdown.push({
        item: `${config.name} (Base)`,
        itemAr: `${config.nameAr} (أساسي)`,
        amount: config.basePrice
    });

    // Apply question modifiers
    if (config.questions && request.answers) {
        for (const question of config.questions) {
            const answer = request.answers[question.id];
            if (answer && question.options) {
                // Handle multiselect
                const selectedValues = Array.isArray(answer) ? answer : [answer];

                for (const value of selectedValues) {
                    const option = question.options.find(o => o.value === value);
                    if (option && option.priceModifier !== 0) {
                        totalPrice += option.priceModifier;
                        breakdown.push({
                            item: option.label,
                            itemAr: option.labelAr,
                            amount: option.priceModifier
                        });
                    }
                }
            }
        }
    }

    // Apply urgency modifier
    if (request.urgency === 'urgent') {
        const urgencyFee = Math.round(totalPrice * 0.25);
        totalPrice += urgencyFee;
        breakdown.push({
            item: 'Urgent Booking',
            itemAr: 'حجز عاجل',
            amount: urgencyFee
        });
    } else if (request.urgency === 'emergency') {
        const emergencyFee = Math.round(totalPrice * 0.5);
        totalPrice += emergencyFee;
        breakdown.push({
            item: 'Emergency Booking',
            itemAr: 'حجز طوارئ',
            amount: emergencyFee
        });
    }

    // Ensure within range
    totalPrice = Math.max(config.minPrice, Math.min(config.maxPrice, totalPrice));

    return {
        success: true,
        price: {
            amount: totalPrice,
            currency: 'GBP',
            breakdown
        },
        confidence: 95,
        reasoning: 'Price calculated based on your selections',
        reasoningAr: 'تم حساب السعر بناءً على اختياراتك'
    };
}

/**
 * Build the AI prompt for photo-based pricing
 */
function buildPricingPrompt(config: ServiceConfig, request: PricingRequest): string {
    return `You are an expert pricing AI for NasGo, a home services company in the UK.

SERVICE: ${config.name}
CATEGORY: ${config.category}
PRICE RANGE: £${config.minPrice} - £${config.maxPrice}
BASE PRICE: £${config.basePrice}

PRICING FACTORS TO CONSIDER:
${config.pricingFactors.map(f => `- ${f}`).join('\n')}

${request.answers ? `
CUSTOMER ANSWERS:
${Object.entries(request.answers).map(([k, v]) => `- ${k}: ${v}`).join('\n')}
` : ''}

URGENCY: ${request.urgency || 'normal'}

Analyze the provided photo(s) and determine a fair price.

Consider:
1. Size/area of the job
2. Current condition (how dirty, damaged, complex)
3. Time needed to complete
4. Materials that might be required

Respond with ONLY a JSON object:
{
  "price": <number between ${config.minPrice} and ${config.maxPrice}>,
  "confidence": <number 1-100>,
  "reasoning": "<1-2 sentences explaining the price in English>",
  "reasoningAr": "<same explanation in Arabic>",
  "breakdown": [
    {"item": "Base service", "itemAr": "الخدمة الأساسية", "amount": <base amount>},
    {"item": "Additional for <reason>", "itemAr": "<reason in Arabic>", "amount": <extra amount>}
  ],
  "estimatedDuration": "<e.g., 2-3 hours>"
}

Be fair and competitive. Do not overcharge. If unsure, lean towards the base price.`;
}

/**
 * Validate a single photo for a service
 */
export async function validatePhoto(
    photoBase64: string,
    serviceId: string
): Promise<PhotoValidationResult> {
    const config = getServiceConfig(serviceId);

    if (!config) {
        return {
            isValid: false,
            contentDetected: 'Unknown',
            reason: 'Service not found',
            reasonAr: 'الخدمة غير موجودة'
        };
    }

    if (config.photoRequirement === 'forbidden') {
        return {
            isValid: false,
            contentDetected: 'N/A',
            reason: 'This service does not accept photos for privacy reasons',
            reasonAr: 'هذه الخدمة لا تقبل صور لأسباب الخصوصية'
        };
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `You are a photo validator for NasGo home services.

Analyze this image for a "${config.name}" service request.

VALID content: ${config.validImageContent.join(', ')}
INVALID content (reject): ${config.invalidImageContent.join(', ')}

Respond with JSON only:
{
  "isValid": true/false,
  "contentDetected": "what you see",
  "reason": "why valid or invalid",
  "reasonAr": "نفس السبب بالعربي"
}

Rules:
1. Reject selfies, faces, inappropriate content
2. Reject completely unrelated images
3. Accept relevant content even if slightly unclear`;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: photoBase64.replace(/^data:image\/\w+;base64,/, '')
                }
            }
        ]);

        const response = await result.response;
        const text = response.text();

        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }

        // Default to valid if parsing fails
        return {
            isValid: true,
            contentDetected: 'Unable to analyze',
            reason: 'Photo accepted',
            reasonAr: 'تم قبول الصورة'
        };
    } catch (error) {
        console.error('Photo validation error:', error);
        // On error, accept the photo
        return {
            isValid: true,
            contentDetected: 'Error',
            reason: 'Photo accepted',
            reasonAr: 'تم قبول الصورة'
        };
    }
}
