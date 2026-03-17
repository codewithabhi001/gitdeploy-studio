"use client";

import { useEffect, useRef } from "react";
import { Star, Quote, Twitter } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    handle: "@arjundev",
    role: "Indie Hacker",
    avatar: "https://i.pravatar.cc/150?u=arjun",
    text: "I used to spend 3-4 minutes per deployment doing the git add/commit/push dance. GitDeploy Studio cut that to under a second. I've already saved hours this week.",
  },
  {
    name: "Priya Menon",
    handle: "@priyacodes",
    role: "Full-Stack Dev",
    avatar: "https://i.pravatar.cc/150?u=priya",
    text: "The auto-detect feature found all 23 of my projects instantly. The branch protection saved me from pushing to main at 2am. Genuinely brilliant product.",
  },
  {
    name: "Rahul Verma",
    handle: "@rahulv",
    role: "Mobile Engineer",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    text: "Building Flutter apps with rapid iterations means pushing constantly. GitDeploy Studio lives in my tray and I push from there without touching the terminal. Game changer.",
  },
  {
    name: "Sophia Chen",
    handle: "@sophia_builds",
    role: "Startup CTO",
    avatar: "https://i.pravatar.cc/150?u=sophia",
    text: "Rolled it out to the entire team. Our deployment frequency went up 40% because the friction is so low now. The rollback feature alone is worth the Pro price.",
  },
  {
    name: "Marcus Kim",
    handle: "@marcusk",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    text: "The multi-remote support is exactly what I needed. We push to GitHub for CI and to our self-hosted Gitea simultaneously. Seamless.",
  },
  {
    name: "Aisha Patel",
    handle: "@aishapatel",
    role: "Freelance Dev",
    avatar: "https://i.pravatar.cc/150?u=aisha",
    text: "As someone managing 15 client repos, this tool is a lifesaver. Everything organized, zero config, and the UI is absolutely beautiful.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 60)
            );
          }
        });
      }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto">
        <div className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 mb-6">
             <Star size={14} className="text-pink-400 fill-pink-400" />
             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">Pulse</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,56px)] font-black tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            The New <span className="gradient-text">Engineers Standard.</span>
          </h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal group relative p-8 rounded-[32px] bg-[#0a0a0e]/50 border border-white/[0.05] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="text-yellow-500 fill-yellow-500" />)}
                 </div>
                 <Twitter size={16} className="text-white/10 group-hover:text-sky-400 transition-colors" />
              </div>

              <Quote className="absolute top-10 right-10 text-white/[0.02] scale-[3]" />

              <p className="relative z-10 text-[16px] text-white/60 leading-relaxed mb-8 italic">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 overflow-hidden shrink-0 transition-transform group-hover:scale-110">
                   <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                   <div className="text-sm font-bold text-white tracking-tight">{t.name}</div>
                   <div className="text-[11px] font-bold text-white/30 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trusted By Count */}
        <div className="reveal mt-20 flex flex-col items-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
            <p className="text-sm font-bold text-white/40 tracking-widest uppercase">Trusted by 1,200+ elite software teams globally</p>
        </div>
      </div>
    </section>
  );
}
