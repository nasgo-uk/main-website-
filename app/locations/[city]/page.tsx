import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locationsData } from '@/lib/locationsData';
import { servicesData } from '@/lib/servicesData';
import { Metadata } from 'next';
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema';
import { siteConfig } from '@/lib/seo.config';
import { MapPin, CheckCircle2, ArrowRight, Star } from 'lucide-react';

// Fix for Next.js 15+: params is a Promise
interface Props {
    params: Promise<{
        city: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = locationsData.find((l) => l.id === resolvedParams.city);

    if (!city) {
        return {
            title: 'Location Not Found',
        };
    }

    return {
        title: `Home Services in ${city.name} | ${siteConfig.name}`,
        description: city.metaDescription,
    };
}

export default async function CityPage({ params }: Props) {
    const resolvedParams = await params;
    const city = locationsData.find((l) => l.id === resolvedParams.city);

    if (!city) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#F8F9FA] pb-20 selection:bg-[#E76F51] selection:text-white">
            {/* JSON-LD Schema */}
            <LocalBusinessSchema
                city={city.name}
                latitude={city.coordinates.lat}
                longitude={city.coordinates.lng}
            />

            {/* Hero Section */}
            <div className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006D77]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E76F51]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 text-[#006D77] font-bold mb-6 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                        <MapPin size={18} />
                        <span className="uppercase tracking-widest text-xs">Serving {city.name} & Surroundings</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#264653] mb-8 tracking-tight font-[family-name:var(--font-poppins)]">
                        Expert Home Services in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#F4A261]">
                            {city.name}
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
                        {city.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <CheckCircle2 size={16} className="text-[#006D77]" />
                            <span>Verified Professionals</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <Star size={16} className="text-[#E76F51]" />
                            <span>Top Rated Service</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <CheckCircle2 size={16} className="text-[#006D77]" />
                            <span>Best Price Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {servicesData.map((category) => {
                        const allSubServices = category.subCategories.flatMap(sc => sc.services);

                        return (
                            <div key={category.id} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="text-xs font-bold text-[#006D77] bg-[#006D77]/10 px-3 py-1 rounded-lg uppercase tracking-wider mb-3 inline-block">
                                            {category.name}
                                        </span>
                                        <h3 className="text-3xl font-bold text-[#264653] font-[family-name:var(--font-poppins)]">
                                            {category.name} Services
                                        </h3>
                                    </div>
                                    <div className="hidden sm:flex w-12 h-12 bg-gray-50 rounded-2xl items-center justify-center text-gray-400">
                                        <ArrowRight size={24} className="-rotate-45" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {allSubServices.slice(0, 6).map((sub) => (
                                        <Link
                                            key={sub.id}
                                            href={`/locations/${city.id}/${sub.id}`}
                                            className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#E76F51] mr-3 group-hover:scale-150 transition-transform" />
                                            <span className="text-gray-600 font-medium group-hover:text-[#264653]">{sub.name}</span>
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href={`/services/${category.id}`}
                                    className="w-full block text-center bg-[#264653] text-white font-bold py-4 rounded-xl hover:bg-[#006D77] transition-colors shadow-lg shadow-[#264653]/20"
                                >
                                    Book {category.name} in {city.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Areas Served Section */}
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006D77] via-[#E76F51] to-[#264653]" />

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#264653] mb-8 font-[family-name:var(--font-poppins)]">
                        Neighborhoods We Cover in {city.name}
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {city.areas.map((area) => (
                            <span
                                key={area}
                                className="bg-gray-50 px-5 py-2.5 rounded-full text-gray-600 font-semibold border border-gray-100 hover:bg-[#006D77] hover:text-white hover:border-[#006D77] transition-all cursor-default"
                            >
                                {area}
                            </span>
                        ))}
                        <span className="bg-white px-5 py-2.5 rounded-full text-gray-400 border border-dashed border-gray-200">
                            + Many more
                        </span>
                    </div>

                    <p className="mt-10 text-gray-400">
                        Don&apos;t see your area? <Link href="/contact" className="text-[#E76F51] font-bold hover:underline">Contact us</Link> to check availability.
                    </p>
                </div>
            </div>
        </div>
    );
}
