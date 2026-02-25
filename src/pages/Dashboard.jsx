import React, { useState } from 'react';
import {
  Dog, Leaf, UserCheck, Zap, Globe, Bot, LayoutDashboard,
  TrendingUp, ArrowRight, ShieldCheck, Activity, Heart,
  AlertCircle, Droplet, Wind, AlertTriangle
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. INITIALIZE GEMINI AI
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
  systemInstruction: "You are the One Health Sentinel. Provide concise, expert insights on the intersection of human, animal, and environmental health. Use technical but accessible language. Keep responses under 3 sentences."
}) : null;

// --- SUB-COMPONENTS (PAGE VIEWS) ---

const AnimalPage = ({ onBack }) => (
  <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
      <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
        <ArrowLeftIcon size={24} />
      </button>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Animal Health Interface</h1>
        <p className="text-slate-400 text-sm">Zoonotic surveillance and biosafety protocols.</p>
      </div>
    </header>
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-cyan-900/20 to-transparent p-6 rounded-3xl border border-cyan-500/10">
        <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2"><Globe size={20} /> The One Health Connection</h2>
        <p className="text-slate-300 leading-relaxed text-sm">Animals are the primary link. Monitoring animal health can predict 75% of emerging human diseases.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Cases" value="342" change="+8% increase" color="text-cyan-400" icon={<Activity size={18} />} />
        <StatCard title="Active Outbreaks" value="12" change="Livestock focus" color="text-emerald-400" icon={<TrendingUp size={18} />} />
        <StatCard title="Biosecurity Level" value="Level 2" change="Pre-cautionary" color="text-amber-400" icon={<ShieldCheck size={18} />} />
      </div>
    </div>
  </div>
);

const EnvironmentPage = ({ onBack }) => (
  <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
      <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
        <ArrowLeftIcon size={24} />
      </button>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Environmental Intelligence</h1>
        <p className="text-slate-400 text-sm">Climate-driven pathogen monitoring.</p>
      </div>
    </header>
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Mosquito Density" value="High" change="+23% surge" color="text-orange-400" icon={<Activity size={18} />} />
        <StatCard title="Water Turbidity" value="4.2" change="Post-flood monitoring" color="text-cyan-400" icon={<Droplet size={18} />} />
        <StatCard title="Air Quality Index" value="48" change="Moderate (Good)" color="text-amber-400" icon={<Wind size={18} />} />
      </div>
    </div>
  </div>
);

const HealthPage = ({ onBack }) => (
  <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
      <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
        <ArrowLeftIcon size={24} />
      </button>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Human Health Intelligence</h1>
        <p className="text-slate-400 text-sm">Public health metrics and alert systems.</p>
      </div>
    </header>
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Healthcare Facilities" value="827" change="+12 this month" color="text-emerald-400" icon={<ShieldCheck size={18} />} />
        <StatCard title="Active Patients" value="5,234" change="+340 today" color="text-cyan-400" icon={<Activity size={18} />} />
        <StatCard title="Recovery Rate" value="92.3%" change="+1.2% vs last week" color="text-blue-400" icon={<Zap size={18} />} />
      </div>
    </div>
  </div>
);

// --- MAIN HUB COMPONENT ---

const OneHealthHub = () => {
  const [currentPage, setCurrentPage] = useState('overview');
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. AI QUERY LOGIC
  const handleQuery = async (textToQuery = query) => {
    if (!textToQuery.trim()) return;
    if (!apiKey) {
      setAiResponse("Missing VITE_GEMINI_API_KEY. Add it to your .env(.local) and restart the dev server.");
      return;
    }
    if (!model) {
      setAiResponse("Gemini model not initialized. Check API key and restart the dev server.");
      return;
    }
    setIsLoading(true);
    setAiResponse(""); // Clear previous
    try {
      const result = await model.generateContent(textToQuery);
      setAiResponse(result.response.text());
    } catch (error) {
      console.error("Gemini error:", error);
      const message = error?.message || "System Error: Intelligence Core link failed.";
      if (message.includes("models/") && message.includes("not found")) {
        setAiResponse("Model not available for this key. Check Gemini API access and project quotas in Google Cloud Console.");
      } else {
        setAiResponse(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#0F172A] text-slate-200 font-sans selection:bg-cyan-500/30">

      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-cyan-500 p-2 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Globe size={22} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">OneHealth Hub</span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarLink icon={<LayoutDashboard size={18} />} label="Health Dashboard" active={currentPage === 'overview'} onClick={() => setCurrentPage('overview')} />
          <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Core Sectors</div>
          <SidebarLink icon={<Dog size={18} />} label="Animal Health" active={currentPage === 'animal'} onClick={() => setCurrentPage('animal')} />
          <SidebarLink icon={<Leaf size={18} />} label="Environment" active={currentPage === 'environment'} onClick={() => setCurrentPage('environment')} />
          <SidebarLink icon={<UserCheck size={18} />} label="Human Health" active={currentPage === 'health'} onClick={() => setCurrentPage('health')} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto bg-[#0F172A]">
        {currentPage === 'overview' && (
          <div className="p-8 max-w-7xl mx-auto">
            <header className="flex justify-between items-start mb-10">
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight uppercase">
                  One Health <span className="text-cyan-500">Intelligence</span>
                </h1>
                <p className="text-slate-400 mt-2 text-sm max-w-md leading-relaxed">
                  Decoding the biological web connecting <span className="text-cyan-400">People</span>,
                  <span className="text-emerald-400"> Animals</span>, and the <span className="text-violet-400"> Planet</span>.
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end">
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">System: Operational</span>
                </div>
              </div>
            </header>

            {/* SECTORS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <MetricCard title="Animal Health" status="Zoonotic Vector" desc="Wildlife & livestock surveillance." icon={<Dog size={28} className="text-cyan-400" />} color="cyan" onClick={() => setCurrentPage('animal')} />
              <MetricCard title="Environment" status="Ecosystem" desc="Climate and water monitoring." icon={<Leaf size={28} className="text-emerald-400" />} color="emerald" onClick={() => setCurrentPage('environment')} />
              <MetricCard title="Human Health" status="Public Safety" desc="Immunology & clinical trends." icon={<UserCheck size={28} className="text-violet-400" />} color="violet" onClick={() => setCurrentPage('health')} />
            </div>

            {/* INTELLIGENCE CORE (AI SECTION) */}
            <section className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20"><Bot size={24} className="text-cyan-400" /></div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-tight">Intelligence Core</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-4 p-6 rounded-xl bg-slate-950/40 border border-cyan-500/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Sentinel Active</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      I am your <span className="text-cyan-400 font-semibold">One Health Sentinel</span>.
                      Bridge gaps between species and environments to identify risks before outbreaks occur.
                    </p>
                  </div>

                  {/* AI INTERACTION AREA */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Suggested Investigations</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Tuberculosis Trends', 'Zoonotic Risks', 'Climate & Pathogens'].map((tag) => (
                          <button key={tag} onClick={() => { setQuery(tag); handleQuery(tag); }} className="px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-[11px] text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">{tag}</button>
                        ))}
                      </div>
                    </div>
                    <div className="relative group">
                      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleQuery()} placeholder="Query the Sentinel..." className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-all shadow-inner" />
                      <button onClick={() => handleQuery()} disabled={isLoading} className="absolute right-3 top-2.5 p-2 bg-cyan-500 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:opacity-50">
                        {isLoading ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Zap size={18} className="text-white fill-white" />}
                      </button>
                    </div>
                    {aiResponse && (
                      <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm animate-in fade-in slide-in-from-top-4">
                        <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Bot size={12} /> Sentinel Insight:</p>
                        <p className="text-sm text-slate-300 italic">"{aiResponse}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'animal' && <AnimalPage onBack={() => setCurrentPage('overview')} />}
        {currentPage === 'environment' && <EnvironmentPage onBack={() => setCurrentPage('overview')} />}
        {currentPage === 'health' && <HealthPage onBack={() => setCurrentPage('overview')} />}
      </main>
    </div>
  );
};

// --- HELPERS ---
const SidebarLink = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/40' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
    {icon} {label}
  </button>
);

const MetricCard = ({ title, status, desc, icon, color, onClick }) => {
  const themes = { cyan: 'border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/50', emerald: 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/50', violet: 'border-violet-500/20 bg-violet-500/5 hover:border-violet-500/50' };
  return (
    <button onClick={onClick} className={`p-6 rounded-3xl border transition-all flex flex-col h-full text-left group ${themes[color]}`}>
      <div className="mb-4">{icon}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-slate-500">{status}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-cyan-400 opacity-80 group-hover:translate-x-1 transition-all">Learn More <ArrowRight size={14} /></div>
    </button>
  );
};

const StatCard = ({ title, value, change, color, icon }) => (
  <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{title}</h3>
      <div className={`${color} opacity-80`}>{icon}</div>
    </div>
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
    <p className="text-xs text-slate-500 mt-2">{change}</p>
  </div>
);

// Re-using these from your code
const ArrowLeftIcon = ({ size }) => <ArrowLeft size={size} />;
import { ArrowLeft } from 'lucide-react';

export default OneHealthHub;