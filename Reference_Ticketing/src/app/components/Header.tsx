import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from './ui/Logo';

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo className="h-10 w-auto" />
        
        <button className="flex items-center gap-2 text-sm font-['Arquitecta'] font-bold tracking-wider text-gray-900 uppercase hover:text-gray-600 transition-colors">
          Account Portal
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
