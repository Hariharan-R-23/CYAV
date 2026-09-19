
import React, { useState } from 'react';
import { CONTACTS, URL_MEMBER_FORM, URL_RAISE_FUNDS, SPONSOR_EMAIL, GENERAL_EMAIL } from '../constants';

const Footer: React.FC = () => {
  const [showOCButtons, setShowOCButtons] = useState(false);

  return (
    <footer className="bg-black border-t border-zinc-900 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src="/images/cya-logo.png" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-text-fallback');
                  if (fallback) fallback.style.display = 'block';
                }}
                alt="Chennai Youth Assembly" 
                className="h-10 w-auto object-contain mb-3"
                referrerPolicy="no-referrer"
              />
              <div id="footer-text-fallback" className="hidden mb-3">
                <h2 className="text-2xl font-black uppercase tracking-tighter">
                  CYA <span className="text-red-600 italic">V</span>
                </h2>
                <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
                  Chennai Youth Assembly
                </p>
              </div>
              <p className="text-[10px] text-zinc-500 font-bold tracking-[0.25em] uppercase">Season V • The Visionary</p>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-medium">
              A collective of youth leaders dedicated to creating sustainable societal impact through action-driven projects.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/chennaiyouthassembly/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-700 hover:text-white transition-colors text-xl"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href={`mailto:${GENERAL_EMAIL}`} 
                className="text-zinc-700 hover:text-white transition-colors text-xl"
                title={`Email: ${GENERAL_EMAIL}`}
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <p className="text-[11px] text-zinc-600 mt-4">
              <a href={`mailto:${GENERAL_EMAIL}`} className="hover:text-red-500 transition-colors">
                {GENERAL_EMAIL}
              </a>
            </p>
          </div>

          {/* Contact Board */}
          <div className="lg:col-span-1">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-8 underline decoration-zinc-800 underline-offset-8">Executive Board</h3>
            <div className="space-y-6">
              {CONTACTS.map((c, i) => (
                <div key={i} className="group">
                  <p className="text-xs font-black text-white uppercase group-hover:text-red-600 transition-colors">{c.name}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">{c.role}</p>
                  <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest mt-1">{c.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Callout */}
          <div className="lg:col-span-2">
             <div className="bg-zinc-950 border border-zinc-900 p-10 rounded-sm group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-black text-white uppercase mb-6">Partner with our vision</h3>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">Want to sponsor the Assembly? We'd love to discuss how you can contribute to our mission for social change.</p>
                <div className="flex flex-col gap-2">
                   <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest">Mail us at</p>
                   <a href={`mailto:${SPONSOR_EMAIL}`} className="text-red-600 font-black text-lg hover:text-white transition-colors tracking-tight">
                    {SPONSOR_EMAIL}
                   </a>
                </div>
             </div>
          </div>
        </div>

        {/* Primary CTA Section */}
        <div className="text-center py-24 border-y border-zinc-900 mb-20">
           <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Ready to join the movement?</p>
           <a 
              href={URL_MEMBER_FORM}
              target="_blank"
              className="group relative inline-block px-14 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              Become a Member Now
            </a>
        </div>

        {/* OC Special Section */}
        <div className="text-center mb-24">
          {!showOCButtons ? (
            <button 
              onClick={() => setShowOCButtons(true)}
              className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-800 hover:text-zinc-400 transition-all cursor-pointer underline-offset-4 decoration-zinc-800"
            >
              Are you an OC?
            </button>
          ) : (
            <div className="flex flex-col items-center gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">Operations Center Access</p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={URL_MEMBER_FORM}
                    target="_blank"
                    className="px-12 py-4 bg-zinc-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all border border-white/5"
                  >
                    Register a Member
                  </a>
                  <a 
                    href={URL_RAISE_FUNDS}
                    target="_blank"
                    className="px-12 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-[11px] hover:bg-black transition-all"
                  >
                    Raise Funds
                  </a>
               </div>
               <button 
                onClick={() => setShowOCButtons(false)}
                className="text-zinc-600 hover:text-white text-[10px] font-black uppercase tracking-widest underline decoration-zinc-800"
              >
                Exit Portal
              </button>
            </div>
          )}
        </div>

        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-zinc-700 font-black uppercase tracking-[0.3em]">
           <p>© 2026 Chennai Youth Assembly • Phase I Recruitment</p>
           <div className="flex gap-8">
              <span>Vision 2030</span>
              <a 
                href="https://www.instagram.com/streetcause.chennai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors"
              >
                SC Chennai
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
