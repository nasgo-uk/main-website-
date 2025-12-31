
"use client";

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { MousePointer2, Star, Sparkles, Check, Bell, Search, SlidersHorizontal, Tag, Home, Calendar, MessageSquare, User, SprayCan, Wrench, Smartphone, Heart, Battery, Wifi, Signal, ChevronRight, Brush, Hammer, Settings, Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const phrases = ["Smart", "Fast", "Secure"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden bg-[#F8F9FA]">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <m.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#006D77]/5 rounded-full blur-[80px]"
          style={{ willChange: "transform" }}
        />
        <m.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E76F51]/5 rounded-full blur-[80px]"
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-[#006D77] font-bold mb-6"
          >
            <Sparkles size={20} />
            <span className="uppercase tracking-widest text-sm">AI-Powered Home Services</span>
          </m.div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
            Your Home Services, <br />
            <span className="text-gradient h-[1.2em] inline-block">
              {phrases[index].substring(0, subIndex)}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl text-[#264653]/80 mb-10 max-w-lg leading-relaxed">
            Connect with verified professionals or trusted companies.
            Get AI-powered price suggestions. Complete jobs with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-coral-gradient text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-[#E76F51]/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Join Early Access
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="border-2 border-[#264653] text-[#264653] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#264653] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Watch the Trailer
              <Play size={18} className="fill-current" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#264653]/60">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#264653]">60+</span>
              <span>Services</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#264653]">AI</span>
              <span>Pricing</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#264653]">100%</span>
              <span>Verified</span>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] aspect-[10/19]">
            <m.div
              className="absolute inset-0 bg-[#2b2b2b] rounded-[3rem] p-[8px] shadow-2xl overflow-hidden z-10 border-[6px] border-[#4a4a4a] ring-1 ring-black/50"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d', rotateY: '5deg', willChange: 'transform' }}
            >
              <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] overflow-hidden relative flex flex-col">
                {/* Status Bar & Dynamic Island */}
                <div className="absolute top-0 left-0 right-0 h-14 z-50 px-7 pt-3.5 flex justify-between items-start text-black">
                  <span className="text-[13px] font-semibold pl-2">12:51</span>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center">
                    <div className="w-20 h-full flex gap-3 justify-end items-center pr-2">
                      <div className="w-2 h-2 rounded-full bg-[#1a1a1a]/50"></div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center pr-2">
                    <Signal size={14} className="fill-black" />
                    <Wifi size={14} />
                    <Battery size={16} className="fill-black" />
                  </div>
                </div>

                {/* Header */}
                <div className="px-6 pt-16 pb-4 bg-white">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-gray-400 text-xs font-medium mb-1 flex items-center gap-1">
                        Good Morning <span className="text-sm">👋</span>
                      </div>
                      <div className="text-[#0f172a] font-black text-xl">test</div>
                    </div>
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center relative">
                      <Bell size={20} className="text-[#0f172a]" />
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#E76F51] rounded-full border border-white" />
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-gray-50 rounded-2xl h-12 flex items-center px-4 gap-3">
                      <Search size={20} className="text-gray-400" />
                      <span className="text-gray-400 text-sm font-medium">What service do you need?</span>
                    </div>
                    <div className="w-12 h-12 bg-[#006D77] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#006D77]/20">
                      <SlidersHorizontal size={20} />
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-hidden relative">
                  <div className="px-6 pb-20 space-y-8 pt-4">
                    {/* Banner */}
                    <div className="w-full bg-gradient-to-br from-[#00A896] to-[#028090] rounded-3xl p-6 relative overflow-hidden shadow-xl shadow-[#006D77]/20 text-white">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl mr-4 mb-4" />

                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold mb-3 border border-white/10">
                          <Sparkles size={10} className="text-[#FFD166]" fill="#FFD166" />
                          LIMITED OFFER
                        </div>
                        <h3 className="text-2xl font-black mb-1">20% Off</h3>
                        <p className="text-white/90 text-sm font-medium mb-4">First Booking</p>

                        <button className="bg-white text-[#006D77] px-4 py-2 rounded-xl text-xs font-bold shadow-lg">
                          WELCOME20
                        </button>
                      </div>

                      <div className="absolute right-6 bottom-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 rotate-12">
                        <Tag size={20} className="text-white" fill="white" />
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#0f172a] font-bold text-lg">Categories</h3>
                        <span className="text-[#006D77] text-xs font-bold bg-[#006D77]/10 px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#006D77]/20 transition-colors flex items-center gap-1">
                          See All
                          <ChevronRight size={14} />
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { name: "Cleaning", price: "From £25", icon: <Brush size={24} className="text-white" />, color: "bg-[#00A896]" },
                          { name: "Handyman", price: "From £15", icon: <Hammer size={24} className="text-white" />, color: "bg-[#E76F51]" },
                          { name: "Tech & Smart", price: "From £40", icon: <Settings size={24} className="text-white" />, color: "bg-[#028090]" },
                          { name: "Wellness", price: "From £15", icon: <Sparkles size={24} className="text-white" />, color: "bg-[#006D77]" }
                        ].map((cat, i) => (
                          <div key={i} className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3">
                            <div className={`w-14 h-14 ${cat.color} rounded-2xl shadow-lg flex items-center justify-center mb-1`}>
                              {cat.icon}
                            </div>
                            <div>
                              <div className="text-[#0f172a] font-bold text-sm mb-1 line-clamp-1">{cat.name}</div>
                              <div className="text-gray-400 text-[10px] font-medium">{cat.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center h-20 px-6 pb-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-[#006D77]/10 rounded-xl flex items-center justify-center text-[#006D77]">
                      <Home size={24} fill="#006D77" />
                    </div>
                    <span className="text-[10px] font-bold text-[#006D77]">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <Calendar size={24} />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <MessageSquare size={24} />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <User size={24} />
                  </div>
                </div>
              </div>
            </m.div>

            <m.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-3 rounded-2xl shadow-xl z-20 border-white/50 w-40"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  <Check size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500">Service Match</div>
                  <div className="text-xs font-bold">Provider Found</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="#E76F51" color="#E76F51" />)}
              </div>
            </m.div>

            <m.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute top-1/2 -left-16 glass p-3 rounded-2xl shadow-xl z-20 border-white/50 w-44"
              style={{ willChange: 'transform' }}
            >
              <div className="text-[10px] font-bold text-[#006D77] uppercase mb-0.5">AI Suggestion</div>
              <div className="text-base font-extrabold mb-1.5">£25 - £45</div>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <m.div
                  animate={{ width: ['0%', '75%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                  className="h-full bg-[#006D77]"
                />
              </div>
            </m.div>
          </div>
        </m.div>
      </div>

      <AnimatePresence>
        {showVideo && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowVideo(false)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2 bg-black/50 rounded-full backdrop-blur transition-colors"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/sSbgjkqiibk?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
