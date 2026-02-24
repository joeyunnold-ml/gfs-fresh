import React from 'react';
import { Link } from 'react-router';

interface NonMemberPromoCardProps {
  onLearnMore?: () => void;
  learnMoreHref?: string;
  className?: string;
}

/**
 * White promo card for non-member view: start a new membership, benefits list, LEARN MORE CTA.
 */
export const NonMemberPromoCard: React.FC<NonMemberPromoCardProps> = ({
  onLearnMore,
  learnMoreHref = '/membership-purchase',
  className = '',
}) => (
  <div
    className={`bg-white flex flex-col items-start p-4 border border-border-light rounded-none ${className}`}
    role="region"
    aria-label="Start a new membership"
  >
    <h3 className="text-lg font-black text-charcoal uppercase tracking-wide leading-tight mb-4 font-arquitecta">
      START A NEW MEMBERSHIP AND CONTINUE EXPLORING WITH US
    </h3>
    <ul className="text-base font-normal text-charcoal space-y-1 mb-6 font-opensans list-none">
      <li>Free admission</li>
      <li>Guest passes</li>
      <li>Access to member-exclusive events</li>
    </ul>
    {onLearnMore ? (
      <button
        type="button"
        onClick={onLearnMore}
        className="w-full min-h-[44px] flex items-center justify-center bg-accent-green text-charcoal font-bold uppercase tracking-wider rounded-none font-arquitecta hover:opacity-90 transition-opacity"
      >
        LEARN MORE
      </button>
    ) : (
      <Link
        to={learnMoreHref}
        className="w-full min-h-[44px] flex items-center justify-center bg-accent-green text-charcoal font-bold uppercase tracking-wider rounded-none font-arquitecta hover:opacity-90 transition-opacity"
      >
        LEARN MORE
      </Link>
    )}
  </div>
);
