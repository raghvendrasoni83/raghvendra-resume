import React, { useState } from 'react';
import ResumeHeader from './components/ResumeHeader';
import NavigationBar from './components/NavigationBar';
import SummarySection from './components/sections/SummarySection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import CompetenciesSection from './components/sections/CompetenciesSection';
import DownloadButton from './components/DownloadButton';

function App() {
  const [activeSection, setActiveSection] = useState('summary');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'summary':
        return <SummarySection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'education':
        return <EducationSection />;
      case 'competencies':
        return <CompetenciesSection />;
      default:
        return <SummarySection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative">
      {/* Geometric Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400/30 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-amber-400/20 rotate-12"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 border border-amber-400/25 -rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-amber-400/30 rotate-45"></div>
        </div>
      </div>

      {/* Subtle Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-amber-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-amber-400/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <ResumeHeader />
        <NavigationBar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <main className="animate-fadeInUp">
          {renderActiveSection()}
        </main>
        
        <DownloadButton />
      </div>
    </div>
  );
}

export default App;