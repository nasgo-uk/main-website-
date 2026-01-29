import { siteConfig } from '@/lib/seo.config';

interface ArticleSchemaProps {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    authorName: string;
    slug: string;
}

export function ArticleSchema({
    title,
    description,
    image,
    datePublished,
    authorName,
    slug,
}: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        dateModified: datePublished, // For now, assumed same
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/logo-blue.png`, // Assuming logo exists
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/blog/${slug}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
