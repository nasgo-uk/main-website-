"use client";

import React, { useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
    Banknote,
    Bell,
    Check,
    ChevronDown,
    Clock,
    Layout,
    MessageSquare,
    Star,
    TrendingUp,
    UserCheck,
    Zap,
    Smartphone as SmartphoneIcon,
    FileText,
    Shield,
    CreditCard as BankIcon,
    User,
    XCircle,
    Award,
    Headset,
    Trophy,
    Settings,
    Power,
    Coins,
    Briefcase,
    Brush,
    MapPin,
    Signal,
    Wifi,
    Battery
} from 'lucide-react';
import FinalCTA from '../../components/FinalCTA';
import WaitlistModal from '../../components/WaitlistModal';

const ProvidersPage: React.FC = () => {
    return (
        <div>
            <ProvidersHero />
            <EarningsCalculator />
            <ProviderBenefits />
            <ProviderJourney />
            <PricingTransparency />
            <RequirementsSection />
            <AppShowcase />
            <FoundingBenefits />
            <FAQSection />
            <FinalCTA />
        </div>
    );
};

const ProvidersHero = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    const scrollToSuccess = () => {
        const element = document.getElementById('success-path');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center bg-nasgo-gradient text-white overflow-hidden py-24 px-6">
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <m.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity, delay: i }}
                        className="absolute text-white/10"
                        style={{
                            top: `${(i * 20) % 80}%`,
                            left: `${(i * 30) % 90}%`
                        }}
                    >
                        <Banknote size={48 + i * 20} />
                    </m.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <m.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[#E76F51] text-xs font-bold tracking-widest uppercase mb-8 shadow-lg shadow-[#E76F51]/30"
                    >
                        FOR SERVICE PROVIDERS
                    </m.div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
                        Turn Your Skills <br />
                        <span className="text-[#E76F51]">Into Income</span>
                    </h1>

                    <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
                        Join Nasgo&apos;s network of verified professionals. Receive job requests instantly, set your own rates, and get paid weekly. No middleman, no hassle.
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-12 max-w-md">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">£5,000+</span>
                            <span className="text-sm text-white/60 font-medium">Monthly potential</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">24-48h</span>
                            <span className="text-sm text-white/60 font-medium">Payout speed</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="bg-[#E76F51] hover:bg-[#d65f42] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#E76F51]/40 hover:scale-105 active:scale-95 transition-all"
                        >
                            Start Earning Now
                        </button>
                        <button
                            onClick={scrollToSuccess}
                            className="border-2 border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all"
                        >
                            See How It Works
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-white/60 font-medium">
                        <Check size={20} className="text-[#2A9D8F]" />
                        <span>Join 500+ providers already signed up</span>
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-[320px] aspect-10/19">
                        <div
                            className="absolute inset-0 bg-[#2b2b2b] rounded-[3rem] p-[8px] shadow-2xl overflow-hidden z-10 border-[6px] border-[#4a4a4a] ring-1 ring-black/50"
                        >
                            {/* Dynamic Island & Status Bar */}
                            <div className="absolute top-0 left-0 right-0 h-14 z-50 px-7 pt-3.5 flex justify-between items-start text-white">
                                <span className="text-[13px] font-semibold pl-2">12:37</span>
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-center">
                                    <div className="w-20 h-full flex gap-3 justify-end items-center pr-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/50"></div>
                                    </div>
                                </div>
                                <div className="flex gap-1.5 items-center pr-2">
                                    <Signal size={14} className="fill-white" />
                                    <Wifi size={14} />
                                    <Battery size={16} className="fill-white" />
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative flex flex-col pt-14 bg-[#050505] text-white">
                                {/* Header */}
                                <div className="px-6 pt-2 pb-6 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#FFD166] flex items-center justify-center border-2 border-[#00df9a]">
                                            <div className="w-6 h-6 rounded-full bg-[#E76F51] opacity-80" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-medium">Welcome back,</div>
                                            <div className="font-bold text-lg leading-tight">Nasher</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center">
                                            <Bell size={16} className="text-gray-400" />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center">
                                            <Settings size={16} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto px-6 pb-8 no-scrollbar space-y-6">

                                    {/* Status Card */}
                                    <div className="bg-[#0B1120] rounded-4xl border border-[#00df9a] p-1 relative overflow-hidden">
                                        <div className="bg-[#00df9a]/10 rounded-[1.8rem] p-5 flex justify-between items-center">
                                            <div>
                                                <div className="text-[10px] font-bold text-[#00df9a] tracking-wider mb-1">SYSTEM ONLINE</div>
                                                <h3 className="text-xl font-bold">Ready for Jobs</h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-[#00df9a] flex items-center justify-center shadow-[0_0_20px_rgba(0,223,154,0.4)]">
                                                <Power size={20} className="text-[#0B1120]" strokeWidth={3} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Earnings Card */}
                                    <div className="bg-[#1e293b] rounded-[2.5rem] p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-[#00df9a]"></div>
                                            <span className="text-xs font-bold text-gray-400 tracking-wide">TODAY&apos;S EARNINGS</span>
                                        </div>
                                        <div className="flex justify-between items-end mb-8">
                                            <div className="text-5xl font-bold tracking-tight">£190.0</div>
                                            <div className="flex gap-1 items-end h-8 pb-1">
                                                {[40, 70, 50, 90, 60].map((h, i) => (
                                                    <div key={i} className="w-1.5 bg-[#264653] rounded-t-full" style={{ height: `${h}%` }}>
                                                        {i === 3 && <div className="w-full h-full bg-[#00df9a] rounded-t-full"></div>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-[#0B1120] rounded-2xl p-3 flex flex-col justify-center items-center">
                                                <div className="text-[9px] text-gray-500 font-bold mb-1">JOBS</div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-lg font-bold">2</span>
                                                    <Briefcase size={10} className="text-[#3b82f6]" />
                                                </div>
                                            </div>
                                            <div className="bg-[#0B1120] rounded-2xl p-3 flex flex-col justify-center items-center">
                                                <div className="text-[9px] text-gray-500 font-bold mb-1">TIPS</div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-lg font-bold">£0</span>
                                                    <Coins size={10} className="text-[#fbbf24]" />
                                                </div>
                                            </div>
                                            <div className="bg-[#0B1120] rounded-2xl p-3 flex flex-col justify-center items-center">
                                                <div className="text-[9px] text-gray-500 font-bold mb-1">RATING</div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-lg font-bold">0.0</span>
                                                    <Star size={10} className="text-[#a855f7]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Today's Jobs */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="font-bold text-lg">Today&apos;s Jobs</div>
                                            <span className="px-3 py-1 bg-[#264653] rounded-full text-[10px] text-gray-300">2 Pending</span>
                                        </div>
                                        <div className="bg-[#1e293b] rounded-4xl overflow-hidden">
                                            <div className="p-4 flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-[#00df9a]/10 flex items-center justify-center">
                                                        <Brush size={18} className="text-[#00df9a]" />
                                                    </div>
                                                    <span className="font-bold">Cleaning</span>
                                                </div>
                                                <span className="px-3 py-1 bg-[#334155] rounded-full text-[10px] font-bold text-[#60a5fa]">Tomorrow</span>
                                            </div>
                                            <div className="h-32 bg-[#334155] relative flex items-center justify-center">
                                                {/* Mock Map */}
                                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-500 to-[#1e293b]"></div>
                                                <div className="w-20 h-20 rounded-full bg-[#00df9a]/20 flex items-center justify-center animate-pulse z-10">
                                                    <MapPin size={32} className="text-[#00df9a] fill-[#00df9a]/20" />
                                                </div>
                                                <div className="absolute bottom-4 left-4 font-bold text-sm">After Party Clean</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Home Indicator */}
                                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-20" />
                            </div>
                        </div>
                    </div>
                    {/* Visual Decorative Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#006D77] rounded-full blur-[80px] -z-10 opacity-30" />
                </m.div>
            </div>
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </section>
    );
};

const EarningsCalculator = () => {
    const [jobs, setJobs] = useState(10);
    const [avgPrice, setAvgPrice] = useState(150);

    const weekly = useMemo(() => jobs * avgPrice * 0.9, [jobs, avgPrice]);
    const monthly = useMemo(() => weekly * 4.33, [weekly]);
    const yearly = useMemo(() => weekly * 52, [weekly]);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">How Much Can You Earn?</h2>
                    <p className="text-xl text-gray-500">Calculate your potential income with Nasgo&apos;s 10% platform fee.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="glass p-10 rounded-[3rem] border-gray-100 shadow-xl space-y-12">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <label className="text-lg font-bold text-gray-700">Jobs Per Week</label>
                                <span className="text-2xl font-black text-[#006D77]">{jobs} jobs</span>
                            </div>
                            <input
                                type="range" min="1" max="25" value={jobs}
                                onChange={(e) => setJobs(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#006D77]"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <label className="text-lg font-bold text-gray-700">Average Job Price</label>
                                <span className="text-2xl font-black text-[#006D77]">£{avgPrice}</span>
                            </div>
                            <input
                                type="range" min="50" max="1000" step="50" value={avgPrice}
                                onChange={(e) => setAvgPrice(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#006D77]"
                            />
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3 text-[#2A9D8F] font-bold">
                                <Check size={20} />
                                <span>Nasgo fee is only 10%</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-nasgo-gradient p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                            <TrendingUp className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform" />
                            <div className="text-white/60 font-bold uppercase tracking-widest text-sm mb-4">Estimated Monthly Earnings</div>
                            <div className="text-6xl md:text-7xl font-black mb-4">£{Math.round(monthly).toLocaleString()}</div>
                            <div className="text-white/70 font-medium">After all platform fees are deducted</div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                <div className="text-xs font-bold text-gray-400 uppercase mb-2">Weekly Income</div>
                                <div className="text-3xl font-black text-[#264653]">£{Math.round(weekly).toLocaleString()}</div>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                <div className="text-xs font-bold text-gray-400 uppercase mb-2">Yearly Potential</div>
                                <div className="text-3xl font-black text-[#264653]">£{Math.round(yearly).toLocaleString()}</div>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-[#E76F51] text-white rounded-3xl font-black text-xl hover:scale-[1.02] transition-all shadow-xl shadow-[#E76F51]/20">
                            Start Earning This Much
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProviderBenefits = () => {
    const benefits = [
        { icon: <TrendingUp />, title: "Set Your Own Rates", desc: "Customers send their budget, but YOU decide your price. Send competitive offers and negotiate freely." },
        { icon: <Bell />, title: "Instant Notifications", desc: "Get instant push notifications for jobs in your area. Be the first to respond and win more work." },
        { icon: <Banknote />, title: "Weekly Payouts", desc: "Get paid within 24-48 hours of job completion. Withdraw your earnings reliably every week." },
        { icon: <Zap />, title: "No Hidden Fees", desc: "Simple 10% platform fee, no hidden charges. No subscriptions, no listing fees, no lead fees." },
        { icon: <Star />, title: "Build Your Reputation", desc: "Great ratings lead to more jobs and higher prices. Your founding provider badge gives you a head start." },
        { icon: <MessageSquare />, title: "Full Support", desc: "24/7 dedicated provider support, dispute resolution, and secure payment protection." }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">Everything You Need to Succeed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <m.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-[#006D77]/10 text-[#006D77] rounded-2xl flex items-center justify-center mb-8">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {React.cloneElement(b.icon as React.ReactElement, { size: 32 } as any)}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{b.desc}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProviderJourney = () => {
    const steps = [
        {
            title: "Apply in Minutes",
            desc: "Download the app, upload your ID and certifications, and get approved within 24-48 hours.",
            icon: <FileText size={32} className="text-[#E76F51]" />
        },
        {
            title: "Set Your Profile",
            desc: "Select your service categories, set your coverage area, and determine your working hours.",
            icon: <Settings size={32} className="text-[#E76F51]" />
        },
        {
            title: "Get Job Requests",
            desc: "Receive instant notifications for local jobs. View budgets and send your custom price offers.",
            icon: <Bell size={32} className="text-[#E76F51]" />
        },
        {
            title: "Work and Earn",
            desc: "Complete jobs, upload photo proof, and receive payment directly into your bank account.",
            icon: <Banknote size={32} className="text-[#E76F51]" />
        }
    ];

    return (
        <section id="success-path" className="py-24 bg-[#264653] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-24">Your Path to Success</h2>
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
                                <div className="w-full max-w-[300px] aspect-9/18 bg-white/5 rounded-[3rem] border border-white/10 p-4 flex items-center justify-center text-white/30 font-bold uppercase tracking-widest overflow-hidden relative shadow-2xl">
                                    <div className="absolute inset-3 bg-[#0f172a] rounded-[2.5rem] flex flex-col pt-10 px-4 pb-4 overflow-hidden">
                                        {/* Phone Top Bar */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />

                                        {/* Abstract UI Content */}
                                        <div className="w-full h-full flex flex-col">
                                            {/* Header Area */}
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="w-8 h-8 rounded-full bg-white/10" />
                                                <div className="w-20 h-4 bg-white/10 rounded-full" />
                                            </div>

                                            {/* Main Card */}
                                            <div className="w-full bg-white/5 rounded-2xl p-4 mb-4 flex-1 flex flex-col items-center justify-center relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-[#E76F51]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="w-16 h-16 bg-[#E76F51]/20 rounded-full flex items-center justify-center mb-4 text-[#E76F51] animate-pulse">
                                                    {step.icon}
                                                </div>
                                                <div className="w-3/4 h-3 bg-white/10 rounded-full mb-2" />
                                                <div className="w-1/2 h-3 bg-white/10 rounded-full" />
                                            </div>

                                            {/* List Items */}
                                            <div className="space-y-3">
                                                {[1, 2, 3].map((_, idx) => (
                                                    <div key={idx} className="w-full h-12 bg-white/5 rounded-xl flex items-center px-3 gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-white/10" />
                                                        <div className="flex-1 space-y-1">
                                                            <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                                            <div className="w-1/3 h-2 bg-white/5 rounded-full" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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

const PricingTransparency = () => (
    <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-6">Simple, Fair Pricing</h2>
                <p className="text-xl text-gray-500">No hidden fees. Keep 90% of what you earn.</p>
            </div>

            <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                    <div className="space-y-2">
                        <div className="text-sm font-bold text-gray-400 uppercase">Customer Pays</div>
                        <div className="text-4xl font-black">£200</div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
                            <div className="h-full bg-[#006D77] w-[90%]" />
                            <div className="h-full bg-[#E76F51] w-[10%]" />
                        </div>
                        <div className="text-sm font-bold text-gray-400">10% Platform Fee</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm font-bold text-[#2A9D8F] uppercase">You Keep</div>
                        <div className="text-4xl font-black text-[#2A9D8F]">£180</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16 pt-16 border-t border-gray-200">
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-6">What&apos;s Included</h4>
                        {[
                            "Secure Payment Processing", "Customer Matching AI", "In-app Chat & Calls",
                            "Dispute Resolution", "Marketing to Thousands", "24/7 Provider Support"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-3 font-medium text-gray-600">
                                <Check size={18} className="text-[#006D77]" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-6 text-red-500">No Hidden Costs</h4>
                        {[
                            "No Subscription Fees", "No Listing Fees", "No Lead Generation Fees",
                            "No Withdrawal Fees", "No Cancellation Penalties", "No Hidden Charges"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-3 font-medium text-gray-400">
                                <XCircle size={18} className="text-red-400" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const RequirementsSection = () => {
    const reqList = [
        { icon: <SmartphoneIcon className="text-[#006D77]" />, title: "Smartphone (iOS or Android)", desc: "Essential for receiving jobs, navigating, and photo verification." },
        { icon: <UserCheck className="text-[#006D77]" />, title: "Photo ID", desc: "Valid UK Government-issued identification for identity verification." },
        { icon: <FileText className="text-[#006D77]" />, title: "Proof of Address", desc: "Recent utility bill or official document confirming your residence." },
        { icon: <Shield className="text-[#006D77]" />, title: "DBS Check", desc: "Standard Disclosure and Barring Service check for security clearance." },
        { icon: <FileText className="text-[#006D77]" />, title: "National Insurance", desc: "Proof of your right to work and tax registration in the UK." },
        { icon: <BankIcon className="text-[#006D77]" />, title: "Bank Details", desc: "Valid UK bank account for receiving your weekly earnings." },
        { icon: <User className="text-[#006D77]" />, title: "Profile Photo", desc: "A clear, professional photo to build trust with your customers." }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl font-extrabold mb-8">What You Need to Start</h2>
                    <p className="text-xl text-gray-500 mb-12">To maintain our high standards of trust and safety, we require the following items from all providers.</p>

                    <div className="space-y-6">
                        {reqList.map((req, i) => (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-[#006D77]/5 rounded-xl flex items-center justify-center shrink-0">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {React.cloneElement(req.icon as React.ReactElement, { size: 24 } as any)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{req.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{req.desc}</p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-start">
                    <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl sticky top-24">
                        <h3 className="text-2xl font-bold mb-10">Application Timeline</h3>
                        <div className="space-y-12 relative">
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100" />
                            {[
                                { t: "Submit Application", d: "Fill form & upload docs (5 mins)", s: "completed" },
                                { t: "Verification", d: "We verify ID & background check (24-48h)", s: "pending" },
                                { t: "Profile Setup", d: "Add services, area & photos (10 mins)", s: "upcoming" },
                                { t: "Start Earning", d: "Receive and accept your first job!", s: "upcoming" }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-10 relative">
                                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold z-10 transition-colors ${step.s === 'completed' ? 'bg-[#006D77] border-[#006D77] text-white' :
                                        step.s === 'pending' ? 'bg-white border-[#E76F51] text-[#E76F51]' : 'bg-white border-gray-100 text-gray-300'
                                        }`}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{step.t}</h4>
                                        <p className="text-gray-400 text-sm">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-12 py-5 bg-[#E76F51] text-white rounded-3xl font-black text-xl shadow-xl shadow-[#E76F51]/20">
                            Start Application
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AppShowcase = () => (
    <section className="py-24 bg-[#264653] text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4">Your Command Center</h2>
                <p className="text-xl text-white/60">Everything you need to manage your business in one app.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { t: "Earning Dashboard", d: "Track daily, weekly, and monthly income with detailed breakdowns.", i: <TrendingUp /> },
                    { t: "Job Board", d: "View and filter all local job requests instantly based on your preferences.", i: <Layout /> },
                    { t: "Smart Scheduler", d: "Manage your bookings and availability with an integrated calendar.", i: <Clock /> }
                ].map((f, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-[#006D77] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#006D77]/20">
                            {f.i}
                        </div>
                        <h4 className="text-xl font-bold mb-4">{f.t}</h4>
                        <p className="text-white/60 leading-relaxed">{f.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FoundingBenefits = () => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 bg-nasgo-gradient rounded-[4rem] p-16 text-white text-center relative overflow-hidden">
            <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-64 h-64 border-2 border-white/10 rounded-full"
            />
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Join as a Founding Provider</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { t: "Founding Badge", d: "Exclusive profile mark for early adopters.", i: <Award /> },
                    { t: "Zero Competition", d: "Build your reviews before the crowd arrives.", i: <TrendingUp /> },
                    { t: "Priority Support", d: "Direct access to our founding team.", i: <Headset /> },
                    { t: "Launch Bonuses", d: "Special earnings boosts for early adopters.", i: <Trophy /> }
                ].map((b, i) => (
                    <div key={i} className="p-8 bg-white/10 rounded-3xl border border-white/10">
                        <div className="text-[#E76F51] mb-4 flex justify-center">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {React.cloneElement(b.i as React.ReactElement, { size: 32 } as any)}
                        </div>
                        <h4 className="font-bold mb-2">{b.t}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{b.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "How much does it cost to join Nasgo?", a: "It's completely free to join. There are no registration fees, monthly subscriptions, or fees for leads. We only take a 10% commission on jobs you successfully complete through the platform." },
        { q: "How do I get paid?", a: "Payments are processed securely through the app. Once a customer verifies job completion, the funds are released. You can withdraw your earnings to your bank account weekly or monthly, with payouts typically arriving in 24-48 hours." },
        { q: "Can I set my own prices?", a: "Yes. Customers provide their estimated budget, but you have full control over the offer you send. You can bid higher or lower based on the specific job requirements and your professional expertise." },
        { q: "What happens if a customer cancels?", a: "We have a fair cancellation policy. If a customer cancels a job after you've already started or within a specific timeframe of the scheduled start, you may be eligible for partial compensation." },
        { q: "Do I need my own insurance?", a: "While we provide payment protection and dispute resolution, we strongly recommend that all providers maintain their own public liability insurance as per UK industry standards." },
        { q: "How long does the approval process take?", a: "Most applications are reviewed and approved within 24 to 48 hours, provided all documentation (ID and certifications) is clear and valid." }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">Provider FAQs</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-xl text-[#264653]">{faq.q}</span>
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
                                        <div className="p-8 pt-0 text-gray-500 text-lg leading-relaxed border-t border-gray-50">
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

export default ProvidersPage;
