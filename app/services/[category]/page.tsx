
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
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 font-sans selection:bg-[#E76F51] selection:text-white">
                {/* Hero Section */}
                <div className="relative pt-32 pb-20 overflow-hidden bg-white rounded-b-[3rem] shadow-sm mb-16">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#006D77]/5 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E76F51]/5 rounded-full blur-[80px]" />

                    <div className="container mx-auto px-6 max-w-7xl relative z-10 transition-colors">
                        <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-[#006D77] mb-8 transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
                        </Link>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="p-6 bg-white rounded-4xl shadow-lg border border-gray-100 flex items-center justify-center relative">
                                <div className={`absolute inset-0 opacity-10 rounded-4xl ${category.color.split(' ')[0].replace('bg-', 'bg-')}`} />
                                <category.icon className={`w-20 h-20 ${category.color.split(' ')[1]}`} />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-[#264653] dark:text-white mb-6 font-poppins">
                                    {category.name} Services
                                </h1>
                                <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl leading-relaxed">
                                    {category.description}. Verified professionals, transparent pricing, and instant availability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subcategories & Services */}
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-20">
                        {category.subCategories.map((sub, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-4 mb-10">
                                    <h2 className="text-3xl font-bold text-[#264653] dark:text-white font-poppins">
                                        {sub.name}
                                    </h2>
                                    <div className="h-px bg-gray-200 flex-1 ml-4 rounded-full" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {sub.services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${category.id}/${service.id}`}
                                            className="group block h-full"
                                        >
                                            <div className="bg-white dark:bg-gray-800 rounded-4xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-2 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#006D77]/5 rounded-bl-4xl -mr-4 -mt-4 transition-all group-hover:bg-[#006D77]/10" />

                                                <div className="flex justify-between items-start mb-6 relative">
                                                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl group-hover:scale-110 transition-transform">
                                                        <service.icon className="w-8 h-8 text-[#264653] dark:text-gray-200" />
                                                    </div>
                                                    <div className="flex items-center text-[#E76F51] text-sm font-bold bg-[#E76F51]/10 px-3 py-1 rounded-full">
                                                        <Star className="w-3.5 h-3.5 fill-current mr-1.5" />
                                                        4.9
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-bold text-[#264653] dark:text-white mb-3 group-hover:text-[#006D77] transition-colors font-poppins">
                                                    {service.name}
                                                </h3>

                                                <p className="text-gray-500 dark:text-gray-400 text-base mb-8 grow leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-400 font-medium">Starting from</span>
                                                        <span className="font-bold text-[#264653] dark:text-white text-lg">{service.price}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-400 font-medium">Duration</span>
                                                        <span className="font-bold text-[#264653] dark:text-white">{service.duration}</span>
                                                    </div>
                                                    <div className="w-full mt-2 py-3.5 bg-[#006D77]/5 text-[#006D77] rounded-xl text-center font-bold text-sm group-hover:bg-[#006D77] group-hover:text-white transition-all shadow-sm">
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
