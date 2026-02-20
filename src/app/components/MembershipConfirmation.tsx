import React from 'react';
import { useLocation, Link } from 'react-router';
import { ArrowLeft, ChevronDown, Printer, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { AccountDropdown } from './AccountDropdown';

type ConfirmationState = {
  firstName?: string;
  lastName?: string;
  memberships?: { title: string; quantity: number; price: number }[];
  total?: number;
};

// QR code SVG matching current member portal (MemberDetailModal)
const QrCodeLarge: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 29 29" fill="none">
    <rect x="1" y="1" width="10" height="10" stroke="var(--charcoal)" strokeWidth="1.5" />
    <rect x="3.5" y="3.5" width="5" height="5" fill="var(--charcoal)" />
    <rect x="17" y="1" width="10" height="10" stroke="var(--charcoal)" strokeWidth="1.5" />
    <rect x="19.5" y="3.5" width="5" height="5" fill="var(--charcoal)" />
    <rect x="1" y="17" width="10" height="10" stroke="var(--charcoal)" strokeWidth="1.5" />
    <rect x="3.5" y="19.5" width="5" height="5" fill="var(--charcoal)" />
    <rect x="13" y="1" width="2" height="2" fill="var(--charcoal)" />
    <rect x="13" y="5" width="2" height="2" fill="var(--charcoal)" />
    <rect x="13" y="13" width="2" height="2" fill="var(--charcoal)" />
    <rect x="17" y="13" width="2" height="2" fill="var(--charcoal)" />
    <rect x="13" y="17" width="2" height="2" fill="var(--charcoal)" />
    <rect x="17" y="17" width="2" height="2" fill="var(--charcoal)" />
    <rect x="21" y="17" width="2" height="2" fill="var(--charcoal)" />
    <rect x="25" y="17" width="2" height="2" fill="var(--charcoal)" />
    <rect x="17" y="21" width="2" height="2" fill="var(--charcoal)" />
    <rect x="21" y="21" width="2" height="2" fill="var(--charcoal)" />
    <rect x="25" y="21" width="2" height="2" fill="var(--charcoal)" />
    <rect x="17" y="25" width="2" height="2" fill="var(--charcoal)" />
    <rect x="21" y="25" width="2" height="2" fill="var(--charcoal)" />
    <rect x="25" y="25" width="2" height="2" fill="var(--charcoal)" />
    <rect x="13" y="21" width="2" height="2" fill="var(--charcoal)" />
    <rect x="13" y="25" width="2" height="2" fill="var(--charcoal)" />
    <rect x="1" y="13" width="2" height="2" fill="var(--charcoal)" />
    <rect x="5" y="13" width="2" height="2" fill="var(--charcoal)" />
    <rect x="9" y="13" width="2" height="2" fill="var(--charcoal)" />
  </svg>
);

export const MembershipConfirmation: React.FC = () => {
  const location = useLocation();
  const state = (location.state as ConfirmationState) ?? {};
  const firstName = state.firstName ?? 'Tom';
  const lastName = state.lastName ?? 'Smith';
  const memberships = state.memberships ?? [{ title: 'Young Adult (18-25)', quantity: 1, price: 45 }];
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Member';
  const primaryLevel = memberships[0]?.title ?? 'Individual';

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black">
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <AccountDropdown />
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        <a
          href="/"
          className="inline-flex items-center text-warm-muted hover:text-near-black transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-base">Return to main site</span>
        </a>

        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
          Membership
        </h1>

        <p className="text-base text-charcoal leading-relaxed mb-8">
          Dear {firstName}, Thank you for your membership support of Grounds For Sculpture! Your{' '}
          {primaryLevel} level membership provides you with access to the arts and ensures that you
          will be the first to learn about exciting programs, behind-the-scenes info, and special
          happenings throughout the year. You will receive an email shortly with your payment
          confirmation and more information about how to use and take advantage of your membership.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-10">
          {/* Membership card — matches current member portal (MemberCard) style + style guide; same layout on all breakpoints */}
          <div className="relative bg-white flex flex-row w-full max-w-lg">
            <div aria-hidden="true" className="absolute inset-0 border border-border-light pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
            <div className="relative flex flex-1 flex-col justify-between p-4 md:p-6 min-w-0">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-base font-normal text-black">{primaryLevel} Member</span>
                  <span className="px-2.5 py-1.5 text-base font-bold text-black uppercase tracking-wider border border-lime leading-none shrink-0">
                    Active
                  </span>
                </div>
                <h2 className="text-xl font-bold text-charcoal">{fullName}</h2>
              </div>
              <div className="flex flex-col gap-0.5 text-base font-normal mt-4">
                <p className="text-muted-text">Member Since {new Date().getFullYear()}</p>
                <p>
                  <span className="text-muted-text">Expires </span>
                  <span className="text-near-black">May 5, 2027</span>
                </p>
                <p className="text-muted-text mt-1">ID: 29834928_1</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-4 md:p-6 bg-mist/50 w-[45%] min-w-[120px] shrink-0">
              <QrCodeLarge className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] shrink-0" />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:justify-between md:min-h-0">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
            <Link
              to="/current-member"
              className="inline-flex items-center justify-center px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-accent-green text-charcoal border-2 border-accent-green hover:bg-white hover:border-accent-green transition-colors shrink-0"
            >
              Open member portal
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
