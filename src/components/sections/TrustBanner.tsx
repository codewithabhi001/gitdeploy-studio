"use client";

const techStack = [
  "Next.js", "React", "Node.js", "TypeScript", "Vercel", "AWS", "GitHub", "GitLab", 
  "Bitbucket", "Netlify", "Astro", "Turbo", "Python", "Rust", "Docker", "Svelte"
];

export default function TrustBanner() {
  const doubled = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-12 bg-[#08080c] border-y border-white/[0.03] overflow-hidden group">
      <div className="max-w-[1240px] mx-auto px-6 mb-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/30">
          Native Integrity
        </span>
        <div className="h-px w-8 bg-white/10 hidden md:block" />
        <p className="text-sm font-bold text-white/60">
          Engineered for every stack, remote, and environment.
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08080c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08080c] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex animate-marquee group-hover:pause-animation">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-10 py-2 transition-all duration-300 hover:scale-110"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <span className="text-lg font-bold text-white/20 whitespace-nowrap italic tracking-tighter hover:text-white/60 transition-colors uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
