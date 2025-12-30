
"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Lock } from 'lucide-react';
import { saveRegistration } from '../lib/db';

const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('Customer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      await saveRegistration({
        type: 'waitlist',
        sourcePage: 'final_cta',
        email: email,
        userType: role
      });
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[#F8F9FA] relative px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-nasgo-gradient rounded-[4rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <m.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                  Ready to Transform Your <br className="hidden md:block" /> Home Services?
                </h2>
                <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join our limited early access list and be among the first to experience
                  the intelligence of Nasgo.
                </p>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {['Customer', 'Provider', 'Company'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setRole(type)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${role === type
                          ? 'bg-white text-[#264653] border-white'
                          : 'bg-transparent text-white border-white/30 hover:border-white'
                          }`}
                      >
                        I'm a {type}
                      </button>
                    ))}
                  </div>

                  <div className="relative flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-[#E76F51] hover:bg-[#d65f42] text-white px-10 py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105 active:scale-95 group"
                    >
                      Get Early Access
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
                    <Lock size={14} />
                    <span>No spam. Unsubscribe anytime. No credit card required.</span>
                  </div>
                </form>
              </m.div>
            ) : (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12"
              >
                <m.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8"
                >
                  <CheckCircle2 size={48} className="text-[#006D77]" />
                </m.div>
                <h3 className="text-4xl font-extrabold mb-4">You're on the list!</h3>
                <p className="text-xl text-white/70 max-w-md mx-auto leading-relaxed">
                  Welcome to the future of home services. We'll reach out soon with your
                  exclusive early access link to {email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-white/50 hover:text-white transition-colors"
                >
                  Return
                </button>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
};

export default FinalCTA;
