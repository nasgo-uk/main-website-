
"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';
import { saveRegistration } from '../lib/db';
import SuccessMessage from './SuccessMessage';
import { useCSRF } from '../hooks/useCSRF';

interface RequestServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    prefilledService?: string;
}

const RequestServiceModal: React.FC<RequestServiceModalProps> = ({ isOpen, onClose, prefilledService = '' }) => {
    const csrfToken = useCSRF();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        serviceName: prefilledService,
        name: '',
        email: '',
        city: '',
        description: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await saveRegistration({
                type: 'service_request',
                sourcePage: 'services_section',
                ...formData
            }, csrfToken);

            if (result.success) {
                setSuccess(true);
                setTimeout(() => {
                    onClose();
                    setSuccess(false);
                    setFormData({ serviceName: '', name: '', email: '', city: '', description: '' });
                }, 3000);
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to submit request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <m.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {success ? (
                            <SuccessMessage
                                title="Request Received!"
                                message={`We'll add ${formData.serviceName} to our clear list within 24 hours.`}
                                onClose={onClose}
                                actionLabel="Close"
                            />
                        ) : (
                            <>
                                <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900">Request a Service</h3>
                                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <X size={20} className="text-gray-500" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            placeholder="e.g. Aquarium Cleaning"
                                            value={formData.serviceName}
                                            onChange={e => setFormData({ ...formData, serviceName: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">City</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                                placeholder="London"
                                                value={formData.city}
                                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description (Optional)</label>
                                        <textarea
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#006D77] focus:ring-2 focus:ring-[#006D77]/20 outline-none transition-all resize-none"
                                            placeholder="Any specific details..."
                                            value={formData.description}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        />
                                    </div>

                                    {error && (
                                        <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-[#006D77] hover:bg-[#005c65] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#006D77]/20"
                                    >
                                        {loading ? <Loader2 size={20} className="animate-spin" /> : <><Send size={18} /> Submit Request</>}
                                    </button>

                                    <p className="text-center text-xs text-gray-400">
                                        We usually add new services within 24 hours.
                                    </p>
                                </form>
                            </>
                        )}
                    </m.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RequestServiceModal;
