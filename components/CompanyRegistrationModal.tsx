"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Check, Building2, User, Mail, Phone, MapPin, Loader2, Monitor } from 'lucide-react';
import CustomDropdown from './CustomDropdown';
import SuccessMessage from './SuccessMessage';
import { saveRegistration } from '../lib/db';
import { useCSRF } from '../hooks/useCSRF';

interface CompanyRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CompanyRegistrationModal: React.FC<CompanyRegistrationModalProps> = ({ isOpen, onClose }) => {
    const csrfToken = useCSRF();
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        city: '',
        website: '',
        fleetSize: '1-10 techs',
        bot_check: '' // Honeypot field
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await saveRegistration({
            type: 'company_lead',
            sourcePage: 'company_registration_modal',
            companyName: formData.companyName,
            name: formData.contactPerson,
            email: formData.email,
            phone: formData.phone,
            fleetSize: formData.fleetSize,
            metadata: {
                city: formData.city,
                website: formData.website
            }
        }, csrfToken);

        if (result.success) {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormData({
                    companyName: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    city: '',
                    website: '',
                    fleetSize: '1-10 techs',
                    bot_check: ''
                });
            }, 3000);
        } else {
            console.error("Submission failed", result.error);
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <m.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-[#006D77] p-8 text-center text-white relative overflow-hidden rounded-t-[2rem]">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-3xl font-extrabold mb-2 relative z-10">Register Your Company</h2>
                            <p className="text-white/80 relative z-10">Join Nasgo and transform your operations today.</p>
                        </div>

                        <div className="p-8">
                            {isSuccess ? (
                                <SuccessMessage
                                    title="Registration Submitted!"
                                    message="We'll review your details and contact you shortly to activate your company account."
                                />
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1.5">
                                                <Building2 size={16} className="text-[#006D77]" />
                                                Company Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Acme Services Ltd"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1.5">
                                                <User size={16} className="text-[#006D77]" />
                                                Contact Person
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Smith"
                                                value={formData.contactPerson}
                                                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1.5">
                                                <Mail size={16} className="text-[#006D77]" />
                                                Business Email
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="admin@acme.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1.5">
                                                <Phone size={16} className="text-[#006D77]" />
                                                Phone Number
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+44 20 1234 5678"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1.5">
                                                <MapPin size={16} className="text-[#006D77]" />
                                                City / Region
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="London, UK"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-1.5">
                                                <Monitor size={16} className="text-[#006D77]" />
                                                Company Website
                                            </label>
                                            <input
                                                type="url"
                                                placeholder="https://acme.com"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <CustomDropdown
                                                label="Fleet Size"
                                                value={formData.fleetSize}
                                                options={['1-10 techs', '11-25 techs', '26-50 techs', '50+ techs']}
                                                onChange={(val) => setFormData({ ...formData, fleetSize: val })}
                                                labelClassName="block text-sm font-bold text-gray-700 mb-1.5 ml-1"
                                                buttonClassName="bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#E76F51] text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#d65f42] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" />
                                                Processsing...
                                            </>
                                        ) : (
                                            "Submit Registration"
                                        )}
                                    </button>
                                    <p className="text-xs text-center text-gray-400">
                                        Your company data is protected and secure.
                                    </p>
                                </form>
                            )}
                        </div>
                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CompanyRegistrationModal;
