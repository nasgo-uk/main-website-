
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, TrendingUp, Search, Info, Check } from 'lucide-react';

const PricingShowcase: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [price, setPrice] = useState(0);
  const [activeTab, setActiveTab] = useState('Home Cleaning');

  const services = ['Home Cleaning', 'Painting', 'Plumbing', 'Moving'];
  const pricesMap: Record<string, number> = {
    'Home Cleaning': 30,
    'Painting': 150,
    'Plumbing': 45,
    'Moving': 80
  };

  useEffect(() => {
    handleAnalyze();
  }, [activeTab]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setPrice(0);
    setTimeout(() => {
      setIsAnalyzing(false);
      setPrice(pricesMap[activeTab]);
    }, 2000);
  };

  return (
    <section id="ai-pricing" className="py-24 bg-[#264653] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#006D77]/20 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#006D77] px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-6"
          >
            <Cpu size={16} />
            POWERED BY AI
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Transparent Pricing,<br />
            <span className="text-[#E76F51]">Powered by Intelligence</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Our AI analyzes thousands of historical job data points in real-time to suggest fair market prices.
            No more haggling or being overcharged. You set the baseline, providers compete.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#006D77]" />
              </div>
              <div>
                <h4 className="font-bold">Real-time Data Analysis</h4>
                <p className="text-sm text-white/50">Market trends updated hourly</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Search className="text-[#006D77]" />
              </div>
              <div>
                <h4 className="font-bold">Localized Benchmarking</h4>
                <p className="text-sm text-white/50">Prices adjusted for your specific neighborhood</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden text-[#0f172a]"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-[#0f172a]">AI Pricing Engine</h3>
              <Info size={18} className="text-gray-400" />
            </div>

            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveTab(service)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeTab === service ? 'bg-[#006D77] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>

            <div className="bg-[#F8F9FA] rounded-2xl p-6 min-h-[200px] flex flex-col items-center justify-center border border-gray-100 shadow-inner">
              <AnimatePresence mode="wait">
                {isAnalyzing ? (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="relative w-16 h-16">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-full h-full border-4 border-[#006D77] border-t-transparent rounded-full"
                      />
                      <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#006D77]" />
                    </div>
                    <p className="font-mono text-[#006D77] animate-pulse">Analyzing market trends...</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="text-xs font-bold text-gray-400 uppercase mb-2">Suggested Price Range</div>
                    <motion.div
                      className="text-6xl font-extrabold mb-4 text-[#0f172a]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      £{price} - £{Math.round(price * 1.3)}
                    </motion.div>
                    <div className="text-sm bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                      <Check size={14} className="text-green-400" />
                      Fair Market Value Confirmed
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Service Complexity</span>
                <span className="font-bold text-[#0f172a]">Medium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Estimated Duration</span>
                <span className="font-bold text-[#0f172a]">1.5 - 2 Hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-1/2 h-full bg-[#006D77]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingShowcase;
