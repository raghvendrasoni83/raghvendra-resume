import React, { useState } from 'react';
import { User, Briefcase, Cog, GraduationCap, Trophy, Eye } from 'lucide-react';

interface NavigationBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeSection, onSectionChange }) => {
  const [previewContent, setPreviewContent] = useState<string>('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewTitle, setPreviewTitle] = useState('');

  const navItems = [
    { id: 'summary', label: 'Summary', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Cog },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'competencies', label: 'Competencies', icon: Trophy },
  ];

  const previewData: Record<string, { title: string; content: string }> = {
    summary: {
      title: 'Professional Overview',
      content: `
        <div class="space-y-4">
          <div class="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
            <p class="text-slate-200 mb-3">Dynamic DevOps Technical Lead with <span class="text-amber-400 font-semibold">6+ years of experience</span> driving cloud transformation and innovation.</p>
            <ul class="space-y-2 text-sm text-slate-300">
              <li class="flex items-center gap-2"><span class="text-amber-400">▸</span> <strong>$200K+</strong> monthly AWS savings achieved</li>
              <li class="flex items-center gap-2"><span class="text-amber-400">▸</span> Scaled from <strong>500 RPM to 5M RPM</strong></li>
              <li class="flex items-center gap-2"><span class="text-amber-400">▸</span> Maintained <strong>99.9% uptime</strong></li>
            </ul>
          </div>
        </div>
      `
    },
    experience: {
      title: 'Career Journey',
      content: `
        <div class="space-y-3">
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">🚀 Technical Lead - DevOps</p>
            <p class="text-slate-300 text-sm">Zepto | Current Role</p>
            <p class="text-slate-200 text-xs mt-1">Leading 5-member team, $200K+ monthly savings</p>
          </div>
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">💡 Sr DevOps Engineer</p>
            <p class="text-slate-300 text-sm">Zepto | 2 years</p>
            <p class="text-slate-200 text-xs mt-1">Reduced setup time from 6 months to 1-2 weeks</p>
          </div>
        </div>
      `
    },
    skills: {
      title: 'Technical Arsenal',
      content: `
        <div class="space-y-3">
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">☁️ Cloud & Infrastructure</p>
            <p class="text-slate-200 text-sm">AWS, Kubernetes, EKS, Terraform</p>
          </div>
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">🔧 DevOps & Automation</p>
            <p class="text-slate-200 text-sm">Jenkins, ArgoCD, Ansible, Prometheus</p>
          </div>
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">💰 FinOps Excellence</p>
            <p class="text-slate-200 text-sm">Cost Optimization, AWS CUR, Cloud Keeper</p>
          </div>
        </div>
      `
    },
    education: {
      title: 'Education & Certifications',
      content: `
        <div class="space-y-3">
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">🎓 Academic Background</p>
            <ul class="text-slate-200 text-sm space-y-1">
              <li>B.Tech - Abdul Kalam Technical University</li>
              <li>Intermediate - Allahabad University</li>
            </ul>
          </div>
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">📜 Certifications</p>
            <ul class="text-slate-200 text-sm space-y-1">
              <li>RHCSA - Red Hat Certified</li>
              <li>RHCoE - Ansible Specialist</li>
            </ul>
          </div>
        </div>
      `
    },
    competencies: {
      title: 'Core Competencies',
      content: `
        <div class="space-y-3">
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">Leadership & Management</p>
            <ul class="text-slate-200 text-sm space-y-1">
              <li>Team Leadership & Mentorship</li>
              <li>Strategic Planning & Execution</li>
            </ul>
          </div>
          <div class="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
            <p class="text-amber-400 font-semibold">Technical Excellence</p>
            <ul class="text-slate-200 text-sm space-y-1">
              <li>System Architecture & Design</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      `
    }
  };

  const handleMouseEnter = (sectionId: string) => {
    const data = previewData[sectionId];
    if (data) {
      setPreviewTitle(data.title);
      setPreviewContent(data.content);
      setShowPreview(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <nav className="relative mb-8">
      <div className="flex flex-wrap justify-center gap-4 relative">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              className={`
                relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg
                ${activeSection === item.id 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-amber-500/30' 
                  : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-amber-400 border border-slate-700/50'
                }
                hover:-translate-y-1 hover:shadow-xl
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:-translate-x-full before:transition-transform before:duration-500
                hover:before:translate-x-full
              `}
            >
              <IconComponent size={18} className="inline mr-2" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Preview Window */}
      <div className={`
        absolute top-16 left-1/2 transform -translate-x-1/2 w-96 max-w-[90vw]
        bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl
        transition-all duration-400 z-50 overflow-hidden
        ${showPreview ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}
        border border-slate-700/50
      `}>
        <div className="bg-slate-700/50 px-5 py-3 border-b border-slate-600/50">
          <div className="flex items-center gap-3 text-white">
            <Eye size={18} className="text-amber-400" />
            <span className="font-semibold text-sm">{previewTitle}</span>
          </div>
        </div>
        <div 
          className="p-5 max-h-64 overflow-y-auto text-sm"
          dangerouslySetInnerHTML={{ __html: previewContent }}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;