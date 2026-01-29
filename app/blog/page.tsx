import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog/posts';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo.config';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: `Expert Home Advice & Tips | ${siteConfig.name} Blog`,
    description: 'Pro tips for home maintenance, repair guides, and cost breakdowns. Learn from NasGo experts.',
};

export default function BlogIndexPage() {
    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            {/* Header */}
            <div className="bg-white border-b border-gray-200 py-16 px-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    The NasGo Blog
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                    Expert advice, cost guides, and maintenance tips for your home.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                {/* Featured Post */}
                <div className="lg:flex bg-white rounded-2xl shadow-xl overflow-hidden mb-16 transition hover:shadow-2xl duration-300">
                    <div className="lg:w-1/2 relative h-64 lg:h-auto">
                        <Image
                            src={featuredPost.coverImage}
                            alt={featuredPost.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wide">
                                {featuredPost.category}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" /> {featuredPost.date}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" /> {featuredPost.readTime}
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            <Link href={`/blog/${featuredPost.slug}`} className="hover:text-blue-600 transition">
                                {featuredPost.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                                {/* Placeholder Avatar if external images blocked, else usage is fine */}
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3">
                                    {featuredPost.author.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{featuredPost.author.name}</p>
                                    <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                                </div>
                            </div>
                            <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition">
                                Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Posts Grid */}
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <div key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center">
                                        <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-medium">By {post.author.name}</span>
                                    <Link href={`/blog/${post.slug}`} className="text-blue-600 text-sm font-bold hover:underline">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
