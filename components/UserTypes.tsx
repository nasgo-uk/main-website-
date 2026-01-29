
"use client";

import React from 'react';
import { m } from 'framer-motion';
import { USER_CARDS } from '../lib/constants';

const UserTypes: React.FC = () => {
  return (
    <section id="for-providers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Everyone Wins with Nasgo
          </m.h2>
          <p className="text-xl text-gray-500">Whether you&apos;re looking for help or looking to work, we&apos;ve got you covered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {USER_CARDS.map((card, i) => (
            <m.div
              key={card.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotateX: card.highlight ? 2 : 0,
                rotateY: card.highlight ? 2 : 0
              }}
              className={`relative p-8 rounded-[2.5rem] flex flex-col transition-all duration-500 ${card.highlight
                ? 'bg-nasgo-gradient text-white shadow-2xl shadow-[#006D77]/40 md:-translate-y-8 z-10'
                : 'bg-gray-50 text-[#264653] hover:shadow-xl hover:bg-white border border-gray-100'
                }`}
            >
              {card.badge && (
                <div className="absolute top-6 right-6 bg-[#E76F51] text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse tracking-tighter">
                  {card.badge}
                </div>
              )}

              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${card.highlight ? 'bg-white/10 border border-white/20' : 'bg-[#006D77]/5'
                }`}>
                {card.icon}
              </div>

              <h3 className="text-2xl font-extrabold mb-6">{card.title}</h3>

              <ul className="space-y-4 mb-10 flex-1">
                {card.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm opacity-90">
                    <div className={`w-1.5 h-1.5 rounded-full ${card.highlight ? 'bg-white' : 'bg-[#006D77]'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${card.highlight
                ? 'bg-coral-gradient text-white hover:shadow-coral-500/50'
                : 'bg-white border border-gray-200 text-[#264653] hover:bg-[#006D77] hover:text-white'
                }`}>
                {card.cta}
              </button>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
