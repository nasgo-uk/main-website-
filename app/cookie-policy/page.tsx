"use client";

import React from 'react';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { m } from 'framer-motion';

const CookiePolicyPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="bg-[#264653] text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#006D77]/20 blur-[100px]" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <Shield size={14} />
                        Legal & Privacy
                    </m.div>
                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        Cookie Policy
                    </m.h1>
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-2xl mx-auto"
                    >
                        Transparency about how and why we use cookies on NasGo.
                    </m.p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 -mt-12 relative z-20">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 space-y-12">

                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#264653] mb-4">What Are Cookies?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit specific websites. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site. At NasGo, we use cookies to distinguish you from other users, providing you with a better experience and allowing us to improve our platform.
                        </p>
                    </section>

                    {/* Types of Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#264653] mb-6">How We Use Cookies</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center">
                                    <Lock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Strictly Necessary Cookies</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        These are essential for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart, or make use of e-billing services. Without these, the services you have asked for cannot be provided.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Analytical/Performance Cookies</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#E76F51]/10 text-[#E76F51] rounded-xl flex items-center justify-center">
                                    <CheckCircle2 size={24} />
                                    {/* Using CheckCircle2 as a placeholder for target/ads if needed, or similar icons */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Targeting/Marketing Cookies</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Management */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#264653] mb-4">Managing Your Preferences</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            You can change your cookie preferences at any time by clicking the "Cookie Settings" button in our footer or banner. You can also block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our site.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold mb-2">Last Updated</h4>
                            <p className="text-sm text-gray-500">December 2025</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;
