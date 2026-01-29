
import { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';

export const metadata: Metadata = {
    title: 'All Home Services | Cleaning, Handyman, Tech | NasGo',
    description: 'Browse our full range of home services including cleaning, handyman, gardening, and tech support. Verified professionals, AI-powered pricing.',
    alternates: {
        canonical: 'https://www.nasgo.uk/services',
    },
};

export default function ServicesPage() {
    return (
        <>
            <OrganizationSchema />
            <Navbar />
            <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
                            Our Professional Services
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Whatever your home needs, we have a verified expert ready to help.
                            Get an instant AI price quote and book in minutes.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((category) => (
                            <Link
                                key={category.id}
                                href={`/services/${category.id}`}
                                className="group block"
                            >
                                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:-translate-y-1">
                                    <div className={`p-6 ${category.color} bg-opacity-20 flex items-center gap-4`}>
                                        <div className={`p-3 rounded-xl bg-white dark:bg-gray-700 shadow-md`}>
                                            <category.icon className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                            {category.name}
                                        </h2>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-12">
                                            {category.description}
                                        </p>

                                        <ul className="space-y-3 mb-6">
                                            {category.subCategories.flatMap(sub => sub.services).slice(0, 4).map((service) => (
                                                <li key={service.id} className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                                                    {service.name}
                                                </li>
                                            ))}
                                            {category.subCategories.flatMap(sub => sub.services).length > 4 && (
                                                <li className="text-blue-500 text-sm font-medium pl-6">
                                                    + {category.subCategories.flatMap(sub => sub.services).length - 4} more services
                                                </li>
                                            )}
                                        </ul>

                                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                                            View All Services <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center bg-blue-600 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-6">Can&apos;t find what you&apos;re looking for?</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                We are constantly adding new services. Contact our support team for a custom request.
                            </p>
                            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
