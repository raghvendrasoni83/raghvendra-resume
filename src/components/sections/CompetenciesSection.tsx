import React from 'react';
import { PenTool as Tool, Zap, Bot, ShieldCheck, RotateCcw, UserCheck, BarChart, Users } from 'lucide-react';

const CompetenciesSection: React.FC = () => {
  const competencies = [
    { icon: Tool, title: "AIOps & Observability" },
    { icon: Zap, title: "Cloud Platform Architecture" },
    { icon: Bot, title: "Platform Engineering & IDP" },
    { icon: ShieldCheck, title: "High Availability & Security" },
    { icon: RotateCcw, title: "GitOps & Enterprise Automation" },
    { icon: UserCheck, title: "Technical Roadmap & Strategy" },
    { icon: BarChart, title: "FinOps & Cost Governance" },
    { icon: Users, title: "Technical Mentorship & Leadership" }
  ];

  return (
    <section className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Core Competencies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {competencies.map((competency, index) => {
          const IconComponent = competency.icon;
          return (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl text-center border border-slate-600/50 shadow-lg hover:shadow-xl hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
              <IconComponent size={48} className="text-amber-400 mx-auto mb-4" />
              <p className="font-semibold text-slate-200">{competency.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompetenciesSection;