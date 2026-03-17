"use client";

import { useEffect, useState } from "react";
import { ArrowRight, GitCommit, CheckCircle, Zap, Terminal, Activity, Box, Download, Link, Layers, ShieldCheck, Github, Settings, RefreshCcw, Check, MonitorSmartphone } from "lucide-react";

function AppMockup() {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isDeploying) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 4 + Math.random() * 4;
        setProgress(Math.min(currentProgress, 100));
        if (currentProgress >= 100) {
          clearInterval(interval);
          setDeployed(true);
          setIsDeploying(false);
          setTimeout(() => {
            setDeployed(false);
            setProgress(0);
          }, 4000); 
        }
      }, 70);
      return () => clearInterval(interval);
    }
  }, [isDeploying]);

  return (
    <div className="relative w-full max-w-[480px] z-10 mx-auto lg:mr-0 pl-0 sm:pl-8 sm:pr-8 lg:pr-0 mt-8 lg:mt-0 cursor-default">
      {/* Glow */}
      <div className="absolute top-10 left-10 right-10 bottom-10 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none"></div>
      
      {/* App Window */}
      <div className="relative bg-[#0a0a0e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(99,102,241,0.1)] overflow-hidden">
        
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#ff5f56]/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#ffbd2e]/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#27c93f]/50"></div>
          </div>
          <div className="text-[11px] font-semibold tracking-wider text-white/40 flex items-center gap-1.5 uppercase">
            <Activity size={12} className="text-indigo-400" /> GitDeploy Studio
          </div>
          <div className="flex items-center gap-2 text-white/30">
             <Settings size={14} className="hover:text-white/80 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Inner Content */}
        <div className="p-5 flex flex-col gap-5">
          
          {/* Status Banner */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <Github size={20} className="text-indigo-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white/90">acme-corp/marketing</span>
                <span className="text-[11px] text-white/40 mt-0.5">Next.js Edge Setup</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 text-green-400" title="Connected">
              <RefreshCcw size={14} className={isDeploying ? "animate-spin" : ""} />
            </div>
          </div>

          {/* Branch Info */}
          <div className="flex flex-col gap-2 relative">
             <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">Target Environment</span>
                <span className="text-[11px] font-medium text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors">Change config</span>
             </div>
             <div className="group flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors cursor-pointer">
               <div className="flex items-center gap-2.5">
                 <GitCommit size={16} className="text-white/40 group-hover:text-white/70 transition-colors" />
                 <span className="text-sm text-white/80 font-mono tracking-tight">main</span>
                 <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60">PRODUCTION</span>
               </div>
               <div className="text-[11px] text-white/30 font-mono">
                 c829a1f
               </div>
             </div>
          </div>

          {/* Action Button */}
          <div className="mt-2 relative">
             <button 
               onClick={() => !isDeploying && !deployed && setIsDeploying(true)}
               disabled={isDeploying || deployed}
               className={`
                 w-full relative h-[52px] rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden group border
                 ${deployed ? 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.15)]' : 
                   isDeploying ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)]' : 
                   'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02]'}
               `}
             >
               {isDeploying && (
                 <div 
                   className="absolute left-0 top-0 bottom-0 bg-indigo-500/40 transition-all duration-75"
                   style={{ width: `${progress}%` }}
                 />
               )}
               
               <div className="relative z-10 flex items-center gap-2">
                 {deployed ? (
                   <>
                     <CheckCircle size={18} /> Deployed in 2.4s
                   </>
                 ) : isDeploying ? (
                   <>
                     <Activity size={18} className="animate-pulse" /> Pushing to Edge {Math.round(progress)}%
                   </>
                 ) : (
                   <>
                     <Zap size={18} className="fill-white/80 group-hover:fill-white transition-colors" /> ONE-CLICK PUSH
                   </>
                 )}
               </div>
             </button>
             
             {/* Ping animation behind button when idle */}
             {!isDeploying && !deployed && (
                <div className="absolute inset-0 bg-indigo-500 rounded-xl opacity-20 animate-ping -z-10" style={{ animationDuration: '3s' }}></div>
             )}
          </div>

          {/* Terminal / Output */}
          <div className="h-[100px] rounded-xl bg-black/60 border border-white/5 p-3.5 flex flex-col gap-1.5 font-mono text-[11px] text-white/40 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-50"></div>
            
            {deployed ? (
              <div className="flex flex-col gap-1.5 animate-fade-in text-green-400/80">
                <div className="flex items-center gap-2"><Check size={12} className="text-green-500" /> Successfully deployed to production</div>
                <div className="flex items-center gap-2"><Check size={12} className="text-green-500" /> URL: https://acme-corp.com</div>
                <div className="flex items-center gap-2"><Check size={12} className="text-green-500" /> Cached on 38 edge locations</div>
              </div>
            ) : isDeploying ? (
              <div className="flex flex-col gap-1.5">
                <div className="text-white/60">→ Starting deployment...</div>
                {progress > 20 && <div className="text-indigo-300 animate-fade-in">→ Building Next.js application... {Math.round(progress * 1.5)}s</div>}
                {progress > 60 && <div className="text-indigo-300 animate-fade-in">→ Optimizing assets and uploading...</div>}
                {progress > 85 && <div className="text-indigo-300 animate-fade-in">→ Invalidating edge cache...</div>}
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <div className="text-white/60">Ready to deploy.</div>
                <div className="opacity-50">Last push was 4 hours ago.</div>
                <div className="flex items-center gap-2 opacity-50 mt-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div> Waiting for action...
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Floating Elements / Tooltips connecting to UI */}
      <div className="absolute top-[8%] -left-8 sm:-left-20 bg-black/80 backdrop-blur-xl border border-white/10 px-3.5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]"></div>
        <span className="text-[13px] font-semibold text-white/90">Auto-detect framework</span>
      </div>

      <div className="absolute top-[45%] -right-4 sm:-right-16 bg-black/80 backdrop-blur-xl border border-white/10 px-3.5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 animate-float" style={{ animationDelay: "1s", zIndex: 20 }}>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"></div>
        <span className="text-[13px] font-semibold text-white/90">Zero downtime delivery</span>
      </div>

      <div className="absolute top-[80%] -left-4 sm:-left-12 bg-black/80 backdrop-blur-xl border border-white/10 px-3.5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)]"></div>
        <span className="text-[13px] font-semibold text-white/90">Real-time edge logs</span>
      </div>

    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 150);
  }, []);

  return (
    <section 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "140px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}
      className="spotlight grid-bg"
    >
      <div 
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90vw",
          height: "70vh",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: Text & CTO */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="bg-indigo-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
              GitDeploy v3.0
            </span>
            <span className="text-white/80 text-sm font-medium pr-1">
              Visual deployments & instant rollbacks
            </span>
          </div>

          <h1 
            className={`text-[clamp(48px,5.5vw,80px)] font-extrabold leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-[150ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-white">Ship Code.</span><br/>
            <span className="gradient-text">Zero Excuses.</span>
          </h1>

          <p 
            className={`text-lg lg:text-[22px] text-white/50 leading-relaxed mb-10 max-w-[580px] transition-all duration-700 delay-[300ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            The missing system-tray app for developers. Connect your repo, click push, and watch your code go live in seconds—no CI/CD configuring required. Built for speed and flow.
          </p>

          {/* Core Feature ticks */}
          <div className={`flex flex-col sm:flex-row gap-5 sm:gap-7 mb-12 transition-all duration-700 delay-[450ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-white/80 text-[15px] font-medium">
               <ShieldCheck size={20} className="text-green-400" /> Instant Rollbacks
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-white/80 text-[15px] font-medium">
               <Layers size={20} className="text-indigo-400" /> All Frameworks
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-white/80 text-[15px] font-medium">
               <Zap size={20} className="text-yellow-400" /> Auto-detect Build
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 delay-[600ms] w-full lg:w-auto ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#download" className="btn-primary shine-on-hover px-8 py-4 text-base font-semibold flex justify-center items-center gap-2.5 rounded-xl w-full sm:w-auto shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <Download size={20} /> Download for Windows
            </a>
            <a href="#how-it-works" className="btn-secondary px-8 py-4 text-base font-semibold flex justify-center items-center gap-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all w-full sm:w-auto">
              <MonitorSmartphone size={20} /> See it in action
            </a>
          </div>
          
          <div className={`mt-8 text-sm text-white/40 flex items-center justify-center lg:justify-start gap-2 transition-all duration-700 delay-[750ms] w-full lg:w-auto ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            Also available for MacOS and Linux. <Link size={15} className="hover:text-white cursor-pointer ml-1 transition-colors" />
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Demo / Mockup */}
        <div className={`relative w-full flex justify-center lg:justify-end transition-all duration-[1200ms] delay-[400ms] ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.92]'}`}>
          <AppMockup />
        </div>

      </div>

    </section>
  );
}
