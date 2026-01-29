import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog/posts';
import { siteConfig } from '@/lib/seo.config';
import { Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';

// Note: Metadata export is not supported in client components. 
// We will rely on layout or a separate server component wrapper if strictly needed, 
// but for now we prioritize the UI design. 
// If metadata is critical for this specific page, we can split this into a server page + client component.
// For this iteration, we keep it simple as a client component for the animations, 
// assuming layout handles generic metadata or we accept losing route-specific metadata for a moment 
// (or we can move the UI to a component).
// actually, since I need metadata, I should probably keep this as a server component 
// and use a client component for the animated parts? 
// Or I can just use standard Tailwind classes for "fade-in" like effects without 'use client' for now 
// to avoid complexity, OR just make the Hero specific part a client component.
// Let's stick to Server Component as much as possible for SEO, but the request emphasized DESIGN.
// I will use 'use client' for the motion effects, as aesthetic is the priority.
// To keep metadata work, I should technically separate them. 
// However, the quick fix for "Design first" is usually client side. 
// I'll try to keep it Server Component but use standard CSS animations for "float" if needed, 
// or simple classes. 
// But wait, the user wants "Same Identity". The main Hero.tsx is "use client".
// I will make this page a Server Component that imports a Client Component for the Hero if needed, 
// or just make the whole page generic and acceptable without complex Framer Motion 
// if that saves the Metadata. 
// actually, I'll use standard CSS classes for gradients which work in SC. 
// I'll skip 'framer-motion' for the *page* root to preserve Metadata export. 
// No, wait, I can't export metadata from 'use client'.
// The file currently exports metadata. So I MUST keep it a Server Component.
// I will just style it heavily with Tailwind and maybe avoid `framer-motion` 
// or use it only in small sub-components if desperate.
// Let's focus on the static styling (gradients, rounded corners, colors) which forms 90% of the identity.

export const metadata = {
    title: `Expert Home Advice & Tips | ${siteConfig.name} Blog`,
    description: 'Pro tips for home maintenance, repair guides, and cost breakdowns. Learn from NasGo experts.',
};

export default function BlogIndexPage() {
    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-gray-50 pb-20 selection:bg-[#E76F51] selection:text-white">

            {/* Hero Section */}
            <div className="relative pt-24 pb-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white/50">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#006D77]/5 rounded-full blur-[80px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E76F51]/5 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 text-[#006D77] font-bold mb-4 bg-blue-50 px-4 py-1.5 rounded-full">
                        <BookOpen size={18} />
                        <span className="uppercase tracking-widest text-xs">Knowledge Hub</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-[family-name:var(--font-poppins)]">
                        Expert Advice for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#264653] to-[#006D77]">
                            Better Living
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Discover professional tips, cost guides, and maintenance checks to keep your home running smoothly.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

                {/* Featured Post */}
                <div className="group relative bg-white rounded-3xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="lg:flex gap-8">
                        <div className="lg:w-1/2 relative h-64 lg:h-96 rounded-2xl overflow-hidden">
                            <Image
                                src={featuredPost.coverImage}
                                alt={featuredPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#006D77] uppercase tracking-wide border border-gray-100 shadow-sm">
                                {featuredPost.category}
                            </div>
                        </div>
                        <div className="lg:w-1/2 py-6 pr-6 flex flex-col justify-center">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6 w-full">
                                <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                                    <Calendar className="w-4 h-4 mr-2 text-[#E76F51]" /> {featuredPost.date}
                                </span>
                                <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                                    <Clock className="w-4 h-4 mr-2 text-[#E76F51]" /> {featuredPost.readTime}
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#264653] mb-6 leading-tight group-hover:text-[#006D77] transition-colors">
                                <Link href={`/blog/${featuredPost.slug}`}>
                                    {featuredPost.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 line-clamp-3 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#006D77]/10 flex items-center justify-center text-[#006D77]">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#264653]">{featuredPost.author.name}</p>
                                        <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                                    </div>
                                </div>
                                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E76F51] text-white shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Posts Grid */}
                <div className="py-16">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-3xl font-bold text-[#264653]">Latest Articles</h3>
                        <div className="h-1 bg-gray-100 flex-1 ml-6 rounded-full relative overflow-hidden">
                            <div className="w-20 h-full bg-[#006D77] absolute left-0 top-0" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                                <article className="bg-white rounded-3xl p-3 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                                    <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-4">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#006D77] uppercase tracking-wide">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="px-2 pb-4 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                                            <span className="flex items-center text-[#E76F51]">
                                                <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#264653] mb-3 leading-snug group-hover:text-[#006D77] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between group-hover:border-[#006D77]/20 transition-colors">
                                            <span className="text-xs font-bold text-gray-500">By {post.author.name}</span>
                                            <span className="text-[#006D77] text-sm font-bold flex items-center">
                                                Read Now <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
