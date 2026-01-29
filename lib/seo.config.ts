export const siteConfig = {
    name: 'NasGo',
    description: 'AI-Powered Home Services Platform - Connect with verified professionals, get instant AI price quotes, book with confidence. Only 10% commission.',
    url: 'https://www.nasgo.uk',
    ogImage: 'https://www.nasgo.uk/og-image.png',
    links: {
        twitter: 'https://twitter.com/nasgouk',
        facebook: 'https://facebook.com/nasgouk',
        instagram: 'https://instagram.com/nasgouk',
        linkedin: 'https://linkedin.com/company/nasgo',
    },
    creator: 'NasGo Ltd',
    keywords: [
        'home services app uk',
        'ai home services',
        'find local tradespeople',
        'verified tradesmen uk',
        'book handyman online',
        'instant quotes home repairs',
        'home services birmingham',
        'transparent pricing tradesmen',
        'loft insulation',
        'boiler service',
        'gas engineer',
        'painter decorator',
        'gutter cleaning',
        'radiator repairs',
        'locksmith london',
        'plumber london',
    ],
};

export const defaultMeta = {
    title: 'NasGo | AI-Powered Home Services UK | Book Verified Pros Instantly',
    description: 'Get instant AI price quotes for home services. Book verified plumbers, cleaners, handymen & more. No hidden fees. Only 10% commission. Your home, sorted.',
    keywords: siteConfig.keywords.join(', '),
};

// Service-specific meta tags
export const serviceMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
    cleaning: {
        title: 'Professional Cleaning Services | AI Pricing | NasGo',
        description: 'Book verified cleaners with instant AI pricing. Deep cleaning, end of tenancy, oven cleaning & more. No hidden fees, only 10% commission.',
        keywords: ['cleaning services', 'house cleaning', 'deep cleaning', 'end of tenancy cleaning', 'professional cleaners'],
    },
    'deep-cleaning': {
        title: 'Deep Cleaning Service | Instant Quote | NasGo',
        description: 'Professional deep cleaning from verified cleaners. AI-powered fair pricing, before/after photos, satisfaction guaranteed. Book in 60 seconds.',
        keywords: ['deep cleaning', 'deep clean service', 'professional deep cleaning', 'one off deep clean'],
    },
    'end-of-tenancy': {
        title: 'End of Tenancy Cleaning | Get Your Deposit Back | NasGo',
        description: 'Professional end of tenancy cleaning from £100. AI pricing, verified cleaners, landlord-approved checklist. Book today, clean tomorrow.',
        keywords: ['end of tenancy cleaning', 'move out cleaning', 'tenancy clean', 'deposit cleaning'],
    },
    handyman: {
        title: 'Handyman Services | Verified Pros | NasGo',
        description: 'Book verified handymen for any job. Plumbing, electrical, assembly & more. AI instant quotes, no call-out fees. Only pay 10% commission.',
        keywords: ['handyman', 'handyman services', 'local handyman', 'handyman near me'],
    },
    plumbing: {
        title: 'Plumber Near Me | No Call-Out Fee | NasGo',
        description: 'Find verified plumbers instantly. Emergency plumbing, repairs, installations. AI fair pricing, no hidden fees. Available 24/7.',
        keywords: ['plumber', 'plumber near me', 'emergency plumber', 'local plumber', 'plumbing services'],
    },
    electrical: {
        title: 'Electrician Near Me | Verified & Insured | NasGo',
        description: 'Book certified electricians with instant AI quotes. Repairs, installations, emergencies. All work guaranteed. No call-out fees.',
        keywords: ['electrician', 'electrician near me', 'emergency electrician', 'electrical services'],
    },
    locksmith: {
        title: 'Locksmith Near Me | 24/7 Emergency | NasGo',
        description: 'Emergency locksmith services available 24/7. Verified professionals, transparent pricing, fast response. No hidden fees.',
        keywords: ['locksmith', 'locksmith near me', 'emergency locksmith', '24 hour locksmith'],
    },
    gardening: {
        title: 'Gardening Services | Local Gardeners | NasGo',
        description: 'Find verified gardeners for lawn care, landscaping, jet washing & more. AI pricing, no hidden fees. Book your garden transformation.',
        keywords: ['gardener', 'gardening services', 'lawn care', 'garden maintenance'],
    },
    automotive: {
        title: 'Mobile Car Services | Wash, Detailing, Mechanic | NasGo',
        description: 'Book mobile car wash, detailing, and mechanic services. They come to you. AI fair pricing, verified professionals.',
        keywords: ['mobile car wash', 'car detailing', 'mobile mechanic', 'car services'],
    },
    wellness: {
        title: 'Mobile Beauty & Wellness | Home Services | NasGo',
        description: 'Book mobile hairdressers, barbers, massage therapists & more. Professional beauty services at your doorstep.',
        keywords: ['mobile hairdresser', 'mobile barber', 'home beauty services', 'mobile massage'],
    },
    logistics: {
        title: 'Man with Van & Moving Services | NasGo',
        description: 'Book man with van, pet sitting, pest control & more. Verified professionals, transparent pricing. No hidden fees.',
        keywords: ['man with van', 'moving services', 'pet sitting', 'pest control'],
    },
    'furniture-assembly': {
        title: 'Furniture Assembly Services | Flat Pack Assembly | NasGo',
        description: 'Professional furniture assembly for IKEA, Wayfair, and more. Fixed pricing, expert assemblers. Book now.',
        keywords: ['furniture assembly', 'flat pack assembly', 'ikea assembly', 'furniture builder'],
    },
    'oven-cleaning': {
        title: 'Oven Cleaning Service | Professional Oven Cleaners | NasGo',
        description: 'Expert oven cleaning services. Remove grease and burnt-on food. Eco-friendly products. Restoe your oven today.',
        keywords: ['oven cleaning', 'professional oven cleaning', 'double oven cleaning', 'range cleaning'],
    },
    'carpet-cleaning': {
        title: 'Carpet Cleaning Services | Stain Removal | NasGo',
        description: 'Professional carpet cleaning and stain removal. Hot water extraction, quick drying. Revitalize your carpets.',
        keywords: ['carpet cleaning', 'carpet cleaner near me', 'rug cleaning', 'upholstery cleaning'],
    },
    'boiler-service': {
        title: 'Boiler Service | Annual Gas Safety Check | NasGo',
        description: 'Annual boiler service by Gas Safe engineers. Combi, system, regular boilers. Keep your warranty valid. Instant booking from £80.',
        keywords: ['boiler service', 'annual boiler check', 'gas safe engineer', 'boiler maintenance', 'combi boiler service'],
    },
    'radiator-services': {
        title: 'Radiator Repair & Bleeding | Fix Cold Radiators | NasGo',
        description: 'Fix cold radiators, bleeding, balancing, and valve replacement. Professional heating engineers. Get your heating working efficiently.',
        keywords: ['radiator repair', 'bleed radiator', 'balance radiators', 'cold radiator fix', 'radiator valve replacement'],
    },
    'loft-insulation': {
        title: 'Loft Insulation Services | Save Energy Costs | NasGo',
        description: 'Reduce energy bills with professional loft insulation. Supply and install 270mm insulation. Instant quotes from verified installers.',
        keywords: ['loft insulation', 'insulate attic', 'roof insulation', 'energy saving'],
    },
    'painter-decorator': {
        title: 'Painter & Decorator | Interior & Exterior Painting | NasGo',
        description: 'Professional painters and decorators. Interior, exterior, wallpapering. Verified pros, fair pricing, satisfaction guaranteed.',
        keywords: ['painter decorator', 'painter london', 'house painting', 'wallpaper hanging', 'interior design'],
    },
    'gutter-cleaning': {
        title: 'Gutter Cleaning Services | Unblock Gutters | NasGo',
        description: 'Clear blocked gutters and downpipes. Prevent water damage and damp. Fast, reliable gutter cleaning service near you.',
        keywords: ['gutter cleaning', 'clean gutters', 'blocked gutter', 'roof cleaning'],
    }
};

// Location-specific meta tags
export const locationMeta: Record<string, { title: string; description: string }> = {
    birmingham: {
        title: 'Home Services Birmingham | Verified Local Pros | NasGo',
        description: 'Find trusted tradespeople in Birmingham. Plumbers, cleaners, electricians & more. AI instant quotes, verified professionals. Book now.',
    },
    'birmingham-cleaning': {
        title: 'Cleaning Services Birmingham | Verified Cleaners | NasGo',
        description: 'Professional cleaning services in Birmingham. Deep cleaning, end of tenancy, regular cleaning. AI pricing, no hidden fees.',
    },
    'birmingham-plumber': {
        title: 'Plumber Birmingham | Emergency & Repairs | NasGo',
        description: 'Find verified plumbers in Birmingham. Emergency callouts, repairs, installations. No call-out fee, AI fair pricing.',
    },
    'birmingham-electrician': {
        title: 'Electrician Birmingham | Certified & Insured | NasGo',
        description: 'Book certified electricians in Birmingham. Repairs, installations, emergencies. All work guaranteed, transparent pricing.',
    },
    'birmingham-handyman': {
        title: 'Handyman Birmingham | Verified Pros | NasGo',
        description: 'Find trusted handymen in Birmingham. All jobs covered. AI instant quotes, verified professionals, no hidden fees.',
    },
};
