import React from 'react';
import { CONTACTS } from '../constants';

const Leadership: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-3">
          Governance & Direction
        </span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Chairpeople & <span className="text-red-600 italic">SPOC</span>
        </h2>
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          CYA Season V Leadership Council
        </p>
      </div>

      {/* Executive Board Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
        {CONTACTS.map((member, idx) => (
          <div
            key={idx}
            className="bg-zinc-950 border border-zinc-900 group hover:border-red-900/60 transition-all flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Photo / Executive Monogram Area */}
              <div className="h-56 sm:h-64 w-full bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden flex items-center justify-center border-b border-zinc-900">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent"></div>
                    <div className="h-20 w-20 rounded-full bg-black/80 border-2 border-red-600/40 flex items-center justify-center text-white text-2xl font-black mb-3 shadow-lg shadow-red-950/40 relative z-10 group-hover:border-red-500 transition-colors">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-500 relative z-10">
                      CYA Season V Leadership
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-8">
                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                  {member.role}
                </p>
                <p className="text-xs text-zinc-500 mt-4 leading-relaxed font-medium">
                  Leading strategy, youth delegate coordination, and ground execution for Chennai Youth Assembly Season V.
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="p-8 pt-0">
              <a
                href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-3 bg-zinc-900 text-zinc-300 hover:bg-red-600 hover:text-white font-black uppercase tracking-widest text-[10px] smooth-transition flex items-center justify-center gap-2 border border-zinc-800"
              >
                <i className="fa-solid fa-phone text-xs"></i>
                <span>{member.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Chair & Vice Chairs of Projects (COP & VCOPs) Showcase */}
      <div className="border-t border-zinc-900 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/40 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.25em]">
              CYA Season V • Phase I
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Chair & Vice Chairs <span className="text-red-600 italic">of Projects</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
            Leading project execution and SDG initiatives exclusively for <span className="text-white font-bold">CYA Season V Phase I</span>.
          </p>
        </div>

        {/* Feature Group Photograph Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-red-950/20 mb-8 group">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[560px] bg-black overflow-hidden flex items-center justify-center">
            <img
              src="/images/cop-and-vcop.jpg"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('cop&vcops.JPG')) {
                  target.src = '/images/cop&vcops.JPG';
                }
              }}
              alt="Chair of Projects & Vice Chairs of Projects - CYA Season V Phase I"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            {/* Overlay Banner along bottom of image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 z-10 pointer-events-none">
              <div>
                <span className="px-3 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-sm mb-1.5 inline-block">
                  Season V Phase I Directorate
                </span>
                <h3 className="text-white text-base sm:text-2xl font-black uppercase tracking-wide drop-shadow-lg">
                  Chair & Vice Chairs of Projects
                </h3>
              </div>
              <span className="text-[10px] text-zinc-400 font-semibold tracking-wider bg-black/70 px-3 py-1 backdrop-blur-md border border-white/10 rounded-sm">
                From Left to Right
              </span>
            </div>
          </div>

          {/* Under-Photo Order of Names (From Left to Right) */}
          <div className="p-6 sm:p-8 bg-zinc-950 border-t border-zinc-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* 1. B Sahasra */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black text-cyan-400 bg-cyan-950/60 border border-cyan-800/60">
                      SDG 6
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      VCOP
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">
                    B Sahasra
                  </h4>
                  <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mt-0.5">
                    Vice Chair of Projects
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/60">
                  <span className="text-[11px] text-zinc-300 font-medium block">
                    Clean Water and Sanitation
                  </span>
                </div>
              </div>

              {/* 2. Sri ram S */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black text-amber-400 bg-amber-950/60 border border-amber-800/60">
                      SDG 8
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      VCOP
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">
                    Sri ram S
                  </h4>
                  <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mt-0.5">
                    Vice Chair of Projects
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/60">
                  <span className="text-[11px] text-zinc-300 font-medium block">
                    Decent Work and Economic Growth
                  </span>
                </div>
              </div>

              {/* 3. Tanushree Jaiganesh */}
              <div className="p-4 rounded-lg bg-gradient-to-b from-red-950/30 to-zinc-900/80 border border-red-600/50 hover:border-red-500 transition-all shadow-lg shadow-red-950/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black text-red-300 bg-red-900/60 border border-red-700/80">
                      Directorate
                    </span>
                    <span className="text-[10px] text-red-400 font-black uppercase tracking-wider">
                      COP
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">
                    Tanushree Jaiganesh
                  </h4>
                  <p className="text-[11px] font-black text-red-400 uppercase tracking-wider mt-0.5">
                    Chair of Projects
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-red-900/40">
                  <span className="text-[11px] text-zinc-200 font-bold block">
                    Lead • Project Directorate
                  </span>
                </div>
              </div>

              {/* 4. Poornima K */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-rose-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black text-rose-400 bg-rose-950/60 border border-rose-800/60">
                      SDG 1
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      VCOP
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">
                    Poornima K
                  </h4>
                  <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mt-0.5">
                    Vice Chair of Projects
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/60">
                  <span className="text-[11px] text-zinc-300 font-medium block">
                    No Poverty
                  </span>
                </div>
              </div>

              {/* 5. Sreeya Srikanth */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-orange-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black text-orange-400 bg-orange-950/60 border border-orange-800/60">
                      SDG 4
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      VCOP
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">
                    Sreeya Srikanth
                  </h4>
                  <p className="text-[11px] font-bold text-red-500 uppercase tracking-wider mt-0.5">
                    Vice Chair of Projects
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/60">
                  <span className="text-[11px] text-zinc-300 font-medium block">
                    Quality Education
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
