
"use client";

import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Youtube, Mail, Phone, Moon, Sun, Monitor, Type, MousePointer2, X, SunMoon, Palette, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { saveRegistration } from '../lib/db';

const Footer: React.FC = () => {
  const [isAccModalOpen, setIsAccModalOpen] = useState(false);
  const [settings, setSettings] = useState(() => {
    // Avoid hydration mismatch by checking window defined
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nasgo-acc-settings');
      return saved ? JSON.parse(saved) : {
        highContrast: false,
        largeText: false,
        underlineLinks: false,
        greyscale: false,
      };
    }
    return {
      highContrast: false,
      largeText: false,
      underlineLinks: false,
      greyscale: false,
    };
  });

  // Apply accessibility settings to body with persistence
  useEffect(() => {
    const body = document.body;
    localStorage.setItem('nasgo-acc-settings', JSON.stringify(settings));

    const applyClass = (cls: string, active: boolean) => {
      if (active) body.classList.add(cls);
      else body.classList.remove(cls);
    };

    applyClass('acc-high-contrast', settings.highContrast);
    applyClass('acc-large-text', settings.largeText);
    applyClass('acc-underline-links', settings.underlineLinks);
    applyClass('acc-greyscale', settings.greyscale);
  }, [settings]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev: typeof settings) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      underlineLinks: false,
      greyscale: false,
    });
  };

  return (
    <footer className="bg-[#264653] text-white overflow-hidden relative" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Newsletter Section Integrated Inside */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 border-b border-white/5 mb-16">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black mb-2">Stay Updated</h3>
            <p className="text-white/60 text-base max-w-md">Get launch updates and exclusive early access perks delivered to your inbox.</p>
          </div>
          <form className="flex w-full lg:w-auto gap-3" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.querySelector('input') as HTMLInputElement;
            if (input.value) {
              await saveRegistration({
                type: 'newsletter',
                sourcePage: 'footer',
                email: input.value
              });
              input.value = '';
              alert('Subscribed successfully!');
            }
          }}>
            <div className="relative flex-1 lg:w-80">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all"
              />
            </div>
            <button className="bg-[#E76F51] hover:bg-[#d65f42] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#E76F51]/20 hover:scale-105 active:scale-95 transition-all">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://ik.imagekit.io/dkk0ianhs/nasgo%20logo%20orang.png"
                alt="Nasgo Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold tracking-tight text-white">Nasgo</span>
            </Link>
            <p className="text-white/80 font-bold text-lg">AI-Powered Home Services</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Connecting homeowners with verified professionals and trusted companies.
              Transparent pricing, complete visibility, total trust.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/nasgo-app", label: "LinkedIn" },
                { Icon: Youtube, href: "#", label: "YouTube" }
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? "_blank" : "_self"} rel={item.href.startsWith('http') ? "noopener noreferrer" : ""} aria-label={`Follow us on ${item.label}`} className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#006D77] hover:text-white transition-all shadow-sm border border-white/5">
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-base font-bold text-white uppercase tracking-widest">Product</h4>
            <nav aria-label="Product links">
              <ul className="space-y-4">
                <li><Link href="/seekers" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">For Customers</Link></li>
                <li><Link href="/providers" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">For Providers</Link></li>
                <li><Link href="/companies" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">For Companies</Link></li>
                <li><Link href="/" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Pricing</Link></li>
                <li><Link href="/" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">How It Works</Link></li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-base font-bold text-white uppercase tracking-widest">Company</h4>
            <nav aria-label="Company links">
              <ul className="space-y-4">
                <li><Link href="/about" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">About Us</Link></li>
                <li><Link href="/about" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Our Story</Link></li>
                <li><Link href="/about" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Mission & Values</Link></li>
                <li><Link href="#" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-base font-bold text-white uppercase tracking-widest">Support</h4>
            <nav aria-label="Support links">
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Help Center</Link></li>
                <li><Link href="#" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">FAQs</Link></li>
                <li><Link href="#" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Safety & Trust</Link></li>
                <li><Link href="#" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Report an Issue</Link></li>
              </ul>
            </nav>
          </div>

          {/* Column 5: Legal */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-base font-bold text-white uppercase tracking-widest">Legal</h4>
            <nav aria-label="Legal links">
              <ul className="space-y-4">
                <li><Link href="/terms" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-white/60 hover:text-[#006D77] transition-all hover:translate-x-1 block">Cookie Policy</Link></li>
              </ul>
            </nav>
            <div className="pt-6 space-y-4 border-t border-white/5">
              <div className="flex items-center gap-3 text-xs text-white/40 hover:text-white transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center"><Mail size={14} /></div>
                <span>support@nasgo.uk</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/40 hover:text-white transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center"><Phone size={14} /></div>
                <span>+44 (0) 20 XXXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-white/40">
          <p>© 2026 Nasgo. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <button
              onClick={() => setIsAccModalOpen(true)}
              className="flex items-center gap-2 hover:text-white transition-colors group px-3 py-1 bg-white/5 rounded-lg border border-white/10"
              aria-label="Open accessibility settings"
            >
              <Eye size={14} className="group-hover:animate-pulse" />
              <span>Accessibility</span>
            </button>
            <button className="hover:text-white transition-colors">Cookies Settings</button>
          </div>
        </div>
      </div>

      {/* Accessibility Settings Modal */}
      <AnimatePresence>
        {isAccModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAccModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="acc-title"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden text-[#264653]"
            >
              <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#006D77] rounded-xl flex items-center justify-center text-white">
                    <Eye size={20} />
                  </div>
                  <h3 id="acc-title" className="text-xl font-black">Accessibility</h3>
                </div>
                <button
                  onClick={() => setIsAccModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close settings"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 space-y-4">
                {[
                  { id: 'highContrast', label: 'High Contrast Mode', desc: 'Enhanced visibility for low vision', icon: <SunMoon size={20} className="text-[#006D77]" /> },
                  { id: 'largeText', label: 'Enlarge Text', desc: 'Increases readability by scaling font', icon: <Type size={20} className="text-[#E76F51]" /> },
                  { id: 'underlineLinks', label: 'Underline Links', desc: 'Clearly distinguish interactive elements', icon: <MousePointer2 size={20} className="text-[#2A9D8F]" /> },
                  { id: 'greyscale', label: 'Greyscale Mode', desc: 'Remove color for better focus', icon: <Palette size={20} className="text-gray-500" /> }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#006D77]/20 transition-all">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{item.label}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">{item.desc}</div>
                      </div>
                    </div>
                    <button
                      role="switch"
                      aria-checked={settings[item.id as keyof typeof settings]}
                      onClick={() => toggleSetting(item.id as any)}
                      className={`w-14 h-7 rounded-full p-1 transition-all duration-300 relative ${settings[item.id as keyof typeof settings] ? 'bg-[#006D77]' : 'bg-gray-200'}`}
                    >
                      <motion.div
                        animate={{ x: settings[item.id as keyof typeof settings] ? 28 : 0 }}
                        className="w-5 h-5 bg-white rounded-full shadow-lg"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gray-50 flex flex-col gap-3">
                <button
                  onClick={() => setIsAccModalOpen(false)}
                  className="w-full py-4 bg-[#264653] text-white rounded-2xl font-black text-sm shadow-xl hover:bg-[#1a3a45] transition-colors"
                >
                  Save & Apply
                </button>
                <button
                  onClick={resetSettings}
                  className="w-full py-2 text-xs font-bold text-gray-400 hover:text-red-500 transition-colors"
                >
                  Reset all settings to default
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
