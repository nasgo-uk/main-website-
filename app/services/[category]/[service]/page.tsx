
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
            <main className="min-h-screen pt-24 pb-12 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Breadcrumb Visual */}
                    <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/services" className="hover:text-[#006D77] transition-colors">Services</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href={`/services/${category.id}`} className="hover:text-[#006D77] transition-colors">{category.name}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-[#264653] font-medium">{service.name}</span>
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
                                    <h1 className="text-4xl md:text-5xl font-bold text-[#264653]">
                                        {service.name}
                                    </h1>
                                </div>
                                <p className="text-xl text-[#264653]/70 leading-relaxed">
                                    {service.longDescription || service.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            {service.features && (
                                <div className="bg-white rounded-3xl p-8 border border-gray-100">
                                    <h2 className="text-2xl font-bold mb-6 text-[#264653]">What&apos;s Included</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                                                <span className="text-[#264653]/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Why Choose NasGo */}
                            <div>
                                <h2 className="text-2xl font-bold mb-8 text-[#264653]">Why Choose NasGo?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 border border-gray-200 rounded-2xl bg-white">
                                        <ShieldCheck className="w-8 h-8 text-[#006D77] mb-4" />
                                        <h3 className="font-bold mb-2">Verified Pros</h3>
                                        <p className="text-sm text-[#264653]/70">Every professional is ID checked, interviewed, and insured.</p>
                                    </div>
                                    <div className="p-6 border border-gray-200 rounded-2xl bg-white">
                                        <Banknote className="w-8 h-8 text-green-600 mb-4" />
                                        <h3 className="font-bold mb-2">Transparent Pricing</h3>
                                        <p className="text-sm text-[#264653]/70">AI-powered quotes meaning fair prices with no hidden fees.</p>
                                    </div>
                                    <div className="p-6 border border-gray-200 rounded-2xl bg-white">
                                        <Clock className="w-8 h-8 text-[#E76F51] mb-4" />
                                        <h3 className="font-bold mb-2">Fast Booking</h3>
                                        <p className="text-sm text-[#264653]/70">Book in 60 seconds. Professionals available as soon as today.</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQs */}
                            {service.faqs && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 text-[#264653]">Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        {service.faqs.map((faq, i) => (
                                            <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                                                <h3 className="font-bold text-lg mb-2 text-[#264653]">{faq.question}</h3>
                                                <p className="text-[#264653]/70">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar / Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                                    <h3 className="text-xl font-bold mb-6 text-[#264653] border-b pb-4 border-gray-100">Service Details</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-[#264653]/70">
                                                <Banknote className="w-5 h-5 mr-3" />
                                                <span>Estimated Price</span>
                                            </div>
                                            <span className="font-bold text-lg text-[#264653]">{service.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-[#264653]/70">
                                                <Clock className="w-5 h-5 mr-3" />
                                                <span>Duration</span>
                                            </div>
                                            <span className="font-semibold text-[#264653]">{service.duration}</span>
                                        </div>
                                    </div>

                                    <Link href={`/services/${category.id}/${service.id}/quote`} className="block w-full bg-[#E76F51] hover:bg-[#d05a3d] text-white font-bold py-4 rounded-xl text-center transition-colors shadow-lg hover:shadow-orange-500/30 mb-4">
                                        Get Instant Quote
                                    </Link>

                                    <p className="text-xs text-center text-gray-500 mb-6">
                                        No credit card required to get a quote.
                                    </p>

                                    <div className="bg-[#006D77]/5 rounded-xl p-4 flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-[#006D77] mt-1" />
                                        <div>
                                            <p className="text-sm font-semibold text-[#264653]">Need help booking?</p>
                                            <p className="text-sm text-[#006D77]">Call our support text: 07400 000 000</p>
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
