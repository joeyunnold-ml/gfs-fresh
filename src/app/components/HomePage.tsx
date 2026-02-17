import React from 'react';
import { Link } from 'react-router';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-opensans">
      <div className="max-w-[1400px] mx-auto p-8">
        <h1 className="text-2xl font-black uppercase tracking-wide font-arquitecta mb-8">
          Member Portal
        </h1>
        <ul className="space-y-4">
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
              to="/mp-style"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
            >
              Style Guide
            </Link>
          </li>
          <li>
            <Link
              to="/ticket-flow-1"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
            >
              Ticket Flow — Step X
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
