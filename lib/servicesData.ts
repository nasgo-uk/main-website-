

import {
    Sparkles, Home, Box, Droplets, Wrench, Smartphone,
    Scissors, Truck, PartyPopper, Flame, Refrigerator, Armchair,
    Square, Bed, Waves, Droplet, PlugZap, ShieldCheck,
    DoorOpen, Key, Battery,
    Laptop, Wifi, Camera, Hand,
    HeartPulse, Circle,
    Leaf, Bug, PawPrint, Trash, LucideIcon, Paintbrush, Hammer, Thermometer
} from 'lucide-react';

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface SubService {
    id: string; // URL slug safely (e.g., 'end-of-tenancy')
    name: string;
    price: string;
    duration: string;
    description: string;
    longDescription?: string; // For the detailed service page
    icon: LucideIcon;
    features?: string[]; // Bullet points for "What's Included"
    faqs?: ServiceFAQ[]; // Specific FAQs for this service
}

export interface ServiceCategory {
    id: string; // URL slug
    name: string;
    icon: LucideIcon;
    color: string;
    description: string;
    subCategories: {
        name: string;
        services: SubService[];
    }[];
}

export const servicesData: ServiceCategory[] = [
    {
        id: 'cleaning',
        name: 'Cleaning',
        icon: Sparkles,
        color: 'bg-teal-100 text-teal-700',
        description: 'Home, Oven, Carpet & More',
        subCategories: [
            {
                name: 'Home Cleaning',
                services: [
                    {
                        id: 'deep-cleaning',
                        name: 'Deep Clean',
                        price: '£35/hr',
                        duration: '180 min',
                        description: 'Thorough cleaning including behind furniture, corners, and grease removal.',
                        longDescription: 'Our Deep Clean service is designed to revitalize your home from top to bottom. Perfect for spring cleaning or when your home needs extra attention. We tackle hidden dust, built-up grease, and neglected corners.',
                        icon: Sparkles,
                        features: [
                            'Deep kitchen cleaning (degreasing surfaces)',
                            'Inside interior windows',
                            'Bathroom descaling and sanitization',
                            'Behind and under furniture cleaning',
                            'Skirting boards and door frames'
                        ],
                        faqs: [
                            { question: 'What is the difference between standard and deep clean?', answer: 'A deep clean includes detailed work like scrubbing tile grout, cleaning behind appliances, and washing baseboards, whereas a standard clean covers maintenance tasks.' },
                            { question: 'Do I need to provide cleaning supplies?', answer: 'No, our professionals come fully equipped with premium cleaning supplies and equipment.' }
                        ]
                    },
                    {
                        id: 'end-of-tenancy',
                        name: 'End of Tenancy Clean',
                        price: '£150',
                        duration: '360 min',
                        description: 'Complete cleaning to get your deposit back. Satisfaction guaranteed!',
                        longDescription: 'Secure your full deposit with our professional End of Tenancy cleaning. We use a checklist approved by major UK estate agents to ensure every inch of the property meets inspection standards.',
                        icon: Home,
                        features: [
                            '100% Deposit Back Guarantee',
                            'Oven and appliance deep cleaning included',
                            'Limescale removal from bathrooms',
                            'Carpet vacuuming and spot treatment',
                            'Receipt provided for your landlord/agency'
                        ],
                        faqs: [
                            { question: 'Do you guarantee I will get my deposit back?', answer: 'Yes, if the landlord is not satisfied with the cleaning, we will return to fix it for free.' },
                            { question: 'Does this include carpet cleaning?', answer: 'Vacuuming is included. Professional steam carpet cleaning can be added as an extra.' }
                        ]
                    },
                    {
                        id: 'standard-clean',
                        name: 'Standard Clean',
                        price: '£25/hr',
                        duration: '120 min',
                        description: 'Regular cleaning including dusting, vacuuming, and mopping floors.',
                        icon: Sparkles,
                        features: ['Dusting all reachable surfaces', 'Vacuuming and mopping floors', 'Cleaning bathrooms and kitchen', 'Emptying bins']
                    },
                    {
                        id: 'after-party-clean',
                        name: 'After Party Clean',
                        price: '£30/hr',
                        duration: '120 min',
                        description: 'Quick cleanup after house parties and gatherings.',
                        icon: PartyPopper,
                        features: ['Rubbish collection and disposal', 'Cleaning dirty dishes and glasses', 'Floor cleaning and stain removal', 'Bathroom sanitation']
                    }
                ]
            },
            {
                name: 'Appliance Cleaning',
                services: [
                    {
                        id: 'oven-cleaning',
                        name: 'Oven Cleaning',
                        price: '£55',
                        duration: '90 min',
                        description: 'Professional oven cleaning removing burnt grease and grime.',
                        longDescription: 'Restore your oven to showroom condition. Our eco-friendly dip tank method removes burnt-on carbon and grease from racks, trays, and glass without harsh chemical smells.',
                        icon: Flame,
                        features: ['Eco-friendly non-caustic solutions', 'Removable parts cleaned in dip tank', 'Glass door cleaning (inside and out)', 'Bulb replacement if needed'],
                        faqs: [
                            { question: 'Can I use the oven immediately after cleaning?', answer: 'Yes, since we use eco-friendly products, your oven is safe to use straight away.' }
                        ]
                    },
                    {
                        id: 'bbq-cleaning',
                        name: 'BBQ Grill Cleaning',
                        price: '£50',
                        duration: '90 min',
                        description: 'Deep clean your garden BBQ grill.',
                        icon: Flame
                    },
                    {
                        id: 'fridge-cleaning',
                        name: 'Fridge & Freezer Clean',
                        price: '£40',
                        duration: '60 min',
                        description: 'Defrost and sanitize your refrigerator and freezer.',
                        icon: Refrigerator
                    }
                ]
            },
            {
                name: 'Upholstery & Carpet',
                services: [
                    {
                        id: 'sofa-cleaning',
                        name: 'Sofa Cleaning',
                        price: '£60',
                        duration: '90 min',
                        description: 'Professional sofa cleaning (fabric/leather) with stain removal.',
                        longDescription: 'Revive your furniture with our steam and extraction cleaning. We remove stains, odors, and allergens from fabric and leather sofas, extending their life and looking great.',
                        icon: Armchair,
                        features: ['Stain and spot removal treatment', 'Odour neutralization', 'Fabric protection application available', 'Suitable for delicate fabrics'],
                        faqs: [
                            { question: 'How long does the sofa take to dry?', answer: 'Typically 4-6 hours depending on ventilation and fabric type.' }
                        ]
                    },
                    {
                        id: 'carpet-cleaning',
                        name: 'Carpet Shampoo',
                        price: '£40',
                        duration: '120 min',
                        description: 'Deep carpet and rug cleaning with shampoo and steam.',
                        longDescription: 'Professional hot water extraction carpet cleaning. We remove deep-seated dirt, dust mites, and stubborn stains, leaving your carpets fresh and hygienic.',
                        icon: Square,
                        features: ['Hot water extraction (Siteam cleaning)', 'Pre-treatment for heavy traffic areas', 'Pet odor and stain removal', 'Quick drying capability'],
                        faqs: [
                            { question: 'Do you move furniture?', answer: 'We can move light furniture. Heavy items like wardrobes should be moved beforehand or we can clean around them.' }
                        ]
                    },
                    {
                        id: 'mattress-cleaning',
                        name: 'Mattress Cleaning',
                        price: '£45',
                        duration: '60 min',
                        description: 'Sanitize mattresses from dust mites and bacteria.',
                        icon: Bed
                    }
                ]
            }
        ]
    },
    {
        id: 'handyman',
        name: 'Handyman & Repairs',
        icon: Wrench,
        color: 'bg-orange-100 text-orange-700',
        description: 'Repairs, Assembly & Electrical',
        subCategories: [
            {
                name: 'Plumbing',
                services: [
                    {
                        id: 'plumbing', // Combining into main plumbing service as per strategy or keeping granular? Strategy suggests /handyman/plumbing as a landing.
                        name: 'General Plumbing',
                        price: '£60/hr',
                        duration: '60 min',
                        description: 'Fix repairs, leaks, and installations.',
                        longDescription: 'Expert plumbing services for inspections, repairs, and installations. From fixing leaky taps to installing new bathroom fixtures, our verified plumbers cover it all.',
                        icon: Droplet,
                        features: ['Leak detection and repair', 'Tap and sink installation', 'Toilet repairs', 'Pipework maintenance'],
                        faqs: [
                            { question: 'Do you charge a call-out fee?', answer: 'No, NasGo does not have hidden call-out fees. You pay for the service.' }
                        ]
                    },
                    {
                        id: 'boiler-service',
                        name: 'Boiler Service',
                        price: '£80',
                        duration: '60 min',
                        description: 'Annual boiler maintenance by Gas Safe engineers.',
                        longDescription: 'Ensure your boiler runs safely and efficiently with our annual service. Our Gas Safe registered engineers inspect combi, system, and conventional boilers, checking for leaks, pressure issues, and carbon monoxide risks. Essential for warranty validity and preventing breakdowns.',
                        icon: Flame,
                        features: [
                            'Gas Safe registered engineers',
                            'Carbon monoxide safety check',
                            'Pressure and flue test',
                            'Efficiency analysis & certificate',
                            'Diagnosis of banging noises or pressure loss'
                        ],
                        faqs: [
                            { question: 'How often should I service my boiler?', answer: 'It is recommended to service your boiler annually to ensure safety, efficiency, and to keep your warranty valid.' },
                            { question: 'How much does a boiler service cost?', answer: 'Our standard boiler service is £80. Repairs or parts would be quoted separately if issues are found.' },
                            { question: 'Do you fix boilers with error codes?', answer: 'Yes, we can diagnose and repair common fault codes (e.g., Worcester, Baxi, Vaillant). Select "General Plumbing" or contact us for repairs.' }
                        ]
                    },
                    {
                        id: 'radiator-services',
                        name: 'Radiator Repair & Bleeding',
                        price: '£50/hr',
                        duration: '60 min',
                        description: 'Fix cold spots, leaks, and balance your heating.',
                        longDescription: 'Radiators cold at the bottom? Noisy pipes? We fix heating efficiency issues including bleeding, balancing to ensure even heat distribution, and replacing faulty TRV valves. Get your home warm again.',
                        icon: Thermometer,
                        features: [
                            'Bleeding to remove trapped air',
                            'Balancing for even heating across rooms',
                            'TRV (Thermostatic valve) replacement',
                            'Leak repairs (pinhole or valve leaks)'
                        ],
                        faqs: [
                            { question: 'Why is my radiator cold at the bottom?', answer: 'This often indicates sludge buildup. A power flush or chemical inhibitor might be needed.' },
                            { question: 'Why is my radiator cold at the top?', answer: 'This usually means trapped air. Our bleeding service will resolve this quickly.' }
                        ]
                    },
                    {
                        id: 'drain-unblocking',
                        name: 'Drain Unblocking',
                        price: '£55',
                        duration: '60 min',
                        description: 'Clear blocked drains, sinks, and toilets.',
                        longDescription: 'Fast relief for blocked toilets, sinks, and baths. We use professional plungers, snakes, and pressure tools to clear blockages and get your water flowing freely again.',
                        icon: Waves,
                        features: [
                            'Emergency blocked toilet clearance',
                            'Sink and bath unblocking',
                            'External drain jetting',
                            'Odor investigation'
                        ]
                    }
                ]
            },
            {
                name: 'Electrical',
                services: [
                    {
                        id: 'electrical',
                        name: 'General Electrician',
                        price: '£70/hr',
                        duration: '60 min',
                        description: 'Diagnose faults, replace sockets, and repairs.',
                        longDescription: 'NICEIC certified electricians for all your home electrical needs. Safety is our priority, covering everything from changing light fittings to full rewiring.',
                        icon: PlugZap,
                        features: ['Socket and switch replacement', 'Fault finding and diagnostics', 'Lighting repairs', 'Fuse box maintenance']
                    },
                    {
                        id: 'ev-charger',
                        name: 'EV Charger Installation',
                        price: '£350',
                        duration: '240 min',
                        description: 'Install electric vehicle charging points at home.',
                        icon: PlugZap
                    },
                    {
                        id: 'eicr-check',
                        name: 'Wiring Check (EICR)',
                        price: '£150',
                        duration: '180 min',
                        description: 'Electrical safety inspection and certificate.',
                        icon: ShieldCheck
                    },
                    {
                        id: 'smart-thermostat',
                        name: 'Smart Thermostat Installation',
                        price: '£90',
                        duration: '90 min',
                        description: 'Install Nest, Hive, or Tado stats.',
                        icon: Wifi
                    }
                ]
            },
            {
                name: 'General Handyman',
                services: [
                    {
                        id: 'loft-insulation',
                        name: 'Loft Insulation',
                        price: 'POA',
                        duration: '240 min',
                        description: 'Supply and install energy-saving loft insulation.',
                        longDescription: 'Reduce your energy bills and keep your home warm with our professional loft insulation service. We install 270mm mineral wool insulation to meet UK building regulations, capping heat loss through your roof.',
                        icon: Hammer,
                        features: [
                            'Significant energy bill savings',
                            'Meeting UK building regs (270mm)',
                            'Removal of old insulation if needed',
                            'Pipe and tank insulation lagging'
                        ],
                        faqs: [
                            { question: 'How much can I save?', answer: 'Proper loft insulation can save up to £250/year on energy bills depending on your home size.' }
                        ]
                    },
                    {
                        id: 'painter-decorator',
                        name: 'Painter & Decorator',
                        price: '£40/hr',
                        duration: '240 min',
                        description: 'Interior and exterior painting and decorating.',
                        longDescription: 'Transform your home with our professional painting and decorating services. From single room refreshes to full house painting, our experienced decorators ensure a flawless finish with minimal disruption.',
                        icon: Paintbrush,
                        features: [
                            'Interior wall and ceiling painting',
                            'Woodwork painting (skirting, doors)',
                            'Wallpaper hanging',
                            'Plaster repair and prep work'
                        ]
                    },
                    {
                        id: 'assembly',
                        name: 'Furniture Assembly',
                        price: '£30/hr',
                        duration: '60 min',
                        description: 'IKEA and flat-pack furniture assembly.',
                        longDescription: 'Save time and frustration with our furniture assembly service. We assemble beds, wardrobes, tables, and more from all major retailers including IKEA, Wayfair, and Argos.',
                        icon: Box,
                        features: ['Flat-pack assembly for all brands', 'Wall mounting of units', 'Packaging disposal assistance', 'Tools provided by pro']
                    },
                    {
                        id: 'tv-mounting',
                        name: 'TV Wall Mounting',
                        price: '£45',
                        duration: '60 min',
                        description: 'Securely mount your TV to any wall type.',
                        icon: Smartphone, // Closest valid icon 
                        features: ['Bracket installation (supplied or yours)', 'Cable concealment', 'Tuning and setup', 'Secure mounting on plasterboard or brick']
                    },
                    {
                        id: 'door-repair',
                        name: 'Door Repair',
                        price: '£40/hr',
                        duration: '60 min',
                        description: 'Fix doors, handles, and hinges.',
                        icon: DoorOpen
                    }
                ]
            },
            {
                name: 'Locksmith',
                services: [
                    {
                        id: 'locksmith',
                        name: 'Emergency Locksmith',
                        price: '£80',
                        duration: '60 min',
                        description: "Locked out? We'll get you back in quickly. 24/7.",
                        longDescription: 'Fast response emergency locksmith services. Whether you are locked out, lost your keys, or need a lock change after a break-in, our verified locksmiths are here to help 24/7.',
                        icon: Key,
                        features: ['Non-destructive entry techniques', 'Lock changes and upgrades', 'uPVC door lock repairs', '24/7 Emergency availability']
                    }
                ]
            }
        ]
    },
    {
        id: 'tech',
        name: 'Tech & Smart Home',
        icon: Smartphone,
        color: 'bg-blue-100 text-blue-700',
        description: 'Phone Repair & Smart Home',
        subCategories: [
            {
                name: 'Mobile Repair',
                services: [
                    { id: 'phone-repair', name: 'Phone Screen Repair', price: '£80', duration: '60 min', description: 'Replace cracked iPhone and Samsung screens at home.', icon: Smartphone, longDescription: 'We come to you to fix your phone screen. Premium quality parts used with a warranty on repairs. Don\'t lose your phone to a shop for days.' },
                    { id: 'battery-replace', name: 'Battery Replacement', price: '£45', duration: '30 min', description: 'Replace weak phone batteries.', icon: Battery },
                    { id: 'water-damage', name: 'Water Damage Fix', price: '£60', duration: '90 min', description: 'Attempt to repair water-damaged devices.', icon: Droplets }
                ]
            },
            {
                name: 'Smart Home Setup',
                services: [
                    {
                        id: 'smart-home',
                        name: 'Smart Home Installation',
                        price: '£65',
                        duration: '90 min',
                        description: 'Install and configure smart devices.',
                        longDescription: 'Turn your house into a smart home. We install and configure smart thermostats (Nest, Hive), video doorbells, smart locks, and smart lighting systems.',
                        icon: Wifi,
                        features: ['Smart thermostat installation', 'Video doorbell setup (Ring/Nest)', 'Smart lock fitting', 'App configuration and tutorial']
                    },
                    { id: 'security-camera', name: 'CCTV Installation', price: '£150', duration: '180 min', description: 'Install home security cameras.', icon: Camera }
                ]
            },
            {
                name: 'IT Support',
                services: [
                    { id: 'computer-repair', name: 'Computer Repair', price: '£45/hr', duration: '60 min', description: 'Hardware and software troubleshooting.', icon: Laptop }
                ]
            }
        ]
    },
    {
        id: 'wellness',
        name: 'Wellness & Beauty',
        icon: Scissors,
        color: 'bg-pink-100 text-pink-700',
        description: 'Personal care and relaxation services',
        subCategories: [
            {
                name: 'Hair & Grooming',
                services: [
                    { id: 'hairdresser', name: 'Mobile Hairdresser', price: '£40', duration: '60 min', description: 'Professional cuts and styling at home.', icon: Scissors },
                    { id: 'barber', name: 'Mobile Barber', price: '£25', duration: '30 min', description: 'Mens cuts and beard trims at home.', icon: Scissors }
                ]
            },
            {
                name: 'Beauty & Spa',
                services: [
                    { id: 'nails', name: 'Mobile Nail Technician', price: '£35', duration: '60 min', description: 'Manicures and pedicures at home.', icon: Hand },
                    { id: 'massage', name: 'Mobile Massage', price: '£65', duration: '60 min', description: 'Relaxing or deep tissue massage at home.', icon: HeartPulse },
                    { id: 'beauty', name: 'Beauty Treatments', price: '£40', duration: '45 min', description: 'Waxing, threading, and facials.', icon: Sparkles }
                ]
            }
        ]
    },
    {
        id: 'automotive',
        name: 'Automotive',
        icon: Truck,
        color: 'bg-indigo-100 text-indigo-700',
        description: 'Car care and quick fixes',
        subCategories: [
            {
                name: 'Mobile Care',
                services: [
                    { id: 'car-wash', name: 'Mobile Car Wash', price: '£25', duration: '45 min', description: 'Exterior wash and dry at your home.', icon: Droplets },
                    { id: 'detailing', name: 'Car Detailing', price: '£65', duration: '120 min', description: 'Deep interior and exterior cleaning.', icon: Sparkles },
                    { id: 'mechanic', name: 'Mobile Mechanic', price: '£60/hr', duration: '60 min', description: 'Diagnostics and repairs at your location.', icon: Wrench },
                    { id: 'tyres', name: 'Mobile Tyre Fitting', price: '£40', duration: '45 min', description: 'Tyre changes at home or work.', icon: Circle }
                ]
            }
        ]
    },
    {
        id: 'gardening',
        name: 'Gardening & Outdoor',
        icon: Leaf,
        color: 'bg-green-100 text-green-700',
        description: 'Garden care and outdoor cleaning',
        subCategories: [
            {
                name: 'Maintenance',
                services: [
                    { id: 'gardening', name: 'General Gardening', price: '£30/hr', duration: '60 min', description: 'Lawn mowing, weeding, and tidying.', icon: Leaf },
                    { id: 'lawn-care', name: 'Lawn Care', price: '£25', duration: '45 min', description: 'Mowing and edging.', icon: Scissors },
                    { id: 'hedges', name: 'Hedge Trimming', price: '£35/hr', duration: '60 min', description: 'Shaping and trimming hedges.', icon: Scissors }
                ]
            },
            {
                name: 'Cleaning',
                services: [
                    { id: 'jet-washing', name: 'Jet Washing', price: '£80', duration: '120 min', description: 'Pressure wash driveways and patios.', icon: Waves },
                    {
                        id: 'gutter-cleaning',
                        name: 'Gutter Cleaning',
                        price: '£70',
                        duration: '60 min',
                        description: 'Clear blocked gutters and downpipes.',
                        longDescription: 'Prevent water damage and damp with our gutter cleaning service. We remove leaves, moss, and debris from gutters and downpipes using ladders or high-reach vacuum systems.',
                        icon: Droplets,
                        features: ['Debris removal (leaves, moss)', 'Downpipe blockage clearance', 'Minor seal repairs', 'Before/After photos available']
                    },
                    { id: 'clearance', name: 'Garden Clearance', price: '£100', duration: '120 min', description: 'Removal of green waste and rubbish.', icon: Trash }
                ]
            },
        ]
    },
    {
        id: 'logistics',
        name: 'Logistics & Help',
        icon: Box, // Changed from Truck to avoid dup import issues or just reuse
        color: 'bg-yellow-100 text-yellow-700',
        description: 'Moving, pest control, and pet care',
        subCategories: [
            {
                name: 'Moving',
                services: [
                    { id: 'man-with-van', name: 'Man with Van', price: '£45/hr', duration: '120 min', description: 'Help with moving boxes and furniture.', icon: Truck },
                    { id: 'removals', name: 'House Removals', price: 'POA', duration: '240 min', description: 'Full house moving service.', icon: Home }
                ]
            },
            {
                name: 'Other',
                services: [
                    { id: 'pest-control', name: 'Pest Control', price: '£100', duration: '60 min', description: 'Eradicate pests from your home.', icon: Bug },
                    { id: 'pet-sitting', name: 'Pet Sitting', price: '£35', duration: '60 min', description: 'Care for pets in your home.', icon: PawPrint },
                    { id: 'dog-walking', name: 'Dog Walking', price: '£15', duration: '30 min', description: 'Local dog walking.', icon: PawPrint }
                ]
            }
        ]
    }
];

