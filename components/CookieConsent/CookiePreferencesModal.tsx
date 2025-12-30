"use client";

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Shield, BarChart3, Megaphone, Check } from 'lucide-react';
import { useCookieConsent } from './CookieConsentContext';

const CookiePreferencesModal = () => {
    const {
        isPreferencesOpen,
        closePreferences,
        consent,
        saveConsent
    } = useCookieConsent();

    const [tempConsent, setTempConsent] = useState(consent);

    // Sync temp state when modal opens or global consent changes
    useEffect(() => {
        if (isPreferencesOpen) {
            setTempConsent(consent);
        }
    }, [isPreferencesOpen, consent]);

    const handleToggle = (key: keyof typeof consent) => {
        if (key === 'necessary') return; // Cannot toggle necessary
        setTempConsent(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        saveConsent(tempConsent);
    };

    return (
        <AnimatePresence>
            {isPreferencesOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePreferences}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <div>
                                <h2 className="text-2xl font-bold text-[#264653]">Cookie Preferences</h2>
                                <p className="text-sm text-gray-500">Manage your privacy settings</p>
                            </div>
                            <button
                                onClick={closePreferences}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                                You can choose which types of cookies you allow.
                                <a href="/cookie-policy" className="text-[#006D77] underline ml-1 font-semibold">Read our Cookie Policy</a>.
                            </p>

                            <div className="space-y-4">
                                {/* Necessary Cookies */}
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <div className="p-3 bg-gray-200 rounded-xl text-gray-500">
                                        <Shield size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold text-[#264653]">Strictly Necessary</h3>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Always Active</span>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            These cookies are essential for the website to function properly. They cannot be disabled.
                                        </p>
                                    </div>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="p-4 bg-white hover:bg-gray-50 transition-colors rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <div className="p-3 bg-[#006D77]/10 rounded-xl text-[#006D77]">
                                        <BarChart3 size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold text-[#264653]">Analytics & Performance</h3>
                                            <Switch
                                                checked={tempConsent.analytics}
                                                onChange={() => handleToggle('analytics')}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Help us understand how visitors interact with the website by collecting and reporting information anonymously.
                                        </p>
                                    </div>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="p-4 bg-white hover:bg-gray-50 transition-colors rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <div className="p-3 bg-[#E76F51]/10 rounded-xl text-[#E76F51]">
                                        <Megaphone size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold text-[#264653]">Marketing & Advertisement</h3>
                                            <Switch
                                                checked={tempConsent.marketing}
                                                onChange={() => handleToggle('marketing')}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Used to track visitors across websites to display relevant ads and marketing campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={closePreferences}
                                className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-8 py-3 bg-[#006D77] hover:bg-[#005a63] text-white rounded-xl font-bold shadow-lg shadow-[#006D77]/20 transition-all flex items-center gap-2"
                            >
                                <Check size={18} strokeWidth={3} />
                                Save Preferences
                            </button>
                        </div>
                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// Simple Custom Switch Component
const Switch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button
        onClick={onChange}
        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#006D77] focus:ring-offset-2 ${checked ? 'bg-[#006D77]' : 'bg-gray-300'}`}
    >
        <div
            className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${checked ? 'translate-x-6' : 'translate-x-0'}`}
        />
    </button>
);

export default CookiePreferencesModal;
