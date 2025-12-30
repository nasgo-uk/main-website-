"use client";

import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Cookie, Settings } from 'lucide-react';
import { useCookieConsent } from './CookieConsentContext';
import CookiePreferencesModal from './CookiePreferencesModal';

const CookieBanner = () => {
    const { showBanner, acceptAll, rejectAll, openPreferences } = useCookieConsent();

    return (
        <>
            <CookiePreferencesModal />
            <AnimatePresence>
                {showBanner && (
                    <m.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6"
                    >
                        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-[2rem] p-6 md:p-4 flex flex-col md:flex-row items-center gap-6 md:gap-8">

                            {/* Icon & Text */}
                            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                <div className="p-3 bg-[#E76F51]/10 text-[#E76F51] rounded-2xl flex-shrink-0">
                                    <Cookie size={32} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#264653] mb-1">
                                        We value your privacy
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                                        We use cookies to enhance your experience, serve personalized ads, and analyze our traffic.
                                        By clicking "Accept All", you consent to our use of cookies.
                                        <a href="/cookie-policy" className="text-[#006D77] font-bold underline ml-1 hover:text-[#005a63]">Read Policy</a>
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                                <button
                                    onClick={openPreferences}
                                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Settings size={18} />
                                    Customize
                                </button>
                                <button
                                    onClick={rejectAll}
                                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-[#006D77] border-2 border-[#006D77]/20 hover:bg-[#006D77]/5 transition-colors"
                                >
                                    Reject All
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="w-full sm:w-auto px-8 py-3 bg-[#006D77] hover:bg-[#005a63] text-white rounded-xl font-bold shadow-lg shadow-[#006D77]/20 hover:scale-105 transition-all"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CookieBanner;
