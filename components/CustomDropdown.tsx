"use client";

import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CustomDropdownProps {
    label?: string;
    value: string;
    options: string[];
    onChange: (val: string) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
    buttonClassName?: string;
    labelClassName?: string;
}

const CustomDropdown = ({
    label,
    value,
    options,
    onChange,
    placeholder = "Select option",
    required = false,
    className = "",
    buttonClassName = "",
    labelClassName = "text-xs font-bold text-white tracking-wider"
}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`space-y-2 relative ${className}`} ref={dropdownRef}>
            {label && <label className={labelClassName}>{label} {required && '*'}</label>}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full rounded-xl px-4 py-3 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all shadow-inner ${buttonClassName ? buttonClassName : 'bg-[#1a3a45]/60 border border-white/30 text-white hover:bg-[#1a3a45]/80'}`}
            >
                <span className={`font-bold ${!value ? 'opacity-70' : ''}`}>
                    {value || placeholder}
                </span>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 right-0 top-full mt-2 z-[60] bg-[#264653] rounded-xl overflow-hidden border border-white/20 shadow-2xl py-2 max-h-60 overflow-y-auto"
                    >
                        {options.map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left text-sm font-bold transition-colors hover:bg-[#006D77] ${value === opt ? 'bg-[#006D77] text-white' : 'text-white/80'
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomDropdown;
