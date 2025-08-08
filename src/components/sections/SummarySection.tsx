import React from 'react';

const SummarySection: React.FC = () => {
  return (
    <section className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Professional Summary
      </h2>
      
      <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-lg leading-relaxed text-slate-200">
        <p className="text-justify mb-6">
          Dynamic DevOps Technical Lead with <span className="font-semibold text-amber-400">7+ years of experience</span> driving 
          cloud transformation, cost optimization, and scalable infrastructure design. Proven track record in FinOps, achieving 
          <span className="font-semibold text-amber-400"> $200K+ monthly AWS savings</span> through ML pipeline tuning, intelligent 
          rightsizing, and advanced anomaly detection. Successfully scaled systems from 
          <span className="font-semibold text-amber-400"> 500 RPM to 5M RPM</span> with 
          <span className="font-semibold text-amber-400"> 99.9% uptime</span> and enterprise-grade security.
        </p>
        <p className="text-justify">
          Skilled in leading cross-functional teams, delivering automation at scale, and executing high-impact security initiatives. 
          Passionate about building resilient, future-proof systems and solving complex challenges in fast-paced, innovation-driven environments.
        </p>
      </div>
    </section>
  );
};

export default SummarySection;
