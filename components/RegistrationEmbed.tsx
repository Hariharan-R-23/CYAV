import React, { useState } from 'react';
import { URL_MEMBER_FORM } from '../constants';

interface RegistrationEmbedProps {
  id?: string;
}

const RegistrationEmbed: React.FC<RegistrationEmbedProps> = ({ 
  id = "register" 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div id={id} className="scroll-mt-24 w-full max-w-5xl mx-auto">
      {/* Registration Section Card */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-red-950/20 relative">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-zinc-950 flex flex-col items-center justify-center min-h-[600px] p-6">
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-zinc-800 border-t-red-600 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fa-solid fa-shield-halved text-red-500 text-sm"></i>
              </div>
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
              Loading Registration Form
            </h4>
            <p className="text-zinc-500 text-xs text-center max-w-sm">
              Connecting to secure payment gateway. Please wait a moment...
            </p>
            <div className="mt-6 flex items-center gap-2 text-zinc-600 text-[11px]">
              <i className="fa-solid fa-lock text-[10px]"></i>
              <span>256-bit End-to-End SSL Encryption</span>
            </div>
          </div>
        )}

        {/* Embedded Razorpay iframe */}
        <div className="relative bg-white min-h-[720px] sm:min-h-[820px] w-full">
          <iframe
            src={URL_MEMBER_FORM}
            title="Chennai Youth Assembly Member Registration Form"
            className={`w-full h-[760px] sm:h-[840px] md:h-[880px] border-0 transition-opacity duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            allow="payment; camera; clipboard-read; clipboard-write"
            loading="lazy"
          />
        </div>

        {/* Bottom info banner */}
        <div className="bg-zinc-900/90 px-4 sm:px-6 py-3 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-400 text-xs">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-check text-emerald-400"></i>
            <span className="text-[11px]">
              Secure payment verified by Razorpay. Immediate email confirmation.
            </span>
          </div>
          <div className="text-[11px]">
            Form issues?{' '}
            <a
              href={URL_MEMBER_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Open in separate window ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationEmbed;
