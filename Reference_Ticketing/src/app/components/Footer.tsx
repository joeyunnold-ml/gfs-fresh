import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-4 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#c5d63d]" />
          <span className="text-white font-['Arquitecta']">Open Today</span>
          <span className="text-[#b1b1b1] font-['Arquitecta']">10:00 AM – 5:00 PM</span>
        </div>
        
        <div className="text-[#6b6b6b] text-center md:text-right font-['Open_Sans']">
          <span className="font-bold text-white">Need help? </span>
          <span className="text-[#cccccc]">Call us at 609.586.0616 or </span>
          <a href="#" className="text-[#d4567a] underline hover:text-[#e07090] transition-colors">review our guidelines</a>
          <span className="text-[#cccccc]"> before your visit.</span>
        </div>
      </div>
    </footer>
  );
}
