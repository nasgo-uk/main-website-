interface ServiceSchemaProps {
    serviceName: string;
    serviceType: string;
    description: string;
    areaServed?: string;
    priceRange?: {
        min: number;
        max: number;
        currency?: string;
    };
    image?: string;
}

export function ServiceSchema({
    serviceName,
    serviceType,
    description,
    areaServed = 'Birmingham',
    priceRange,
    image,
}: ServiceSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: serviceType,
        name: serviceName,
        description: description,
        provider: {
            '@type': 'Organization',
            name: 'NasGo',
            url: 'https://www.nasgo.uk',
        },
        areaServed: {
            '@type': 'City',
            name: areaServed,
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://www.nasgo.uk',
            serviceSmsNumber: '+44-XXX-XXX-XXXX',
        },
        ...(priceRange && {
            offers: {
                '@type': 'Offer',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: priceRange.min,
                    maxPrice: priceRange.max,
                    priceCurrency: priceRange.currency || 'GBP',
                },
            },
        }),
        ...(image && {
            image: image,
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
