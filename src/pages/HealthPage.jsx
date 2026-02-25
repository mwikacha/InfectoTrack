import React from 'react';
import { ArrowLeft, Heart, AlertCircle } from 'lucide-react';

const HealthPage = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold">Public Health Metrics</h1>
      </header>

      {/* Content */}
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Healthcare Facilities" value="827" change="+12 this month" color="text-green-600" />
          <StatCard title="Active Patients" value="5,234" change="+340 today" color="text-blue-600" />
          <StatCard title="Recovery Rate" value="92.3%" change="+1.2% vs last week" color="text-emerald-600" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Heart size={20} className="text-red-600" />
            Health Alert System
          </h2>
          <div className="space-y-4">
            {[
              { alert: 'High fever outbreak in Kuala Lumpur', severity: 'High', affected: '234' },
              { alert: 'Respiratory cases increasing in Penang', severity: 'Medium', affected: '128' },
              { alert: 'Vaccination campaign in Malacca', severity: 'Low', affected: 'N/A' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <AlertCircle size={20} className={`mt-1 flex-shrink-0 ${item.severity === 'High' ? 'text-red-600' : item.severity === 'Medium' ? 'text-yellow-600' : 'text-blue-600'}`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.alert}</p>
                  <p className="text-sm text-gray-500">{item.affected} affected</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${item.severity === 'High' ? 'bg-red-100 text-red-700' : item.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                  {item.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    <p className="text-xs text-gray-400 mt-1">{change}</p>
  </div>
);

export default HealthPage;
