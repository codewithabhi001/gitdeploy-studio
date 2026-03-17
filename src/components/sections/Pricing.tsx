"use client";

import { useState, useEffect, useRef } from "react";
import { Check, Zap, Crown, Building2, Star, ShieldCheck, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Independent",
    icon: <Zap size={18} />,
    price: { monthly: 0, yearly: 0 },
    desc: "For solo developers building at the speed of thought.",
    cta: "Start Free",
    ctaStyle: "secondary",
    features: [
      "Up to 3 local repos",
      "One-click sync",
      "Native system tray app",
      "Standard branch protection",
      "SSH Key Management",
    ],
    color: "slate",
  },
  {
    name: "Engineering",
    icon: <Crown size={18} />,
    price: { monthly: 24, yearly: 16 },
    desc: "The professional toolkit for serious high-speed shipping.",
    cta: "Launch Pro Trial",
    ctaStyle: "primary",
    featured: true,
    badge: "RECOMMENDED",
    features: [
      "Unlimited repositories",
      "AI-Powered Commit Messages",
      "Instant Edge Rollbacks",
      "Multi-Remote Concurrent Push",
      "Deployment Health Analytics",
      "Priority API access",
      "Dark Mode Exclusive UI",
    ],
    color: "indigo",
  },
  {
    name: "Organization",
    icon: <Building2 size={18} />,
    price: { monthly: 60, yearly: 44 },
    desc: "Centralized control for teams that ship without friction.",
    cta: "Contact Sales",
    ctaStyle: "secondary",
    features: [
      "Everything in Engineering",
      "Team-wide Build Logs",
      "Shared Environment Configs",
      "Custom Webhook Integration",
      "SAML & SSO Auth",
      "Dedicated Infrastructure",
      "SLA Support (99.9%)",
    ],
    color: "emerald",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 150)
            );
          }
        });
      }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Fair Tiers</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold mb-6 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Invest in <span className="gradient-text">Your Velocity.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-[500px] mx-auto leading-relaxed mb-12">
            Choose the plan that matches your ambition. No hidden fees, cancel any time.
          </p>

          {/* New Toggle Style */}
          <div className="relative inline-flex p-1 bg-white/[0.03] border border-white/5 rounded-2xl">
             <div 
               className="absolute top-1 bottom-1 transition-all duration-300 ease-in-out bg-indigo-600 rounded-xl"
               style={{ 
                 left: isYearly ? 'calc(50% + 4px)' : '4px', 
                 width: 'calc(50% - 8px)' 
               }}
             />
             <button 
               onClick={() => setIsYearly(false)}
               className={`relative z-10 px-8 py-3 text-sm font-bold transition-colors ${!isYearly ? 'text-white' : 'text-white/30'}`}
             >
               Monthly
             </button>
             <button 
               onClick={() => setIsYearly(true)}
               className={`relative z-10 px-8 py-3 text-sm font-bold flex items-center gap-2 transition-colors ${isYearly ? 'text-white' : 'text-white/30'}`}
             >
               Yearly <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">SAVE 35%</span>
             </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal relative flex flex-col p-10 rounded-[40px] border transition-all duration-500 ${
                plan.featured 
                  ? 'bg-[#0a0a12] border-indigo-500/40 shadow-[0_32px_80px_-20px_rgba(99,102,241,0.3)] scale-[1.05]' 
                  : 'bg-white/[0.01] border-white/5 hover:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black tracking-[0.2em] text-white shadow-xl">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                 <div className="text-[12px] font-black uppercase tracking-[0.25em] text-white/30 mb-2">{plan.name}</div>
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-white/20 font-medium">/mo</span>
                 </div>
                 <p className="mt-4 text-sm text-white/40 leading-relaxed min-h-[40px]">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-10">
                 {plan.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-[15px] text-white/60">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${plan.featured ? 'bg-indigo-500/20 border-indigo-500/30' : 'bg-white/5 border-white/10'}`}>
                         <Check size={12} className={plan.featured ? 'text-indigo-400' : 'text-white/30'} />
                      </div>
                      {feature}
                   </div>
                 ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                plan.ctaStyle === 'primary' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]' 
                  : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="reveal mt-16 flex flex-col md:flex-row items-center justify-center gap-10 text-white/20">
            <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheck size={18} /> 30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
                <Star size={18} className="text-yellow-500/30 fill-yellow-500/30" /> Loved by 10k+ developers
            </div>
            <div className="flex items-center gap-2 text-sm font-medium cursor-help">
                <HelpCircle size={18} /> Support included in every plan
            </div>
        </div>

        {/* Lifetime deal teaser */}
        <div className="reveal mt-8 group relative p-0.5 rounded-3xl bg-gradient-to-r from-red-500/40 via-purple-500/40 to-blue-500/40 max-w-[800px] mx-auto overflow-hidden">
             <div className="bg-[#050507] rounded-[22px] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors group-hover:bg-[#08080c]">
                 <div className="text-center sm:text-left">
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-1">Limited Engagement</div>
                     <div className="text-lg font-bold text-white">Founder Edition: $99 Forever</div>
                     <p className="text-sm text-white/30">Get the full Engineering suite for life. Only 50 spots remaining.</p>
                 </div>
                 <button className="px-6 py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-indigo-200 transition-colors">Claim Access</button>
             </div>
        </div>

      </div>
    </section>
  );
}
