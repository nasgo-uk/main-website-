export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NasGo',
        alternateName: 'NasGo Home Services',
        url: 'https://www.nasgo.uk',
        logo: 'https://www.nasgo.uk/logo.png',
        description: 'AI-Powered Home Services Platform - Connect with verified professionals, get instant price quotes, book with confidence.',
        foundingDate: '2024',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Birmingham',
            addressRegion: 'West Midlands',
            addressCountry: 'GB',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                email: 'support@nasgo.uk',
                contactType: 'customer service',
                availableLanguage: 'English',
            },
            {
                '@type': 'ContactPoint',
                email: 'partnerships@nasgo.uk',
                contactType: 'business partnerships',
                availableLanguage: 'English',
            },
        ],
        sameAs: [
            'https://twitter.com/nasgouk',
            'https://facebook.com/nasgouk',
            'https://instagram.com/nasgouk',
            'https://linkedin.com/company/nasgo',
            'https://youtube.com/@nasgo',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
