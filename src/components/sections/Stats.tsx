"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Zap, Globe } from "lucide-react";

const stats = [
  { value: 1.2, suffix: "M+", label: "Daily Deployments", icon: <TrendingUp size={18} />, color: "text-indigo-400" },
  { value: 0.8, suffix: "s", label: "Average Push", icon: <Zap size={18} />, color: "text-yellow-400" },
  { value: 12, suffix: "k+", label: "Active Engineers", icon: <Users size={18} />, color: "text-blue-400" },
  { value: 99.9, suffix: "%", label: "Uptime Protocol", icon: <Globe size={18} />, color: "text-emerald-400" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const isDecimal = target % 1 !== 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return count;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      }, { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0a0a0e]/30 border-y border-white/[0.03]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="relative group text-center md:text-left flex flex-col items-center md:items-start p-6 rounded-3xl transition-all duration-300 hover:bg-white/[0.02]">
              <div className={`mb-6 p-3 rounded-2xl bg-white/[0.03] border border-white/5 ${stat.color} transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[44px] md:text-[56px] font-black tracking-tighter text-white leading-none italic" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <StatCounter value={stat.value} animate={animate} />
                </span>
                <span className="text-xl md:text-2xl font-black text-indigo-500 italic">{stat.suffix}</span>
              </div>

              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                {stat.label}
              </div>

              {/* Decorative separator for desktop */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, animate }: { value: number, animate: boolean }) {
  const count = useCountUp(value, 2000, animate);
  return <>{value % 1 !== 0 ? count.toFixed(1) : count}</>;
}
