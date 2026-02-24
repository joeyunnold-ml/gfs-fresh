import React from 'react';
import { Link } from 'react-router';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { formatExpiresForHeadline } from '../utils/expiringSoon';

interface ExpiringSoonCardProps {
  /** Expires date string, e.g. "May 5, 2026" */
  expires: string;
  /** Optional callback when "Renew Now" is clicked (e.g. navigate to membership); if not provided, uses a link. */
  onRenew?: () => void;
  /** When onRenew is not set, use this path for the Renew Now link. */
  renewHref?: string;
  className?: string;
}

/**
 * Alert card shown when membership is expiring soon. Matches wireframe: light grey card,
 * calendar icon, headline with date, description, and "Renew Now" CTA.
 * Uses design tokens: bg-canvas, border-border-light, text-charcoal, text-muted-text, text-accent-green.
 */
export const ExpiringSoonCard: React.FC<ExpiringSoonCardProps> = ({
  expires,
  onRenew,
  renewHref = '/current-member',
  className = '',
}) => {
  const dateLabel = formatExpiresForHeadline(expires);

  const content = (
    <>
      <div>
        <Calendar className="w-5 h-5 text-charcoal shrink-0" strokeWidth={1.5} aria-hidden />
      </div>
      <p className="text-[16px] font-bold text-charcoal">
        Your membership ends on {dateLabel}.
      </p>
      <p className="text-base text-muted-text leading-relaxed">
        Renew your membership soon to continue visiting, reserving, and enjoying member perks.
      </p>
      <div className="flex justify-end">
        {onRenew ? (
          <button
            type="button"
            onClick={onRenew}
            className="text-base font-semibold text-charcoal hover:underline inline-flex items-center gap-1 font-opensans"
          >
            Renew Now <ArrowUpRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            to={renewHref}
            className="text-base font-semibold text-charcoal hover:underline inline-flex items-center gap-1 font-opensans"
          >
            Renew Now <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`bg-muted-bg border border-border-light rounded-none p-4 ${className}`}
      role="region"
      aria-label="Membership expiring soon"
    >
      <div className="flex flex-col gap-2">
        {content}
      </div>
    </div>
  );
};
