
import {
    Sparkles, Home, Box, Droplets, Wrench, Smartphone,
    Scissors, Truck, PartyPopper, Flame, Refrigerator, Armchair,
    Square, Bed, Waves, Droplet, PlugZap, ShieldCheck, Lamp,
    DoorOpen, VenetianMask, Key, Battery, BatteryCharging,
    Laptop, Wifi, Camera, Bell, Thermometer, Wind, Hand,
    HeartPulse, Dumbbell, Activity, Circle, Paintbrush,
    Leaf, Bug, PawPrint, Trash
} from 'lucide-react';

export interface SubService {
    id: string;
    name: string;
    price: string;
    duration: string;
    description: string;
    icon: any;
}

export interface ServiceCategory {
    id: string;
    name: string;
    icon: any;
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
                    { id: 'deep_clean', name: 'Deep Clean', price: '£35/hr', duration: '180 min', description: 'Thorough cleaning including behind furniture, corners, and grease removal.', icon: Sparkles },
                    { id: 'end_of_tenancy', name: 'End of Tenancy Clean', price: '£150', duration: '360 min', description: 'Complete cleaning to get your deposit back. Satisfaction guaranteed!', icon: Home },
                    { id: 'standard_clean', name: 'Standard Clean', price: '£25/hr', duration: '120 min', description: 'Regular cleaning including dusting, vacuuming, and mopping floors.', icon: Sparkles },
                    { id: 'after_party_clean', name: 'After Party Clean', price: '£30/hr', duration: '120 min', description: 'Quick cleanup after house parties and gatherings.', icon: PartyPopper }
                ]
            },
            {
                name: 'Appliance Cleaning',
                services: [
                    { id: 'oven_cleaning', name: 'Oven Cleaning', price: '£55', duration: '90 min', description: 'Professional oven cleaning removing burnt grease and grime.', icon: Flame },
                    { id: 'bbq_grill_cleaning', name: 'BBQ Grill Cleaning', price: '£50', duration: '90 min', description: 'Deep clean your garden BBQ grill.', icon: Flame },
                    { id: 'fridge_freezer_clean', name: 'Fridge & Freezer Clean', price: '£40', duration: '60 min', description: 'Defrost and sanitize your refrigerator and freezer.', icon: Refrigerator }
                ]
            },
            {
                name: 'Upholstery & Carpet',
                services: [
                    { id: 'sofa_cleaning', name: 'Sofa Cleaning', price: '£60', duration: '90 min', description: 'Professional sofa cleaning (fabric/leather) with stain removal.', icon: Armchair },
                    { id: 'carpet_shampoo', name: 'Carpet Shampoo', price: '£40', duration: '120 min', description: 'Deep carpet and rug cleaning with shampoo and steam.', icon: Square },
                    { id: 'mattress_cleaning', name: 'Mattress Cleaning', price: '£45', duration: '60 min', description: 'Sanitize mattresses from dust mites and bacteria.', icon: Bed }
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
                    { id: 'boiler_service', name: 'Boiler Service', price: '£80', duration: '60 min', description: 'Annual boiler maintenance by Gas Safe certified engineers.', icon: Flame },
                    { id: 'drain_unblocking', name: 'Drain Unblocking', price: '£55', duration: '60 min', description: 'Clear blocked drains and sinks.', icon: Waves },
                    { id: 'leak_fix', name: 'Leak Fix', price: '£45/hr', duration: '60 min', description: 'Repair leaking taps, pipes, and fixtures.', icon: Droplet }
                ]
            },
            {
                name: 'Electrical',
                services: [
                    { id: 'ev_charger_install', name: 'EV Charger Installation', price: '£350', duration: '240 min', description: 'Install electric vehicle charging points at home.', icon: PlugZap },
                    { id: 'wiring_check', name: 'Wiring Check (EICR)', price: '£150', duration: '180 min', description: 'Electrical safety inspection and certificate.', icon: ShieldCheck },
                    { id: 'light_installation', name: 'Light Fixture Installation', price: '£35', duration: '45 min', description: 'Install chandeliers, pendant lights, and ceiling fixtures.', icon: Lamp }
                ]
            },
            {
                name: 'General Handyman',
                services: [
                    { id: 'furniture_assembly', name: 'Furniture Assembly', price: '£30/hr', duration: '60 min', description: 'IKEA and flat-pack furniture assembly.', icon: Box },
                    { id: 'door_repair', name: 'Door Repair', price: '£40/hr', duration: '60 min', description: 'Fix doors, handles, and hinges.', icon: DoorOpen },
                    { id: 'curtain_fitting', name: 'Curtain & Blind Fitting', price: '£35', duration: '45 min', description: 'Install curtain rails and blinds.', icon: VenetianMask }
                ]
            },
            {
                name: 'Locksmith',
                services: [
                    { id: 'emergency_lockout', name: 'Emergency Lockout', price: '£80', duration: '60 min', description: "Locked out? We'll get you back in quickly. 24/7 service.", icon: Key },
                    { id: 'key_cutting', name: 'Key Cutting', price: '£15', duration: '15 min', description: 'On-site key duplication service.', icon: Key }
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
                    { id: 'screen_replacement', name: 'Screen Replacement', price: '£80', duration: '60 min', description: 'Replace cracked iPhone and Samsung screens at home.', icon: Smartphone },
                    { id: 'battery_replacement', name: 'Battery Replacement', price: '£45', duration: '30 min', description: 'Replace weak phone batteries.', icon: Battery },
                    { id: 'water_damage_fix', name: 'Water Damage Fix', price: '£60', duration: '90 min', description: 'Attempt to repair water-damaged devices.', icon: Droplets }
                ]
            },
            {
                name: 'IT Support',
                services: [
                    { id: 'computer_setup', name: 'Computer Setup', price: '£45/hr', duration: '60 min', description: 'Setup new laptop, transfer data, and install printers.', icon: Laptop },
                    { id: 'wifi_troubleshoot', name: 'WiFi Troubleshooting', price: '£40', duration: '60 min', description: 'Fix weak WiFi and setup mesh network extenders.', icon: Wifi }
                ]
            },
            {
                name: 'Smart Home Setup',
                services: [
                    { id: 'security_camera', name: 'Security Camera Install', price: '£65', duration: '90 min', description: 'Install and configure home security cameras.', icon: Camera },
                    { id: 'smart_doorbell', name: 'Smart Doorbell Installation', price: '£45', duration: '45 min', description: 'Install Ring, Nest, and other video doorbells.', icon: Bell },
                    { id: 'smart_thermostat', name: 'Smart Thermostat Setup', price: '£55', duration: '60 min', description: 'Install Hive, Nest, and smart heating controls.', icon: Thermometer }
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
                name: "Men's Grooming",
                services: [
                    { id: 'haircut_mens', name: 'Haircut & Styling', price: '£25', duration: '30 min', description: 'Professional haircut at home.', icon: Scissors },
                    { id: 'beard_trim', name: 'Beard Trim', price: '£15', duration: '20 min', description: 'Shape and trim your beard professionally.', icon: Scissors },
                    { id: 'kids_haircut', name: 'Kids Haircut', price: '£18', duration: '25 min', description: 'Stress-free haircuts for children at home.', icon: Box } // Fallback icon as 'baby' not found
                ]
            },
            {
                name: "Ladies' Salon",
                services: [
                    { id: 'blow_dry', name: 'Blow Dry & Styling', price: '£40', duration: '45 min', description: 'Hair styling for special occasions.', icon: Wind },
                    { id: 'manicure_pedicure', name: 'Manicure & Pedicure', price: '£35', duration: '60 min', description: 'Professional nail care at home.', icon: Hand },
                    { id: 'waxing_threading', name: 'Waxing & Threading', price: '£25', duration: '45 min', description: 'Hair removal services.', icon: Sparkles },
                    { id: 'facial', name: 'At-Home Facial', price: '£55', duration: '60 min', description: 'Deep cleansing facial treatment.', icon: Sparkles }
                ]
            },
            {
                name: 'Relaxation',
                services: [
                    { id: 'deep_tissue_massage', name: 'Deep Tissue Massage', price: '£65', duration: '60 min', description: 'Therapeutic deep tissue massage.', icon: HeartPulse },
                    { id: 'sports_massage', name: 'Sports Massage', price: '£60', duration: '60 min', description: 'Recovery massage for athletes.', icon: Dumbbell },
                    { id: 'physiotherapy', name: 'Physiotherapy', price: '£75', duration: '60 min', description: 'Physical therapy sessions at home.', icon: Activity }
                ]
            }
        ]
    },
    {
        id: 'automotive',
        name: 'Automotive',
        icon: Droplets,
        color: 'bg-indigo-100 text-indigo-700',
        description: 'Car care and quick fixes',
        subCategories: [
            {
                name: 'Quick Fix',
                services: [
                    { id: 'mobile_tyre', name: 'Mobile Tyre Fitting', price: '£40', duration: '45 min', description: 'Tyre replacement at your location.', icon: Circle },
                    { id: 'battery_jump', name: 'Battery Jump Start', price: '£35', duration: '30 min', description: 'Jump start your dead car battery.', icon: BatteryCharging },
                    { id: 'car_battery_replace', name: 'Battery Replacement', price: '£120', duration: '30 min', description: 'Replace car battery at your doorstep.', icon: Battery },
                    { id: 'oil_change', name: 'Oil Change', price: '£55', duration: '45 min', description: 'Mobile oil change service.', icon: Droplet }
                ]
            },
            {
                name: 'Car Care',
                services: [
                    { id: 'waterless_wash', name: 'Waterless Car Wash', price: '£25', duration: '45 min', description: 'Eco-friendly mobile exterior car wash.', icon: Droplets },
                    { id: 'interior_detailing', name: 'Interior Detailing', price: '£65', duration: '120 min', description: 'Deep clean interior and polish seats.', icon: Truck }, // Fallback for car icon
                    { id: 'scratch_removal', name: 'Scratch Removal', price: '£45', duration: '60 min', description: 'Remove minor scratches and polish.', icon: Paintbrush }
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
                name: 'Garden Maintenance',
                services: [
                    { id: 'lawn_mowing', name: 'Lawn Mowing', price: '£25', duration: '60 min', description: 'Regular grass cutting service.', icon: Scissors },
                    { id: 'hedge_trimming', name: 'Hedge Trimming', price: '£35/hr', duration: '60 min', description: 'Trim shrubs and hedges.', icon: Scissors },
                    { id: 'weeding', name: 'Weeding', price: '£25/hr', duration: '60 min', description: 'Remove unwanted weeds from your garden.', icon: Leaf }
                ]
            },
            {
                name: 'Outdoor Cleaning',
                services: [
                    { id: 'jet_washing', name: 'Jet Washing', price: '£80', duration: '120 min', description: 'Pressure wash driveways, patios, and paths.', icon: Waves },
                    { id: 'gutter_cleaning', name: 'Gutter Cleaning', price: '£65', duration: '90 min', description: 'Clear leaves and debris from gutters.', icon: Home },
                    { id: 'window_cleaning_ext', name: 'Window Cleaning', price: '£45', duration: '60 min', description: 'Exterior window cleaning.', icon: Square }
                ]
            }
        ]
    },
    {
        id: 'logistics',
        name: 'Logistics & Help',
        icon: Truck,
        color: 'bg-yellow-100 text-yellow-700',
        description: 'Moving, pest control, and pet care',
        subCategories: [
            {
                name: 'Removals',
                services: [
                    { id: 'man_van', name: 'Man and Van', price: '£45/hr', duration: '120 min', description: 'Van with driver for moving small loads.', icon: Truck },
                    { id: 'junk_removal', name: 'Junk Removal', price: '£60', duration: '90 min', description: 'Dispose of old furniture and appliances properly.', icon: Trash }
                ]
            },
            {
                name: 'Pet Care',
                services: [
                    { id: 'dog_walking', name: 'Dog Walking', price: '£15', duration: '30 min', description: 'Daily dog walking service.', icon: PawPrint },
                    { id: 'pet_sitting', name: 'Pet Sitting', price: '£35', duration: '60 min', description: 'In-home pet care while you\'re away.', icon: Home }
                ]
            },
            {
                name: 'Pest Control',
                services: [
                    { id: 'insect_control', name: 'Insect Control', price: '£100', duration: '90 min', description: 'Remove bed bugs, ants, and wasps.', icon: Bug },
                    { id: 'rodent_control', name: 'Rodent Control', price: '£120', duration: '90 min', description: 'Eliminate mice and rats.', icon: Bug }
                ]
            }
        ]
    }
];
