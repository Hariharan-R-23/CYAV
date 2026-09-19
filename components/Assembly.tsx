import React, { useState } from 'react';
import { EVENT_DETAILS, MEMBER_RESPONSIBILITIES, ASSEMBLY_SCHEDULE, URL_MEMBER_FORM } from '../constants';

const Assembly: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'schedule'>('details');

  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-3">
            The Convocation • Season V
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
            CYA SEASON V <br />
            <span className="text-red-600 italic">ASSEMBLY</span>
          </h2>
        </div>
        
        {/* Toggle between Details and Schedule */}
        <div className="flex items-center bg-zinc-950 p-1 border border-zinc-900 rounded-sm">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest smooth-transition cursor-pointer ${
              activeTab === 'details'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-zinc-500 hover:text-white'
            }`}
          >
            Overview & Fees
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest smooth-transition cursor-pointer ${
              activeTab === 'schedule'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-zinc-500 hover:text-white'
            }`}
          >
            Agenda Schedule
          </button>
        </div>
      </div>

      {activeTab === 'details' ? (
        <div className="space-y-16">
          {/* Venue & Timing Spotlight Card */}
          <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="border-b md:border-b-0 md:border-r border-zinc-900 pb-6 md:pb-0 md:pr-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block mb-2">
                  <i className="fa-regular fa-calendar-days text-red-600 mr-2"></i>Date
                </span>
                <p className="text-2xl font-black text-white">{EVENT_DETAILS.date}</p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Mark your calendar</p>
              </div>

              <div className="border-b md:border-b-0 md:border-r border-zinc-900 pb-6 md:pb-0 md:pr-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block mb-2">
                  <i className="fa-regular fa-clock text-red-600 mr-2"></i>Timing
                </span>
                <p className="text-2xl font-black text-white">{EVENT_DETAILS.time}</p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Full-day parliamentary convocation</p>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block mb-2">
                  <i className="fa-solid fa-location-dot text-red-600 mr-2"></i>Venue
                </span>
                <p className="text-2xl font-black text-red-500">{EVENT_DETAILS.venue}</p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{EVENT_DETAILS.city}</p>
              </div>
            </div>
          </div>

          {/* Selection Process & Fees Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Steps */}
            <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] block mb-3">
                  Transparent Admission
                </span>
                <h3 className="text-2xl font-black uppercase text-white mb-6">Selection Process & Fees</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-red-600/10 border border-red-600/40 text-red-500 flex items-center justify-center font-black text-xs shrink-0">
                      01
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-black uppercase text-white tracking-wider">Register for Evaluation</h4>
                        <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px] font-black">
                          {EVENT_DETAILS.registrationFee}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Submit candidate credentials and pay the initial registration fee of Rs. 100 to enter the screening pool.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center font-black text-xs shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase text-white tracking-wider">Interview Process</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Participate in an interview conducted by the Chairpersons, Executive Board, and Organizing Committee to evaluate leadership and SDG alignment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-red-600/10 border border-red-600/40 text-red-500 flex items-center justify-center font-black text-xs shrink-0">
                      03
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-black uppercase text-white tracking-wider">On Selection Confirmation</h4>
                        <span className="px-2 py-0.5 bg-red-950 border border-red-800 text-red-400 text-[10px] font-black">
                          {EVENT_DETAILS.selectionFee}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Selected candidates pay Rs. 599 delegate fee, unlocking comprehensive assembly hospitality, kits, and member credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900">
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-4 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black smooth-transition text-center block shadow-lg shadow-red-600/20 cursor-pointer"
                >
                  Pay Registration Fee ({EVENT_DETAILS.registrationFee})
                </a>
              </div>
            </div>

            {/* What is covered */}
            <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] block mb-3">
                  All-Inclusive Delegate Kit
                </span>
                <h3 className="text-2xl font-black uppercase text-white mb-6">What The Selection Fee Covers</h3>
                
                <ul className="space-y-4">
                  {EVENT_DETAILS.selectionBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-300">
                      <i className="fa-solid fa-circle-check text-red-600 text-sm mt-0.5 shrink-0"></i>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                    <span className="text-white font-bold">IITM Research Park</span> provides a world-class academic and innovation environment for delegates to interact with eminent dignitaries, policymakers, and peer leaders.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
                <span>Phase I Candidate Allotment</span>
                <span className="text-red-500">Limited Seats</span>
              </div>
            </div>
          </div>

          {/* What Members Do Section */}
          <div className="pt-8">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
                Roles & Responsibilities
              </span>
              <h3 className="text-3xl font-black uppercase text-white tracking-tight">What Members Do</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">
                Translating Parliamentary Resolutions into Real Ground Impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MEMBER_RESPONSIBILITIES.map((item, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-900 p-8 hover:border-red-900/50 smooth-transition group">
                  <div className="h-12 w-12 rounded-sm bg-red-600/10 border border-red-600/30 text-red-500 flex items-center justify-center text-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-base font-black text-white uppercase tracking-wider mb-3">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Schedule Tab */
        <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-zinc-900 gap-4">
            <div>
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em] block mb-1">
                October 4th, 2026 • IITM Research Park
              </span>
              <h3 className="text-2xl font-black uppercase text-white">Full Day Assembly Schedule</h3>
            </div>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black smooth-transition inline-flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <span>Register Now</span>
              <i className="fa-solid fa-arrow-down text-[10px]"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ASSEMBLY_SCHEDULE.map((slot, index) => (
              <div
                key={index}
                className="bg-black/60 border border-zinc-900 p-5 flex items-start gap-4 hover:border-zinc-700 smooth-transition"
              >
                <div className="h-9 w-9 rounded-full bg-red-950/40 border border-red-900/50 text-red-500 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  <i className={slot.icon}></i>
                </div>
                <div>
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">
                    {slot.time}
                  </p>
                  <p className="text-xs font-black text-white uppercase tracking-wider mt-1">
                    {slot.event}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <p>
              <i className="fa-solid fa-triangle-exclamation text-amber-500 mr-2"></i>
              Delegates are requested to be seated by 7:45 AM for credentials verification.
            </p>
            <span className="text-zinc-600 font-bold uppercase tracking-widest text-[10px]">CYA V Protocol</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assembly;
