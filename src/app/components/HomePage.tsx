import React from 'react';
import { Link } from 'react-router';
import { CARD_LABEL } from '../typography';

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
              to="/gfs-org"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline inline-flex items-center gap-2"
            >
              GFS.org Ticketing Page
            </Link>
            <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
              <li>Ticket button in page body</li>
              <li>Portal link in utility navigation</li>
            </ul>
          </section>

          <section>
            <a
              href="/gfs-email/index.html"
              className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline inline-flex items-center gap-2"
            >
              Email Templates
            </a>
            <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
              <li>Use the left navigation to toggle between email templates</li>
            </ul>
          </section>

          <section>
            <h2 className={`${CARD_LABEL} mb-3`}>
              Portal
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
            </ul>
          </section>

          <section>
            <h2 className={`${CARD_LABEL} mb-3`}>
              Transactions
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ticket-flow-guest-calendar-exposed"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Timed Tickets: Guest (Calendar Exposed)
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Click &quot;Continue as a Guest&quot;</li>
                  <li>Credit card input is &quot;placeholder&quot; and labeled &quot;Checkout&quot; with a &quot;View Tickets&quot; button to proceed</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/ticket-flow-member"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Timed Tickets: Member/User (Flows to Login and/or Register)
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Click &quot;Sign In&quot; on first screen</li>
                  <li>Enter any email address and password to proceed</li>
                  <li>Credit card input is &quot;placeholder&quot; and labeled &quot;Checkout&quot; with a &quot;View Tickets&quot; button to proceed</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/event-ticket"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Event Ticket: Member
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Click &quot;Sign In&quot; on first screen</li>
                  <li>Enter any email address and password to proceed</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/event-sold-out"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Event, Sold Out
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>No action to take</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/membership-purchase"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Membership Purchase
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Click &quot;Continue as a Guest&quot;</li>
                  <li>Credit card input is &quot;placeholder&quot; and labeled &quot;Checkout&quot; with a &quot;View Tickets&quot; button to proceed</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/altru-registration"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Altru Registration
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className={`${CARD_LABEL} mb-3`}>
              Credentials
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/login-as-user"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Login as User
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Insert any email address</li>
                  <li>Click &quot;Continue&quot;</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/login-to-reg-no-alt"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Create Portal Account (No Altru)
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Click &quot;Create Portal Account&quot;</li>
                </ul>
              </li>
              <li>
                <Link
                  to="/create-portal-with-altru"
                  className="text-lg font-bold text-charcoal hover:text-accent-green transition-colors underline"
                >
                  Create Portal Account (Existing Altru)
                </Link>
                <ul className="list-disc list-inside mt-1 ml-2 space-y-0.5 text-base text-charcoal">
                  <li>Click &quot;Create Portal Account&quot;</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
