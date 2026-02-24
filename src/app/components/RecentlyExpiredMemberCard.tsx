import React from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export interface RecentlyExpiredMemberCardProps {
  memberName: string;
  memberType: string;
  memberSince: string;
  expiredDate: string;
  displayId: string;
  onRenew?: () => void;
  renewHref?: string;
  className?: string;
}

/**
 * White membership card for recently-expired view: type, name, EXPIRED badge,
 * black-highlight "Expired [date]", strikethrough ID. Not interactive (no overlay).
 * Renew Membership link is the only interactive element.
 */
export const RecentlyExpiredMemberCard: React.FC<RecentlyExpiredMemberCardProps> = ({
  memberName,
  memberType,
  memberSince,
  expiredDate,
  displayId,
  onRenew,
  renewHref = '/current-member',
  className = '',
}) => (
  <div
    className={`bg-white relative flex flex-col items-start p-4 border border-border-light shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)] ${className}`}
    role="region"
    aria-label="Expired membership details"
  >
    <div className="flex flex-col gap-1.5 w-full relative">
      <div className="flex items-center justify-between">
        <span className="text-base font-normal text-muted-text">{memberType}</span>
        <span className="px-2.5 py-1.5 text-base font-bold text-accent-pink uppercase tracking-wider border border-accent-pink rounded-none leading-none">
          Expired
        </span>
      </div>
      <h3 className="text-[18px] font-bold text-charcoal">{memberName}</h3>
    </div>

    <div className="flex flex-col gap-0.5 text-base font-normal mt-4 w-full">
      <p className="text-muted-text">Member Since {memberSince}</p>
      <div className="bg-near-black text-white px-3 py-2 inline-block mt-1">
        <span className="text-base font-semibold font-opensans">Expired {expiredDate}</span>
      </div>
      <p className="text-base text-muted-text mt-2 line-through">ID: {displayId}</p>
    </div>

    <div className="mt-4">
        {onRenew ? (
          <button
            type="button"
            onClick={onRenew}
            className="text-base font-semibold text-charcoal hover:underline inline-flex items-center gap-1 font-opensans"
          >
            Renew Membership <ArrowUpRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            to={renewHref}
            className="text-base font-semibold text-charcoal hover:underline inline-flex items-center gap-1 font-opensans"
          >
            Renew Membership <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
    </div>
  </div>
);
