import React from 'react';
import { Link } from 'react-router';
import { Palette } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-opensans">
      <div className="max-w-[1400px] mx-auto p-8">
        <h1 className="text-2xl font-black uppercase tracking-wide font-arquitecta mb-8">
          GFS
        </h1>

        <div className="space-y-10">
          <section>
            <Link
              to="/mp-style"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline inline-flex items-center gap-2"
            >
              <Palette className="w-5 h-5 shrink-0" />
              Style Guide
            </Link>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">
              Member Portal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/current-member"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Current Member
                </Link>
              </li>
              <li>
                <Link
                  to="/membership-purchase"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Membership Purchase
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">
              Ticketing
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ticket-flow-guest"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Guest Checkout Flow
                </Link>
              </li>
              <li>
                <Link
                  to="/ticket-flow-member"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Authenticated Checkout Flow
                </Link>
              </li>
              <li>
                <Link
                  to="/event-ticket"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Event Ticket Purchase
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">
              Credentials
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/member-portal-entry"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Login: Email Input
                </Link>
              </li>
              <li>
                <Link
                  to="/account-registration"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Account Registration
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
