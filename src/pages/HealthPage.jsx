import React from 'react';
import { ArrowLeft, Heart, AlertCircle, Activity, ShieldCheck, Zap } from 'lucide-react';

const HealthPage = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
      {/* Header - Unified Dark Theme */}
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Human Health Intelligence</h1>
          <p className="text-slate-400 text-sm">Public health metrics and real-time alert systems.</p>
        </div>
      </header>

      {/* Content */}
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        
        {/* Educational Brief - Unified Style */}
        <div className="bg-gradient-to-br from-red-900/20 to-transparent p-6 rounded-3xl border border-red-500/10">
          <h2 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
            <Heart size={20} /> Community Resilience
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Human health is the final frontier of the One Health approach. Early detection of zoonotic spillovers allows for 
            <strong> rapid clinical response</strong> and containment, reducing the burden on healthcare infrastructure.
          </p>
        </div>

        {/* Stats - Reusing the consistent StatCard component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Healthcare Facilities" value="827" change="+12 this month" color="text-emerald-400" icon={<ShieldCheck size={18}/>} />
          <StatCard title="Active Patients" value="5,234" change="+340 today" color="text-cyan-400" icon={<Activity size={18}/>} />
          <StatCard title="Recovery Rate" value="92.3%" change="+1.2% vs last week" color="text-blue-400" icon={<Zap size={18}/>} />
        </div>

        {/* Health Alert System - Styled like your Surveillance Tables */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
            <AlertCircle size={20} className="text-red-500" />
            Active Health Alerts
          </h2>
          <div className="space-y-4">
            {[
              { alert: 'High fever outbreak in Kuala Lumpur', severity: 'High', affected: '234' },
              { alert: 'Respiratory cases increasing in Penang', severity: 'Medium', affected: '128' },
              { alert: 'Vaccination campaign in Malacca', severity: 'Low', affected: 'N/A' },
            ].map((item, idx) => (
              <div key={idx} className="group flex items-start gap-4 p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-red-500/30 transition-all">
                <div className={`mt-1 p-2 rounded-lg ${item.severity === 'High' ? 'bg-red-500/10 text-red-500' : item.severity === 'Medium' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'}`}>
                  <AlertCircle size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-100 group-hover:text-white transition-colors">{item.alert}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{item.affected} individuals tracked</p>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase border ${
                    item.severity === 'High' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                    item.severity === 'Medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {item.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable StatCard (Same as Animal & Environment for 100% consistency)
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

export default HealthPage;
