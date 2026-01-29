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
        <div className="bg-white min-h-screen">
            <LocalBusinessSchema
                city={city.name}
                latitude={city.coordinates.lat}
                longitude={city.coordinates.lng}
            />

            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center bg-blue-800/50 rounded-full px-4 py-1 mb-6 text-sm font-medium text-blue-100 border border-blue-700">
                        <MapPin className="w-4 h-4 mr-2" />
                        Available in {city.name} & Surrounding Areas
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        Top-Rated {sub.name} in {city.name}
                    </h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                        {sub.description}
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-300 transition shadow-lg">
                            Get Instant Quote
                        </button>
                        <div className="flex items-center text-yellow-400 font-semibold bg-white/10 px-4 py-2 rounded-md">
                            <Star className="w-5 h-5 mr-1 fill-current" />
                            4.9/5 Average Rating
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Service Details */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Detailed Description */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Professional {sub.name} Services in {city.name}
                        </h2>
                        <div className="prose prose-blue max-w-none text-gray-600">
                            <p className="text-lg leading-relaxed mb-4">
                                Do you need reliable <strong>{sub.name}</strong> in {city.name}?
                                NasGo connects you with vetted, local professionals who specialize in {sub.name.toLowerCase()}.
                                Whether you are in {city.areas[0]}, {city.areas[1]}, or anywhere in the {city.name} area,
                                we have got you covered.
                            </p>
                            <p className="mb-4">
                                {sub.longDescription || sub.description}
                            </p>
                        </div>
                    </section>

                    {/* Features List */}
                    {sub.features && sub.features.length > 0 && (
                        <section className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose NasGo for {sub.name}?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sub.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                                <div className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                                    <span className="text-gray-700">Operating throughout {city.name}</span>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* FAQs - Localized */}
                    {sub.faqs && sub.faqs.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                            <dl className="space-y-6">
                                {sub.faqs.map((faq, idx) => (
                                    <div key={idx} className="border-b border-gray-200 pb-6">
                                        <dt className="text-lg font-medium text-gray-900 mb-2">{faq.question}</dt>
                                        <dd className="text-gray-600">{faq.answer.replace("London", city.name)}</dd> {/* Simple localized replacement if applicable */}
                                    </div>
                                ))}
                            </dl>
                        </section>
                    )}
                </div>

                {/* Right Column: Local Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Local Coverage Box */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                            Serving {city.name}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                            Our {sub.name.toLowerCase()} experts are active in the following neighborhoods:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {city.areas.map((area) => (
                                <span key={area} className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                    {area}
                                </span>
                            ))}
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                            <p className="text-sm text-blue-800 font-medium text-center">
                                Need {sub.name} in {city.name}?
                            </p>
                            <button className="w-full mt-3 bg-blue-600 text-white rounded-md py-2 font-bold hover:bg-blue-700 transition">
                                Check Availability
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
