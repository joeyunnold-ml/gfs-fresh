import React from 'react';
import { Logo } from './Logo';
import { MemberCard } from './MemberCard';
import { members, currentUser } from '../mockData';
import { ChevronDown } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`w-80 shrink-0 bg-canvas h-screen sticky top-0 overflow-y-auto border-r border-border-light hidden md:flex flex-col p-6 ${className}`}>
      <div className="mb-8">
        <Logo className="w-24 h-auto text-accent-green" />
      </div>

      <h2 className="text-xl font-black mb-6 text-charcoal uppercase tracking-wide font-arquitecta">
        WELCOME, {currentUser.name.toUpperCase()}!
      </h2>

      <div className="mb-6 relative">
        <button className="w-full min-h-[44px] flex justify-between items-center bg-mist px-4 py-3 border border-border-light text-[16px] font-normal text-black font-arquitecta">
          General Membership
          <ChevronDown className="w-4 h-4 text-muted-text" />
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member, i) => (
          <MemberCard key={member.id} member={member} isPrimary={i === 0} />
        ))}
      </div>
    </aside>
  );
};
