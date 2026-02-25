import React from 'react';
import { ArrowLeft, Leaf, Droplet, Wind } from 'lucide-react';

const EnvironmentPage = ({ onBack }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold">Environmental Diseases & Vectors</h1>
      </header>

      {/* Content */}
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Mosquito-Borne Cases" value="1,842" change="+23% this month" color="text-orange-600" />
          <StatCard title="Water-Related Cases" value="456" change="+5% this week" color="text-cyan-600" />
          <StatCard title="Air Quality Index" value="Moderate" change="PM2.5: 48 µg/m³" color="text-amber-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Droplet size={20} className="text-blue-600" />
              Water-Borne Disease Reports
            </h2>
            <div className="space-y-3">
              {[
                { disease: 'Cholera', location: 'Selangor', cases: 12 },
                { disease: 'Typhoid', location: 'Penang', cases: 34 },
                { disease: 'Dengue (Water Source)', location: 'Johor', cases: 89 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.disease}</p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                  <span className="text-sm font-bold text-blue-700">{item.cases}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Wind size={20} className="text-purple-600" />
              Air Quality & Respiratory Cases
            </h2>
            <div className="space-y-3">
              {[
                { location: 'Kuala Lumpur', aqi: 'Moderate', cases: 234 },
                { location: 'Petaling Jaya', aqi: 'Poor', cases: 319 },
                { location: 'George Town', aqi: 'Good', cases: 78 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.location}</p>
                    <p className="text-xs text-gray-500">AQI: {item.aqi}</p>
                  </div>
                  <span className="text-sm font-bold text-purple-700">{item.cases} cases</span>
                </div>
              ))}
            </div>
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

export default EnvironmentPage;
