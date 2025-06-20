import React from 'react';
import { GraduationCap, Award, Globe } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Education & Certifications
      </h2>
      
      <div className="space-y-8">
        {/* Education */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:shadow-lg hover:bg-slate-700/70 transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400">B. Tech.</h4>
              <p className="text-slate-300 font-medium">Abdul Kalam Technical University | 2018</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:shadow-lg hover:bg-slate-700/70 transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400">Intermediate</h4>
              <p className="text-slate-300 font-medium">Allahabad University | 2014</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <Award size={24} />
            Certifications
          </h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:shadow-lg hover:bg-slate-700/70 transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400 flex items-center gap-2">
                <span className="text-red-500">🎯</span> RHCSA
              </h4>
              <p className="text-slate-300 font-medium">Red Hat Certified System Administrator</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:shadow-lg hover:bg-slate-700/70 transition-all duration-300">
              <h4 className="text-lg font-semibold text-amber-400 flex items-center gap-2">
                <span className="text-red-500">🎯</span> RHCoE
              </h4>
              <p className="text-slate-300 font-medium">Red Hat Certified Specialist in Ansible Automation</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <Globe size={24} />
            Languages
          </h3>
          
          <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
            <div className="space-y-2">
              <p className="text-slate-200"><span className="font-semibold text-amber-400">Hindi:</span> First Language</p>
              <p className="text-slate-200"><span className="font-semibold text-amber-400">English:</span> C2 Proficient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;