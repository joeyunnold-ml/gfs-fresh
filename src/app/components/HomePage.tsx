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
        <ul className="space-y-4">
          <li>
            <Link
              to="/mp-style"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline inline-flex items-center gap-2"
            >
              <Palette className="w-5 h-5 shrink-0" />
              Style guide
            </Link>
          </li>
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
              to="/ticket-flow-guest"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
            >
              Guest Checkout Flow
            </Link>
          </li>
          <li>
            <Link
              to="/member-portal-entry"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
            >
              Login: Email Input
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
