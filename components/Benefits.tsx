
import React from 'react';
import { RECRUITMENT_POINTS, URL_MEMBER_FORM } from '../constants';

const Benefits: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-none uppercase">
            MEMBER <br/><span className="text-red-600 italic">RECRUITMENTS</span>
          </h2>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">
            Why join the Season V Assembly?
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-white text-5xl font-black opacity-10 italic">09 CORE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
        {RECRUITMENT_POINTS.map((benefit, idx) => (
          <div key={idx} className="bg-black p-12 group hover:bg-zinc-950 smooth-transition relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.03] group-hover:text-red-600/[0.05] transition-colors italic">
              {idx + 1}
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-black text-white uppercase mb-6 group-hover:text-red-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href={URL_MEMBER_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 hover:bg-white hover:text-black text-white text-xs font-black uppercase tracking-widest smooth-transition shadow-lg shadow-red-600/30 active:scale-95"
        >
          <span>Join CYA Season V • Register as Member</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  );
};

export default Benefits;
