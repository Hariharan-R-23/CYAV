import React, { useState } from 'react';
import { YOUTUBE_VIDEO_ID, YOUTUBE_STREAM_URL, EVENT_DETAILS } from '../constants';

interface RegistrationEmbedProps {
  id?: string;
}

const RegistrationEmbed: React.FC<RegistrationEmbedProps> = ({ 
  id = "register" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div id={id} className="scroll-mt-24 w-full max-w-5xl mx-auto">
      {/* Assembly Broadcast Container */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-red-950/30 relative">
        
        {/* Top Header Bar: Assembly Event Context preserved */}
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 px-5 sm:px-8 py-5 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">
                  Official Convocation Recording
                </span>
                <span className="px-2 py-0.5 bg-zinc-800/80 text-zinc-300 text-[9px] font-bold rounded">
                  Season V Proceedings
                </span>
              </div>
              <h4 className="text-white font-black text-sm sm:text-base uppercase tracking-wider mt-0.5">
                {EVENT_DETAILS.name}
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-zinc-400 text-xs">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-calendar-days text-red-500"></i>
              <span className="text-[11px] font-semibold text-zinc-300">{EVENT_DETAILS.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              <span className="text-[11px] font-semibold text-zinc-300">{EVENT_DETAILS.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock text-red-500"></i>
              <span className="text-[11px] font-semibold text-zinc-300">{EVENT_DETAILS.time}</span>
            </div>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative bg-black aspect-video w-full overflow-hidden group">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1`}
            title="Chennai Youth Assembly Season V Recording"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Bottom Banner with Event Details & Phase II Notice */}
        <div className="bg-zinc-900/90 px-5 sm:px-8 py-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-400 text-xs">
          <div className="flex items-center gap-2.5">
            <i className="fa-solid fa-circle-check text-emerald-400"></i>
            <span className="text-[11px] text-zinc-300 font-medium">
              Season V Phase I Assembly successfully concluded at IITM Research Park. Phase I registrations are closed.
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-red-950/40 border border-red-800/50 text-red-400 text-[10px] font-black uppercase tracking-wider rounded-sm">
              Phase II Registrations Coming Soon
            </span>
            <a
              href={YOUTUBE_STREAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline font-bold text-[11px] inline-flex items-center gap-1.5"
            >
              <span>Watch on YouTube</span>
              <i className="fa-brands fa-youtube text-red-500 text-sm"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegistrationEmbed;

