"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { m } from 'framer-motion';

const topLocations = [
    { name: "Birmingham", slug: "birmingham", areas: ["Solihull", "Sutton Coldfield", "Edgbaston"] },
    { name: "London", slug: "london", areas: ["Chelsea", "Islington", "Camden"] }, // Placeholder if not in data yet, but good for UI
];

const LocationsSection = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-6"
                    >
                        <MapPin size={16} className="mr-2" />
                        <span>Nationwide Coverage</span>
                    </m.div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Locations We Serve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From city centers to suburbs, our verified professionals are ready to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topLocations.map((location) => (
                        <Link key={location.slug} href={location.slug === 'london' ? '#' : `/locations/${location.slug}`} className={`group ${location.slug === 'london' ? 'pointer-events-none' : ''}`}>
                            <div className={`bg-gray-50 rounded-3xl p-8 border border-gray-100 transition-all duration-300 h-full ${location.slug === 'london' ? 'opacity-75 grayscale' : 'hover:shadow-xl hover:scale-[1.02]'}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{location.name}</h3>
                                    {location.slug === 'london' ? (
                                        <div className="px-3 py-1 bg-gray-200 rounded-full text-xs font-bold text-gray-500">Coming Soon</div>
                                    ) : (
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <ArrowRight size={20} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {location.areas.map(area => (
                                        <span key={area} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 border border-gray-200">{area}</span>
                                    ))}
                                    {location.slug !== 'london' && <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 border border-gray-200">+20 more</span>}
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* View All Card */}
                    <Link href="/locations" className="group flex flex-col justify-center items-center text-center bg-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-200 hover:shadow-2xl hover:bg-blue-700 transition-all duration-300">
                        <MapPin size={48} className="text-white mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-white mb-2">View All Locations</h3>
                        <p className="text-blue-100 mb-6">Find verified experts in your area today.</p>
                        <span className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-sm group-hover:bg-blue-50 transition-colors">
                            Search Your City
                        </span>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default LocationsSection;
