"use client";

import { useEffect, useRef } from "react";
import { Zap, ArrowRight, Download, Monitor, CheckCircle } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 120)
            );
          }
        });
      }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 max-w-[1240px] mx-auto">
      <div className="reveal relative rounded-[48px] bg-[#050507] border border-white/5 overflow-hidden shadow-2xl">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-1/2 bg-white/[0.02] border-t border-x border-white/5 rounded-t-[100px] pointer-events-none" />

        <div className="relative z-10 px-8 py-20 text-center">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 transition-transform hover:scale-105 cursor-default">
                <Zap size={14} className="text-indigo-400 fill-indigo-400" />
                <span className="text-[11px] font-black tracking-[0.2em] text-white/80">ULTIMATE VELOCITY</span>
            </div>

            <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to <span className="gradient-text">Change Your Flow?</span>
            </h2>

            <p className="text-lg md:text-xl text-white/40 max-w-[600px] mx-auto leading-relaxed mb-12">
                Join 12,000+ top-tier engineers who have reclaimed their focus. Stop fighting Git, start shipping software.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="#" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-indigo-100 transition-all hover:scale-[1.03]">
                    Download Executive v3.0
                </a>
                <a href="#pricing" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 text-white/80 border border-white/10 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                    Explore Enterprise
                </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/20">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                    <Monitor size={14} /> Available on Win/Mac/Linux
                </div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                    <CheckCircle size={14} /> Full Private Beta Access
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center">
                <div className="flex -space-x-3 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-indigo-600 flex items-center justify-center text-[10px] font-black text-white">
                        +2k
                    </div>
                </div>
                <p className="text-xs text-white/30 font-bold uppercase tracking-widest">Growing by 200+ users every day</p>
            </div>
        </div>
      </div>
    </section>
  );
}
