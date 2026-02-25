import React from 'react';
import { ArrowLeft, Droplet, Wind, Activity, Globe, Zap, AlertTriangle } from 'lucide-react';

const EnvironmentPage = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
      {/* Header - Matching AnimalPage exactly */}
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Environmental Intelligence</h1>
          <p className="text-slate-400 text-sm">Climate-driven pathogen monitoring and vector surveillance.</p>
        </div>
      </header>

      {/* Content */}
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        
        {/* Educational Brief - Matching AnimalPage exactly */}
        <div className="bg-gradient-to-br from-cyan-900/20 to-transparent p-6 rounded-3xl border border-cyan-500/10">
          <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <Globe size={20} /> Ecosystem Dynamics
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Environmental factors like rainfall and temperature drive <strong>60% of vector-borne disease surges</strong>. 
            By tracking climate shifts, we anticipate outbreaks before they reach urban centers.
          </p>
        </div>

        {/* Stats - Using your StatCard component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Mosquito Density" value="High" change="+23% surge" color="text-orange-400" icon={<Activity size={18}/>} />
          <StatCard title="Water Turbidity" value="4.2" change="Post-flood monitoring" color="text-cyan-400" icon={<Droplet size={18}/>} />
          <StatCard title="Air Quality Index" value="48" change="Moderate (Good)" color="text-amber-400" icon={<Wind size={18}/>} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Surveillance Table - Styled like your Active Pathogen table */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <AlertTriangle size={20} className="text-cyan-400" />
              Climate Risk Surveillance
            </h2>
            <div className="space-y-4">
              {[
                { type: 'Dengue Hotspot', location: 'Selangor', risk: 'Critical', status: 'Rising' },
                { type: 'Water Contamination', location: 'Kelantan', risk: 'Low', status: 'Cleared' },
                { type: 'Haze Warning', location: 'Kuala Lumpur', risk: 'Mid', status: 'Active' },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center justify-between p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                  <div>
                    <p className="font-bold text-slate-100">{item.type}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${item.status === 'Rising' || item.status === 'Active' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention Protocols - Using your StepItem style */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
              <h2 className="text-lg font-bold mb-6 text-white">Environmental Protocol</h2>
              <div className="space-y-6">
                <StepItem num="01" title="Vector Abatement" desc="Eliminate stagnant water sources to break mosquito breeding cycles." />
                <StepItem num="02" title="Source Monitoring" desc="Regular testing of shared water tables for zoonotic runoff." />
                <StepItem num="03" title="Urban Cooling" desc="Implementation of green canopies to reduce heat-stress induced migration." />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Sub-components (Keep these the same as AnimalPage for total consistency)
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

export default EnvironmentPage;
