import React, { useState } from 'react';
import {
  Dog, Leaf, UserCheck, Zap, Globe, Bot, LayoutDashboard,
  TrendingUp, ArrowRight, ShieldCheck, Activity, Heart,
  AlertCircle, Droplet, Wind, AlertTriangle, ArrowLeft, Info, Sun, Droplets
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. INITIALIZE GEMINI AI
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are the One Health Sentinel. Provide concise, expert insights on the intersection of human, animal, and environmental health. Use technical but accessible language. Keep responses under 3 sentences."
}) : null;

// --- SUB-COMPONENTS (PAGE VIEWS) ---
const AnimalPage = ({ onBack }) => (
  <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
      <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
        <ArrowLeft size={24} />
      </button>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Animal Health</h1>
        <p className="text-slate-400 text-sm">Zoonotic surveillance and biosafety protocols.</p>
      </div>
    </header>

    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Container: Importance of Animals */}
      <div className="bg-gradient-to-br from-cyan-900/20 to-transparent p-8 rounded-3xl border border-cyan-500/10 shadow-2xl">
        
        {/* Top Section with Large Symbol and Text */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
         

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white-400 mb-3 flex items-center gap-3">
               Importance of Animals
            </h2>
            <p className="text-slate-300 leading-relaxed text-base max-w-3xl">
              Animals are the primary link. Monitoring animal health can predict 75% of emerging human diseases. 
              By tracking zoonotic patterns, we can establish early warning systems for public health safety.
            </p>
          </div>
        </div>

        {/* Stats Grid - Now safely nested inside the main blue box */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-cyan-500/10">
  
  {/* Box 1: Prevent Spread of Diseases */}
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
        <Activity size={20} />
      </div>
      <h3 className="text-lg font-bold text-white">Prevent Spread of Diseases</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">
      Monitoring animal health allows for early detection of zoonotic pathogens before they spill over into human populations.
    </p>
    <div className="bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/10">
      <span className="text-[10px] font-black uppercase tracking-wider text-cyan-500 block mb-1">Fun Fact</span>
      <p className="text-xs text-slate-300 italic">
        By vaccinating dogs against rabies, we can prevent transfer to people and save the lives of the 59,000 people who still die of rabies each year.
      </p>
    </div>
  </div>

  {/* Box 2: Food Security */}
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
        <TrendingUp size={20} />
      </div>
      <h3 className="text-lg font-bold text-white">Food Security</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">
      Healthy livestock ensure a stable supply of meat, milk, and eggs, protecting the livelihoods of millions of small-scale farmers.
    </p>
    <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500 block mb-1">Fun Fact</span>
      <p className="text-xs text-slate-300 italic">
        Poultry disease was associated with a 5% rise in hunger in 2019 – equal to an additional 34 million people going hungry.
      </p>
    </div>
  </div>

  {/* Box 3: Nutrition */}
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
        <ShieldCheck size={20} />
      </div>
      <h3 className="text-lg font-bold text-white">Nutrition</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">
      Animal-source foods provide essential micronutrients. Healthy animals lead to higher quality protein and better growth outcomes.
    </p>
    <div className="bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">Fun Fact</span>
      <p className="text-xs text-slate-300 italic">
        1/3rd of children are stunted and over half suffer from nutrient deficiency in areas like Sub-Saharan Africa.
      </p>
    </div>
  </div>
</div>
{/* --- SEPARATE SECTION: WHY ANIMAL HEALTH MATTERS --- */}
<section className="mt-12 space-y-6">
  {/* Section Header */}
  <div className="flex items-center gap-3">
    <div className="h-8 w-1 bg-cyan-500 rounded-full" />
    <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
      Why is Animal Health Important to Humans?
    </h2>
  </div>

  {/* New Standalone Box */}
  <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
    {/* Professional subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent pointer-events-none" />
    
    <div className="relative z-10 space-y-5">
      <p className="text-slate-200 leading-relaxed text-base">
        The health of humanity is <strong>deeply linked</strong> to the animals we share our environment with. Since over 75% of emerging infectious diseases originate in animals, their wellbeing serves as our primary <strong>biological buffer</strong>. When animal health is compromised, the risk of "spillover"—where pathogens jump to human populations—becomes a direct threat to global public safety.
      </p>

      <p className="text-slate-300 leading-relaxed text-base">
        Beyond disease prevention, healthy livestock are the foundation of <strong>global food security</strong> and economic stability. They provide essential nutrients vital for human growth and support the livelihoods of over 1.3 billion people. By prioritizing animal health, we are taking a proactive step in safeguarding our shared future.
      </p>
    </div>
  </div>
</section>
      </div>
    </div>
  </div>
  
);

const EnvironmentPage = ({ onBack }) => (
  <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
      <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
        <ArrowLeft size={24} />
      </button>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight"> Environmental Health</h1>
        <p className="text-slate-400 text-sm">Climate-driven pathogen monitoring.</p>
      </div>
    </header>
    
    {/* --- IMPORTANCE OF ENVIRONMENTAL HEALTH SECTION --- */}
<section className="mb-12 space-y-6">
  <div className="flex items-center gap-3">
    <div className="h-8 w-1 bg-emerald-500 rounded-full" />
    <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
      Importance of Keeping a Healthy Environment
    </h2>
  </div>

  <div className="bg-gradient-to-br from-emerald-900/20 to-transparent p-8 rounded-3xl border border-emerald-500/10 shadow-2xl relative overflow-hidden">
    {/* Subtle decorative background element */}
    <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none" />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
      {/* Point 1: Disease Burden Prevention */}
      <div className="space-y-3">
        <h3 className="text-emerald-400 font-bold flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">1</span>
          Disease Burden Prevention
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Nearly <strong>25% of global deaths</strong> are linked to modifiable environmental risks. Maintaining clean air and water directly prevents both infectious diseases and chronic conditions like heart disease and respiratory illnesses.
        </p>
      </div>

      {/* Point 2: Essential Ecosystem Services */}
      <div className="space-y-3">
        <h3 className="text-emerald-400 font-bold flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">2</span>
          Ecosystem Services
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Healthy ecosystems provide vital services such as <strong>natural water filtration</strong>, soil fertility, and air purification. These services are the foundation for food security and provide the basic materials required for a healthy human life.
        </p>
      </div>

      {/* Point 3: Climate & Hazard Resilience */}
      <div className="space-y-3">
        <h3 className="text-emerald-400 font-bold flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">3</span>
          Climate Resilience
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Intact landscapes like forests and wetlands act as <strong>natural barriers</strong> against extreme weather events like floods and storm surges. A stable environment reduces the stress on habitats, preventing new patterns of disease emergence.
        </p>
      </div>
    </div>
  </div>
</section>
  
  {/* --- REAL-TIME DATA SECTION --- */}
<section className="mt-12 space-y-8">
  <div className="flex flex-col gap-1">
    <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
      Live Environmental Risk Indicators
    </h2>
    <p className="text-slate-400 text-sm italic">
      Real-time environmental surveillance for proactive disease mitigation.
    </p>
  </div>
  </section>
   
   
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-emerald-500/10">

  {/* Box 1: Weather Forecast (Google Tech Integration) */}
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
        <Sun size={20} />
      </div>
      <h3 className="text-lg font-bold text-white">Weather Forecast</h3>
    </div>
    
    {/* Placeholder for Google Weather Data */}
    <div className="mb-4">
      <div className="text-3xl font-black text-white">32°C</div>
      <div className="text-orange-400 text-sm font-medium">Thunderstorms Expected</div>
    </div>

    <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow">
      Heavy rainfall increases stagnant water accumulation, directly accelerating <strong>vector transmission rates</strong> for diseases like Dengue. High humidity further stabilizes the environment for mosquito breeding cycles.
    </p>
    
    <div className="bg-orange-500/5 p-3 rounded-xl border border-orange-500/10">
      <span className="text-[10px] font-black uppercase tracking-wider text-orange-500 block mb-1">Environmental Impact</span>
      <p className="text-[11px] text-slate-300 italic">
        Intense rain events lead to soil erosion and urban runoff, potentially contaminating local water tables.
      </p>
    </div>
  </div>

  {/* Box 2: Air Quality (Google Tech Integration) */}
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
        <Wind size={20} />
      </div>
      <h3 className="text-lg font-bold text-white">Air Quality (AQI)</h3>
    </div>

    {/* Placeholder for API Data */}
    <div className="mb-4">
      <div className="text-3xl font-black text-white">48</div>
      <div className="text-cyan-400 text-sm font-medium">Status: Moderate</div>
    </div>

    <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow">
      Particulate matter (PM2.5) in the air can penetrate deep into the lungs. Prolonged exposure during haze seasons in Malaysia significantly increases risks of asthma, bronchitis, and cardiovascular strain.
    </p>

    <div className="bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/10">
      <span className="text-[10px] font-black uppercase tracking-wider text-cyan-500 block mb-1">Public Health Note</span>
      <p className="text-[11px] text-slate-300 italic">
        Vulnerable groups including children and the elderly should limit outdoor activities when AQI exceeds 100.
      </p>
    </div>
  </div>

  {/* Box 3: Water Turbidity */}
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
        <Droplets size={20} />
      </div>
      <h3 className="text-lg font-bold text-white">Water Turbidity</h3>
    </div>

    <div className="mb-4">
      <div className="text-3xl font-black text-white">4.2 <span className="text-sm font-normal text-slate-500">NTU</span></div>
      <div className="text-blue-400 text-sm font-medium">Post-Flood Monitoring</div>
    </div>

    <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow">
      Turbidity measures the cloudiness of water. High levels indicate the presence of suspended solids which can shield harmful bacteria from disinfection processes, increasing the risk of waterborne diseases.
    </p>

    <div className="bg-blue-500/5 p-3 rounded-xl border border-blue-500/10">
      <span className="text-[10px] font-black uppercase tracking-wider text-blue-500 block mb-1">Impact Analysis</span>
      <p className="text-[11px] text-slate-300 italic">
        Elevated turbidity affects aquatic life by reducing light penetration, disrupting photosynthesis in aquatic plants.
      </p>
    </div>
  </div>

</div>

  </div>
  
);

const HealthPage = ({ onBack }) => (
  <div className="flex-1 overflow-y-auto bg-[#0F172A] text-slate-200">
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 py-6 flex items-center gap-4 sticky top-0 z-10">
      <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-cyan-400">
        <ArrowLeft size={24} />
      </button>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Human Health </h1>
        <p className="text-slate-400 text-sm">What humans can do to prevent and manage disease spread.</p>
      </div>
    </header>
   <div className="p-8 space-y-8 max-w-7xl mx-auto">

    {/* --- NEW SECTION: WHAT IS ZOONOTIC DISEASE --- */}
  <section className="mb-12 space-y-6">
    <div className="flex items-center gap-3">
      <div className="h-8 w-1 bg-cyan-500 rounded-full" />
      <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
        What is Zoonotic Disease?
      </h2>
    </div>

    <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent pointer-events-none" />
      
      <div className="relative z-10 space-y-5">
        <p className="text-slate-200 leading-relaxed text-base">
          A <strong>zoonotic disease</strong> (or zoonosis) is an infectious illness that spreads between non-human animals and people. These infections are caused by harmful germs such as <strong>viruses, bacteria, parasites, and fungi</strong>. Because of our close connection to animals in our homes, agriculture, and the natural environment, these diseases represent a significant global public health challenge.
        </p>

        <p className="text-slate-300 leading-relaxed text-base">
          Zoonoses can spread through various pathways, including <strong>direct contact</strong> with an infected animal's body fluids, <strong>indirect contact</strong> with contaminated habitats, or through <strong>vectors</strong> like mosquitoes and ticks. Research indicates that more than <strong>6 out of every 10</strong> known infectious diseases in people are spread from animals, highlighting why monitoring animal health is vital for human safety.
        </p>
      </div>
    </div>
  </section>
  
  {/* TOP 5 ZOONOTIC DISEASES IN MALAYSIA SECTION */}
  <section className="space-y-6">
    <div className="flex items-center gap-3">
      <div className="h-8 w-1 bg-cyan-500 rounded-full" />
      <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
        Top 5 Zoonotic Diseases in Malaysia
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-6">
      
      {/* 1. Leptospirosis */}
      <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500/30 transition-all">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Leptospirosis</h3>
            <span className="text-[10px] px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 font-black uppercase">High Priority</span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Vector/Source</p>
              <p className="text-sm text-slate-200 font-medium">Infected rodents (rats), livestock, and pets.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How it Spreads</p>
              <p className="text-sm text-slate-200">Contact with water or soil contaminated by animal urine, especially after floods.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Symptoms</p>
              <p className="text-sm text-slate-200 italic">High fever, severe headache, muscle aches, and red eyes.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How to Prevent</p>
              <p className="text-sm text-emerald-400 font-medium">Avoid wading in flood water; maintain cleanliness to reduce rodent infestations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Monkey Malaria (P. knowlesi) */}
      <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-emerald-500/30 transition-all">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Monkey Malaria</h3>
            <span className="text-[10px] px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 font-black uppercase">Emerging Threat</span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Vector</p>
              <p className="text-sm text-slate-200 font-medium">Anopheles mosquitoes (vectors) and Macaque monkeys (natural hosts).</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How it Spreads</p>
              <p className="text-sm text-slate-200">Bite of an infected mosquito that has previously fed on infected monkeys.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Symptoms</p>
              <p className="text-sm text-slate-200 italic">Fever, chills, and rapid clinical deterioration due to a 24-hour cycle.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How to Prevent</p>
              <p className="text-sm text-emerald-400 font-medium">Use mosquito nets/repellent; minimize exposure to forested areas at dawn/dusk.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Rabies */}
      <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-red-500/30 transition-all">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold text-red-400 mb-2">Rabies</h3>
            <span className="text-[10px] px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-black uppercase">Fatal (99.9%)</span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Source</p>
              <p className="text-sm text-slate-200 font-medium">Infected dogs (89% of cases), cats, or wild animals like bats.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How it Spreads</p>
              <p className="text-sm text-slate-200">Via saliva through bites, scratches, or contact with broken skin.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Symptoms</p>
              <p className="text-sm text-slate-200 italic">Hydrophobia (fear of water), strange behavior, swallowing difficulties, and paralysis.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How to Prevent</p>
              <p className="text-sm text-emerald-400 font-medium">Vaccinate pets; wash animal bites with soap for 15 minutes and seek medical care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Avian Influenza (H5N1) */}
      <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-amber-500/30 transition-all">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold text-amber-400 mb-2">H5N1 (Bird Flu)</h3>
            <span className="text-[10px] px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 font-black uppercase">High Mortality</span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Source</p>
              <p className="text-sm text-slate-200 font-medium">Domestic poultry and wild birds.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How it Spreads</p>
              <p className="text-sm text-slate-200">Direct contact with infected poultry, their bodily fluids, or contaminated environments.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Symptoms</p>
              <p className="text-sm text-slate-200 italic">High fever, cough, sore throat, and rapid progression to severe respiratory illness.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How to Prevent</p>
              <p className="text-sm text-emerald-400 font-medium">Avoid direct contact with sick/dead birds; maintain high hygiene in poultry operations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Dengue */}
      <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-blue-500/30 transition-all">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Dengue</h3>
            <span className="text-[10px] px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 font-black uppercase">Urban Priority</span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Vector</p>
              <p className="text-sm text-slate-200 font-medium">Aedes aegypti and Aedes albopictus mosquitoes.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How it Spreads</p>
              <p className="text-sm text-slate-200">Mosquito bites human; spread is facilitated by hot and rainy seasons in urban areas.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Symptoms</p>
              <p className="text-sm text-slate-200 italic">High fever, severe headache, joint pain (break-bone fever), and rash.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">How to Prevent</p>
              <p className="text-sm text-emerald-400 font-medium">Remove stagnant water; use mosquito screens and repellents.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>
  </div>
);

// --- MAIN HUB COMPONENT ---
const OneHealthHub = () => {
  const [currentPage, setCurrentPage] = useState('overview');
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = async (textToQuery = query) => {
    if (!textToQuery.trim()) return;
    if (!apiKey) {
      setAiResponse("Missing VITE_GEMINI_API_KEY.");
      return;
    }
    setIsLoading(true);
    setAiResponse(""); 
    try {
      const result = await model.generateContent(textToQuery);
      setAiResponse(result.response.text());
    } catch (error) {
      console.error("Gemini error:", error);
      setAiResponse("System Error: Intelligence Core link failed.");
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
          <SidebarLink icon={<LayoutDashboard size={18} />} label="Hub Dashboard" active={currentPage === 'overview'} onClick={() => setCurrentPage('overview')} />
          <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Core Sectors</div>
          <SidebarLink icon={<Dog size={18} />} label="Animal " active={currentPage === 'animal'} onClick={() => setCurrentPage('animal')} />
          <SidebarLink icon={<Leaf size={18} />} label="Environment" active={currentPage === 'environment'} onClick={() => setCurrentPage('environment')} />
          <SidebarLink icon={<UserCheck size={18} />} label="Human " active={currentPage === 'health'} onClick={() => setCurrentPage('health')} />
        </nav>
      </aside>

     {/* MAIN CONTENT */}
<main className="flex-1 overflow-y-auto bg-[#0F172A]">
  {currentPage === 'overview' && (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight uppercase">
            About <span className="text-cyan-500">One Health</span>
          </h1>
          {/* Changed max-w-md to max-w-none to keep it on one line */}
          <p className="text-slate-400 mt-2 text-sm leading-relaxed max-w-none">
            The One Health Concept: Connection between <span className="text-cyan-400">People</span>,
            <span className="text-violet-400"> Animals</span>, and the <span className="text-emerald-400">Environment</span>.
          </p>
        </div>
        
        
        <div className="hidden md:flex flex-col items-end">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">System: Operational</span>
          </div>
        </div>
      </header>
      {/* --- UPDATED INFOGRAPHIC IMAGE --- */}
<div className="mb-10 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-white/5">
    <img 
        src="/one-health-info.jpg" 
        alt="One Health Infographic" 
        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
    />
</div>
      

{/* WHAT IS ONE HEALTH SECTION */}
<section className="mb-10 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group">
  <div className="flex flex-col md:flex-row gap-6 items-center">
    
    
    {/* REPLACED SYMBOL: One Health Themed Icon */}
    <div className="p-3 bg-white/10 rounded-2xl border border-slate-700 backdrop-blur-sm">
  <img 
        src="/one-health-logo-small.png" 
        alt="One Health Symbol"
        className="w-16 h-16 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
      />
</div>

    <div className="flex-1">
      <h2 className="text-lg font-bold text-white mb-2">What is One Health?</h2>
      <p className="text-slate-400 text-sm leading-relaxed max-w-4xl">
        One Health is a collaborative approach understanding that 
        <span className="text-white font-medium"> human health</span>, 
        <span className="text-white font-medium"> animal health</span>, and our shared 
        <span className="text-white font-medium"> environment</span> are part of a 
        <span className="text-white font-medium"> deeply interconnected system</span>. 
        What affects one will ultimately affect the others.
      </p>
    </div>
  </div>
</section>

            {/* SECTORS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <MetricCard title="Animal Health" status="Zoonotic Vector" desc="Wildlife & livestock surveillance." icon={<Dog size={28} className="text-cyan-400" />} color="cyan" onClick={() => setCurrentPage('animal')} />
              <MetricCard title="Environmental Health" status="Ecosystem" desc="Climate and water monitoring." icon={<Leaf size={28} className="text-emerald-400" />} color="emerald" onClick={() => setCurrentPage('environment')} />
              <MetricCard title="Human Health" status="Public Safety" desc="Monitoring disease trends and prevention methods." icon={<UserCheck size={28} className="text-violet-400" />} color="violet" onClick={() => setCurrentPage('health')} />
            </div>

            {/* INTELLIGENCE CORE (AI SECTION) */}
            <section className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-10">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20"><Bot size={24} className="text-cyan-400" /></div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">Intelligence Core</h2>
                  </div>
                  <div className="space-y-4 p-6 rounded-xl bg-slate-950/40 border border-cyan-500/10 backdrop-blur-sm">
                    <p className="text-sm text-slate-200">I am your <span className="text-cyan-400 font-semibold">One Health Sentinel</span>. Identify risks before outbreaks occur.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative group">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleQuery()} placeholder="Query the Sentinel..." className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-all" />
                    <button onClick={() => handleQuery()} disabled={isLoading} className="absolute right-3 top-2.5 p-2 bg-cyan-500 rounded-lg disabled:opacity-50">
                      {isLoading ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Zap size={18} className="text-white fill-white" />}
                    </button>
                  </div>
                  {aiResponse && (
                    <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm">
                      <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2"><Bot size={12} /> Sentinel Insight:</p>
                      <p className="text-sm text-slate-300 italic">"{aiResponse}"</p>
                    </div>
                  )}
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

export default OneHealthHub;