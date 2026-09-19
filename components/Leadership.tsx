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
          Chairpeople & <span className="text-red-600 italic">Executive Board</span>
        </h2>
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          CYA Season V Leadership Council
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
    </div>
  );
};

export default Leadership;
