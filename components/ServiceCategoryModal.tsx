
"use client";

import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Clock, Banknote, ArrowRight } from 'lucide-react';
import { ServiceCategory } from '../lib/servicesData';

interface ServiceCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    category: ServiceCategory | null;
}

const ServiceCategoryModal: React.FC<ServiceCategoryModalProps> = ({ isOpen, onClose, category }) => {
    if (!category) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    <m.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className={`p-8 border-b border-gray-100 flex items-center justify-between ${category.color.split(' ')[0]} bg-opacity-20`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center shadow-lg`}>
                                    <category.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-[#264653]">{category.name}</h3>
                                    <p className="text-gray-600 font-medium">{category.description}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto p-8 scrollbar-hide">
                            <div className="space-y-10">
                                {category.subCategories.map((subCat, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-lg font-bold text-[#006D77] mb-4 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-[#006D77] rounded-full"></span>
                                            {subCat.name}
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {subCat.services.map((service) => (
                                                <div key={service.id} className="group bg-white/40 backdrop-blur-md hover:bg-white/60 border border-white/40 hover:border-[#006D77]/30 rounded-2xl p-5 transition-all shadow-sm hover:shadow-xl cursor-pointer">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <div className="p-2.5 bg-white/80 rounded-xl shadow-sm text-[#006D77]">
                                                            <service.icon size={20} />
                                                        </div>
                                                    </div>
                                                    <h5 className="font-bold text-gray-900 mb-1 line-clamp-1">{service.name}</h5>
                                                    <p className="text-xs text-gray-500 mb-4 line-clamp-2 h-8 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                                                            <Clock size={14} />
                                                            {service.duration}
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full bg-[#E76F51] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                                                            <ArrowRight size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                            <p className="text-sm text-gray-500 font-medium">
                                Can't find what you're looking for?
                            </p>
                            <div className="flex gap-3">
                                <button onClick={onClose} className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-200 rounded-xl transition-colors">
                                    Close
                                </button>
                                {/* Could link to existing RequestServiceModal here if passed as prop or context */}
                            </div>
                        </div>

                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceCategoryModal;
