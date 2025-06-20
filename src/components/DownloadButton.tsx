import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would trigger PDF generation
    alert('PDF download functionality would be implemented here with libraries like jsPDF or Puppeteer');
  };

  return (
    <button 
      onClick={handleDownload}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 hover:-translate-y-2 transition-all duration-300 z-50 border border-amber-400/50"
    >
      <Download size={24} />
    </button>
  );
};

export default DownloadButton;