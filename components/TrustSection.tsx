
"use client";

import React from 'react';
import { m } from 'framer-motion';
import { TRUST_INDICATORS } from '../lib/constants';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Built for Trust & Transparency
          </m.h2>
          <p className="text-xl text-gray-500">Security and reliability are at the core of everything we do.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {TRUST_INDICATORS.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[#006D77]/5 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </m.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100">
          {[
            { val: "60+", label: "Services" },
            { val: "100%", label: "Secure" },
            { val: "24/7", label: "Support" },
            { val: "<5min", label: "Response" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black text-[#264653] mb-2"
              >
                {stat.val}
              </m.div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
