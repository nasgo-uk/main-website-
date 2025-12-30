
"use client";

import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Box, Plus, ArrowRight } from 'lucide-react';
import RequestServiceModal from './RequestServiceModal';
import ServiceCategoryModal from './ServiceCategoryModal';
import { servicesData, ServiceCategory } from '../lib/servicesData';

const ServicesSection: React.FC = () => {
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    const [selectedServiceForRequest, setSelectedServiceForRequest] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

    const handleRequestService = () => {
        setSelectedServiceForRequest('');
        setIsRequestModalOpen(true);
    };

    const handleExplore = (category: ServiceCategory) => {
        setSelectedCategory(category);
        setIsCategoryModalOpen(true);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#006D77]/5 rounded-tr-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <m.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 text-[#E76F51] font-bold mb-4"
                        >
                            <Box size={20} />
                            <span className="uppercase tracking-widest text-sm">Our Services</span>
                        </m.div>
                        <m.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-[#264653] leading-tight"
                        >
                            Everything you need, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D77] to-[#83C5BE]">
                                delivered to your door.
                            </span>
                        </m.h2>
                    </div>

                    <m.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onClick={handleRequestService}
                        className="hidden md:flex items-center gap-2 text-[#006D77] font-bold hover:gap-4 transition-all"
                    >
                        Request a Service <ArrowRight size={20} />
                    </m.button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <m.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => handleExplore(service)}
                            className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-[#006D77]/20 transition-all cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#264653] mb-2">{service.name}</h3>
                            <p className="text-gray-500 text-sm font-medium mb-4 line-clamp-2">{service.description}</p>
                            <div className="flex items-center gap-2 text-[#006D77] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                Explore <ArrowRight size={16} />
                            </div>
                        </m.div>
                    ))}

                    {/* Request Service Card */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: servicesData.length * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={handleRequestService}
                        className="col-span-1 sm:col-span-2 bg-[#264653] rounded-3xl p-8 relative overflow-hidden cursor-pointer group flex flex-col justify-center text-white"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E76F51]/20 rounded-tr-full -ml-8 -mb-8 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                <Plus size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Can't find what you need?</h3>
                            <p className="text-gray-300 mb-6 max-w-xs">
                                Tell us what service you're looking for and we'll add it within 24 hours.
                            </p>
                            <button className="bg-[#E76F51] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#E76F51]/30 group-hover:bg-[#ff8c6b] transition-colors inline-block w-fit">
                                Request a Service
                            </button>
                        </div>
                    </m.div>
                </div>
            </div>

            <RequestServiceModal
                isOpen={isRequestModalOpen}
                onClose={() => setIsRequestModalOpen(false)}
                prefilledService={selectedServiceForRequest}
            />

            <ServiceCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
                category={selectedCategory}
            />
        </section>
    );
};

export default ServicesSection;
