"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { ContactForm } from './ContactForm';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'For Customers', href: '/seekers' },
    { name: 'For Providers', href: '/providers' },
    { name: 'For Companies', href: '/companies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/' && pathname !== '/') return false;
    return pathname === href;
  };

  const isLightPage = ['/', '/terms', '/privacy'].includes(pathname);
  const logoSrc = (isScrolled || isLightPage)
    ? "https://ik.imagekit.io/dkk0ianhs/nasgo%20logo.png"
    : "https://ik.imagekit.io/dkk0ianhs/nasgo%20logo%20orang.png";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 px-4' : 'py-4 px-6'
          }`}
      >
        <nav
          className={`max-w-7xl mx-auto w-full transition-all duration-300 rounded-[2rem] ${isScrolled
            ? 'glass shadow-xl px-6 py-3 border-white/20'
            : 'bg-white/10 backdrop-blur-md px-6 py-3 border border-white/10'
            }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleNavClick}
            >
              <img
                src={logoSrc}
                alt="Nasgo Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#086A74] to-[#0A808C] bg-clip-text text-transparent">Nasgo</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative group py-2 ${isActive(link.href)
                    ? 'text-[#006D77]'
                    : 'text-[#264653]/70 hover:text-[#006D77]'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#006D77] transition-all ${isActive(link.href)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                    }`}></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#E76F51] hover:bg-[#d65f42] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#E76F51]/20 transition-all hover:scale-105 active:scale-95"
              >
                Get Early Access
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#264653]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 glass rounded-3xl overflow-hidden shadow-2xl border-white/20 p-6 flex flex-col gap-4 z-40"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`text-xl font-bold py-3 text-left border-b border-gray-100 last:border-0 ${isActive(link.href)
                    ? 'text-[#006D77]' : 'text-[#264653]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button
                  onClick={() => {
                    handleNavClick();
                    setIsContactOpen(true);
                  }}
                  className="w-full py-4 text-center bg-[#E76F51] text-white font-bold rounded-2xl shadow-lg block"
                >
                  Get Early Access
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Popup Modal via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsContactOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-transparent rounded-[2rem] z-10 scrollbar-hide"
              >
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-8 right-8 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>
                <div onClick={(e) => e.stopPropagation()}>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
