import React from 'react';
import { Logo } from './Logo';
import { MemberCard } from './MemberCard';
import { ExpiringSoonCard } from './ExpiringSoonCard';
import { RecentlyExpiredAlertCard } from './RecentlyExpiredAlertCard';
import { RecentlyExpiredMemberCard } from './RecentlyExpiredMemberCard';
import { NonMemberPromoCard } from './NonMemberPromoCard';
import { members, currentUser } from '../mockData';
import { isExpiringWithinDays } from '../utils/expiringSoon';
import { ChevronDown } from 'lucide-react';

interface SidebarProps {
  className?: string;
  onNavigate?: (view: string, subTab?: string) => void;
  variant?: 'default' | 'expiring-soon' | 'recently-expired' | 'non-member';
}

export const Sidebar: React.FC<SidebarProps> = ({ className, onNavigate, variant = 'default' }) => {
  const primaryMember = members[0];
  const showExpiringSoon = primaryMember && isExpiringWithinDays(primaryMember.expires, 90);
  const isExpiringSoonView = variant === 'expiring-soon';
  const isRecentlyExpiredView = variant === 'recently-expired';
  const isNonMemberView = variant === 'non-member';
  const isSingleMemberView = isExpiringSoonView || isRecentlyExpiredView;
  const membersToShow = isSingleMemberView
    ? [{ ...members[0], name: 'Jane Jones' }]
    : members;

  const welcomeName = isNonMemberView
    ? 'SUSAN'
    : isRecentlyExpiredView
      ? 'LISA'
      : currentUser.name.toUpperCase();

  return (
    <aside className={`w-80 shrink-0 bg-canvas h-screen sticky top-0 overflow-y-auto border-r border-border-light hidden md:flex flex-col p-6 ${className}`}>
      <div className="mb-8">
        <Logo className="w-24 h-auto text-accent-green" />
      </div>

      <h2 className="text-xl font-black mb-6 text-charcoal uppercase tracking-wide font-arquitecta">
        WELCOME, {welcomeName}!
      </h2>

      {!isSingleMemberView && !isNonMemberView && (
        <div className="mb-6 relative">
          <button className="w-full min-h-[44px] flex justify-between items-center bg-mist px-4 py-3 border border-border-light text-base font-normal text-charcoal font-arquitecta">
            General Membership
            <ChevronDown className="w-4 h-4 text-muted-text" />
          </button>
        </div>
      )}

      {showExpiringSoon && isExpiringSoonView && (
        <div className="mb-6">
          <ExpiringSoonCard
            expires={primaryMember.expires}
            onRenew={() => onNavigate?.('membership', 'overview')}
          />
        </div>
      )}

      {isRecentlyExpiredView && (
        <div className="space-y-4 mb-6">
          <RecentlyExpiredAlertCard onRenew={() => onNavigate?.('membership', 'overview')} />
          <RecentlyExpiredMemberCard
            memberName="Lisa Bloomfield"
            memberType="Individual Plus Member"
            memberSince="2002"
            expiredDate="June 1, 2026"
            displayId="29834928_1"
            onRenew={() => onNavigate?.('membership', 'overview')}
          />
        </div>
      )}

      {isNonMemberView && (
        <div className="mb-6">
          <NonMemberPromoCard onLearnMore={() => onNavigate?.('membership', 'overview')} />
        </div>
      )}

      {!isRecentlyExpiredView && !isNonMemberView && (
      <div className="space-y-4">
        {membersToShow.map((member, i) => (
          <MemberCard key={member.id} member={member} isPrimary={i === 0} />
        ))}
      </div>
      )}
    </aside>
  );
};
