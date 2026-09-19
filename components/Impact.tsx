import React, { useState } from 'react';
import { SEASONS_IMPACT, FEATURED_PROJECTS, DISTINGUISHED_GUESTS } from '../constants';

const Impact: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-3">
          Proven Track Record • Measurable Change
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-6">
          SEASONS AT <br />
          <span className="text-red-600 italic">A GLANCE</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          Every rupee raised in the Chennai Youth Assembly directly transforms lives through rigorous ground execution aligned with United Nations Sustainable Development Goals.
        </p>
      </div>

      {/* Seasons Comparison Table / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {SEASONS_IMPACT.map((item, idx) => (
          <div
            key={idx}
            className={`p-8 border transition-all ${
              item.highlight
                ? 'bg-zinc-950 border-red-600/60 relative overflow-hidden shadow-xl shadow-red-950/20'
                : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-700'
            }`}
          >
            {item.highlight && (
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                  Record Impact
                </span>
              </div>
            )}
            <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">
              {item.season}
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs text-zinc-500 uppercase font-black tracking-wider">Project Spend</p>
                <p className="text-3xl font-black text-white tracking-tight mt-1">{item.spend}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">No. of Projects</p>
                  <p className="text-2xl font-black text-white mt-0.5">{item.projects}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Total Impact</p>
                  <p className="text-xl font-black text-red-500 mt-0.5">{item.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Projects from CYA IV */}
      <div className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
              CYA IV Ground Deployments
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white">
              Some Projects Done in CYA IV
            </h3>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Delivering direct social ROI
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProject(idx)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider smooth-transition cursor-pointer ${
                selectedProject === idx
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white hover:border-zinc-700'
              }`}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Selected Project Showcase (No images, clean typography) */}
        {FEATURED_PROJECTS[selectedProject] && (
          <div className="bg-zinc-950 border border-zinc-900 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-zinc-900 gap-4 relative z-10">
              <div>
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                  Ground Execution Case Study
                </span>
                <h4 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  {FEATURED_PROJECTS[selectedProject].name}
                </h4>
              </div>
              <span className="px-4 py-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-black uppercase tracking-widest self-start md:self-auto">
                {FEATURED_PROJECTS[selectedProject].sdg}
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 max-w-4xl font-medium">
                {FEATURED_PROJECTS[selectedProject].description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
                <div className="bg-black/60 border border-zinc-900/80 p-5 rounded-sm">
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Total Project Budget</p>
                  <p className="text-2xl font-black text-white mt-1">
                    {FEATURED_PROJECTS[selectedProject].budget}
                  </p>
                </div>
                <div className="bg-black/60 border border-zinc-900/80 p-5 rounded-sm">
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Lives Directly Impacted</p>
                  <p className="text-2xl font-black text-red-500 mt-1">
                    {FEATURED_PROJECTS[selectedProject].impacted}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1 bg-black/60 border border-zinc-900/80 p-5 rounded-sm">
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Execution Season</p>
                  <p className="text-2xl font-black text-white mt-1">
                    CYA IV
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Distinguished Guests of CYA */}
      <div className="border-t border-zinc-900 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
            Eminent Convocation Presence
          </span>
          <h3 className="text-3xl font-black uppercase text-white tracking-tight">
            Distinguished Guests of CYA
          </h3>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">
            Ministers, UN Advisors, Journalists & Social Visionaries who shaped past assemblies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DISTINGUISHED_GUESTS.map((guest, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 p-6 hover:border-zinc-700 smooth-transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-2 block">
                  {guest.season}
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                  {guest.name}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {guest.title}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center gap-2 text-zinc-600 text-[10px] font-bold uppercase tracking-wider">
                <i className="fa-solid fa-certificate text-red-600 text-xs"></i>
                <span>Assembly Guest</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
