import { Metadata } from 'next';
import { siteConfig, defaultMeta } from '@/lib/seo.config';

interface GenerateMetadataProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    noIndex?: boolean;
    pathname?: string;
}

export function generateMetadata({
    title,
    description,
    keywords,
    image,
    noIndex = false,
    pathname = '',
}: GenerateMetadataProps): Metadata {
    const metaTitle = title ? `${title} | NasGo` : defaultMeta.title;
    const metaDescription = description || defaultMeta.description;
    const metaImage = image || siteConfig.ogImage;
    const url = `${siteConfig.url}${pathname}`;

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: keywords?.join(', ') || defaultMeta.keywords,
        authors: [{ name: siteConfig.creator }],
        creator: siteConfig.creator,
        publisher: siteConfig.creator,
        robots: noIndex ? 'noindex, nofollow' : 'index, follow',
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            locale: 'en_GB',
            url: url,
            title: metaTitle,
            description: metaDescription,
            siteName: siteConfig.name,
            images: [
                {
                    url: metaImage,
                    width: 1200,
                    height: 630,
                    alt: metaTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: [metaImage],
            creator: '@nasgouk',
        },
        verification: {
            google: 'YOUR_GOOGLE_VERIFICATION_CODE',
        },
    };
}
