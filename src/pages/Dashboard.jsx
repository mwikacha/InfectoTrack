import React, { useState } from 'react';
import { Dog, Leaf, UserCheck, Zap, Globe, Bot, LayoutDashboard, Search, TrendingUp, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import AnimalPage from './AnimalPage';
import EnvironmentPage from './EnvironmentPage';
import HealthPage from './HealthPage';

const OneHealthHub = () => {
  const [currentPage, setCurrentPage] = useState('overview');

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
          <SidebarLink icon={<LayoutDashboard size={18}/>} label="Health Dashboard" active={currentPage === 'overview'} onClick={() => setCurrentPage('overview')} />
          <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Core Sectors</div>
          <SidebarLink icon={<Dog size={18}/>} label="Animal Health" active={currentPage === 'animal'} onClick={() => setCurrentPage('animal')} />
          <SidebarLink icon={<Leaf size={18}/>} label="Environment" active={currentPage === 'environment'} onClick={() => setCurrentPage('environment')} />
          <SidebarLink icon={<UserCheck size={18}/>} label="Human Health" active={currentPage === 'health'} onClick={() => setCurrentPage('health')} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto bg-[#0F172A]">
        {currentPage === 'overview' && (
          <div className="p-8">
            <header className="flex justify-between items-start mb-10">
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight uppercase">
                  Bio-Nexus <span className="text-cyan-500">Command</span>
                </h1>
                <p className="text-slate-400 mt-2 text-sm max-w-md leading-relaxed">
                  Decoding the biological web connecting <span className="text-cyan-400">People</span>, 
                  <span className="text-emerald-400"> Animals</span>, and the 
                  <span className="text-violet-400"> Planet</span>.
                </p>
              </div>
              
              <div className="hidden md:flex flex-col items-end">
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">System: Operational</span>
                </div>
              </div>
            </header>

            {/* WHAT IS ONE HEALTH SECTION */}
            <section className="mb-10 bg-gradient-to-r from-cyan-900/20 to-transparent p-8 rounded-3xl border border-cyan-500/10">
              <div className="max-w-3xl">
                <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <Zap size={20} fill="currentColor"/> What is One Health?
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  One Health is a collaborative, multisectoral, and transdisciplinary approach recognizing the interconnection between <strong>people, animals, plants, and their shared environment.</strong>
                </p>
              </div>
            </section>

            {/* THE 3 CORE SECTORS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <MetricCard 
                title="Animal Health"
                status="Zoonotic Vector"
                desc="Monitoring wildlife and livestock to prevent disease spillover."
                icon={<Dog size={28} className="text-cyan-400" />}
                color="cyan"
                onClick={() => setCurrentPage('animal')}
              />
              <MetricCard 
                title="Environment"
                status="Ecosystem"
                desc="Tracking climate change, water safety, and deforestation impact."
                icon={<Leaf size={28} className="text-emerald-400" />}
                color="emerald"
                onClick={() => setCurrentPage('environment')}
              />
              <MetricCard 
                title="Human Health"
                status="Public Safety"
                desc="Analyzing nutrition, immunology, and vaccination trends."
                icon={<UserCheck size={28} className="text-violet-400" />}
                color="violet"
                onClick={() => setCurrentPage('health')}
              />
            </div>

            {/* TOP ZOONOTIC DISEASES WATCHLIST */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp size={20} className="text-red-400" /> 
                  Global Pathogen Watchlist
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <PathogenTile name="Tuberculosis" vector="Cattle/Deer" risk="High" trend="Increasing" color="border-orange-500/20" />
                <PathogenTile name="Malaria (P. knowlesi)" vector="Primates" risk="Critical" trend="Stable" color="border-red-500/20" />
                <PathogenTile name="Dengue Virus" vector="Mosquitoes" risk="High" trend="Monitored" color="border-purple-500/20" />
                <PathogenTile name="Rabies" vector="Dogs/Wildlife" risk="Moderate" trend="Seasonal" color="border-blue-500/20" />
              </div>
            </section>

            {/* UPDATED GEMINI AI SECTION */}
            <section className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <Bot size={24} className="text-cyan-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">Intelligence Core</h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-200 leading-relaxed italic border-l-2 border-cyan-500/30 pl-4">
                      "I am your <span className="text-cyan-400">One Health Sentinel</span>. My goal is to bridge the gap between human medicine, veterinary science, and environmental data to identify health risks before they become outbreaks."
                    </p>
                    <p className="text-slate-400 text-sm">Together, we protect the balance of our shared world.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1"><Activity size={10}/> Data Feed</p>
                      <p className="text-xs text-cyan-500 font-bold tracking-tight">Active Surveillance</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1"><ShieldCheck size={10}/> Security</p>
                      <p className="text-xs text-slate-300 font-bold tracking-tight">Biosecurity Level 4</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end space-y-6">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Suggested Investigations</p>
                    <div className="flex flex-wrap gap-2">
                      {['Climate impact on H5N1', 'Rabies prevention', 'Bat migration'].map((query) => (
                        <button key={query} className="px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700 text-[11px] text-slate-300 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">{query}</button>
                      ))}
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-focus-within:opacity-30 transition"></div>
                    <div className="relative bg-black rounded-2xl border border-slate-700">
                      <input type="text" placeholder="Query the Intelligence Core..." className="w-full bg-transparent p-4 pr-12 text-sm text-white focus:outline-none placeholder:text-slate-600 font-mono" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-cyan-600 rounded-xl text-white shadow-lg shadow-cyan-900/40 hover:bg-cyan-500 transition-all"><Zap size={18} fill="currentColor" /></button>
                    </div>
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

// SUB-COMPONENTS
const SidebarLink = ({ icon, label, active = false, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/40' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
    {icon} {label}
  </button>
);

const MetricCard = ({ title, status, desc, icon, color, onClick }) => {
  const themes = {
    cyan: 'border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/50',
    emerald: 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/50',
    violet: 'border-violet-500/20 bg-violet-500/5 hover:border-violet-500/50'
  };
  return (
    <button onClick={onClick} className={`p-6 rounded-3xl border transition-all flex flex-col h-full group text-left ${themes[color]}`}>
      <div className="mb-4">{icon}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70 text-slate-500">{status}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        Learn More <ArrowRight size={14} />
      </div>
    </button>
  );
};

const PathogenTile = ({ name, vector, risk, trend, color }) => {
  const riskColors = { 'Critical': 'text-red-400', 'High': 'text-orange-400', 'Moderate': 'text-yellow-400' };
  return (
    <div className={`p-4 rounded-xl border ${color} bg-slate-950/40 backdrop-blur-sm`}>
      <h4 className="font-bold text-white mb-2 text-sm">{name}</h4>
      <p className="text-[10px] text-slate-400 mb-3 uppercase tracking-tighter">Vector: {vector}</p>
      <div className="flex items-center justify-between border-t border-slate-800 pt-2">
        <span className={`text-[10px] font-black uppercase ${riskColors[risk]}`}>{risk}</span>
        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{trend}</span>
      </div>
    </div>
  );
};

export default OneHealthHub;