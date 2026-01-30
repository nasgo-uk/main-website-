import { ServiceConfig } from './types';

export const SERVICE_CONFIGS: Record<string, ServiceConfig> = {
    // ════════════════════════════════════════════════════════════
    // 🧹 CLEANING SERVICES
    // ════════════════════════════════════════════════════════════

    'deep-clean': {
        id: 'deep-clean',
        name: 'Deep Clean',
        nameAr: 'تنظيف عميق',
        category: 'cleaning',

        photoRequirement: 'required',
        minPhotos: 2,
        maxPhotos: 10,

        validImageContent: [
            'room', 'kitchen', 'bathroom', 'bedroom', 'living room',
            'floor', 'carpet', 'tiles', 'dirty', 'dusty', 'messy'
        ],
        invalidImageContent: [
            'person', 'selfie', 'face', 'pet only', 'car', 'outdoor landscape',
            'screenshot', 'meme', 'food only'
        ],

        photoInstructions: [
            'Take photos of each room needing cleaning',
            'Show any heavily soiled areas',
            'Include kitchen and bathroom'
        ],
        photoInstructionsAr: [
            'صوّر كل غرفة تحتاج تنظيف',
            'أظهر المناطق المتسخة جداً',
            'أضف صور المطبخ والحمام'
        ],

        basePrice: 100,
        minPrice: 80,
        maxPrice: 400,
        pricingFactors: ['area', 'condition', 'urgency'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'end-of-tenancy': {
        id: 'end-of-tenancy',
        name: 'End of Tenancy Clean',
        nameAr: 'تنظيف نهاية الإيجار',
        category: 'cleaning',

        photoRequirement: 'required',
        minPhotos: 4,
        maxPhotos: 15,

        validImageContent: [
            'empty room', 'vacant', 'kitchen', 'bathroom', 'oven',
            'fridge', 'cupboards', 'floors', 'windows'
        ],
        invalidImageContent: ['person', 'pet', 'car', 'outdoor only'],

        photoInstructions: [
            'Photo of EVERY room',
            'Include all appliances',
            'Show any problem areas'
        ],
        photoInstructionsAr: [
            'صورة لكل غرفة',
            'أضف صور الأجهزة',
            'أظهر أي مشاكل'
        ],

        basePrice: 150,
        minPrice: 100,
        maxPrice: 500,
        pricingFactors: ['area', 'condition'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'standard-clean': {
        id: 'standard-clean',
        name: 'Standard Clean',
        nameAr: 'تنظيف عادي',
        category: 'cleaning',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 6,

        validImageContent: ['room', 'living space', 'home interior'],
        invalidImageContent: ['person', 'selfie', 'car'],

        photoInstructions: ['Photo of main living areas'],
        photoInstructionsAr: ['صورة للمناطق الرئيسية'],

        basePrice: 50,
        minPrice: 35,
        maxPrice: 150,
        pricingFactors: ['area'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'oven-cleaning': {
        id: 'oven-cleaning',
        name: 'Oven Cleaning',
        nameAr: 'تنظيف الفرن',
        category: 'cleaning',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 4,

        validImageContent: [
            'oven', 'oven interior', 'cooker', 'hob', 'grill',
            'grease', 'burnt food', 'oven racks'
        ],
        invalidImageContent: ['person', 'car', 'bathroom', 'non-kitchen'],

        photoInstructions: [
            'Photo of oven interior (door open)',
            'Show grease/burnt food level'
        ],
        photoInstructionsAr: [
            'صورة داخل الفرن (الباب مفتوح)',
            'أظهر مستوى الدهون'
        ],

        basePrice: 50,
        minPrice: 40,
        maxPrice: 150,
        pricingFactors: ['condition'],

        questions: [
            {
                id: 'oven_type',
                question: 'What type of oven?',
                questionAr: 'ما نوع الفرن؟',
                type: 'select',
                required: true,
                options: [
                    { value: 'single', label: 'Single Oven', labelAr: 'فرن واحد', priceModifier: 0 },
                    { value: 'double', label: 'Double Oven', labelAr: 'فرن مزدوج', priceModifier: 25 },
                    { value: 'range', label: 'Range Cooker', labelAr: 'موقد كبير', priceModifier: 40 }
                ]
            }
        ],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'carpet-cleaning': {
        id: 'carpet-cleaning',
        name: 'Carpet Cleaning',
        nameAr: 'تنظيف السجاد',
        category: 'cleaning',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 8,

        validImageContent: ['carpet', 'rug', 'floor', 'stain'],
        invalidImageContent: ['person', 'car', 'outdoor'],

        photoInstructions: [
            'Photo of carpeted areas',
            'Show any stains or problem areas'
        ],
        photoInstructionsAr: [
            'صورة للسجاد',
            'أظهر أي بقع أو مشاكل'
        ],

        basePrice: 60,
        minPrice: 50,
        maxPrice: 300,
        pricingFactors: ['area', 'condition'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'sofa-cleaning': {
        id: 'sofa-cleaning',
        name: 'Sofa Cleaning',
        nameAr: 'تنظيف الأريكة',
        category: 'cleaning',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 6,

        validImageContent: ['sofa', 'couch', 'furniture', 'cushions', 'upholstery'],
        invalidImageContent: ['person', 'car'],

        photoInstructions: [
            'Photo of the sofa/sofas',
            'Show any stains'
        ],
        photoInstructionsAr: [
            'صورة للأريكة',
            'أظهر أي بقع'
        ],

        basePrice: 50,
        minPrice: 40,
        maxPrice: 200,
        pricingFactors: ['quantity', 'condition'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    // ════════════════════════════════════════════════════════════
    // 🔧 HANDYMAN SERVICES
    // ════════════════════════════════════════════════════════════

    'furniture-assembly': {
        id: 'furniture-assembly',
        name: 'Furniture Assembly',
        nameAr: 'تركيب الأثاث',
        category: 'handyman',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 5,

        validImageContent: ['furniture box', 'packaging', 'flat pack', 'assembly instructions'],
        invalidImageContent: ['person', 'car'],

        photoInstructions: [
            'Photo of furniture packaging/box',
            'Show the brand and product name'
        ],
        photoInstructionsAr: [
            'صورة للعلبة',
            'أظهر الماركة واسم المنتج'
        ],

        basePrice: 40,
        minPrice: 25,
        maxPrice: 200,
        pricingFactors: ['complexity', 'quantity'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'tv-mounting': {
        id: 'tv-mounting',
        name: 'TV Mounting',
        nameAr: 'تركيب التلفاز',
        category: 'handyman',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 4,

        validImageContent: ['wall', 'tv', 'television', 'mount area'],
        invalidImageContent: ['person', 'car'],

        photoInstructions: [
            'Photo of wall where TV will be mounted',
            'Photo of TV (for size reference)'
        ],
        photoInstructionsAr: [
            'صورة للجدار',
            'صورة للتلفاز'
        ],

        basePrice: 50,
        minPrice: 35,
        maxPrice: 150,
        pricingFactors: ['complexity'],

        questions: [
            {
                id: 'tv_size',
                question: 'TV Size?',
                questionAr: 'حجم التلفاز؟',
                type: 'select',
                required: true,
                options: [
                    { value: 'small', label: 'Under 40"', labelAr: 'أقل من 40 بوصة', priceModifier: 0 },
                    { value: 'medium', label: '40-55"', labelAr: '40-55 بوصة', priceModifier: 10 },
                    { value: 'large', label: 'Over 55"', labelAr: 'أكثر من 55 بوصة', priceModifier: 25 }
                ]
            }
        ],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    // ════════════════════════════════════════════════════════════
    // 💆 WELLNESS - NO PHOTOS ALLOWED!
    // ════════════════════════════════════════════════════════════

    'deep-tissue-massage': {
        id: 'deep-tissue-massage',
        name: 'Deep Tissue Massage',
        nameAr: 'مساج الأنسجة العميقة',
        category: 'wellness',

        photoRequirement: 'forbidden',
        minPhotos: 0,
        maxPhotos: 0,

        validImageContent: [],
        invalidImageContent: ['body', 'person', 'skin', 'any'],

        photoInstructions: [],
        photoInstructionsAr: [],

        basePrice: 60,
        minPrice: 45,
        maxPrice: 120,
        pricingFactors: [],

        questions: [
            {
                id: 'duration',
                question: 'Session duration?',
                questionAr: 'مدة الجلسة؟',
                type: 'select',
                required: true,
                options: [
                    { value: '30', label: '30 minutes', labelAr: '30 دقيقة', priceModifier: -15 },
                    { value: '60', label: '60 minutes', labelAr: '60 دقيقة', priceModifier: 0 },
                    { value: '90', label: '90 minutes', labelAr: '90 دقيقة', priceModifier: 30 }
                ]
            },
            {
                id: 'focus_area',
                question: 'Focus area?',
                questionAr: 'منطقة التركيز؟',
                type: 'select',
                required: true,
                options: [
                    { value: 'full', label: 'Full Body', labelAr: 'الجسم كامل', priceModifier: 0 },
                    { value: 'back', label: 'Back & Shoulders', labelAr: 'ظهر وأكتاف', priceModifier: -10 },
                    { value: 'legs', label: 'Legs & Feet', labelAr: 'أرجل وقدمين', priceModifier: -10 }
                ]
            },
            {
                id: 'provider_gender',
                question: 'Preferred provider gender?',
                questionAr: 'جنس مقدم الخدمة المفضل؟',
                type: 'select',
                required: true,
                options: [
                    { value: 'male', label: 'Male', labelAr: 'ذكر', priceModifier: 0 },
                    { value: 'female', label: 'Female', labelAr: 'أنثى', priceModifier: 0 }
                ]
            }
        ],

        isSensitive: true,
        genderPreferenceRequired: true,
        requiresCertification: ['Massage Therapy Certificate']
    },

    'haircut-mens': {
        id: 'haircut-mens',
        name: "Men's Haircut",
        nameAr: 'قص شعر رجالي',
        category: 'wellness',

        photoRequirement: 'forbidden',
        minPhotos: 0,
        maxPhotos: 0,

        validImageContent: [],
        invalidImageContent: ['person', 'face', 'any'],

        photoInstructions: [],
        photoInstructionsAr: [],

        basePrice: 25,
        minPrice: 15,
        maxPrice: 60,
        pricingFactors: [],

        questions: [
            {
                id: 'haircut_type',
                question: 'Type of haircut?',
                questionAr: 'نوع القصة؟',
                type: 'select',
                required: true,
                options: [
                    { value: 'simple', label: 'Simple Cut', labelAr: 'قص بسيط', priceModifier: 0 },
                    { value: 'fade', label: 'Fade/Gradient', labelAr: 'تدريج', priceModifier: 5 },
                    { value: 'style', label: 'Styled Cut', labelAr: 'قصة مع تصفيف', priceModifier: 10 }
                ]
            }
        ],

        isSensitive: true,
        genderPreferenceRequired: true
    },

    // ════════════════════════════════════════════════════════════
    // 🌿 GARDENING
    // ════════════════════════════════════════════════════════════

    'lawn-mowing': {
        id: 'lawn-mowing',
        name: 'Lawn Mowing',
        nameAr: 'قص العشب',
        category: 'gardening',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 4,

        validImageContent: ['lawn', 'grass', 'garden', 'yard'],
        invalidImageContent: ['person', 'car', 'indoor'],

        photoInstructions: [
            'Photo showing the full lawn area',
            'Include something for scale (fence, door)'
        ],
        photoInstructionsAr: [
            'صورة تظهر المساحة كاملة',
            'أضف شيء للمقارنة'
        ],

        basePrice: 35,
        minPrice: 25,
        maxPrice: 120,
        pricingFactors: ['area'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    'jet-washing': {
        id: 'jet-washing',
        name: 'Jet Washing',
        nameAr: 'غسيل بالضغط',
        category: 'gardening',

        photoRequirement: 'required',
        minPhotos: 1,
        maxPhotos: 6,

        validImageContent: ['driveway', 'patio', 'decking', 'path', 'fence'],
        invalidImageContent: ['person', 'car interior'],

        photoInstructions: [
            'Photo of area to be cleaned',
            'Show current condition'
        ],
        photoInstructionsAr: [
            'صورة للمنطقة',
            'أظهر الحالة الحالية'
        ],

        basePrice: 80,
        minPrice: 50,
        maxPrice: 250,
        pricingFactors: ['area', 'condition'],

        isSensitive: false,
        genderPreferenceRequired: false
    },

    // ════════════════════════════════════════════════════════════
    // 🐕 PET CARE - NO PHOTOS NEEDED
    // ════════════════════════════════════════════════════════════

    'dog-walking': {
        id: 'dog-walking',
        name: 'Dog Walking',
        nameAr: 'تمشية الكلب',
        category: 'logistics',

        photoRequirement: 'optional',
        minPhotos: 0,
        maxPhotos: 0,

        validImageContent: [],
        invalidImageContent: [],

        photoInstructions: [],
        photoInstructionsAr: [],

        basePrice: 15,
        minPrice: 10,
        maxPrice: 30,
        pricingFactors: [],

        questions: [
            {
                id: 'duration',
                question: 'Walk duration?',
                questionAr: 'مدة التمشية؟',
                type: 'select',
                required: true,
                options: [
                    { value: '30', label: '30 minutes', labelAr: '30 دقيقة', priceModifier: 0 },
                    { value: '60', label: '60 minutes', labelAr: '60 دقيقة', priceModifier: 8 }
                ]
            },
            {
                id: 'num_dogs',
                question: 'How many dogs?',
                questionAr: 'كم كلب؟',
                type: 'select',
                required: true,
                options: [
                    { value: '1', label: '1 dog', labelAr: 'كلب واحد', priceModifier: 0 },
                    { value: '2', label: '2 dogs', labelAr: 'كلبين', priceModifier: 5 }
                ]
            }
        ],

        isSensitive: false,
        genderPreferenceRequired: false
    }
};

// Helper function to get service config
export function getServiceConfig(serviceId: string): ServiceConfig | undefined {
    return SERVICE_CONFIGS[serviceId];
}

// Get all services in a category
export function getServicesByCategory(category: string): ServiceConfig[] {
    return Object.values(SERVICE_CONFIGS).filter(s => s.category === category);
}
