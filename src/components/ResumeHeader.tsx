import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const ResumeHeader: React.FC = () => {
  return (
    <header className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 text-center mb-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-xl shadow-amber-500/20">
        <img 
          src="https://raw.githubusercontent.com/raghvendrasoni83/raghvendra-resume/main/my-pic.jpg" 
          alt="Raghvendra Soni" 
          className="w-full h-full rounded-full object-cover border-2 border-slate-800"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        RAGHVENDRA SONI
      </h1>
      
      <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4"></div>
      
      <p className="text-xl text-slate-300 mb-8 font-light">
        Technical Lead DevOps | Cloud Infrastructure Architect | FinOps Specialist
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a href="tel:+919889702874" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-all duration-300 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 hover:scale-105">
          <Phone size={18} />
          <span className="font-medium">+91 9889702874</span>
        </a>
        
        <a href="mailto:soni.raghvendra83@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-all duration-300 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 hover:scale-105">
          <Mail size={18} />
          <span className="font-medium">soni.raghvendra83@gmail.com</span>
        </a>
        
        <a href="https://www.linkedin.com/in/raghvendra-soni-58671b154/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-all duration-300 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 hover:scale-105">
          <Linkedin size={18} />
          <span className="font-medium">LinkedIn</span>
        </a>
        
        <div className="flex items-center gap-2 text-slate-300 px-4 py-2 rounded-lg bg-slate-700/50">
          <MapPin size={18} />
          <span className="font-medium">Bangalore, India</span>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;