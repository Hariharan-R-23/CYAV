
import React from 'react';
import { SPONSOR_EMAIL, URL_MEMBER_FORM, EVENT_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* Background with Real Assembly Hall Photo & Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/assemblypic.png" 
          alt="Chennai Youth Assembly Hall" 
          className="w-full h-full object-cover object-center opacity-35 filter contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/65 to-black"></div>
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        {/* Subtle Radial Crimson Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        {/* Recruitment Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 border border-red-600/30 bg-red-950/20 backdrop-blur-md rounded-full shadow-lg shadow-red-950/30">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-red-400 text-[10px] sm:text-xs font-black tracking-[0.35em] uppercase">
            Phase I Member Recruitments Open
          </span>
        </div>
        
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-2 tracking-tighter leading-none">
          CYA<span className="text-red-600 italic">V</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-zinc-300 mb-2 tracking-[0.5em] uppercase">
          Chennai Youth Assembly
        </p>

        <p className="text-sm md:text-base font-black text-red-600 mb-8 tracking-[0.6em] uppercase">
          The Visionary CYA V
        </p>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-zinc-400 text-base md:text-xl font-medium leading-relaxed uppercase tracking-tight">
            The Crown Jewel of Street Cause Chennai. <br/>
            <span className="text-white font-bold">Discussing projects, plans, and strategies that influence society.</span>
          </p>
        </div>

        {/* Event Quick Intel Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          <div className="bg-zinc-950/80 border border-zinc-900 px-4 py-3 rounded-sm backdrop-blur-sm">
            <p className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Date</p>
            <p className="text-xs sm:text-sm font-black text-white mt-1">{EVENT_DETAILS.date}</p>
          </div>
          <div className="bg-zinc-950/80 border border-zinc-900 px-4 py-3 rounded-sm backdrop-blur-sm">
            <p className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Venue</p>
            <p className="text-xs sm:text-sm font-black text-red-500 mt-1">{EVENT_DETAILS.venue}</p>
          </div>
          <div className="bg-zinc-950/80 border border-zinc-900 px-4 py-3 rounded-sm backdrop-blur-sm">
            <p className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Time</p>
            <p className="text-xs sm:text-sm font-black text-white mt-1">{EVENT_DETAILS.time}</p>
          </div>
          <div className="bg-zinc-950/80 border border-zinc-900 px-4 py-3 rounded-sm backdrop-blur-sm">
            <p className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Registration Fee</p>
            <p className="text-xs sm:text-sm font-black text-emerald-400 mt-1">{EVENT_DETAILS.registrationFee}</p>
          </div>
        </div>

        {/* Primary Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md mx-auto">
          <a 
            href={URL_MEMBER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black smooth-transition border border-red-600 shadow-xl shadow-red-600/30 active:scale-95 inline-flex items-center justify-center gap-3 group"
          >
            <span>Register as Member</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </a>
          <a 
            href="#assembly"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-950 text-zinc-300 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white smooth-transition border border-zinc-800 inline-flex items-center justify-center gap-2"
          >
            <span>Assembly Details</span>
            <i className="fa-solid fa-angle-down text-[11px]"></i>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <a 
            href="https://www.instagram.com/chennaiyouthassembly/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-500 text-xs font-black uppercase tracking-[0.3em] smooth-transition flex items-center gap-2 group"
          >
            <i className="fa-brands fa-instagram text-base"></i>
            <span>@chennaiyouthassembly</span>
          </a>
          <div className="h-4 w-px bg-zinc-800 hidden sm:block"></div>
          <div className="text-zinc-400 text-xs font-bold text-center sm:text-left">
            Interested in sponsoring? <br/>
            <a href={`mailto:${SPONSOR_EMAIL}`} className="text-red-500 hover:text-white transition-colors">{SPONSOR_EMAIL}</a>
          </div>
        </div>
      </div>

      {/* Branding Elements */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center opacity-30">
         <p className="text-[9px] text-zinc-500 font-black tracking-[0.8em] uppercase mb-2">Vision 2030</p>
         <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;
