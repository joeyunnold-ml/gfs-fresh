import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ActionCardProps {
  title: string;
  subtitle?: string;
  count?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, subtitle, count, children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`bg-white hover:bg-hover border border-card-stroke p-6 flex flex-col justify-between cursor-pointer min-h-[160px] relative overflow-hidden transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)] ${className}`}>
      <div className="flex-1">
        <h3 className="text-lg font-black text-charcoal mb-1 leading-tight uppercase tracking-tight font-arquitecta">
          {title}
        </h3>
        {count && (
          <p className="text-base text-stone mt-2 font-arquitecta">
            <span className="font-normal text-charcoal">{count.split(' ')[0]}</span> {count.split(' ').slice(1).join(' ')}
          </p>
        )}
        {subtitle && <p className="text-base text-stone mt-2 italic">{subtitle}</p>}
      </div>

      <div className="absolute bottom-4 right-4">
        <ArrowUpRight className="w-5 h-5 text-charcoal" />
      </div>

      {children}
    </div>
  );
};
