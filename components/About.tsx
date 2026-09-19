
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        <div className="space-y-8">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">
              WHAT IS <br/><span className="text-red-600">CYA?</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed font-medium">
            Touted to be the <span className="text-white">crown jewel</span> of Street Cause Chennai, the Chennai Youth Assembly is the most eminent unit that fetches students from various colleges across Chennai into one huge convocation.
          </p>
          <p className="text-zinc-500 leading-relaxed text-sm">
            CYA follows the United Nations Sustainable Development Goals (UNSDGs) for 2030 while analyzing project ideas. It is an endeavor of Street Cause to accredit the youth and present them with an opportunity to give their two cents worth to the public. 
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <p className="text-white font-bold italic text-lg mb-2">"Discussing projects, plans, and strategies that influence and implement serviceable changes in society."</p>
            <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">The Assembly Vision</p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-zinc-950 p-10 border border-zinc-900 relative">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-900">
              <img 
                src="/images/sc-logo.png" 
                alt="Street Cause" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer" 
              />
              <div className="h-6 w-px bg-zinc-800"></div>
              <img 
                src="/images/vision-2030-logo.png" 
                alt="Vision 2030" 
                className="h-9 w-auto object-contain"
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-4 underline decoration-2 underline-offset-8">Legacy</h3>
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">About Street Cause</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10">
              Founded in 2009 by Akhilesh Jukareddy, Street Cause is an organization that aims to serve society and empower young people. With 17 years of service, it has shaped thousands of volunteers into responsible citizens towards realizing its Vision 2030.
            </p>
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">10L+</p>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">Impacted Lives</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">15,000+</p>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">Projects Executed</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">17</p>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">Years of Service</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">₹3 Cr+</p>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">Spent to Impact</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
