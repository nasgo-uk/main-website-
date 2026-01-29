
export interface Location {
    id: string; // URL slug (e.g., 'birmingham')
    name: string;
    description: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    metaDescription: string;
    areas: string[]; // Neighborhoods/Areas for SEO
}

export const locationsData: Location[] = [
    {
        id: 'birmingham',
        name: 'Birmingham',
        description: 'Serving the entire Birmingham area with top-rated home services. From Solihull to Sutton Coldfield, our verified professionals are ready to help.',
        coordinates: {
            lat: 52.4862,
            lng: -1.8904
        },
        metaDescription: 'Find trusted local tradespeople in Birmingham. Cleaners, Plumbers, Electricians and more. Instant AI quotes and verified professionals in Birmingham.',
        areas: [
            'Solihull',
            'Sutton Coldfield',
            'Edgbaston',
            'Harborne',
            'Moseley',
            'Kings Heath',
            'Bournville',
            'Erdington',
            'Jewellery Quarter',
            'Digbeth'
        ]
    }
];
