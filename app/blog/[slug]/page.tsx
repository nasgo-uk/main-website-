import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog/posts';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo.config';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { ArticleSchema } from '@/components/seo/schemas/ArticleSchema';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: post.metaTitle || `${post.title} | NasGo Blog`,
        description: post.metaDescription || post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.excerpt,
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author.name],
        },
        alternates: {
            canonical: `${siteConfig.url}/blog/${post.slug}`,
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20">

            {/* Schema */}
            <ArticleSchema
                title={post.title}
                description={post.metaDescription || post.excerpt}
                image={post.coverImage}
                datePublished={post.date}
                authorName={post.author.name}
                slug={post.slug}
            />

            {/* Hero Image */}
            <div className="relative h-96 w-full">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-4xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-6 uppercase tracking-wider text-sm font-semibold transition">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight shadow-sm">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" /> {post.author.name}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" /> {post.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" /> {post.readTime}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <div
                        className="prose prose-lg prose-blue max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }} // In a real app we'd use a markdown parser, but here we use simple HTML string
                    />

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <h4 className="flex items-center text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                            <Tag className="w-4 h-4 mr-2" /> Related Topics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar / CTA */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 space-y-8">

                        {/* Embedded Service CTA */}
                        {post.relatedServiceId && (
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">
                                    Need Professional Help?
                                </h3>
                                <p className="text-sm text-blue-700 mb-4">
                                    Don&apos;t struggle with DIY. Get a verified NasGo expert to handle your <strong>{post.tags[0]}</strong> today.
                                </p>
                                <Link
                                    href={`/services/handyman/${post.relatedServiceId}`} // Assuming handyman for now, logic could be dynamic based on category
                                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition shadow-md"
                                >
                                    Book a Pro Now
                                </Link>
                            </div>
                        )}

                        {/* Author Bio */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Written By</h4>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{post.author.name}</p>
                                    <p className="text-xs text-gray-500">{post.author.role}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
