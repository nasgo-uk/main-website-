import { notFound } from 'next/navigation';
import { locationsData } from '@/lib/locationsData';
import { servicesData } from '@/lib/servicesData';
import { Metadata } from 'next';
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema';
import { siteConfig } from '@/lib/seo.config';
import { CheckCircle, MapPin, Star } from 'lucide-react';


interface Props {
    params: Promise<{
        city: string;
        service: string;
    }>;
}

// Helper to find service data - traversing nested hierarchy
function findServiceData(slug: string) {
    for (const category of servicesData) {
        for (const subCat of category.subCategories) {
            // Logic checked: sub.id matches the slug usage in locationsData links
            const sub = subCat.services.find(s => s.id === slug);
            if (sub) return { category, sub };
        }
    }
    return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = locationsData.find((l) => l.id === resolvedParams.city);
    const data = findServiceData(resolvedParams.service);

    if (!city || !data) {
        return {
            title: 'Service Not Found',
        };
    }

    const { sub } = data;

    return {
        title: `Best ${sub.name} in ${city.name} | Verified Professionals | ${siteConfig.name}`,
        description: `Looking for ${sub.name} in ${city.name}? Book top-rated ${sub.name.toLowerCase()} experts in ${city.name}. Available in ${city.areas.slice(0, 3).join(', ')}. Instant quotes & same-day availability.`,
        alternates: {
            canonical: `${siteConfig.url}/locations/${city.id}/${sub.id}`,
        }
    };
}

export default async function CityServicePage({ params }: Props) {
    const resolvedParams = await params;
    const city = locationsData.find((l) => l.id === resolvedParams.city);
    const data = findServiceData(resolvedParams.service);

    if (!city || !data) {
        notFound();
    }

    const { sub } = data;

    return (
        <div className="bg-gray-50 min-h-screen font-sans selection:bg-[#E76F51] selection:text-white pb-20">
            <LocalBusinessSchema
                city={city.name}
                latitude={city.coordinates.lat}
                longitude={city.coordinates.lng}
            />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-white rounded-b-[3rem] shadow-sm mb-12">
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006D77]/5 rounded-full blur-[100px] opacity-70" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E76F51]/5 rounded-full blur-[100px] opacity-70" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 text-[#006D77] font-bold mb-6 bg-[#006D77]/5 px-4 py-2 rounded-full border border-[#006D77]/10">
                        <MapPin size={16} />
                        <span className="uppercase tracking-widest text-xs">Available in {city.name}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#264653] mb-6 tracking-tight font-poppins leading-tight">
                        Top-Rated <span className="text-transparent bg-clip-text bg-linear-to-r from-[#264653] to-[#006D77]">{sub.name}</span> in {city.name}
                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
                        {sub.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#E76F51] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e06142] hover:shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-1">
                            Get Instant Quote
                        </button>
                        <div className="flex items-center justify-center gap-2 text-[#264653] font-bold bg-white border border-gray-100 px-8 py-4 rounded-full shadow-sm">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span>4.9/5 Average Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Service Details */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Detailed Description */}
                    <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100/50">
                        <h2 className="text-3xl font-bold text-[#264653] mb-6 font-poppins">
                            Professional {sub.name} Services in {city.name}
                        </h2>
                        <div className="prose prose-lg prose-teal text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                Do you need reliable <strong className="text-[#006D77]">{sub.name}</strong> in {city.name}?
                                NasGo connects you with vetted, local professionals who specialize in {sub.name.toLowerCase()}.
                                Whether you are in {city.areas[0]}, {city.areas[1]}, or anywhere in the {city.name} area,
                                we have got you covered.
                            </p>
                            <p>
                                {sub.longDescription || sub.description}
                            </p>
                        </div>
                    </section>

                    {/* Features List */}
                    {sub.features && sub.features.length > 0 && (
                        <section className="bg-[#006D77]/5 rounded-[2.5rem] p-8 md:p-12 border border-[#006D77]/10">
                            <h3 className="text-2xl font-bold text-[#006D77] mb-8 font-poppins">Why Choose NasGo?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {sub.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start bg-white p-4 rounded-2xl shadow-xs">
                                        <div className="bg-[#E76F51]/10 p-2 rounded-full mr-4 shrink-0">
                                            <CheckCircle className="w-5 h-5 text-[#E76F51]" />
                                        </div>
                                        <span className="text-[#264653] font-medium mt-1">{feature}</span>
                                    </div>
                                ))}
                                <div className="flex items-start bg-white p-4 rounded-2xl shadow-xs">
                                    <div className="bg-[#E76F51]/10 p-2 rounded-full mr-4 shrink-0">
                                        <CheckCircle className="w-5 h-5 text-[#E76F51]" />
                                    </div>
                                    <span className="text-[#264653] font-medium mt-1">Operating throughout {city.name}</span>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* FAQs - Localized */}
                    {sub.faqs && sub.faqs.length > 0 && (
                        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100/50">
                            <h3 className="text-2xl font-bold text-[#264653] mb-8 font-poppins">Frequently Asked Questions</h3>
                            <dl className="space-y-6">
                                {sub.faqs.map((faq, idx) => (
                                    <div key={idx} className="border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                                        <dt className="text-lg font-bold text-[#264653] mb-2">{faq.question}</dt>
                                        <dd className="text-gray-500 leading-relaxed">{faq.answer.replace("London", city.name)}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                    )}
                </div>

                {/* Right Column: Local Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Local Coverage Box */}
                    <div className="bg-[#264653] rounded-[2.5rem] shadow-xl p-8 sticky top-8 text-white overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#006D77] rounded-full blur-[50px] opacity-50 -mr-10 -mt-10" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center font-poppins">
                                <MapPin className="w-6 h-6 text-[#E76F51] mr-3" />
                                Serving {city.name}
                            </h3>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                Our {sub.name.toLowerCase()} experts are active in the following neighborhoods:
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {city.areas.map((area) => (
                                    <span key={area} className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/5">
                                        {area}
                                    </span>
                                ))}
                            </div>
                            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                                <p className="text-sm text-gray-200 font-medium text-center mb-4">
                                    Need {sub.name} today?
                                </p>
                                <button className="w-full bg-[#E76F51] text-white rounded-xl py-3.5 font-bold hover:bg-[#d05a3d] transition-colors shadow-lg shadow-orange-900/20">
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
