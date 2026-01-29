
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Clock, Banknote, ShieldCheck, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { serviceMeta } from '@/lib/seo.config';

type Props = {
    params: Promise<{ category: string; service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const category = servicesData.find((c) => c.id === resolvedParams.category);
    const service = category?.subCategories.flatMap((s) => s.services).find((s) => s.id === resolvedParams.service);

    if (!service) {
        return { title: 'Service Not Found | NasGo' };
    }

    // Use centralized meta if available, otherwise generate dynamic
    const meta = serviceMeta[service.id] || {
        title: `${service.name} | Verified & Insured | NasGo`,
        description: service.description,
        keywords: [`${service.name.toLowerCase()}`, 'nasgo', 'home services']
    };

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
            canonical: `https://www.nasgo.uk/services/${resolvedParams.category}/${resolvedParams.service}`
        }
    };
}

export async function generateStaticParams() {
    const params: { category: string; service: string }[] = [];
    servicesData.forEach((category) => {
        category.subCategories.forEach((sub) => {
            sub.services.forEach((service) => {
                params.push({ category: category.id, service: service.id });
            });
        });
    });
    return params;
}

export default async function ServicePage({ params }: Props) {
    const resolvedParams = await params;
    const category = servicesData.find((c) => c.id === resolvedParams.category);
    const service = category?.subCategories.flatMap((s) => s.services).find((s) => s.id === resolvedParams.service);

    if (!category || !service) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'Home', url: 'https://www.nasgo.uk' },
        { name: 'Services', url: 'https://www.nasgo.uk/services' },
        { name: category.name, url: `https://www.nasgo.uk/services/${category.id}` },
        { name: service.name, url: `https://www.nasgo.uk/services/${category.id}/${service.id}` }
    ];

    const priceValue = parseFloat(service.price.replace(/[^\d.]/g, ''));
    const priceCurrency = 'GBP';

    return (
        <>
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbs} />
            <ServiceSchema
                serviceName={service.name}
                serviceType={category.name}
                description={service.longDescription || service.description}
                areaServed="Birmingham"
                priceRange={{ min: priceValue || 0, max: (priceValue || 0) * 1.5, currency: priceCurrency }}
            />
            {service.faqs && <FAQSchema faqs={service.faqs} />}

            <Navbar />
            <main className="min-h-screen pt-24 pb-12 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Breadcrumb Visual */}
                    <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href={`/services/${category.id}`} className="hover:text-blue-600 transition-colors">{category.name}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-gray-900 dark:text-gray-200 font-medium">{service.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Hero */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl ${category.color} bg-opacity-20`}>
                                        <service.icon className={`w-10 h-10 ${category.color.split(' ')[1]}`} />
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                        {service.name}
                                    </h1>
                                </div>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {service.longDescription || service.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            {service.features && (
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What&apos;s Included</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Why Choose NasGo */}
                            <div>
                                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Why Choose NasGo?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl">
                                        <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                                        <h3 className="font-bold mb-2">Verified Pros</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Every professional is ID checked, interviewed, and insured.</p>
                                    </div>
                                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl">
                                        <Banknote className="w-8 h-8 text-green-600 mb-4" />
                                        <h3 className="font-bold mb-2">Transparent Pricing</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered quotes meaning fair prices with no hidden fees.</p>
                                    </div>
                                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl">
                                        <Clock className="w-8 h-8 text-purple-600 mb-4" />
                                        <h3 className="font-bold mb-2">Fast Booking</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Book in 60 seconds. Professionals available as soon as today.</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQs */}
                            {service.faqs && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        {service.faqs.map((faq, i) => (
                                            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar / Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
                                    <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-4 dark:border-gray-700">Service Details</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                                <Banknote className="w-5 h-5 mr-3" />
                                                <span>Estimated Price</span>
                                            </div>
                                            <span className="font-bold text-lg text-gray-900 dark:text-white">{service.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                                <Clock className="w-5 h-5 mr-3" />
                                                <span>Duration</span>
                                            </div>
                                            <span className="font-semibold text-gray-900 dark:text-white">{service.duration}</span>
                                        </div>
                                    </div>

                                    <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-center transition-colors shadow-lg hover:shadow-blue-500/30 mb-4">
                                        Get Instant Quote
                                    </Link>

                                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
                                        No credit card required to get a quote.
                                    </p>

                                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">Need help booking?</p>
                                            <p className="text-sm text-blue-700 dark:text-blue-300">Call our support text: 07400 000 000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
