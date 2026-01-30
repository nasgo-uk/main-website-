'use client';

import { useState, useCallback } from 'react';
import { X, Camera, Sparkles, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { getServiceConfig } from '@/lib/aiPricing/serviceConfigs';

interface AIPricingQuoteProps {
    serviceId: string;
    serviceName: string;
    onPriceReceived?: (price: number) => void;
}

interface PriceResult {
    amount: number;
    currency: string;
    breakdown: { item: string; itemAr: string; amount: number }[];
    confidence: number;
    reasoning: string;
    reasoningAr: string;
}

export default function AIPricingQuote({ serviceId, onPriceReceived }: AIPricingQuoteProps) {
    const [photos, setPhotos] = useState<string[]>([]);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [priceResult, setPriceResult] = useState<PriceResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'emergency'>('normal');

    const config = getServiceConfig(serviceId);

    const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setPhotos(prev => {
                    if (config && prev.length >= config.maxPhotos) {
                        return prev;
                    }
                    return [...prev, result];
                });
            };
            reader.readAsDataURL(file);
        });
    }, [config]);

    const removePhoto = (index: number) => {
        setPhotos(prev => prev.filter((_, i) => i !== index));
    };

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleGetQuote = async () => {
        if (!config) return;

        // Validation
        if (config.photoRequirement === 'required' && photos.length < config.minPhotos) {
            setError(`Please upload at least ${config.minPhotos} photo(s)`);
            return;
        }

        setIsLoading(true);
        setError(null);
        setPriceResult(null);

        try {
            const response = await fetch('/api/ai-pricing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serviceId,
                    photos: config.photoRequirement === 'required' ? photos : [],
                    answers,
                    urgency
                })
            });

            const data = await response.json();

            if (data.success && data.price) {
                setPriceResult({
                    amount: data.price.amount,
                    currency: data.price.currency,
                    breakdown: data.price.breakdown,
                    confidence: data.confidence,
                    reasoning: data.reasoning,
                    reasoningAr: data.reasoningAr
                });
                onPriceReceived?.(data.price.amount);
            } else {
                setError(data.validationErrors?.[0]?.message || 'Failed to get quote');
            }
        } catch {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!config) {
        return <div className="text-red-500">Service configuration not found</div>;
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#006D77] to-[#83C5BE] p-6 text-white">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    <div>
                        <h3 className="text-xl font-semibold">Get Instant AI Quote</h3>
                        <p className="text-white/80 text-sm">Powered by AI - accurate pricing in seconds</p>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Photo Upload Section - Only if required */}
                {config.photoRequirement === 'required' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Photos ({photos.length}/{config.maxPhotos})
                        </label>

                        {/* Photo Instructions */}
                        <div className="bg-blue-50 rounded-lg p-3 mb-3">
                            <p className="text-sm text-blue-800 font-medium mb-1">📸 Photo Tips:</p>
                            <ul className="text-xs text-blue-700 space-y-1">
                                {config.photoInstructions.map((tip, i) => (
                                    <li key={i}>• {tip}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Photo Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-3">
                            {photos.map((photo, index) => (
                                <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                                    <img src={photo} alt="" className="w-full h-full object-cover" />
                                    <button
                                        onClick={() => removePhoto(index)}
                                        className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}

                            {/* Upload Button */}
                            {photos.length < config.maxPhotos && (
                                <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#006D77] hover:bg-gray-50 transition-colors">
                                    <Camera className="w-6 h-6 text-gray-400" />
                                    <span className="text-xs text-gray-500 mt-1">Add Photo</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handlePhotoUpload}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>

                        {photos.length < config.minPhotos && (
                            <p className="text-xs text-amber-600">
                                ⚠️ Please add at least {config.minPhotos} photo(s) for accurate pricing
                            </p>
                        )}
                    </div>
                )}

                {/* No Photos Message for Sensitive Services */}
                {config.photoRequirement === 'forbidden' && (
                    <div className="bg-green-50 rounded-lg p-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-green-800">No Photos Needed</p>
                            <p className="text-xs text-green-700">
                                This service doesn&apos;t require photos for privacy reasons. Just answer the questions below.
                            </p>
                        </div>
                    </div>
                )}

                {/* Questions Section */}
                {config.questions && config.questions.length > 0 && (
                    <div className="space-y-4">
                        <h4 className="font-medium text-gray-800">Service Details</h4>

                        {config.questions.map((question) => (
                            <div key={question.id}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {question.question}
                                    {question.required && <span className="text-red-500 ml-1">*</span>}
                                </label>

                                {question.type === 'select' && question.options && (
                                    <select
                                        value={answers[question.id] || ''}
                                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#006D77] focus:border-transparent"
                                    >
                                        <option value="">Select...</option>
                                        {question.options.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label} {opt.priceModifier > 0 ? `(+£${opt.priceModifier})` : opt.priceModifier < 0 ? `(-£${Math.abs(opt.priceModifier)})` : ''}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Urgency Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">When do you need this?</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { value: 'normal', label: 'Flexible', desc: 'Within a week' },
                            { value: 'urgent', label: 'Urgent', desc: '+25%' },
                            { value: 'emergency', label: 'Emergency', desc: '+50%' }
                        ].map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => setUrgency(opt.value as 'normal' | 'urgent' | 'emergency')}
                                className={`p-3 rounded-lg border-2 text-center transition-all ${urgency === opt.value
                                    ? 'border-[#006D77] bg-[#006D77]/5'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="font-medium text-sm">{opt.label}</div>
                                <div className="text-xs text-gray-500">{opt.desc}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                    </div>
                )}

                {/* Price Result */}
                {priceResult && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                        <div className="text-center mb-4">
                            <p className="text-sm text-gray-600 mb-1">Your AI Quote</p>
                            <p className="text-4xl font-bold text-[#006D77]">
                                £{priceResult.amount.toFixed(2)}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {priceResult.confidence}% confidence
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-2 pt-4 border-t border-green-200">
                            {priceResult.breakdown.map((item, i) => (
                                <div key={i} className="flex justify-between text-sm">
                                    <span className="text-gray-600">{item.item}</span>
                                    <span className={item.amount >= 0 ? 'text-gray-800' : 'text-green-600'}>
                                        {item.amount >= 0 ? '+' : ''}£{item.amount.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* AI Reasoning */}
                        <p className="text-xs text-gray-500 mt-4 italic">
                            &ldquo;{priceResult.reasoning}&rdquo;
                        </p>
                    </div>
                )}

                {/* Get Quote Button */}
                <button
                    onClick={handleGetQuote}
                    disabled={isLoading || (config.photoRequirement === 'required' && photos.length < config.minPhotos)}
                    className="w-full py-4 bg-gradient-to-r from-[#E76F51] to-[#F4A261] hover:from-[#d35d41] hover:to-[#e8954f] text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#E76F51]/25"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing...
                        </>
                    ) : priceResult ? (
                        <>
                            <Sparkles className="w-5 h-5" />
                            Get New Quote
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-5 h-5" />
                            Get Instant AI Quote
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
