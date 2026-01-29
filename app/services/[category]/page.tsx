
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Star } from 'lucide-react';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { serviceMeta } from '@/lib/seo.config';

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const category = servicesData.find((c) => c.id === resolvedParams.category);

    if (!category) {
        return {
            title: 'Category Not Found | NasGo'
        };
    }

    // Use centralized meta if available, otherwise generate default
    const meta = serviceMeta[resolvedParams.category] || {
        title: `${category.name} Services | Professional & Verified | NasGo`,
        description: `Book professional ${category.name.toLowerCase()} services in your area. Verified experts, instant AI pricing, and satisfaction guaranteed.`,
        keywords: [`${category.name.toLowerCase()} services`, 'nasgo services']
    };

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
            canonical: `https://www.nasgo.uk/services/${resolvedParams.category}`
        }
    };
}

export async function generateStaticParams() {
    return servicesData.map((category) => ({
        category: category.id,
    }));
}

export default async function CategoryPage({ params }: Props) {
    const resolvedParams = await params;
    const category = servicesData.find((c) => c.id === resolvedParams.category);

    if (!category) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'Home', url: 'https://www.nasgo.uk' },
        { name: 'Services', url: 'https://www.nasgo.uk/services' },
        { name: category.name, url: `https://www.nasgo.uk/services/${category.id}` }
    ];

    return (
        <>
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbs} />
            <Navbar />
            <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <div className={`relative ${category.color.split(' ')[0]} bg-opacity-20 py-16 mb-12`}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <Link href="/services" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
                        </Link>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg">
                                <category.icon className={`w-16 h-16 ${category.color.split(' ')[1]}`} />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                    {category.name} Services
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                                    {category.description}. Verified professionals, transparent pricing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subcategories & Services */}
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="space-y-16">
                        {category.subCategories.map((sub, idx) => (
                            <div key={idx}>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                                    {sub.name}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sub.services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${category.id}/${service.id}`}
                                            className="group"
                                        >
                                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform">
                                                        <service.icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                                                    </div>
                                                    <div className="flex items-center text-yellow-500 text-sm font-medium bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                                                        <Star className="w-3 h-3 fill-current mr-1" />
                                                        4.9
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                                    {service.name}
                                                </h3>

                                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 grow">
                                                    {service.description}
                                                </p>

                                                <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-500 dark:text-gray-400">Starting from</span>
                                                        <span className="font-bold text-gray-900 dark:text-white">{service.price}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-500 dark:text-gray-400">Duration</span>
                                                        <span className="font-medium text-gray-900 dark:text-white">{service.duration}</span>
                                                    </div>
                                                    <div className="w-full mt-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-center font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                        View Details & Book
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
