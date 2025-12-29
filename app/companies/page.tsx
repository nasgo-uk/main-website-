"use client";

import {
    CheckCircle2, ChevronRight, BarChart3, Users, Zap, Shield, TrendingUp, Globe, Clock, MessageSquare, Briefcase, CreditCard, ChevronDown, Check,
    Package, Target, MapPin, Monitor, Calendar, ShieldCheck, XCircle, ArrowRight, Lock, Headset, Building2, Cpu, Mail, Smartphone
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { saveRegistration } from '../../lib/db';
import { motion, AnimatePresence } from 'framer-motion';
import CompanyRegistrationModal from '../../components/CompanyRegistrationModal';

const CompaniesPage: React.FC = () => {
    return (
        <div>
            <CompaniesHero />
            <ProblemsSolved />
            <DashboardPreview />
            <FeatureDeepDive />
            <OnboardingSteps />
            <PricingROI />
            <ComparisonSection />
            <CompanyFAQ />
            <FinalCompanyCTA />
        </div>
    );
};

const CompaniesHero = () => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center bg-nasgo-gradient text-white overflow-hidden py-24 px-6">
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-[95%] xl:max-w-[90%] mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006D77] text-xs font-bold tracking-widest uppercase mb-8">
                        <Building2 size={14} />
                        FOR SERVICE COMPANIES
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                        Scale Your Service <br />
                        <span className="text-[#E76F51]">Intelligent Operations</span>
                    </h1>

                    <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
                        Complete fleet management platform with job dispatch, inventory tracking, team monitoring, and real-time analytics. Everything you need to run a modern service company.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                                <Monitor size={20} />
                            </div>
                            <span className="font-semibold text-white/90 text-sm">Real-Time Dashboard</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                                <Users size={20} />
                            </div>
                            <span className="font-semibold text-white/90 text-sm">Fleet Management</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                                <Package size={20} />
                            </div>
                            <span className="font-semibold text-white/90 text-sm">Inventory Control</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                                <TrendingUp size={20} />
                            </div>
                            <span className="font-semibold text-white/90 text-sm">Revenue Intelligence</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsRegisterOpen(true)}
                            className="bg-coral-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#E76F51]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                        >
                            Register Now
                            <Building2 size={18} />
                        </button>
                        <button className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                            See Platform Preview
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative glass p-4 rounded-3xl border-white/20 shadow-2xl bg-white/5 backdrop-blur-xl">
                        {/* Mock Dashboard UI */}
                        <div className="w-full aspect-[4/3] bg-[#0f172a] rounded-2xl overflow-hidden text-white flex flex-col border border-white/10 scale-[1.02]">
                            <iframe
                                src="https://nasgohub-demo.vercel.app"
                                className="w-full h-full border-none bg-[#0f172a]"
                                title="NasGo Hub Demo"
                            />
                        </div>
                    </div>
                    {/* Floating Data Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl border-white/50 text-[#264653] w-48"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#006D77]/10 text-[#006D77] rounded-lg flex items-center justify-center">
                                <Package size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-gray-400">INVENTORY</div>
                                <div className="font-black">95% Stocked</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <CompanyRegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
        </section>
    );
};

const ProblemsSolved = () => {
    const problemPairs = [
        {
            prob: "Inefficient Dispatching",
            probDesc: "Spending hours on phone calls and miscommunication with technicians.",
            sol: "Intelligent Dispatch",
            solDesc: "Assign jobs via dashboard. Real-time status tracking for every fleet member.",
            icon: <Target />
        },
        {
            prob: "Inventory Leakage",
            probDesc: "Loss of tools and materials with no visibility into what techs are carrying.",
            sol: "Real-Time Tracking",
            solDesc: "Automated inventory management with photo verification for item usage.",
            icon: <Package />
        },
        {
            prob: "Zero Quality Control",
            probDesc: "No way to monitor customer interactions until a bad review arrives.",
            sol: "Chat Supervision",
            solDesc: "Monitor all technician-customer chats in real-time. Jump in when needed.",
            icon: <MessageSquare />
        },
        {
            prob: "Payment Friction",
            probDesc: "Chasing invoices and managing messy paper-based payment systems.",
            sol: "Instant Payouts",
            solDesc: "Secure digital payments. Withdraw company earnings within 24-48 hours.",
            icon: <CreditCard2Icon />
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold mb-6">Operations Made Simple</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">Stop juggling multiple disconnected tools. Manage your entire service lifecycle in one place.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {problemPairs.map((pair, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col bg-gray-50 rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                        >
                            <div className="p-8 border-b border-red-50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                    <XCircle size={80} className="text-red-500" />
                                </div>
                                <div className="flex items-center gap-3 mb-4 text-red-500 font-bold">
                                    <XCircle size={20} />
                                    <span>THE PROBLEM</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{pair.prob}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{pair.probDesc}</p>
                            </div>
                            <div className="p-8 bg-white flex-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                    {pair.icon}
                                </div>
                                <div className="flex items-center gap-3 mb-4 text-[#006D77] font-bold">
                                    <CheckCircle2 size={20} />
                                    <span>NASGO SOLUTION</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{pair.sol}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{pair.solDesc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DashboardPreview = () => (
    <section className="py-24 bg-[#264653] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-6">Your Company Command Center</h2>
                <p className="text-xl text-white/60">Professional dashboard designed for operational excellence.</p>
            </div>
            <div className="relative group">
                <div className="aspect-video w-full bg-[#1a3a45] rounded-[3rem] p-4 border border-white/10 shadow-3xl overflow-hidden relative">
                    <iframe
                        src="https://nasgohub-demo.vercel.app"
                        className="w-full h-full rounded-[2rem] bg-white border-none"
                        title="NasGo Hub Demo"
                    />

                </div>
                <div className="mt-12 flex justify-center">
                    <a
                        href="https://nasgohub-demo.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#E76F51] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-[#E76F51]/20 inline-block"
                    >
                        See Platform Preview
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const FeatureDeepDive = () => {
    const features = [
        {
            title: "Fleet Management",
            desc: "Add unlimited technicians to your company. Send secure invitations, track their real-time online status, and monitor performance ratings effortlessly.",
            icon: <Users className="text-[#006D77]" />,
            list: ["Unlimited fleet members", "Instant team invitations", "Real-time online status", "Performance tracking"],
            align: "left",
            image: "https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/FLEET.png"
        },
        {
            title: "Intelligent Dispatch",
            desc: "View all incoming job requests on an interactive map. See customer requirements and assign to the best-fit technician with a single click.",
            icon: <Target className="text-[#006D77]" />,
            list: ["Map-based job overview", "One-click assignment", "AI matching suggestions", "Automated tech notifications"],
            align: "right",
            image: "https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/MAP.png"
        },
        {
            title: "Inventory Control",
            desc: "A complete system to track tools and materials. Automatic stock deduction and photo-verified requests ensure nothing ever goes missing.",
            icon: <Package className="text-[#006D77]" />,
            list: ["Category management", "Stock level tracking", "Photo-verified usage", "Tech refill requests"],
            align: "left",
            image: "https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/Inventory%20png"
        },
        {
            title: "Chat Supervision",
            desc: "Maintain the highest standards by monitoring technician-customer conversations. Jump into any thread to assist your team or resolve issues.",
            icon: <MessageSquare className="text-[#006D77]" />,
            list: ["Real-time monitoring", "Conversation archives", "Multi-party support", "Dispute resolution"],
            align: "right",
            image: "https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/Inventory%20png"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-24">Everything You Need to Scale</h2>
                <div className="space-y-32">
                    {features.map((f, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${f.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: f.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="w-16 h-16 bg-[#006D77]/5 rounded-2xl flex items-center justify-center mb-8">
                                    {React.cloneElement(f.icon as React.ReactElement, { size: 32 } as any)}
                                </div>
                                <h3 className="text-3xl font-bold mb-6">{f.title}</h3>
                                <p className="text-xl text-gray-500 mb-8 leading-relaxed">{f.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {f.list.map(item => (
                                        <li key={item} className="flex items-center gap-3 font-semibold text-gray-600 text-sm">
                                            <CheckCircle2 size={18} className="text-[#006D77]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <div className="lg:w-1/2 w-full aspect-video bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-center relative overflow-hidden group shadow-2xl">
                                <img
                                    src={f.image}
                                    alt={`${f.title} Preview`}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OnboardingSteps = () => {
    const steps = [
        { num: "01", title: "Apply", desc: "Request your company account and provide business credentials.", icon: <FileTextIcon /> },
        { num: "02", title: "Configure", desc: "Set service areas, hours, and inventory categories.", icon: <SettingsIcon /> },
        { num: "03", title: "Invite", desc: "Add your technicians to the fleet via secure email links.", icon: <Mail /> },
        { num: "04", title: "Launch", desc: "Start receiving jobs and scaling your operations.", icon: <Zap /> }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-20">Get Started in 4 Simple Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 relative group"
                        >
                            <div className="text-6xl font-black text-gray-50 mb-6 absolute top-4 right-8 group-hover:text-[#006D77]/5 transition-colors">{step.num}</div>
                            <div className="w-14 h-14 bg-[#006D77]/5 text-[#006D77] rounded-xl flex items-center justify-center mb-8">
                                {React.cloneElement(step.icon as React.ReactElement, { size: 28 } as any)}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingROI = () => {
    const [jobs, setJobs] = useState(100);
    const avgValue = 200;
    const growth = 0.3;

    const currentRev = jobs * avgValue;
    const projectedRev = currentRev * (1 + growth);
    const annualSavings = 71400; // Hypothetical based on prompt example

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold mb-6">ROI That Makes Sense</h2>
                    <p className="text-xl text-gray-500">Only pay when you earn. No setup fees, no feature limits.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-nasgo-gradient p-10 rounded-[3rem] text-white shadow-2xl space-y-12">
                        <h3 className="text-2xl font-bold">Revenue Growth Projection</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between font-bold">
                                <span>Monthly Jobs</span>
                                <span>{jobs}</span>
                            </div>
                            <input
                                type="range" min="10" max="500" value={jobs}
                                onChange={(e) => setJobs(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-full appearance-none accent-[#E76F51]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-xs font-bold text-white/40 uppercase mb-2">Current Revenue</div>
                                <div className="text-3xl font-black">£{currentRev.toLocaleString()}</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#2A9D8F] uppercase mb-2">Projected Growth</div>
                                <div className="text-3xl font-black">£{projectedRev.toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="p-6 bg-white/10 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#2A9D8F] rounded-full flex items-center justify-center">
                                <Check size={24} />
                            </div>
                            <div>
                                <div className="text-lg font-bold">£{annualSavings.toLocaleString()} Annual Savings</div>
                                <p className="text-xs text-white/50">Compared to traditional manual management</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 pt-4">
                        <h3 className="text-3xl font-bold">Simple Platform Commission</h3>
                        <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 relative overflow-hidden">
                            <div className="text-4xl font-black text-[#006D77] mb-2">10%</div>
                            <p className="text-gray-500 font-medium">Flat platform fee. No hidden costs.</p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Unlimited fleet members", "Full inventory access", "24/7 priority support",
                                    "Analytics & reporting", "Instant job dispatch", "Zero setup fees"
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                                        <Check size={16} className="text-[#2A9D8F]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 border border-[#264653]/10 rounded-[2.5rem] bg-white flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#264653] text-white rounded-xl flex items-center justify-center">
                                    <Headset />
                                </div>
                                <div>
                                    <h4 className="font-bold">Need a custom plan?</h4>
                                    <p className="text-sm text-gray-500">For fleets over 50 technicians</p>
                                </div>
                            </div>
                            <button className="text-[#264653] font-bold border-b-2 border-[#264653] hover:text-[#006D77] hover:border-[#006D77] transition-all">
                                Contact Enterprise
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ComparisonSection = () => (
    <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-20">Why Companies Choose Nasgo</h2>
            <div className="overflow-x-auto rounded-[3rem] border border-gray-100 shadow-xl bg-white">
                <table className="w-full text-left min-w-[800px]">
                    <thead>
                        <tr className="bg-[#264653] text-white">
                            <th className="p-8 font-bold text-lg">Operational Feature</th>
                            <th className="p-8 font-bold text-lg opacity-60">Traditional Methods</th>
                            <th className="p-8 font-bold text-lg opacity-60">Other Platforms</th>
                            <th className="p-8 font-bold text-lg bg-[#006D77]">NASGO AGENCY <CheckCircle2 size={20} className="inline ml-2" /></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[
                            { f: "Setup Cost", t: "£0", o: "£500+", n: "£0" },
                            { f: "Monthly Fee", t: "£0", o: "£50-200", n: "£0" },
                            { f: "Fleet Management", t: "Manual", o: "Basic", n: <span className="flex items-center gap-2">Advanced <CheckCircle2 size={16} /></span> },
                            { f: "Inventory Tracking", t: "Paper-based", o: "None", n: <span className="flex items-center gap-2">Full System <CheckCircle2 size={16} /></span> },
                            { f: "Chat Monitoring", t: "None", o: "Limited", n: <span className="flex items-center gap-2">Complete <CheckCircle2 size={16} /></span> },
                            { f: "Payment Speed", t: "30-60 days", o: "3-7 days", n: <span className="flex items-center gap-2">24-48 Hours <CheckCircle2 size={16} /></span> },
                            { f: "Platform Fee", t: "N/A", o: "15-30%", n: "10%" }
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="p-8 font-bold text-[#264653]">{row.f}</td>
                                <td className="p-8 text-gray-400 font-medium">{row.t}</td>
                                <td className="p-8 text-gray-400 font-medium">{row.o}</td>
                                <td className="p-8 text-[#006D77] font-black bg-[#006D77]/5">{row.n}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

const CompanyFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: "Can I use my existing team of technicians?", a: "Absolutely. Nasgo is designed to empower your existing workforce. Simply invite them via email, and they will receive secure credentials to use the Nasgo Provider App as part of your fleet." },
        { q: "Is there a limit on fleet members?", a: "No. You can add unlimited technicians to your company profile with no per-user or monthly fees. Our 10% platform fee remains constant regardless of your team size." },
        { q: "How does the inventory system protect my business?", a: "Every item used by a technician is recorded. Techs must upload photo proof when requesting inventory or using expensive materials on-site, providing you with a complete audit trail." },
        { q: "When can my company withdraw earnings?", a: "Funds from completed jobs are typically cleared and available for withdrawal within 24 to 48 hours. You can withdraw your company net directly to your business bank account." },
        { q: "Do we have to handle customer support ourselves?", a: "While you manage your jobs and fleet, Nasgo provides platform-level support and dispute resolution to protect both the company and the customer." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">Company FAQs</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-white transition-colors"
                            >
                                <span className="font-bold text-xl text-[#264653]">{faq.q}</span>
                                {openIndex === i ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-gray-500 text-lg leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CustomDropdown = ({
    label,
    value,
    options,
    onChange
}: {
    label: string,
    value: string,
    options: string[],
    onChange: (val: string) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="space-y-2 relative" ref={dropdownRef}>
            <label className="text-xs font-bold text-white tracking-wider">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-[#5D6D7E]/50 border border-white/30 rounded-xl px-4 py-3 text-white flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition-all hover:bg-[#5D6D7E]/70 shadow-inner"
            >
                <span className="font-bold text-white">{value}</span>
                <ChevronDown className={`transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`} size={16} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 right-0 top-full mt-2 z-[60] bg-[#264653] rounded-xl overflow-hidden border border-white/20 shadow-2xl py-2"
                    >
                        {options.map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left text-sm font-bold transition-colors hover:bg-[#006D77] ${value === opt ? 'bg-[#006D77] text-white' : 'text-white/80'
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FinalCompanyCTA = () => {
    const [submitted, setSubmitted] = useState(false);
    const [fleetOpen, setFleetOpen] = useState(false);
    const [fleetSize, setFleetSize] = useState("1-10 techs");
    const fleetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fleetRef.current && !fleetRef.current.contains(event.target as Node)) {
                setFleetOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section className="py-24 bg-[#F8F9FA] px-6">
            <div className="max-w-[95%] xl:max-w-[90%] mx-auto bg-gradient-to-br from-[#1A8993] to-[#006D77] rounded-[3rem] shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#264653]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight"
                        >
                            Ready to Modernize <br />Your Operations?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg lg:text-xl text-teal-50/90 leading-relaxed max-w-lg"
                        >
                            See how Nasgo can help you scale your service business with intelligent fleet management and real-time business intelligence.
                        </motion.p>
                        <ul className="space-y-5 mt-4">
                            {[
                                "30-minute personalized walkthrough",
                                "Custom ROI projection",
                                "Dedicated onboarding support"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + (i * 0.2) }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-sm">
                                        <svg className="w-5 h-5 text-[#2A9D8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white font-medium text-lg">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-full lg:w-5/12"
                    >
                        <div className="p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group bg-white/10 backdrop-blur-xl border border-white/20">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                            {!submitted ? (
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const companyInput = form.querySelector('#company') as HTMLInputElement;
                                    const emailInput = form.querySelector('#email') as HTMLInputElement;

                                    if (companyInput.value && emailInput.value) {
                                        await saveRegistration({
                                            type: 'demo_booking',
                                            sourcePage: 'companies_page_cta',
                                            companyName: companyInput.value,
                                            email: emailInput.value,
                                            fleetSize: fleetSize
                                        });
                                        setSubmitted(true);
                                    }
                                }} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="relative group">
                                            <input
                                                className="block px-6 pb-3 pt-6 w-full text-white bg-slate-800/40 border border-white/20 appearance-none focus:outline-none focus:ring-2 focus:ring-[#006D77] focus:border-transparent peer rounded-[2rem] transition-all placeholder-transparent"
                                                id="company"
                                                placeholder=" "
                                                type="text"
                                                required
                                            />
                                            <label
                                                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text peer-focus:text-teal-200"
                                                htmlFor="company"
                                            >
                                                Company Name
                                            </label>
                                        </div>
                                        <div className="relative" ref={fleetRef}>
                                            <button
                                                type="button"
                                                onClick={() => setFleetOpen(!fleetOpen)}
                                                className="block w-full text-left px-6 pb-2.5 pt-5 text-white bg-slate-800/40 border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#006D77] relative rounded-t-[2rem] rounded-b-none transition-colors"
                                            >
                                                <span className="block text-sm text-teal-200 transform scale-75 origin-[0] absolute top-4 left-6">Fleet Size</span>
                                                <span className="block mt-4">{fleetSize}</span>
                                                <div className="absolute right-6 top-1/2 mt-2 -translate-y-1/2 pointer-events-none text-white/70">
                                                    <ChevronDown size={20} className={`transition-transform duration-300 ${fleetOpen ? 'rotate-180' : ''}`} />
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {fleetOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        className="absolute left-0 right-0 top-full z-[60] bg-[#264653] rounded-b-[2rem] overflow-hidden border-x border-b border-white/20 shadow-2xl py-2 max-h-60 overflow-y-auto"
                                                    >
                                                        {["1-10 techs", "11-50 techs", "51-200 techs", "200+ techs"].map((opt) => (
                                                            <button
                                                                key={opt}
                                                                type="button"
                                                                onClick={() => {
                                                                    setFleetSize(opt);
                                                                    setFleetOpen(false);
                                                                }}
                                                                className={`w-full px-6 py-3 text-left text-sm font-bold transition-colors hover:bg-[#006D77] ${fleetSize === opt ? 'bg-[#006D77] text-white' : 'text-white/80'}`}
                                                            >
                                                                {opt}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            className="block px-6 pb-3 pt-6 w-full text-white bg-slate-800/40 border border-white/20 appearance-none focus:outline-none focus:ring-2 focus:ring-[#006D77] focus:border-transparent peer rounded-[2rem] transition-all placeholder-transparent"
                                            id="email"
                                            placeholder=" "
                                            type="email"
                                            required
                                        />
                                        <label
                                            className="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text peer-focus:text-teal-200"
                                            htmlFor="email"
                                        >
                                            Your Email
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 bg-[#E76F51] hover:bg-[#d66042] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform active:scale-[0.98] transition-all duration-200 text-lg tracking-wide mt-4"
                                    >
                                        Book My Demo
                                    </button>
                                    <p className="text-xs text-center text-teal-100/60 mt-4">
                                        By submitting, you agree to our Terms and Privacy Policy.
                                    </p>
                                </form>
                            ) : (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 relative z-10">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 size={40} className="text-[#006D77]" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-white">Demo Booked!</h3>
                                    <p className="text-white/70">Check your email for the calendar invitation and preparation materials. We'll speak soon!</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Internal Helper Components
const CreditCard2Icon = () => <CreditCard size={32} />;
const FileTextIcon = () => <Briefcase size={28} />;
const SettingsIcon = () => <Monitor size={28} />;

export default CompaniesPage;
