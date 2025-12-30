"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type CookieConsent = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
};

type CookieConsentContextType = {
    consent: CookieConsent;
    showBanner: boolean;
    updateConsent: (newConsent: Partial<CookieConsent>) => void;
    acceptAll: () => void;
    rejectAll: () => void;
    saveConsent: (finalConsent: CookieConsent) => void;
    closeBanner: () => void;
    openPreferences: () => void;
    isPreferencesOpen: boolean;
    closePreferences: () => void;
};

const defaultConsent: CookieConsent = {
    necessary: true,
    analytics: false,
    marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
    const [showBanner, setShowBanner] = useState(false);
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check for saved consent in localStorage
        const savedConsent = localStorage.getItem('nasgo_cookie_consent');
        if (savedConsent) {
            setConsent(JSON.parse(savedConsent));
            setShowBanner(false);
        } else {
            setShowBanner(true);
        }
        setIsLoaded(true);
    }, []);

    const updateConsent = (newConsent: Partial<CookieConsent>) => {
        setConsent((prev) => ({ ...prev, ...newConsent }));
    };

    const saveConsent = (finalConsent: CookieConsent) => {
        setConsent(finalConsent);
        localStorage.setItem('nasgo_cookie_consent', JSON.stringify(finalConsent));
        setShowBanner(false);
        setIsPreferencesOpen(false);

        // Trigger window event for analytics scripts to catch
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('cookie_consent_updated', { detail: finalConsent }));
        }
    };

    const acceptAll = () => {
        const allAccepted = { necessary: true, analytics: true, marketing: true };
        saveConsent(allAccepted);
    };

    const rejectAll = () => {
        const allRejected = { necessary: true, analytics: false, marketing: false };
        saveConsent(allRejected);
    };

    const closeBanner = () => setShowBanner(false);
    const openPreferences = () => setIsPreferencesOpen(true);
    const closePreferences = () => setIsPreferencesOpen(false);

    if (!isLoaded) return null;

    return (
        <CookieConsentContext.Provider
            value={{
                consent,
                showBanner,
                updateConsent,
                acceptAll,
                rejectAll,
                saveConsent,
                closeBanner,
                openPreferences,
                isPreferencesOpen,
                closePreferences,
            }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
};

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
};
