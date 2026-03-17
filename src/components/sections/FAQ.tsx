"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Is GitDeploy a CLI replacement?",
    a: "No, it's a companion. GitDeploy wraps your existing Git installation. It calls the same commands you know, but provides a high-fidelity visual interface for speed and clarity. You can switch between them instantly.",
  },
  {
    q: "Does it work with self-hosted GitLab or Gitea?",
    a: "Absolutely. If you can access it via SSH or HTTPS, GitDeploy can connect to it. We support GitHub, GitLab (Cloud & Self-Hosted), Bitbucket, Gitea, and custom bare-metal remotes.",
  },
  {
    q: "Where are my credentials stored?",
    a: "Security is our baseline. All SSH keys and OAuth tokens are stored exclusively in your operating system's native secure keychain (Windows Credential Manager or macOS Keychain). We never see your code or tokens.",
  },
  {
    q: "How does the AI commit suggestion work?",
    a: "We use a small, highly optimized local LLM that analyzes your staged diffs. It understands the 'intent' of your changes and drafts a commit message that follows best practices like Conventional Commits.",
  },
  {
    q: "Can I manage multiple accounts (Work/Personal)?",
    a: "Yes. GitDeploy allows you to switch between global Git profiles instantly, ensuring you never accidentally push work code with your personal email or vice-versa.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 30-day 'No Questions Asked' refund policy. If the tool doesn't fundamentally improve your shipping velocity, we don't want your money.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 80)
            );
          }
        });
      }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="py-24 px-6 max-w-[800px] mx-auto">
      <div className="reveal text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
           <HelpCircle size={14} className="text-indigo-400" />
           <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Support</span>
        </div>
        <h2 className="text-[clamp(32px,4vw,48px)] font-black mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          Common <span className="gradient-text">Questions.</span>
        </h2>
        <p className="text-white/40 text-lg">Everything you need to know about GitDeploy Studio.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`reveal group border rounded-[24px] overflow-hidden transition-all duration-300 ${
              open === i ? 'bg-white/[0.03] border-indigo-500/30' : 'bg-transparent border-white/5 hover:bg-white/[0.01]'
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between text-left gap-6"
            >
              <span className={`text-[17px] font-bold tracking-tight transition-colors ${open === i ? 'text-white' : 'text-white/60'} group-hover:text-white`} style={{ fontFamily: "'Syne', sans-serif" }}>
                {faq.q}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                open === i ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-white/5 border-white/10 text-white/20'
              }`}>
                {open === i ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                open === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-8 pb-8 text-[15px] leading-relaxed text-white/40">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Support Callout */}
      <div className="reveal mt-16 p-8 rounded-[32px] border border-dashed border-white/10 bg-white/[0.01] flex flex-col items-center text-center">
         <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <MessageCircle size={20} className="text-indigo-400" />
         </div>
         <h4 className="text-lg font-bold text-white mb-2">Still have questions?</h4>
         <p className="text-sm text-white/40 mb-6 max-w-[320px]">Our engineering team is ready to help you with any custom setup or questions.</p>
         <button className="text-indigo-400 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">Chat with Support →</button>
      </div>
    </section>
  );
}
