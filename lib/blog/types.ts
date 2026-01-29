export interface Author {
    name: string;
    role: string;
    image: string; // URL to avatar
}

export interface BlogPost {
    slug: string; // URL friendly ID
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML string
    coverImage: string;
    date: string; // ISO Date "2024-01-28"
    author: Author;
    category: string;
    tags: string[];
    readTime: string;

    // SEO Fields
    metaTitle?: string; // Defaults to title if not present
    metaDescription?: string; // Defaults to excerpt if not present
    keywords?: string[];

    // Integration
    relatedServiceId?: string; // Link to "Book Now" for this service (e.g., 'loft-insulation')
}
