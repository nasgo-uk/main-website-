"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Check, MapPin, Loader2 } from 'lucide-react';
import CustomDropdown from './CustomDropdown';
import SuccessMessage from './SuccessMessage';
import { saveRegistration } from '../lib/db';
import { useCSRF } from '../hooks/useCSRF';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const csrfToken = useCSRF();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        serviceInterest: '',
        bot_check: '' // Honeypot state
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Mock services list
    const services = [
        "Home Cleaning",
        "Plumbing",
        "Electrical",
        "Painting",
        "Handyman",
        "Landscaping",
        "HVAC",
        "Moving",
        "Other"
    ];
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await saveRegistration({
            type: 'waitlist',
            sourcePage: 'waitlist_modal',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            metadata: {
                city: formData.city,
                serviceInterest: formData.serviceInterest
            },
            bot_check: formData.bot_check
        }, csrfToken);

        if (result.success) {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormData({ name: '', email: '', phone: '', city: '', serviceInterest: '', bot_check: '' });
            }, 3000);
        } else {
            console.error("Submission failed", result.error);
            setIsSubmitting(false);
            // Optionally handle error state here
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
                        className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl"
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
                            <h2 className="text-3xl font-extrabold mb-2 relative z-10">Join the Waitlist</h2>
                            <p className="text-white/80 relative z-10">Get early access and exclusive rewards.</p>
                        </div>

                        <div className="p-8">
                            {isSuccess ? (
                                <SuccessMessage
                                    title="You're on the list!"
                                    message={`We'll reach out as soon as we launch in ${formData.city || 'your city'}.`}
                                />
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">City <span className="text-[#E76F51]">*</span></label>
                                            <div className="relative">
                                                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Ex: London"
                                                    value={formData.city}
                                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+44 7123 456789"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <CustomDropdown
                                            label="I'm interested in..."
                                            value={formData.serviceInterest}
                                            options={services}
                                            onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                                            placeholder="Select a service (Optional)"
                                            labelClassName="block text-sm font-bold text-gray-700 mb-1.5 ml-1"
                                            buttonClassName="bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#E76F51] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#d65f42] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-4"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" />
                                                Joining...
                                            </>
                                        ) : (
                                            "Join Waitlist"
                                        )}
                                    </button>
                                    <p className="text-xs text-center text-gray-400 mt-4">
                                        Your data is secure. We'll only contact you with important updates.
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

export default WaitlistModal;
