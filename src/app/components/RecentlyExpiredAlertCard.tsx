import React from 'react';
import { Link } from 'react-router';
import { Info, ArrowUpRight } from 'lucide-react';

interface RecentlyExpiredAlertCardProps {
  onRenew?: () => void;
  renewHref?: string;
  className?: string;
}

/**
 * Dark alert card for recently-expired view: "Your membership has expired."
 * Uses bg-charcoal, text-white, Tertiary/Text-style link in white.
 */
export const RecentlyExpiredAlertCard: React.FC<RecentlyExpiredAlertCardProps> = ({
  onRenew,
  renewHref = '/current-member',
  className = '',
}) => (
  <div
    className={`bg-charcoal border border-charcoal rounded-none p-4 ${className}`}
    role="region"
    aria-label="Membership expired"
  >
    <div className="flex flex-col gap-2">
      <div>
        <Info className="w-5 h-5 text-white shrink-0" strokeWidth={2} aria-hidden />
      </div>
      <p className="text-[16px] font-bold text-white">
        Your membership has expired.
      </p>
      <p className="text-base text-white/90 leading-relaxed">
        Renew soon to restore guest passes, bookings, and member perks.
      </p>
      <div className="flex justify-start pt-1">
        {onRenew ? (
          <button
            type="button"
            onClick={onRenew}
            className="text-base font-semibold text-white hover:underline inline-flex items-center gap-1 font-opensans"
          >
            Renew Membership <ArrowUpRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            to={renewHref}
            className="text-base font-semibold text-white hover:underline inline-flex items-center gap-1 font-opensans"
          >
            Renew Membership <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  </div>
);
