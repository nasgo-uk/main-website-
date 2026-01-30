'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIPricingQuote from '@/components/AIPricingQuote';
import { servicesData } from '@/lib/servicesData';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function QuotePage() {
    const params = useParams();
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);
    const [finalPrice, setFinalPrice] = useState<number | null>(null);

    const categoryId = params.category as string;
    const serviceSlug = params.service as string;

    const category = servicesData.find((c) => c.id === categoryId);
    const service = category?.subCategories.flatMap((s) => s.services).find((s) => s.id === serviceSlug);

    if (!category || !service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-[#006D77] hover:underline">
                        Browse Services
                    </Link>
                </div>
            </div>
        );
    }

    const handlePriceReceived = (price: number) => {
        setFinalPrice(price);
        setShowSuccess(true);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-12 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 max-w-2xl">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#006D77] mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {service.name}
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#264653] mb-2">
                            Get Your {service.name} Quote
                        </h1>
                        <p className="text-gray-600">
                            Our AI will analyze your request and provide an instant, accurate quote
                        </p>
                    </div>

                    {/* Success Message */}
                    {showSuccess && finalPrice && (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6 animate-fade-in">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-500 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-green-800 text-lg mb-1">Quote Ready!</h3>
                                    <p className="text-green-700 mb-4">
                                        Your AI-generated quote is <strong>£{finalPrice.toFixed(2)}</strong>.
                                        Ready to book?
                                    </p>
                                    <Link
                                        href={`/contact?service=${service.id}&price=${finalPrice}`}
                                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* AI Pricing Component */}
                    <AIPricingQuote
                        serviceId={service.id}
                        serviceName={service.name}
                        onPriceReceived={handlePriceReceived}
                    />

                    {/* Trust Indicators */}
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white rounded-xl p-4 border border-gray-100">
                            <p className="text-2xl font-bold text-[#006D77]">98%</p>
                            <p className="text-xs text-gray-600">Quote Accuracy</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-100">
                            <p className="text-2xl font-bold text-[#006D77]">30s</p>
                            <p className="text-xs text-gray-600">Average Time</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-100">
                            <p className="text-2xl font-bold text-[#006D77]">Free</p>
                            <p className="text-xs text-gray-600">No Commitment</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
