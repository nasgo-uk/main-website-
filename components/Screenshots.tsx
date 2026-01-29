
"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, Brush, Hammer, Laptop, Car, Flower2, Sprout, Briefcase, Signal, Wifi, Battery, Bell, Settings, Power, Star, Coins, MapPin, Home, Plus, Banknote, TrendingUp, Activity, Users, LayoutGrid, Map as MapIcon, MessageSquare, Box, Wallet } from 'lucide-react';

const Screenshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Customer App');

  const tabs = [
    { name: 'Customer App', color: '#006D77' },
    { name: 'Provider App', color: '#E76F51' },
    { name: 'Company Dashboard', color: '#264653' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Experience Nasgo
          </m.h2>

          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center p-1.5 rounded-full glass shadow-xl border border-white/20 bg-white/5 backdrop-blur-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-6 py-2.5 rounded-full font-bold transition-all relative text-sm sm:text-base ${activeTab === tab.name
                    ? 'text-white'
                    : 'text-gray-500 hover:text-[#264653]'
                    }`}
                >
                  {activeTab === tab.name && (
                    <m.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full -z-10 shadow-sm"
                      style={{ backgroundColor: tab.color }}
                    />
                  )}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-20">
          <AnimatePresence mode="wait">
            <m.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl glass rounded-5xl p-4 md:p-8 border-gray-100 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-black text-[#264653] leading-tight">
                  {activeTab === 'Customer App' && "Everything you need to keep your home running smoothly."}
                  {activeTab === 'Provider App' && "Powerful tools to manage and grow your service business."}
                  {activeTab === 'Company Dashboard' && "Full control over your fleet and team performance."}
                </h3>
                <ul className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <p className="text-gray-600 font-medium">
                        {activeTab === 'Customer App' && i === 1 && "Book 60+ services with one tap"}
                        {activeTab === 'Customer App' && i === 2 && "Verified Professional Providers"}
                        {activeTab === 'Customer App' && i === 3 && "Seamless digital payments"}
                        {activeTab === 'Provider App' && i === 1 && "Interactive job request board"}
                        {activeTab === 'Provider App' && i === 2 && "Integrated route planning"}
                        {activeTab === 'Provider App' && i === 3 && "Daily earning summaries"}
                        {activeTab === 'Company Dashboard' && i === 1 && "Live GPS tracking of field staff"}
                        {activeTab === 'Company Dashboard' && i === 2 && "Inventory & asset management"}
                        {activeTab === 'Company Dashboard' && i === 3 && "Advanced reporting & analytics"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative flex justify-center">
                  <div className="relative w-full max-w-[320px] aspect-10/19">
                    <div
                      className="absolute inset-0 bg-[#2b2b2b] rounded-5xl p-[8px] shadow-2xl overflow-hidden z-10 border-[6px] border-[#4a4a4a] ring-1 ring-black/50"
                    >
                      {/* Dynamic Island & Status Bar */}
                      {/* Dynamic Island & Status Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-14 z-50 px-7 pt-3.5 flex justify-between items-start ${activeTab === 'Customer App' ? 'text-black' : 'text-white'}`}>
                        <span className="text-[13px] font-semibold pl-2">12:37</span>
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-center">
                          <div className="w-20 h-full flex gap-3 justify-end items-center pr-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/50"></div>
                          </div>
                        </div>
                        <div className="flex gap-1.5 items-center pr-2">
                          <Signal size={14} className={activeTab === 'Customer App' ? 'fill-black' : 'fill-white'} />
                          <Wifi size={14} />
                          <Battery size={16} className={activeTab === 'Customer App' ? 'fill-black' : 'fill-white'} />
                        </div>
                      </div>

                      {/* Screen Content */}
                      <div className={`w-full h-full rounded-5xl overflow-hidden relative flex flex-col pt-14 transition-colors duration-300 ${activeTab === 'Customer App' ? 'bg-[#f8fafc]' : 'bg-[#050505]'}`}>
                        {activeTab === 'Customer App' ? (
                          <>
                            {/* Header */}
                            <div className="px-4 pb-4 flex items-center relative">
                              <ChevronLeft size={24} className="text-[#0f172a]" />
                              <h3 className="flex-1 text-center text-[#0f172a] font-bold text-lg mr-6">All Categories</h3>
                            </div>

                            {/* Grid */}
                            <div className="flex-1 overflow-y-auto px-4 pb-8 no-scrollbar">
                              <div className="grid grid-cols-2 gap-3">
                                {[
                                  { name: "Cleaning", icon: <Brush size={24} className="text-white" />, color: "bg-[#00A896]" },
                                  { name: "Handyman & Repairs", icon: <Hammer size={24} className="text-white" />, color: "bg-[#E76F51]" },
                                  { name: "Tech & Smart Home", icon: <Laptop size={24} className="text-white" />, color: "bg-[#8E44AD]" },
                                  { name: "Wellness & Beauty", icon: <Flower2 size={24} className="text-white" />, color: "bg-[#E91E63]" },
                                  { name: "Automotive", icon: <Car size={24} className="text-white" />, color: "bg-[#FF5252]" },
                                  { name: "Gardening & Outdoor", icon: <Sprout size={24} className="text-white" />, color: "bg-[#2ECC71]" },
                                  { name: "Logistics & Help", icon: <Briefcase size={24} className="text-white" />, color: "bg-[#006D77]" }
                                ].map((cat, i) => (
                                  <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 aspect-square justify-center">
                                    <div className={`w-12 h-12 ${cat.color} rounded-2xl shadow-lg flex items-center justify-center mb-1`}>
                                      {cat.icon}
                                    </div>
                                    <div className="text-[#0f172a] font-bold text-[13px] leading-tight">{cat.name}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : activeTab === 'Provider App' ? (
                          <div className="w-full h-full flex flex-col text-white">
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
                              <div className="bg-[#1e293b] rounded-5xl p-6">
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
                          </div>
                        ) : (
                          // Company Dashboard
                          <div className="w-full h-full flex flex-col text-white relative">
                            {/* Header */}
                            <div className="px-6 pt-2 pb-6">
                              <div className="flex justify-between items-start mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#1e293b] flex items-center justify-center border border-[#334155]">
                                  <Home size={20} className="text-[#2DD4BF]" />
                                </div>
                                <div className="flex gap-2">
                                  <div className="w-9 h-9 relative">
                                    <Bell size={20} className="text-gray-400" />
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#ef4444] rounded-full"></div>
                                  </div>
                                  <Settings size={20} className="text-gray-400" />
                                </div>
                              </div>
                              <div className="text-[10px] font-mono text-gray-500 tracking-widest mb-1">NASGO HUB // SYSTEM READY</div>
                              <h2 className="text-3xl font-bold tracking-tight">nasher</h2>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto px-6 pb-24 no-scrollbar space-y-4">
                              {/* Action Button */}
                              <button className="w-full bg-[#2DD4BF] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 mb-4 hover:bg-[#14b8a6] transition-colors">
                                <Plus size={20} strokeWidth={2.5} />
                                ADD WORKER
                              </button>

                              {/* Revenue Card */}
                              <div className="bg-[#111] rounded-4xl p-6 border border-[#222]">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="text-xs font-bold text-gray-500 tracking-wider">REVENUE</div>
                                  <Banknote size={18} className="text-[#2DD4BF]" />
                                </div>
                                <div className="text-4xl font-bold mb-2">£171</div>
                                <div className="flex items-center gap-1.5 text-[#2DD4BF] text-xs font-bold">
                                  <TrendingUp size={12} />
                                  Real-time
                                </div>
                              </div>

                              {/* Active Jobs */}
                              <div className="bg-[#111] rounded-4xl p-6 border border-[#222]">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="text-xs font-bold text-gray-500 tracking-wider">ACTIVE JOBS</div>
                                  <Activity size={18} className="text-[#E76F51]" />
                                </div>
                                <div className="text-4xl font-bold mb-2">03</div>
                                <div className="text-gray-500 text-xs font-mono tracking-widest">LIVE UPDATES</div>
                              </div>

                              {/* Fleet */}
                              <div className="bg-[#111] rounded-4xl p-6 border border-[#222]">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="text-xs font-bold text-gray-500 tracking-wider">FLEET</div>
                                  <Users size={18} className="text-[#3b82f6]" />
                                </div>
                                <div className="text-4xl font-bold">2 / 20</div>
                              </div>
                            </div>

                            {/* Bottom Nav */}
                            <div className="absolute bottom-0 left-0 right-0 bg-[#111] border-t border-[#222] px-2 py-4 pb-6">
                              <div className="flex justify-between items-center px-2">
                                {[
                                  { name: 'DASH', icon: <LayoutGrid size={18} />, active: true },
                                  { name: 'MAP', icon: <MapIcon size={18} />, active: false },
                                  { name: 'FLEET', icon: <Users size={18} />, active: false },
                                  { name: 'CHAT', icon: <MessageSquare size={18} />, active: false },
                                  { name: 'INV', icon: <Box size={18} />, active: false },
                                  { name: 'WALLET', icon: <Wallet size={18} />, active: false },
                                ].map((item, i) => (
                                  <div key={i} className={`flex flex-col items-center gap-1 ${item.active ? 'text-[#2DD4BF]' : 'text-gray-600'}`}>
                                    {item.icon}
                                    <span className="text-[9px] font-bold tracking-wider">{item.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Home Indicator */}
                        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-20" />
                      </div>
                    </div>
                  </div>
                  {/* Visual Decorative Blur */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#006D77] rounded-full blur-[80px] -z-10 opacity-30" />
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
