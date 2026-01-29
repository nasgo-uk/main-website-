import Link from 'next/link';
import { locationsData } from '@/lib/locationsData';
import { Metadata } from 'next';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Locations We Serve | NasGo',
    description: 'Find trusted NasGo professionals in your area. Serving Birmingham and London with reliable home services.',
};

export default function LocationsIndexPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20 selection:bg-[#E76F51] selection:text-white">

            {/* Hero Section */}
            <div className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white/50">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#006D77]/5 rounded-full blur-[80px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#E76F51]/5 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 text-[#E76F51] font-bold mb-4 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
                        <MapPin size={18} />
                        <span className="uppercase tracking-widest text-xs">Nationwide Coverage</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-[family-name:var(--font-poppins)]">
                        Find Experts in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D77] to-[#264653]">
                            Your City
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
                        Connecting you with verified professionals across key UK cities. Quality service, wherever you call home.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locationsData.map((location) => (
                        <Link
                            key={location.id}
                            href={`/locations/${location.id}`}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#006D77]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-[#006D77]/10 rounded-2xl flex items-center justify-center text-[#006D77] group-hover:bg-[#006D77] group-hover:text-white transition-colors duration-300">
                                        <MapPin size={28} />
                                    </div>
                                    <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold flex items-center gap-1 border border-green-100">
                                        <ShieldCheck size={12} />
                                        Verified Pros
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#264653] mb-3 group-hover:text-[#006D77] transition-colors font-[family-name:var(--font-poppins)]">
                                    {location.name}
                                </h3>

                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {location.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-500">
                                        {location.areas.slice(0, 3).map((area) => (
                                            <span key={area} className="bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100 group-hover:bg-white transition-colors">
                                                {area}
                                            </span>
                                        ))}
                                        {location.areas.length > 3 && (
                                            <span className="bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100 text-[#E76F51]">
                                                +{location.areas.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 flex items-center text-[#006D77] font-bold text-sm group-hover:gap-2 transition-all">
                                        View Services
                                        <ArrowRight size={16} className="ml-2 group-hover:ml-0 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Coming Soon Card */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 border-dashed flex flex-col items-center justify-center text-center opacity-70">
                        <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 mb-4">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-500 mb-2">More Cities Soon</h3>
                        <p className="text-sm text-gray-400 max-w-xs">
                            We are rapidly expanding across the UK. Keep an eye out for updates!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
