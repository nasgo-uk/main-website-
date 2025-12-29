import React from 'react';
import Hero from '../components/Hero';
import PricingShowcase from '../components/PricingShowcase';
import ProblemSolution from '../components/ProblemSolution';
import UserTypes from '../components/UserTypes';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import Screenshots from '../components/Screenshots';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden selection:bg-[#E76F51] selection:text-white">
      <Hero />
      <ProblemSolution />
      <UserTypes />
      <PricingShowcase />
      <HowItWorks />
      <Screenshots />
      <TrustSection />
      <FinalCTA />
    </div>
  );
}
