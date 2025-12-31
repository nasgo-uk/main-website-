"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    MessageSquare,
    Twitter,
    Linkedin,
    Instagram,
    Facebook,
    ChevronDown,
    Send,
    CheckCircle2,
    FileText,
    Book,
    Play,
    User,
    Briefcase,
    Building2,
    HelpCircle,
    Clock,
    ArrowRight
} from 'lucide-react';
import CustomDropdown from './CustomDropdown';
import SuccessMessage from './SuccessMessage';
import { useCSRF } from '../hooks/useCSRF';
import { saveRegistration } from '../lib/db';

export const ContactForm: React.FC = () => {
    const csrfToken = useCSRF();
    const [activeTab, setActiveTab] = useState<'customer' | 'provider' | 'company' | 'general'>('customer');
    const [submitted, setSubmitted] = useState(false);
    const [fleetSize, setFleetSize] = useState('1-10 employees');
    const [subject, setSubject] = useState('General Question');

    const tabs = [
        { id: 'customer', label: 'For Customers', icon: <User size={18} /> },
        { id: 'provider', label: 'For Providers', icon: <Briefcase size={18} /> },
        { id: 'company', label: 'For Companies', icon: <Building2 size={18} /> },
        { id: 'general', label: 'General Inquiry', icon: <HelpCircle size={18} /> }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Extract form data from the event or state
        const form = e.target as HTMLFormElement;
        const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
        const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
        const messageInput = form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        const earlyAccessInput = form.querySelector('#early-access') as HTMLInputElement;
        const botCheckInput = form.querySelector('input[name="bot_check"]') as HTMLInputElement; // Honeypot

        // Company specific
        const companyNameInput = activeTab === 'company' ? form.querySelector('input[name="companyName"]') as HTMLInputElement : null;

        await saveRegistration({
            type: 'contact',
            sourcePage: 'contact_page',
            name: nameInput?.value || '',
            email: emailInput?.value || '',
            message: messageInput?.value || '',
            companyName: companyNameInput?.value,
            fleetSize: activeTab === 'company' ? fleetSize : undefined,
            subject: subject,
            earlyAccess: earlyAccessInput?.checked,
            metadata: {
                tab: activeTab
            },
            bot_check: botCheckInput?.value || ''
        }, csrfToken);

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact-form" className="py-24 bg-[#F8F9FA] px-6 rounded-[3rem]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-16">What Can We Help You With?</h2>

                <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="flex overflow-x-auto border-b border-gray-100 scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex-1 min-w-[180px] py-8 flex items-center justify-center gap-3 font-bold text-lg transition-all relative ${activeTab === tab.id ? 'text-[#006D77]' : 'text-gray-400 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                                {activeTab === tab.id && (
                                    <m.div layoutId="contactTab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#006D77]" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <m.form
                                        key={activeTab}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Full Name*</label>
                                                <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all" placeholder="Enter your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Email Address*</label>
                                                <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all" placeholder="name@example.com" />
                                            </div>
                                        </div>

                                        {activeTab === 'company' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-700">Company Name*</label>
                                                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all" placeholder="ABC Services Ltd" />
                                                </div>
                                                <div className="space-y-2">
                                                    <CustomDropdown
                                                        label="Fleet Size"
                                                        required
                                                        value={fleetSize}
                                                        options={['1-10 employees', '11-50 employees', '50+ employees']}
                                                        onChange={setFleetSize}
                                                        labelClassName="text-sm font-bold text-gray-700"
                                                        buttonClassName="bg-gray-50 border border-gray-100 text-gray-700"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <CustomDropdown
                                                label="Subject"
                                                required
                                                value={subject}
                                                options={['General Question', 'Service Inquiry', 'Technical Issue', 'Partnership Proposal', 'Other']}
                                                onChange={setSubject}
                                                labelClassName="text-sm font-bold text-gray-700"
                                                buttonClassName="bg-gray-50 border border-gray-100 text-gray-700"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Message*</label>
                                            <textarea required rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all resize-none" placeholder="Tell us how we can help..."></textarea>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input type="checkbox" id="early-access" className="w-5 h-5 rounded border-gray-300 text-[#006D77] focus:ring-[#006D77]" />
                                            <label htmlFor="early-access" className="text-sm text-gray-500 font-medium">Add me to the early access waitlist for exclusive perks.</label>
                                        </div>

                                        <button type="submit" className="bg-[#E76F51] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#E76F51]/20 hover:scale-[1.02] transition-all w-full flex items-center justify-center gap-3">
                                            Send Message
                                            <Send size={20} />
                                        </button>
                                    </m.form>
                                ) : (
                                    <SuccessMessage
                                        title="Message Sent Successfully!"
                                        message="Thanks for reaching out. We'll get back to you within 24 hours at the email provided."
                                        onClose={() => setSubmitted(false)}
                                        actionLabel="Send another message"
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="lg:col-span-4 space-y-12">
                            <div>
                                <h4 className="text-xl font-bold mb-6">Support Information</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-[#006D77]/10 text-[#006D77] rounded-lg flex items-center justify-center flex-shrink-0"><Clock size={16} /></div>
                                        <div>
                                            <div className="text-sm font-bold">Response Time</div>
                                            <p className="text-sm text-gray-400">Within 24 business hours</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-[#006D77]/10 text-[#006D77] rounded-lg flex items-center justify-center flex-shrink-0"><CheckCircle2 size={16} /></div>
                                        <div>
                                            <div className="text-sm font-bold">Verification Status</div>
                                            <p className="text-sm text-gray-400">Always check your email for confirmation</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-[#264653] rounded-3xl text-white">
                                <h4 className="text-lg font-bold mb-4">Looking for something else?</h4>
                                <p className="text-sm text-white/60 mb-6 leading-relaxed">Check out our specialized resources for faster answers.</p>
                                <button className="w-full py-3 border border-white/20 rounded-xl font-bold text-sm hover:bg-white hover:text-[#264653] transition-all mb-3">Help Center</button>
                                <button className="w-full py-3 border border-white/20 rounded-xl font-bold text-sm hover:bg-white hover:text-[#264653] transition-all">Documentation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
