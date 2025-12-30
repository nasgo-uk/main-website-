"use client";

import React from 'react';
import { m } from 'framer-motion';

const TermsPage: React.FC = () => {
    const sections = [
        { id: 'eligibility', title: '1. Eligibility' },
        { id: 'registration', title: '2. Account Registration' },
        { id: 'conduct', title: '3. Prohibited Activities' },
        { id: 'provision', title: '4. Service Provision' },
        { id: 'payment', title: '5. Payment Terms' },
        { id: 'cancellation', title: '6. Cancellations & Refunds' },
        { id: 'liability', title: '7. Limitation of Liability' },
        { id: 'contact', title: '8. Contact Us' },
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
                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-[#264653] mb-6"
                    >
                        Terms of Service
                    </m.h1>
                    <p className="text-gray-500 font-medium">Last Updated: October 15, 2025</p>
                    <div className="mt-8 max-w-2xl mx-auto p-6 bg-[#E76F51]/5 rounded-2xl border border-[#E76F51]/10 text-[#E76F51] font-medium leading-relaxed">
                        By accessing or using Nasgo, you agree to be bound by these terms. Please read them carefully to understand your rights and obligations.
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* TOC */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-32 p-8 glass rounded-[3rem] border-white/50 shadow-xl">
                            <h4 className="font-bold text-lg mb-8 border-b border-gray-200 pb-4">Quick Navigation</h4>
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
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-16">
                        <section id="eligibility" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">1. Eligibility</h2>
                            <p className="text-gray-500 leading-relaxed text-lg mb-6">
                                To use Nasgo, you must be at least 18 years old and have the legal capacity to enter into binding contracts.
                            </p>
                            <div className="p-6 bg-[#006D77]/5 rounded-2xl border border-[#006D77]/10 font-bold text-[#006D77] text-sm uppercase tracking-wide">
                                Providers must pass a mandatory background check before being allowed to accept jobs.
                            </div>
                        </section>

                        <section id="registration" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">2. Account Registration</h2>
                            <p className="text-gray-500 leading-relaxed text-lg mb-6">
                                You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
                            </p>
                            <ul className="space-y-4 list-disc pl-6 text-gray-500 font-medium">
                                <li>Provide accurate and complete information during signup.</li>
                                <li>Notify us immediately of any unauthorized use of your account.</li>
                                <li>One person/entity per account; sharing accounts is strictly prohibited.</li>
                            </ul>
                        </section>

                        <section id="conduct" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">3. Prohibited Activities</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    'Circumventing platform fees by arranging payments outside Nasgo.',
                                    'Posting false, misleading, or fraudulent information.',
                                    'Harassing or harming other users of the platform.',
                                    'Using automated scripts or scrapers to collect platform data.',
                                    'Impersonating any person or entity or falsifying certifications.'
                                ].map((p, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white border border-red-50 rounded-xl">
                                        <span className="text-red-500 font-bold text-lg">❌</span>
                                        <p className="text-sm font-bold text-gray-400 leading-relaxed">{p}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="provision" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">4. Service Provision</h2>
                            <div className="bg-[#264653] p-10 rounded-[3rem] text-white">
                                <h4 className="text-xl font-bold mb-6">The Platform Role</h4>
                                <p className="text-sm text-white/60 leading-relaxed font-medium mb-8">
                                    Nasgo is a <span className="text-white font-bold italic">marketplace platform</span>. We connect users but do not provide home services directly. We do not employ providers and are not responsible for their performance.
                                </p>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl italic text-xs text-white/40">
                                    "Service contracts are strictly between the Customer and the Provider."
                                </div>
                            </div>
                        </section>

                        <section id="payment" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">5. Payment Terms</h2>
                            <p className="text-gray-500 leading-relaxed text-lg mb-8">Payments are processed securely via our integrated systems. Nasgo holds customer funds in escrow until job completion is verified by both parties.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                    <h4 className="font-black text-[#006D77] mb-2 uppercase tracking-tighter">Providers</h4>
                                    <p className="text-sm text-gray-500 font-bold">90% of job earnings. Paid within 24-48 hours of verification.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                    <h4 className="font-black text-[#E76F51] mb-2 uppercase tracking-tighter">Nasgo Fee</h4>
                                    <p className="text-sm text-gray-500 font-bold">10% platform commission on completed jobs. No listing fees.</p>
                                </div>
                            </div>
                        </section>

                        <section id="liability" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">7. Limitation of Liability</h2>
                            <p className="text-gray-400 text-sm leading-relaxed font-bold bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm uppercase italic">
                                Nasgo is provided "AS IS". To the maximum extent permitted by law, Nasgo shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform or services provided by third-party professionals.
                            </p>
                        </section>

                        <section id="contact" className="scroll-mt-32">
                            <h2 className="text-3xl font-extrabold text-[#264653] mb-8">8. Contact Us</h2>
                            <p className="text-gray-500 mb-6 font-medium">For legal inquiries or questions regarding these terms:</p>
                            <div className="text-2xl font-black text-[#264653]">legal@nasgo.uk</div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
