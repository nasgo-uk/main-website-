"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ChevronRight,
    ChevronDown,
    ShieldCheck,
    Cpu,
    Smartphone,
    Search,
    Zap,
    Clock,
    CreditCard,
    Camera,
    Star,
    Check,
    ChevronLeft,
    Timer,
    MapPin,
    Signal,
    Wifi,
    Battery
} from 'lucide-react';
import FinalCTA from '../../components/FinalCTA';
import WaitlistModal from '../../components/WaitlistModal';
import ServicesSection from '../../components/ServicesSection';

const ServiceSeekersPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="">
            <SeekersHero onJoinWaitlist={() => setIsModalOpen(true)} />
            <BenefitsGrid />
            <BenefitsGrid />
            <CustomerJourney />
            <ServicesSection />
            <TrustAndSafety />
            <FAQSection />
            <FinalCTA />
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

const SeekersHero = ({ onJoinWaitlist }: { onJoinWaitlist: () => void }) => {
    const scrollToJourney = () => {
        const element = document.getElementById('customer-journey');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[70vh] flex items-center bg-nasgo-gradient text-white overflow-hidden py-20 px-6">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-sm font-medium mb-6 text-white/60">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link> <ChevronRight size={14} /> <span>For Customers</span>
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#006D77] text-xs font-bold tracking-widest uppercase mb-6">
                        FOR SERVICE SEEKERS
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                        Get Any Home Service, <br /> Done Right
                    </h1>
                    <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
                        Compare verified providers, get AI-powered fair prices, and book services instantly—all in one app.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={onJoinWaitlist} className="bg-white text-[#264653] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                            Join Waitlist
                        </button>
                        <button onClick={scrollToJourney} className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                            See How It Works
                        </button>
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-[380px]">
                        <div className="aspect-10/19 bg-[#2b2b2b] rounded-[3rem] p-[8px] border-[6px] border-[#4a4a4a] shadow-2xl ring-1 ring-black/50 overflow-hidden relative">
                            {/* Dynamic Island & Status Bar */}
                            <div className="absolute top-0 left-0 right-0 h-14 z-50 px-7 pt-3.5 flex justify-between items-start text-black">
                                <span className="text-[13px] font-semibold pl-2 text-white">14:21</span>
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center">
                                    <div className="w-20 h-full flex gap-3 justify-end items-center pr-2">
                                        <div className="w-2 h-2 rounded-full bg-[#1a1a1a]/50"></div>
                                    </div>
                                </div>
                                <div className="flex gap-1.5 items-center pr-2">
                                    <Signal size={14} className="fill-white text-white" />
                                    <Wifi size={14} className="text-white" />
                                    <Battery size={16} className="fill-white text-white" />
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] overflow-hidden relative flex flex-col">
                                {/* Header */}
                                <div className="bg-[#006D77] px-6 pb-6 pt-16 text-white rounded-b-4xl shadow-lg relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <ChevronLeft size={24} />
                                        </div>
                                        <div className="px-3 py-1 bg-white/20 rounded-full flex items-center gap-1.5 text-xs font-medium backdrop-blur-sm">
                                            <Timer size={12} />
                                            <span>14:21</span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-1">Provider Offers</h2>
                                    <p className="text-white/80 text-sm">2 offers available</p>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 no-scrollbar">
                                    {/* Offer Card 1 - nasher */}
                                    <div className="bg-white p-5 rounded-4xl shadow-sm border border-gray-100 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-3">
                                                <div className="w-12 h-12 rounded-2xl bg-[#009688] flex items-center justify-center text-white text-lg font-bold">n</div>
                                                <div>
                                                    <h3 className="font-bold text-[#0f172a] text-lg">nasher</h3>
                                                    <div className="flex items-center gap-1 text-xs font-semibold text-orange-500">
                                                        <Star size={12} fill="currentColor" />
                                                        <span>New (0 jobs)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-3xl font-black text-[#009688]">£20</span>
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                                                <Check size={10} strokeWidth={4} />
                                                £31 less
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6 uppercase tracking-wider">
                                            <Timer size={12} />
                                            Duration: 1h
                                        </div>
                                        <button className="w-full bg-[#009688] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#009688]/20 flex items-center justify-center gap-2 text-sm hover:scale-[1.02] transition-transform">
                                            <Check size={16} strokeWidth={3} />
                                            Select This Offer
                                        </button>
                                    </div>

                                    {/* Offer Card 2 - Provider */}
                                    <div className="bg-white p-5 rounded-4xl shadow-sm border border-gray-100 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-3">
                                                <div className="w-12 h-12 rounded-2xl bg-[#006D77] flex items-center justify-center text-white text-lg font-bold">P</div>
                                                <div>
                                                    <h3 className="font-bold text-[#0f172a] text-lg">Provider</h3>
                                                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                                        <div className="flex items-center gap-1 text-orange-500 font-bold">
                                                            <Star size={12} fill="currentColor" />
                                                            <span>4.8 (42 jobs)</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin size={12} />
                                                            <span>2.5 km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-3xl font-black text-[#009688]">£15</span>
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                                                <Check size={10} strokeWidth={4} />
                                                £36 less
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6 uppercase tracking-wider">
                                            <Timer size={12} />
                                            Duration: 1h
                                        </div>
                                        <button className="w-full bg-[#009688] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#009688]/20 flex items-center justify-center gap-2 text-sm hover:scale-[1.02] transition-transform">
                                            <Check size={16} strokeWidth={3} />
                                            Select This Offer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
};

const BenefitsGrid = () => {
    const benefits = [
        {
            icon: <Cpu className="w-10 h-10 text-[#006D77]" />,
            title: "Fair Prices, Guaranteed",
            desc: "Our AI analyzes market data to suggest fair prices. Customize to your budget, then receive competitive offers."
        },
        {
            icon: <Search className="w-10 h-10 text-[#006D77]" />,
            title: "Every Service You Need",
            desc: "From plumbing to painting, find verified professionals for any home service in one place."
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#006D77]" />,
            title: "Trust & Transparency",
            desc: "All providers are background-checked. Every job includes photo verification and secure payments."
        },
        {
            icon: <Smartphone className="w-10 h-10 text-[#006D77]" />,
            title: "Complete Visibility",
            desc: "Real-time updates, before/after photos, and in-app chat ensure your job is done right."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">Why Customers Love Nasgo</h2>
                    <p className="text-xl text-gray-500">The smarter way to handle your home needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((b, i) => (
                        <m.div
                            key={i}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006D77]/5 rounded-2xl flex items-center justify-center mb-6">
                                {b.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CustomerJourney = () => {
    const steps = [
        {
            title: "Choose Your Service",
            desc: "Browse 60+ categories from plumbing and electrical to cleaning and landscaping. Select what you need with a few taps.",
            icon: <Search className="text-[#E76F51]" />,
            visual: "App Service Grid"
        },
        {
            title: "Get Smart Pricing",
            desc: "Our AI instantly suggests a fair market price based on your requirements. Customize the price to fit your budget.",
            icon: <Zap className="text-[#E76F51]" />,
            visual: "AI Processing"
        },
        {
            title: "Compare Provider Offers",
            desc: "Verified professionals send you custom quotes. Review ratings, chat with them, and choose the best fit.",
            icon: <Smartphone className="text-[#E76F51]" />,
            visual: "Offer List"
        },
        {
            title: "Track Your Job Live",
            desc: "Provider uploads before photos, timer starts, you get real-time updates and verify with a completion code.",
            icon: <Clock className="text-[#E76F51]" />,
            visual: "Live Timeline"
        },
        {
            title: "Secure Payment & Review",
            desc: "Pay securely through the app once verified. Rate your provider to help others build a trusted community.",
            icon: <CreditCard className="text-[#E76F51]" />,
            visual: "Payment Success"
        }
    ];

    return (
        <section id="customer-journey" className="py-24 bg-[#264653] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-24">Your Journey to Perfect Service</h2>
                <div className="space-y-32">
                    {steps.map((step, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            <m.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="text-6xl font-black text-white/10 mb-6">{`0${i + 1}`}</div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold">{step.title}</h3>
                                </div>
                                <p className="text-xl text-white/70 leading-relaxed">{step.desc}</p>
                            </m.div>
                            <m.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 w-full flex justify-center"
                            >
                                <div className="w-full max-w-[350px] aspect-10/16 bg-white/5 rounded-[3rem] border border-white/10 p-6 flex items-center justify-center text-white/30 font-bold uppercase tracking-widest overflow-hidden relative">
                                    <div className="absolute inset-4 bg-white/5 rounded-4xl flex flex-col items-center justify-center p-8">
                                        <div className="w-full h-8 bg-white/10 rounded-full mb-8 animate-pulse" />
                                        <div className="w-3/4 h-32 bg-[#006D77]/20 rounded-2xl mb-8 flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <div className="space-y-4 w-full">
                                            <div className="w-full h-4 bg-white/10 rounded-full" />
                                            <div className="w-2/3 h-4 bg-white/10 rounded-full" />
                                            <div className="w-full h-12 bg-[#E76F51]/30 rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



const TrustAndSafety = () => {
    const pillars = [
        { icon: <ShieldCheck className="text-[#006D77]" />, title: "Verified Professionals", desc: "Background checks, identity, and insurance verification for everyone." },
        { icon: <CreditCard className="text-[#006D77]" />, title: "Secure Payments", desc: "Bank-level encryption. Payments held until you verify job completion." },
        { icon: <Camera className="text-[#006D77]" />, title: "Photo Proof", desc: "Mandatory before and after documentation for every job booked." },
        { icon: <Smartphone className="text-[#006D77]" />, title: "24/7 Support", desc: "Our dedicated safety team is always available via chat or phone." }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">Your Safety is Our Priority</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((p, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#006D77]/5 rounded-full flex items-center justify-center mb-6">
                                {p.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-3">{p.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "How does AI pricing work?", a: "Our AI engine analyzes thousands of local service job completions to determine current market rates for various tasks. This ensures you get a fair quote based on real-world data." },
        { q: "How do I know providers are trustworthy?", a: "Every provider on Nasgo goes through a multi-step verification process including background checks, identity confirmation, and professional certifications." },
        { q: "What if I'm not satisfied with the service?", a: "Payment is only released to the provider once you've confirmed the job is completed to your satisfaction through our app verification system." },
        { q: "How do payments work?", a: "When you choose an offer, your payment is held securely in escrow. It's only transferred to the provider after you verify the final photo proof and enter your completion code." },
        { q: "Is there a fee to use Nasgo?", a: "Searching and receiving quotes is free. We only charge a small platform fee when you successfully hire a provider through our system." },
        { q: "When will the app launch?", a: "Nasgo is currently in private beta. We are planning a full public launch in Q1 2026. Join our waitlist to get priority access." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-[#264653]">{faq.q}</span>
                                {openIndex === i ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <m.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
                                            {faq.a}
                                        </div>
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

export default ServiceSeekersPage;
