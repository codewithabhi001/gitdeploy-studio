"use client";

import { GitBranch, Twitter, Github, Linkedin, Slack } from "lucide-react";

const footerLinks = {
  Capabilities: ["Fast Push", "Edge Distribution", "AI Commit", "Atomic Reverts", "Auto-Detect"],
  Ecosystem: ["VS Code Plugin", "JetBrains Support", "Browser Extension", "API Access"],
  Resources: ["Documentation", "CLI Reference", "Changelog", "Security Lab"],
  Legal: ["Privacy", "Terms", "SLA", "Enterprise Policy"],
};

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-[#030305] border-t border-white/[0.03]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center transition-transform group-hover:rotate-12">
                   <GitBranch size={18} className="text-black" strokeWidth={3} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                 GitDeploy<span className="text-white/40">.Studio</span>
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-[240px] mb-8">
               Empowering developers to ship at the speed of thought. The missing link in your Git workflow.
            </p>
            <div className="flex gap-3">
               {[Twitter, Github, Slack, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20 mb-6">{category}</h4>
              <ul className="space-y-4">
                 {links.map(link => (
                   <li key={link}>
                      <a href="#" className="text-sm font-bold text-white/40 hover:text-indigo-400 transition-colors">{link}</a>
                   </li>
                 ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[13px] text-white/20 font-medium">
              © 2026 GitDeploy Studio <span className="mx-2 text-white/5">|</span> All Rights Reserved
           </div>
           <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 <span className="text-[11px] font-black uppercase tracking-widest text-white/60">Node Status: 100%</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-2">
                 <span className="text-[11px] font-black uppercase tracking-widest text-white/40">Lat: 12ms</span>
              </div>
           </div>
           <div className="flex gap-6">
              <a href="#" className="text-[13px] font-bold text-white/20 hover:text-white transition-colors">v3.0.42</a>
              <a href="#" className="text-[13px] font-bold text-white/20 hover:text-white transition-colors">Server Time: EDGE</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
