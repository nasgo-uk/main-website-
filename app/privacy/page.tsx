"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
    const sections = [
        { id: 'collect', title: '1. Information We Collect' },
        { id: 'use', title: '2. How We Use Your Information' },
        { id: 'share', title: '3. How We Share Your Information' },
        { id: 'security', title: '4. Data Security' },
        { id: 'rights', title: '5. Your Rights and Choices' },
        { id: 'cookies', title: '6. Cookies and Tracking' },
        { id: 'children', title: '7. Children\'s Privacy' },
        { id: 'international', title: '8. International Users' },
        { id: 'changes', title: '9. Changes to This Policy' },
        { id: 'contact', title: '10. Contact Us' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="pt-32 pb-24 px-6 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-[#264653] mb-6"
                    >
                        Privacy Policy
                    </motion.h1>
                    <p className="text-gray-500 font-medium">Last Updated: October 15, 2025</p>
                    <div className="mt-8 max-w-2xl mx-auto p-6 bg-[#006D77]/5 rounded-2xl border border-[#006D77]/10 text-[#006D77] font-medium leading-relaxed">
                        At Nasgo, we take your privacy seriously. This policy explains how we collect, use, and protect your information when you use our platform.
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-32 p-8 glass rounded-[3rem] border-white/50 shadow-xl">
                            <h4 className="font-bold text-lg mb-8 border-b border-gray-200 pb-4">Table of Contents</h4>
                            <ul className="space-y-4">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className="text-sm font-bold text-gray-500 hover:text-[#006D77] transition-colors text-left"
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-12 w-full py-3 bg-[#264653] text-white rounded-xl font-bold text-sm hover:scale-105 transition-all">
                                Download PDF Version
                            </button>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-16">
                        <section id="collect" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">1. Information We Collect</h2>
                            <p className="text-gray-500 leading-relaxed mb-6 text-lg">
                                We collect information you provide directly, information we collect automatically, and information from third parties to provide a seamless home service experience.
                            </p>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-4 text-[#006D77]">Information You Provide</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-gray-500 font-medium">
                                        <li><span className="text-[#264653] font-bold">Account information</span>: Name, email, phone, and home address.</li>
                                        <li><span className="text-[#264653] font-bold">Profile information</span>: Services offered, certifications, and business details for providers.</li>
                                        <li><span className="text-[#264653] font-bold">Photos and documents</span>: Mandatory job verification photos and ID verification docs.</li>
                                        <li><span className="text-[#264653] font-bold">Communications</span>: In-app chat logs and support requests.</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-gray-100">
                                    <h4 className="font-bold mb-4">Automatically Collected Data</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed italic">
                                        "We use device data, location information (to match you with local pros), and platform usage metrics to optimize your experience."
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="use" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">2. How We Use Your Information</h2>
                            <p className="text-gray-500 leading-relaxed mb-6 text-lg">Your data helps us build a safer and more efficient marketplace.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Matching customers with best-fit providers',
                                    'Processing secure digital payments',
                                    'Identity verification and safety checks',
                                    'AI-powered pricing engine analysis',
                                    'Sending job updates and notifications',
                                    'Platform security and fraud prevention'
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white border border-gray-100 rounded-xl flex items-center gap-3 font-bold text-sm text-[#264653]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#006D77]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="share" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">3. How We Share Your Information</h2>
                            <p className="text-gray-500 leading-relaxed mb-6 text-lg">
                                We share information with other users only when necessary for service delivery (e.g., sharing a customer's address with the matched provider).
                            </p>
                            <div className="bg-[#264653] p-8 rounded-3xl text-white">
                                <h4 className="font-bold mb-4">The "No-Sale" Promise</h4>
                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                    We do NOT sell your personal information to third-party marketers. Ever. Your trust is our most valuable asset.
                                </p>
                            </div>
                        </section>

                        <section id="security" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">4. Data Security</h2>
                            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                                We protect your data through bank-level encryption, secure storage, and regular third-party security audits.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-[#006D77]/10 text-[#006D77] rounded-lg flex items-center justify-center flex-shrink-0">🔒</div>
                                    <p className="text-sm font-bold text-gray-500">End-to-end encryption for all sensitive documents and ID photos.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-[#006D77]/10 text-[#006D77] rounded-lg flex items-center justify-center flex-shrink-0">💳</div>
                                    <p className="text-sm font-bold text-gray-500">PCI-compliant payment processing via world-class gateways.</p>
                                </li>
                            </ul>
                        </section>

                        <section id="rights" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">5. Your Rights and Choices</h2>
                            <p className="text-gray-500 leading-relaxed mb-8 text-lg">You control your data. Under GDPR and other regulations, you have the right to access, export, or delete your personal data at any time.</p>
                            <button className="font-black text-[#006D77] underline decoration-2 underline-offset-4 hover:text-[#E76F51] transition-colors">Submit a Data Access Request →</button>
                        </section>

                        <section id="contact" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">10. Contact Us</h2>
                            <div className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-lg space-y-6">
                                <p className="text-gray-500 font-medium">Questions about your privacy? Reach our Data Protection Officer directly:</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[#006D77] font-black text-xl">
                                        <span>privacy@nasgo.uk</span>
                                    </div>
                                    <p className="text-sm text-gray-400">123 Tech Avenue, Innovation Quarter, London, UK</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
