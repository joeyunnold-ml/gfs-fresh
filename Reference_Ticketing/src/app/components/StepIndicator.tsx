import React from 'react';

export function StepIndicator() {
  const steps = [
    { number: 1, label: 'Select visit date', status: 'completed' },
    { number: 2, label: 'Select entry time', status: 'completed' },
    { number: 3, label: 'Select type of ticket', status: 'active' },
    { number: 4, label: 'Checkout', status: 'pending' },
  ];

  return (
    <div className="w-full border-b border-gray-200 mb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center text-sm md:text-base">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`flex items-center py-4 px-1 mr-8 relative group font-['Open_Sans'] ${
              step.status === 'active' 
                ? 'text-[#1a1a1a] font-bold border-b-[3px] border-[#c5d63d] -mb-[2px] z-10' 
                : step.status === 'completed'
                  ? 'text-[#3d4a2d] hover:text-[#1a1a1a] cursor-pointer'
                  : 'text-[#8b8178]'
            }`}
          >
            <span className="mr-2">{step.number}.</span>
            <span>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
