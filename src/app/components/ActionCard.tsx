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
  disabled?: boolean;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, subtitle, count, children, className, onClick, disabled = false }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`border border-card-stroke p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden transition-all duration-200 ${
        disabled
          ? 'bg-muted-bg cursor-default'
          : 'bg-white hover:bg-hover cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]'
      } ${className}`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-black text-charcoal mb-1 leading-tight uppercase tracking-tight font-arquitecta">
          {title}
        </h3>
        {count && (
          <p className="text-base mt-2 font-arquitecta">
            {disabled ? (
              <span className="font-normal text-charcoal">{count}</span>
            ) : (
              <>
                <span className="font-normal text-charcoal">{count.split(' ')[0]}</span> <span className="text-stone">{count.split(' ').slice(1).join(' ')}</span>
              </>
            )}
          </p>
        )}
        {subtitle && <p className="text-base text-stone mt-2 italic">{subtitle}</p>}
      </div>

      <div className={`absolute bottom-4 right-4 ${disabled ? 'opacity-60' : ''}`}>
        <ArrowUpRight className="w-5 h-5 text-charcoal" />
      </div>

      {children}
    </div>
  );
};
