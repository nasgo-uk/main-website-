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
import CustomDropdown from '../../components/CustomDropdown';
import { ContactForm } from '../../components/ContactForm';

const ContactPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'customer' | 'provider' | 'company' | 'general'>('customer');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <ContactHero onScrollTo={(tab) => { setActiveTab(tab); scrollToSection('contact-forms'); }} />
            <QuickContactOptions />
            <div id="contact-forms" className="scroll-mt-24">
                <ContactForm />
            </div>
            <ContactFAQ />
            <OfficeLocation />
            <AdditionalResources />
            <BusinessInquiries />
        </div>
    );
};

const ContactHero = ({ onScrollTo }: { onScrollTo: (tab: any) => void }) => (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-nasgo-gradient text-white overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white" />
        <div className="max-w-4xl mx-auto relative z-10">
            <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-extrabold mb-8"
            >
                We're Here to Help
            </m.h1>
            <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
            >
                Have questions? Need support? Want to partner? We'd love to hear from you.
            </m.p>

            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { label: "I'm a Customer", icon: <User size={18} />, tab: 'customer' },
                    { label: "I'm a Provider", icon: <Briefcase size={18} />, tab: 'provider' },
                    { label: "I'm a Company", icon: <Building2 size={18} />, tab: 'company' },
                    { label: "General Inquiry", icon: <HelpCircle size={18} />, tab: 'general' }
                ].map((btn, i) => (
                    <m.button
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        onClick={() => onScrollTo(btn.tab)}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold hover:bg-white hover:text-[#006D77] transition-all shadow-lg"
                    >
                        {btn.icon}
                        {btn.label}
                    </m.button>
                ))}
            </div>
        </div>
    </section>
);

const QuickContactOptions = () => {
    const options = [
        { icon: <Mail />, title: "Email Us", info: "support@nasgo.uk", sub: "We respond within 24 hours" },
        { icon: <Phone />, title: "Phone Support", info: "+44 (0) 20 XXXX XXXX", sub: "Mon-Fri, 9AM-6PM GMT" },
        { icon: <MessageSquare />, title: "Live Chat", info: "Start Conversation", sub: "Avg response: <5 mins", status: 'online' },
        { icon: <Twitter />, title: "Social Media", info: "@NasgoApp", sub: "Follow for live updates", social: true }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-16">Choose How to Reach Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {options.map((opt, i) => (
                        <m.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-[2.5rem] border-gray-100 shadow-xl flex flex-col items-center text-center cursor-pointer group"
                        >
                            <div className="w-14 h-14 bg-[#006D77]/10 text-[#006D77] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {opt.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{opt.title}</h4>
                            <div className="font-black text-[#264653] mb-1 relative">
                                {opt.info}
                                {opt.status === 'online' && (
                                    <span className="absolute -right-4 top-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                )}
                            </div>
                            <p className="text-xs text-gray-400 font-medium">{opt.sub}</p>
                            {opt.social && (
                                <div className="flex gap-4 mt-4">
                                    <Twitter size={16} className="text-gray-400 hover:text-[#1DA1F2]" />
                                    <a href="https://www.linkedin.com/company/nasgo-app" target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={16} className="text-gray-400 hover:text-[#0077B5]" />
                                    </a>
                                    <Instagram size={16} className="text-gray-400 hover:text-[#E4405F]" />
                                </div>
                            )}
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: "How long before I get a response?", a: "We strive to respond to all inquiries within 24 hours. For enterprise company demos, we typically reach out within 4 business hours." },
        { q: "Can I call for technical support?", a: "Our phone line is currently focused on booking and billing inquiries. For technical issues, please use the form above or the in-app chat for a faster resolution." },
        { q: "Is there a live chat available?", a: "Yes! Once we launch fully in Q1 2026, 24/7 live chat will be integrated directly into the app and website." },
        { q: "Do you have an office I can visit?", a: "Nasgo is a remote-first technology company. We don't have walk-in support centers, but our team is available globally through digital channels." }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
                            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left hover:bg-white transition-colors">
                                <span className="font-bold text-xl text-[#264653]">{faq.q}</span>
                                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <m.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                        <div className="p-8 pt-0 text-gray-500 text-lg leading-relaxed border-t border-gray-100/50">{faq.a}</div>
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OfficeLocation = () => (
    <section className="py-24 bg-gray-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                <div className="lg:w-1/2 p-12 lg:p-24 space-y-10">
                    <h2 className="text-4xl font-extrabold">Visit Us</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center flex-shrink-0"><Clock /></div>
                            <div>
                                <h4 className="font-bold text-lg">Main Office</h4>
                                <p className="text-gray-400">123 Tech Avenue, Innovation Quarter<br />London, EC1A 1BB, United Kingdom</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center flex-shrink-0"><Clock /></div>
                            <div>
                                <h4 className="font-bold text-lg">Operating Hours</h4>
                                <p className="text-gray-400">Monday - Friday: 09:00 - 18:00 GMT<br />Saturday: 10:00 - 16:00 GMT</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#264653] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2">
                        Get Directions
                        <Send size={18} />
                    </button>
                </div>
                <div className="lg:w-1/2 min-h-[400px] bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-xl bg-[#1a3a45]/5">
                        Interactive Map Feed
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AdditionalResources = () => (
    <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-16">More Ways We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <Book />, title: "Help Center", desc: "Browse our step-by-step guides and tutorials for all users.", cta: "Visit Help Center" },
                    { icon: <MessageSquare />, title: "Community Forum", desc: "Connect with other users, share tips, and get advice.", cta: "Join Community", badge: 'Coming Soon' },
                    { icon: <Play />, title: "Video Tutorials", desc: "Watch quick 'how-to' videos to master the Nasgo platform.", cta: "Watch Tutorials" }
                ].map((res, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all relative overflow-hidden group">
                        {res.badge && <div className="absolute top-6 right-6 bg-gray-200 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">{res.badge}</div>}
                        <div className="w-16 h-16 bg-[#006D77]/10 text-[#006D77] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            {React.cloneElement(res.icon as React.ReactElement, { size: 32 } as any)}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{res.title}</h4>
                        <p className="text-gray-500 mb-10 leading-relaxed">{res.desc}</p>
                        <button className="text-[#006D77] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                            {res.cta} <ArrowRight size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BusinessInquiries = () => (
    <section className="py-24 bg-[#264653] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-16">Business Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-3">Partnerships <CheckCircle2 size={20} className="text-[#006D77]" /></h4>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">Interested in a strategic collaboration with Nasgo? We're looking for partners who share our vision.</p>
                    <div className="font-bold text-[#006D77]">partnerships@nasgo.uk</div>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-3">Press & Media <FileText size={20} className="text-[#E76F51]" /></h4>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">Access our official press kit, logos, and media assets for your stories and coverage.</p>
                    <button className="text-[#E76F51] font-bold hover:underline">Download Press Kit</button>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-3">Careers <Linkedin size={20} className="text-blue-400" /></h4>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">We're always looking for talented engineers and designers to join our growing global team.</p>
                    <button className="font-bold text-white border-b-2 border-white/20 hover:border-white">View Open Positions</button>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-3">Investment <Send size={20} className="text-[#2A9D8F]" /></h4>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">For inquiries regarding our private fundraising rounds and investor relations information.</p>
                    <div className="font-bold text-[#2A9D8F]">investors@nasgo.uk</div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactPage;
