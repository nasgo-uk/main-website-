import { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
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
            <main className="min-h-screen pt-32 pb-20 bg-[#F8F9FA] transition-colors duration-300 font-sans selection:bg-[#E76F51] selection:text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-flex items-center gap-2 text-[#E76F51] font-bold mb-2 bg-[#E76F51]/10 px-5 py-2 rounded-full border border-[#E76F51]/20">
                            <span className="uppercase tracking-widest text-xs">Expert Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#264653] tracking-tight font-poppins leading-tight">
                            Our Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-[#264653] to-[#006D77]">Services</span>
                        </h1>
                        <p className="text-xl text-[#264653]/80 max-w-2xl mx-auto leading-relaxed">
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
                                className="group block h-full"
                            >
                                <div className="h-full bg-white rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2 flex flex-col">
                                    <div className="p-8 pb-4 flex items-center gap-5">
                                        <div className={`p-4 rounded-2xl bg-[#006D77]/5 text-[#006D77] group-hover:bg-[#006D77] group-hover:text-white transition-colors duration-300`}>
                                            <category.icon className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#264653] font-poppins">
                                            {category.name}
                                        </h2>
                                    </div>

                                    <div className="p-8 pt-2 flex-1 flex flex-col">
                                        <p className="text-[#264653]/70 mb-8 min-h-12 text-lg leading-relaxed">
                                            {category.description}
                                        </p>

                                        <ul className="space-y-4 mb-8">
                                            {category.subCategories.flatMap(sub => sub.services).slice(0, 4).map((service) => (
                                                <li key={service.id} className="flex items-center text-[#264653]/70 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#E76F51] mr-3" />
                                                    {service.name}
                                                </li>
                                            ))}
                                            {category.subCategories.flatMap(sub => sub.services).length > 4 && (
                                                <li className="text-[#006D77] text-sm font-bold pl-5 pt-1">
                                                    + {category.subCategories.flatMap(sub => sub.services).length - 4} more services
                                                </li>
                                            )}
                                        </ul>

                                        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6 group-hover:border-[#006D77]/20 transition-colors">
                                            <span className="font-bold text-[#264653]">View Catalog</span>
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#264653] group-hover:bg-[#E76F51] group-hover:text-white transition-all">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-24 text-center bg-[#264653] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#006D77] rounded-full blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E76F51] rounded-full blur-[100px] opacity-30 -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">Can&apos;t find what you&apos;re looking for?</h3>
                            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                                We are constantly adding new services. Contact our support team for a custom request and we will find a pro for you.
                            </p>
                            <Link href="/contact" className="inline-block bg-[#E76F51] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#d05a3d] transition-colors shadow-lg shadow-orange-900/20">
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
