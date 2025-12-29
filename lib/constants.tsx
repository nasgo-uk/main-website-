
import React from 'react';
import { Shield, CheckCircle2, Camera, Headset, Search, Handshake, CheckSquare, Home, Briefcase, Building2 } from 'lucide-react';

export const COLORS = {
  primary: '#006D77',
  secondary: '#264653',
  accent: '#E76F51',
  success: '#2A9D8F',
  background: '#F8F9FA'
};

export const TRUST_INDICATORS = [
  {
    icon: <Shield className="w-8 h-8 text-[#006D77]" />,
    title: "Secure Payments",
    description: "Bank-level encryption for all transactions."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-[#006D77]" />,
    title: "Verified Providers",
    description: "Background checked & identity certified."
  },
  {
    icon: <Camera className="w-8 h-8 text-[#006D77]" />,
    title: "Photo Verification",
    description: "Before and after proof for every job."
  },
  {
    icon: <Headset className="w-8 h-8 text-[#006D77]" />,
    title: "24/7 Support",
    description: "We're here whenever you need assistance."
  }
];

export const STEPS = [
  {
    number: "01",
    icon: <Search className="w-10 h-10 text-[#006D77]" />,
    title: "Describe Your Need",
    description: "Choose from 60+ services. Our AI suggests a fair price based on your requirements."
  },
  {
    number: "02",
    icon: <Handshake className="w-10 h-10 text-[#006D77]" />,
    title: "Get Multiple Offers",
    description: "Verified providers and companies send you quotes. Chat, compare, and choose."
  },
  {
    number: "03",
    icon: <CheckSquare className="w-10 h-10 text-[#006D77]" />,
    title: "Job Done Right",
    description: "Monitor job status, verify with photos, pay securely, and rate your experience."
  }
];

export const USER_CARDS = [
  {
    type: 'Customer' as const,
    icon: <Home className="w-12 h-12 text-[#006D77]" />,
    title: "Need a Service?",
    features: [
      "60+ home services available",
      "AI-powered price suggestions",
      "Verified professionals",
      "Secure payments & support"
    ],
    cta: "Join Waitlist",
    highlight: false
  },
  {
    type: 'Provider' as const,
    icon: <Briefcase className="w-12 h-12 text-white" />,
    title: "Become a Provider",
    badge: "START EARNING",
    features: [
      "Set your own schedule",
      "Receive job requests instantly",
      "Weekly/monthly payouts",
      "Build your reputation"
    ],
    cta: "Apply Now",
    highlight: true
  },
  {
    type: 'Company' as const,
    icon: <Building2 className="w-12 h-12 text-[#006D77]" />,
    title: "Manage Your Fleet",
    features: [
      "Dashboard for team management",
      "Inventory tracking system",
      "Job assignment & monitoring",
      "Chat supervision"
    ],
    cta: "Book Demo",
    highlight: false
  }
];
