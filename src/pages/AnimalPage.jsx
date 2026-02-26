import React from 'react';
import { ArrowLeft, Pill, TrendingUp, ShieldCheck, Activity, Globe } from 'lucide-react';

const AnimalPage = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Animal  </h1>
          <p className="text-slate-400 text-sm">Zoonotic surveillance and biosafety protocols.</p>
        </div>
      </header>

      {/* Content */}
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        
        {/* Educational Brief */}
        <div className="bg-gradient-to-br from-cyan-900/20 to-transparent p-6 rounded-3xl border border-cyan-500/10">
          <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <Globe size={20} /> The One Health Connection
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Animals are the primary link in the One Health chain. By monitoring animal health, we can predict and prevent 
            <strong> 75% of emerging human diseases</strong>. Protecting them protects us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Cases" value="342" change="+8% increase" color="text-cyan-400" icon={<Activity size={18}/>} />
          <StatCard title="Active Outbreaks" value="12" change="Livestock focus" color="text-emerald-400" icon={<TrendingUp size={18}/>} />
          <StatCard title="Biosecurity Level" value="Level 2" change="Pre-cautionary" color="text-amber-400" icon={<ShieldCheck size={18}/>} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Disease Table */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <Pill size={20} className="text-cyan-400" />
              Active Pathogen Surveillance
            </h2>
            <div className="space-y-4">
              {[
                { disease: 'Avian Influenza (H5N1)', location: 'Perak', risk: 'High', status: 'Active' },
                { disease: 'Foot and Mouth Disease', location: 'Selangor', risk: 'Low', status: 'Controlled' },
                { disease: 'Newcastle Disease', location: 'Johor', risk: 'Mid', status: 'Active' },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center justify-between p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                  <div>
                    <p className="font-bold text-slate-100">{item.disease}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${item.status === 'Active' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention Steps Card */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
             <h2 className="text-lg font-bold mb-6 text-white">Prevention Protocol</h2>
             <div className="space-y-6">
                <StepItem num="01" title="Vaccination" desc="Immunize pets and livestock to break the chain of infection." />
                <StepItem num="02" title="Habitat Protection" desc="Limit human encroachment into wildlife zones to prevent spillover." />
                <StepItem num="03" title="Waste Management" desc="Secure disposal of animal waste to protect local water sources." />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ title, value, change, color, icon }) => (
  <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{title}</h3>
      <div className={`${color} opacity-80`}>{icon}</div>
    </div>
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
    <p className="text-xs text-slate-500 mt-2">{change}</p>
  </div>
);

const StepItem = ({ num, title, desc }) => (
  <div className="flex gap-4">
    <span className="text-cyan-500 font-black text-xl opacity-50">{num}</span>
    <div>
      <h4 className="font-bold text-slate-200">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default AnimalPage;