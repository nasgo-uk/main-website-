import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PricingShowcase from '../components/PricingShowcase';
import ProblemSolution from '../components/ProblemSolution';
import UserTypes from '../components/UserTypes';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import Screenshots from '../components/Screenshots';
import FinalCTA from '../components/FinalCTA';
import LocationsSection from '../components/LocationsSection';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden selection:bg-[#E76F51] selection:text-white">
      <Hero />
      <ServicesSection />
      <ProblemSolution />
      <UserTypes />
      <PricingShowcase />
      <HowItWorks />
      <Screenshots />
      <TrustSection />
      <BlogSection />
      <LocationsSection />
      <FinalCTA />
    </div>
  );
}
