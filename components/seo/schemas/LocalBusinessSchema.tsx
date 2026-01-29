interface LocalBusinessSchemaProps {
    city: string;
    region?: string;
    postalCode?: string;
    latitude?: number;
    longitude?: number;
}

export function LocalBusinessSchema({
    city,
    region = 'West Midlands',
    postalCode = 'B1',
    latitude = 52.4862,
    longitude = -1.8904,
}: LocalBusinessSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `NasGo ${city}`,
        image: 'https://www.nasgo.uk/og-image.png',
        '@id': `https://www.nasgo.uk/${city.toLowerCase()}`,
        url: `https://www.nasgo.uk/${city.toLowerCase()}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: city,
            addressRegion: region,
            postalCode: postalCode,
            addressCountry: 'GB',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: latitude,
            longitude: longitude,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
        },
        priceRange: '££',
        telephone: '+44-XXX-XXX-XXXX',
        email: 'support@nasgo.uk',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
