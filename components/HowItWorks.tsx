
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../lib/constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            How it Works
          </motion.h2>
          <p className="text-xl text-gray-500">From request to completion in three simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-[#006D77]/20 -z-10" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#006D77]/5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-nasgo-gradient text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
