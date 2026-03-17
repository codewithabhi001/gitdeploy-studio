"use client";

import { useState, useEffect } from "react";
import { GitBranch, Menu, X, Zap, Github, Download } from "lucide-react";

const links = [
  { label: "Capabilities", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Workflow", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 px-4" 
          : "py-6 px-6"
      }`}
    >
      <div
        className={`max-w-[1240px] mx-auto rounded-2xl transition-all duration-500 flex items-center justify-between px-6 ${
          scrolled 
            ? "bg-[#060608]/80 backdrop-blur-xl border border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-4 border border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <GitBranch size={18} className="text-white" strokeWidth={3} />
          </div>
          <span className="font-bold text-lg tracking-tight text-white hidden sm:block" style={{ fontFamily: "'Syne', sans-serif" }}>
            GitDeploy<span className="text-indigo-400">.Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-bold text-white/40 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white/40 hover:text-white transition-all">
             <Github size={18} />
             <span>Star</span>
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-black uppercase tracking-widest shadow-xl hover:bg-indigo-100 transition-all hover:scale-[1.05]"
          >
            <Download size={14} />
            <span>Download</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/5 text-white hover:bg-white/10 transition-all"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-4 mx-2 p-4 rounded-2xl bg-[#09090c]/98 backdrop-blur-2xl border border-white/10 shadow-2xl lg:hidden animate-fade-in">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-white/5 my-2" />
            <a href="#" className="flex items-center justify-center gap-3 py-4 rounded-xl bg-indigo-600 text-white font-black text-xs uppercase tracking-widest">
                <Download size={16} /> Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
