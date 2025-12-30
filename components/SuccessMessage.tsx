"use client";

import React from 'react';
import { m } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface SuccessMessageProps {
    title?: string;
    message?: string;
    onClose?: () => void;
    actionLabel?: string;
    className?: string; // Allow custom classes for flexibility
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
    title = "Success!",
    message = "Your request has been received.",
    onClose,
    actionLabel = "Continue",
    className = ""
}) => {
    return (
        <m.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className={`flex flex-col items-center justify-center text-center p-8 md:p-12 ${className}`}
        >
            <m.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-500/20"
            >
                <Check size={48} strokeWidth={3} className="text-white" />
            </m.div>

            <m.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-extrabold text-[#264653] mb-4"
            >
                {title}
            </m.h3>

            <m.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-500 max-w-md mx-auto mb-10 leading-relaxed"
            >
                {message}
            </m.p>

            {onClose && (
                <m.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={onClose}
                    className="group flex items-center gap-2 text-[#006D77] font-bold text-lg hover:text-[#005c65] transition-colors"
                >
                    {actionLabel}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </m.button>
            )}
        </m.div>
    );
};

export default SuccessMessage;
