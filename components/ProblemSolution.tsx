
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    "Hidden fees and unclear pricing",
    "No easy way to compare providers",
    "Constant worry about service quality",
    "Wasting time on endless phone calls"
  ];

  const solutions = [
    "AI suggests fair prices instantly",
    "Compare multiple verified providers",
    "Track every job with photo proof",
    "Chat, book, and pay in one app"
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#264653] mb-6"
          >
            Tired of Unreliable Services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Home services shouldn't be a gamble. We built Nasgo to bring intelligence,
            fairness, and transparency to every doorstep.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connector Arrow for Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#006D77] rounded-full text-white items-center justify-center z-10 shadow-xl">
            <ArrowRight size={32} />
          </div>

          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-8">
              <XCircle className="text-red-500" size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-8">The Old Way</h3>
            <ul className="space-y-6">
              {problems.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-gray-600 font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-nasgo-gradient p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl shadow-[#006D77]/20"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <CheckCircle className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-8">The Nasgo Way</h3>
            <ul className="space-y-6">
              {solutions.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
