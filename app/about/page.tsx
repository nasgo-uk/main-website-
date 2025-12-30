"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
    ArrowDown,
    Brain,
    ShieldCheck,
    Eye,
    Cpu,
    Target,
    Camera,
    Monitor,
    Heart,
    Zap,
    Users,
    Globe,
    TrendingUp,
    CheckCircle2,
    ChevronDown,
    Mail,
    Linkedin,
    Check,
    Star,
    MapPin,
    Briefcase,
    Clock,
    Rocket
} from 'lucide-react';
import FinalCTA from '../../components/FinalCTA';

const AboutPage: React.FC = () => {
    return (
        <div className="-mt-24">
            <AboutHero />
            <TheProblemStory />
            <TheSolutionOverview />
            <TechnologyDeepDive />
            <OurVision />
            <WhyJoinNow />
            <CoreValues />
            <TheTeam />
            <Roadmap />
            <AboutFAQ />
            <FinalCTA />
        </div>
    );
};

const AboutHero = () => (
    <section className="relative min-h-screen flex items-center justify-center bg-nasgo-gradient text-white overflow-hidden py-20 px-6 text-center">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E76F51] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center h-full">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-8"
            >
                ABOUT NASGO
            </m.div>
            <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
            >
                Transforming Home Services <br />
                <span className="text-white/80">with Intelligence</span>
            </m.h1>
            <m.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
                We believe getting home services should be transparent, fair, and effortless.
                That's why we're building an AI-powered platform that connects people with the
                right professionals at the right price.
            </m.p>
        </div>

        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-2 text-white/50"
        >
            <span className="text-sm font-bold uppercase tracking-widest">Scroll to learn our story</span>
            <ArrowDown size={24} />
        </m.div>
    </section>
);

const TheProblemStory = () => (
    <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
            <m.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold mb-12 text-[#264653]"
            >
                Why We Built Nasgo
            </m.h2>

            <div className="space-y-12 text-lg md:text-xl text-gray-500 leading-relaxed text-left">
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The home services industry hasn't changed in decades. It's still built on phone calls,
                    unclear pricing, and hoping you find someone trustworthy.
                </m.p>

                <div className="grid grid-cols-1 gap-8">
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 border-l-4 border-[#006D77] bg-gray-50 rounded-r-3xl"
                    >
                        <p className="italic">
                            "You need a plumber. You search online, see wildly different prices with no explanation.
                            You call five people, three don't answer. One quotes £150, another £400 for the same job.
                            Who's right? Who's reliable? You have no idea."
                        </p>
                        <div className="mt-4 font-bold text-[#006D77] text-sm uppercase">— THE CUSTOMER'S STRUGGLE</div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 border-l-4 border-[#E76F51] bg-gray-50 rounded-r-3xl"
                    >
                        <p className="italic">
                            "You're a skilled electrician. You spend hours calling potential customers, only to lose
                            jobs to competitors who undercut you unfairly. You work hard but spend too much time
                            chasing work instead of doing it."
                        </p>
                        <div className="mt-4 font-bold text-[#E76F51] text-sm uppercase">— THE PROVIDER'S REALITY</div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 border-l-4 border-[#264653] bg-gray-50 rounded-r-3xl"
                    >
                        <p className="italic">
                            "You run a cleaning company with 10 employees. You're juggling spreadsheets, phone calls,
                            and text messages. You have no idea where your team is, what supplies they have, or if
                            customers are happy until it's too late."
                        </p>
                        <div className="mt-4 font-bold text-[#264653] text-sm uppercase">— THE COMPANY'S CHAOS</div>
                    </m.div>
                </div>

                <m.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-2xl font-bold text-[#264653] pt-8"
                >
                    We knew there had to be a better way. <br />
                    <span className="text-[#006D77]">So we built it.</span>
                </m.p>
            </div>
        </div>
    </section>
);

const TheSolutionOverview = () => {
    const cards = [
        {
            icon: <Brain className="w-12 h-12 text-[#006D77]" />,
            title: "AI-Powered Pricing",
            desc: "Our AI analyzes thousands of data points—location, service type, complexity, market rates—to suggest fair prices. No more overpaying. Customers get transparency, providers get guidance.",
            impact: "This levels the playing field for everyone."
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-[#006D77]" />,
            title: "Verified Network",
            desc: "Every provider goes through background checks and certification verification. Every job includes photo proof. We built trust into every transaction.",
            impact: "You can book with confidence, every time."
        },
        {
            icon: <Eye className="w-12 h-12 text-[#006D77]" />,
            title: "Complete Visibility",
            desc: "Real-time tracking, photo verification, in-app chat, completion codes. From booking to payment, you know exactly what's happening at every step.",
            impact: "No surprises, just great service."
        }
    ];

    return (
        <section className="py-24 bg-[#F8F9FA] px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-6">Our Solution: Intelligence Meets Transparency</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">Three pillars that define the Nasgo experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="glass p-10 rounded-[3rem] border-white/20 shadow-xl flex flex-col h-full hover:scale-105 transition-transform"
                        >
                            <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-md">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed flex-1">{card.desc}</p>
                            <div className="pt-6 border-t border-gray-100 font-bold text-[#006D77] text-sm uppercase">
                                {card.impact}
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechnologyDeepDive = () => {
    const techs = [
        {
            title: "AI Pricing Engine",
            desc: "Our proprietary AI doesn't just pull random numbers. It learns from real market data, considers job complexity, location, and demand to suggest fair prices. The AI creates a marketplace where value wins, not just the lowest price.",
            icon: <Cpu size={48} />,
            align: 'left',
            visual: (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    <div className="w-full h-48 flex items-end justify-between gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <m.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="w-full bg-white/10 rounded-t-lg relative group"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#00df9a] opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                                {i === 5 && <div className="absolute inset-0 bg-[#00df9a]/50 blur-lg" />}
                                {i === 5 && <div className="absolute inset-0 bg-[#00df9a]" />}
                            </m.div>
                        ))}
                    </div>
                    {/* Floating Badge */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#00df9a]/20 flex items-center justify-center text-[#00df9a]">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Market Rate</div>
                            <div className="text-xl font-bold text-white">£145.00</div>
                        </div>
                    </m.div>
                </div>
            )
        },
        {
            title: "Smart Matching System",
            desc: "Our matching algorithm considers provider location, ratings, specialization, and availability to suggest the best fits. Better matches mean better service and repeat business for providers.",
            icon: <Zap size={48} />,
            align: 'right',
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(0,223,154,0.2)]">
                        <Brain className="text-[#00df9a] w-10 h-10" />
                        <div className="absolute inset-0 border-2 border-[#00df9a] rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Nodes */}
                    {[0, 1, 2, 3].map((i) => (
                        <m.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.2) }}
                            className="absolute"
                            style={{
                                top: i === 0 ? '20%' : i === 1 ? '80%' : i === 2 ? '30%' : '70%',
                                left: i === 0 ? '20%' : i === 1 ? '20%' : i === 2 ? '80%' : '80%',
                            }}
                        >
                            {/* Connector Line */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 -z-10 pointer-events-none stroke-white/10" style={{ transform: `rotate(${i === 0 ? 45 : i === 1 ? -45 : i === 2 ? 135 : -135}deg)` }}>
                                <line x1="50%" y1="50%" x2="0" y2="0" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>

                            <div className="w-12 h-12 bg-[#264653] border border-white/20 rounded-xl flex items-center justify-center relative">
                                {i === 0 ? <Star size={16} className="text-yellow-400" /> :
                                    i === 1 ? <MapPin size={16} className="text-red-400" /> :
                                        i === 2 ? <Briefcase size={16} className="text-blue-400" /> :
                                            <Clock size={16} className="text-purple-400" />}

                                <div className="absolute -bottom-6 text-[10px] font-bold uppercase tracking-wider text-white/50 w-24 text-center">
                                    {i === 0 ? 'Top Rated' : i === 1 ? 'Nearby' : i === 2 ? 'Expert' : 'Available'}
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            )
        },
        {
            title: "Photo Verification",
            desc: "Mandatory documentation at every step. Before, during, and after photos ensure accountability. This simple technology solves the industry's biggest problem: proof of work.",
            icon: <Camera size={48} />,
            align: 'left',
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-64 aspect-[3/4] bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                        {/* Mock Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="text-white/10">
                                <Monitor size={64} />
                            </div>
                        </div>

                        {/* Scanning Effect */}
                        <m.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-1 bg-[#00df9a] shadow-[0_0_20px_#00df9a] z-10"
                        />

                        {/* Overlay Icons */}
                        <m.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute top-4 right-4 w-8 h-8 bg-[#00df9a] rounded-full flex items-center justify-center shadow-lg"
                        >
                            <Check size={16} className="text-black font-bold" strokeWidth={3} />
                        </m.div>

                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-white/70">Analysis</span>
                                <span className="text-[#00df9a] font-bold">Verified</span>
                            </div>
                            <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                                <div className="w-full h-full bg-[#00df9a]" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Real-Time Operations",
            desc: "Companies get a dashboard that updates in real-time. See fleet location, job progress, and inventory status at a glance. Make decisions with live data, not spreadsheets.",
            icon: <Monitor size={48} />,
            align: 'right',
            visual: (
                <div className="w-full h-full p-8 flex flex-col gap-4">
                    {/* Header Mock */}
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="px-2 py-1 bg-[#00df9a]/20 rounded text-[10px] font-bold text-[#00df9a]">LIVE FEED</div>
                    </div>

                    {/* Map/List Mock */}
                    <div className="flex-1 flex gap-4">
                        {/* Sidebar */}
                        <div className="w-1/3 py-2 space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-12 w-full bg-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                            ))}
                        </div>
                        {/* Map Area */}
                        <div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                            {/* Mock Map Points */}
                            <m.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-1/3 left-1/3 w-3 h-3 bg-[#E76F51] rounded-full shadow-[0_0_10px_#E76F51]"
                            />
                            <m.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                className="absolute top-2/3 right-1/4 w-3 h-3 bg-[#00df9a] rounded-full shadow-[0_0_10px_#00df9a]"
                            />
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-[#264653] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-24">Powered by Intelligent Technology</h2>

                <div className="space-y-32">
                    {techs.map((tech, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${tech.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                            <m.div
                                initial={{ opacity: 0, x: tech.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="w-20 h-20 bg-white/10 rounded-[2rem] border border-white/20 flex items-center justify-center mb-8 text-[#006D77]">
                                    {tech.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-6">{tech.title}</h3>
                                <p className="text-xl text-white/70 leading-relaxed mb-8">{tech.desc}</p>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-widest text-[#006D77]">Proprietary Algorithm</div>
                                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-widest text-[#E76F51]">Live Data Feed</div>
                                </div>
                            </m.div>

                            <m.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 w-full aspect-video bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-nasgo-gradient opacity-10" />
                                {tech.visual}
                            </m.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OurVision = () => {
    const goals = [
        { title: "Empower Providers", desc: "Help 100,000+ providers build sustainable businesses with fair income and flexibility.", icon: <Users /> },
        { title: "Serve Millions", desc: "Make quality home service accessible to every household through transparent pricing.", icon: <Heart /> },
        { title: "Transform Industry", desc: "Set new standards for transparency and fairness using advanced AI technology.", icon: <Globe /> }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-12">Our Vision for the Future</h2>
                <div className="text-xl text-gray-500 leading-relaxed mb-16 space-y-6">
                    <p>
                        "We envision a world where finding home services is as easy as ordering food.
                        Where prices are transparent and fair. Where trust is built-in, not hoped for."
                    </p>
                    <p>
                        Nasgo starts with home services, but we're building something bigger—a trusted
                        marketplace for any local service need. Today it's plumbing and cleaning.
                        Tomorrow it could be pet care, fitness, or tutoring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {goals.map((goal, i) => (
                        <m.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center"
                        >
                            <div className="w-14 h-14 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center mb-6">
                                {goal.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-4">{goal.title}</h4>
                            <p className="text-sm text-gray-500">{goal.desc}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyJoinNow = () => {
    const benefits = [
        { title: "Shape the Platform", desc: "Early users help us build features they actually need. Your feedback matters.", benefit: "Be a pioneer" },
        { title: "Build Reputation First", desc: "Early providers establish themselves before competition arrives.", benefit: "Early Bird Advantage" },
        { title: "Exclusive Benefits", desc: "Founding members get special badges and reduced commission rates.", benefit: "Permanent Founding Status" },
        { title: "Join a Movement", desc: "Be part of the founding community that changes the industry forever.", benefit: "Grow with us" }
    ];

    return (
        <section className="py-24 bg-[#F8F9FA] px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold mb-6">The Early Adopter Advantage</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">Yes, we're launching soon. Here's why being early is your biggest advantage.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col"
                        >
                            <h4 className="text-xl font-bold mb-4">{b.title}</h4>
                            <p className="text-gray-500 text-sm mb-8 flex-1">{b.desc}</p>
                            <div className="font-bold text-[#E76F51] text-xs uppercase tracking-tighter bg-[#E76F51]/5 px-4 py-2 rounded-lg w-fit">
                                {b.benefit}
                            </div>
                        </m.div>
                    ))}
                </div>

                <div className="mt-16 text-center italic text-gray-400 max-w-2xl mx-auto">
                    "Every great platform started somewhere. Uber, Airbnb, Upwork—they all had a Day One. This is ours. Will you be part of it?"
                </div>
            </div>
        </section>
    );
};

const CoreValues = () => (
    <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-20 text-[#264653]">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                    { icon: <Target />, t: "Transparency", d: "No hidden fees, no unclear pricing, no surprises. Everything is visible and honest." },
                    { icon: <CheckCircle2 />, t: "Fairness", d: "AI pricing ensures providers earn what they deserve and customers pay what's fair." },
                    { icon: <ShieldCheck />, t: "Trust", d: "Verification and photo proof are built into every single transaction." },
                    { icon: <Users />, t: "Empowerment", d: "We empower service providers to build businesses on their own terms." },
                    { icon: <Rocket />, t: "Innovation", d: "We use technology to solve real problems, not add complexity. AI should simplify life." },
                    { icon: <Heart />, t: "Community", d: "We're building a community of people who believe in raising the standard of service." }
                ].map((v, i) => (
                    <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 bg-[#006D77] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                            {v.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">{v.t}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{v.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TheTeam = () => (
    <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl font-extrabold mb-8">Who's Building Nasgo?</h2>
                    <p className="text-xl text-gray-500 leading-relaxed mb-8">
                        Nasgo is the brainchild of <strong className="text-[#006D77]">Mohammed Nasher</strong>, a visionary technologist who saw the broken state of home services.
                        Backed by a team of world-class engineers and designers, he is on a mission to bring transparency and fairness to the industry.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { i: <Brain />, t: "AI Engineers" },
                            { i: <Monitor />, t: "Full-stack Devs" },
                            { i: <Users />, t: "Product Designers" },
                            { i: <TrendingUp />, t: "Data Scientists" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 font-bold text-[#006D77]">
                                {item.i}
                                <span className="text-sm">{item.t}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#006D77]/5 rounded-bl-full" />
                    <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 bg-nasgo-gradient rounded-[3rem] mb-8 overflow-hidden flex items-center justify-center text-white text-6xl font-black shadow-xl group-hover:scale-105 transition-transform">
                            MN
                        </div>
                        <h3 className="text-2xl font-bold mb-1">Mohammed Nasher</h3>
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Founder & CEO</p>
                        <p className="text-gray-500 leading-relaxed italic mb-8">
                            "I built Nasgo because I saw how broken the home services industry was.
                            Nasgo is my answer to the lack of transparency I experienced as both
                            a customer and an advisor to service companies."
                        </p>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 bg-gray-50 text-[#006D77] rounded-full flex items-center justify-center hover:bg-[#006D77] hover:text-white transition-all"><Linkedin size={18} /></button>
                            <button className="w-10 h-10 bg-gray-50 text-[#006D77] rounded-full flex items-center justify-center hover:bg-[#006D77] hover:text-white transition-all"><Mail size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Roadmap = () => {
    const roadmap = [
        { status: 'done', date: '', title: 'Concept & Validation', desc: 'Interviewed 100+ providers and validated market gaps.' },
        { status: 'done', date: '', title: 'Architecture & AI Dev', desc: 'Core platform build and AI pricing engine development.' },
        { status: 'done', date: '', title: 'Platform Built', desc: 'Functional apps and dashboard completed for all users.' },
        { status: 'current', date: 'Q4 2025', title: 'Pre-Launch Phase', desc: 'Building early adopter community and final stress testing.' },
        { status: 'upcoming', date: 'Q1 2026', title: 'Beta Launch', desc: 'Official regional rollout and first 1,000 customers.' },
        { status: 'upcoming', date: '2026+', title: 'National Expansion', desc: 'Adding 50+ new service categories across the UK.' }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-20">Our Journey & Future</h2>
                <div className="space-y-12">
                    {roadmap.map((item, i) => (
                        <div key={i} className="flex gap-10">
                            <div className="flex flex-col items-center flex-shrink-0">
                                <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold z-10 ${item.status === 'done' ? 'bg-[#2A9D8F] border-[#2A9D8F] text-white' :
                                    item.status === 'current' ? 'bg-white border-[#E76F51] text-[#E76F51] animate-pulse' : 'bg-white border-gray-100 text-gray-300'
                                    }`}>
                                    {item.status === 'done' ? <CheckCircle2 size={24} /> : i + 1}
                                </div>
                                {i !== roadmap.length - 1 && <div className="w-1 h-full bg-gray-50" />}
                            </div>
                            <div className="pb-12">
                                <div className="text-xs font-bold text-[#006D77] uppercase tracking-widest mb-1">{item.date}</div>
                                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: "When will Nasgo officially launch?", a: "We are currently in a private pre-launch phase. Our beta rollout is scheduled for Q1 2026, with a full public launch following in Q2 2026. Join our waitlist to get priority access and launch-day bonuses." },
        { q: "Why should I trust a new platform?", a: "We build trust into the code. Every transaction is verified with before/after photos, payments are held in secure escrow, and all providers are background-checked. Being new means we're hungry to prove our value to you." },
        { q: "How is Nasgo different from other platforms?", a: "Unlike others, we don't just list providers. We use AI to ensure pricing is fair for everyone, we enforce photo-verification for quality control, and our commission is only 10%—far lower than the 20-30% industry average." },
        { q: "How can I get involved early?", a: "Join our early access list! Whether you're a customer, a skilled provider, or a service company, joining now grants you 'Founding Member' status, reduced rates, and the chance to shape the platform's features." }
    ];

    return (
        <section className="py-24 bg-gray-50 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-16">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100">
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

export default AboutPage;
