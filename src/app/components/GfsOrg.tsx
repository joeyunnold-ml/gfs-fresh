import React from 'react';
import { Link } from 'react-router';
import { Logo } from './Logo';
import { Search, Plus, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

export const GfsOrg: React.FC = () => {

  return (
    <div className="min-h-screen bg-white font-opensans relative">

      {/* VISIT Navigation List - Static overlay on right side, straddles hero and body content */}
      <div className="absolute right-6 md:right-12 lg:right-24 top-[400px] md:top-[500px] lg:top-[600px] z-50 bg-white shadow-lg overflow-hidden">
        {/* Bright green top line */}
        <div className="h-1 bg-accent-green w-full" />
        <div className="px-6 md:px-8 py-6 min-w-[280px] md:min-w-[320px]">
          <h4 className="text-lg font-bold text-charcoal mb-4 font-arquitecta">VISIT</h4>
          <div className="flex flex-col gap-0">
            <div className="relative">
              {/* Green stroke at container edge */}
              <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-0.5 bg-accent-green" />
              <a href="#" className="relative text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-t border-b border-border-light font-arquitecta block">
                Buy Tickets
              </a>
            </div>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-b border-border-light font-arquitecta block">
              Hours + Admission + Directions
            </a>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-b border-border-light font-arquitecta block">
              Dining
            </a>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-b border-border-light font-arquitecta block">
              Museum Shop
            </a>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-b border-border-light font-arquitecta block">
              Guidelines + FAQs
            </a>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-b border-border-light font-arquitecta block">
              Accessibility
            </a>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 border-b border-border-light font-arquitecta block">
              Group Visits
            </a>
            <a href="#" className="text-base font-normal text-charcoal hover:text-accent-green transition-colors py-3 font-arquitecta block">
              Interactive Map
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section with Header Overlay */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-x-hidden">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png"
          alt="Grounds For Sculpture"
          className="w-full h-full object-cover"
        />
        
        {/* Full overlay over entire hero image */}
        <div className="absolute inset-0 bg-black/55 z-20" />
        
        {/* Header - Transparent, no filled background */}
        <header className="absolute top-0 left-0 right-0 z-30">
          {/* Search button - bleeds to top and right edge */}
          <button className="absolute top-0 right-0 bg-accent-green text-white p-3 hover:bg-[#9FC030] transition-colors w-[55px] h-[55px] flex items-center justify-center rounded-none z-10">
            <Search className="w-6 h-6" />
          </button>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            {/* Utility Navigation - Top Level (Right-aligned) */}
            <div className="hidden lg:flex items-center justify-end gap-4 py-3 pr-0">
              <Button
                asChild
                className="px-6 py-4 text-sm font-bold uppercase tracking-wider font-arquitecta text-accent-green border-[1.5px] border-accent-green bg-transparent hover:bg-near-black transition-colors rounded-none min-h-[44px]"
              >
                <Link to="/ticket-flow-guest">
                  GET TICKETS
                </Link>
              </Button>
              <Link to="/member-portal-entry/password" className="text-sm font-semibold text-accent-green hover:text-[#9FC030] transition-colors uppercase tracking-wide font-arquitecta px-2 py-2 min-h-[44px] flex items-center gap-1">
                PORTAL
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
              <a href="#" className="text-sm font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide font-arquitecta px-2 py-2 min-h-[44px] flex items-center">
                MEMBERSHIP
              </a>
              <a href="#" className="text-sm font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide font-arquitecta px-2 py-2 min-h-[44px] flex items-center">
                DONATE
              </a>
              <a href="#" className="text-sm font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide font-arquitecta px-2 py-2 min-h-[44px] flex items-center">
                PLAN AN EVENT
              </a>
            </div>

            {/* Primary Navigation - Bottom Level (Left-aligned with Logo) */}
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Logo className="h-10 w-auto text-accent-green" />

              {/* Primary Navigation Links */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  VISIT
                </a>
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  SCULPTURE PARK
                </a>
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  EXHIBITIONS
                </a>
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  CALENDAR
                </a>
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  EDUCATION
                </a>
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  JOIN + SUPPORT
                </a>
                <a href="#" className="text-base font-semibold text-white hover:text-accent-green transition-colors uppercase tracking-wide px-2 py-2 min-h-[44px] flex items-center font-arquitecta">
                  ABOUT
                </a>
              </nav>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

          </div>
        </header>

        {/* Hero Text - Positioned lower-left */}
        <div className="absolute bottom-0 left-0 right-0 z-40 pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-white">
              <p className="text-base md:text-lg font-normal uppercase mb-2 font-arquitecta text-white/90" style={{ letterSpacing: '10px' }}>
                OPEN RAIN OR SHINE
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wide font-arquitecta drop-shadow-lg">
                TIMED TICKETS
              </h1>
            </div>
          </div>
        </div>

        {/* Blue divider line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 z-10" />
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Choose Your Entry Time Section */}
        <section className="mb-12">
          <h2 className="text-xl font-normal uppercase tracking-wide text-charcoal mb-6 font-arquitecta">
            CHOOSE YOUR ENTRY TIME
          </h2>
          <Button
            asChild
            className="px-12 py-7 text-lg font-bold uppercase tracking-wider font-arquitecta bg-accent-green text-charcoal border-2 border-accent-green hover:bg-white hover:border-accent-green transition-colors rounded-none min-h-[44px] mb-6"
          >
            <Link to="/ticket-flow-guest">
              GET TICKETS
            </Link>
          </Button>
          <div className="space-y-4 text-sm text-charcoal leading-relaxed max-w-3xl font-normal">
            <p>
              Due to limited capacity, timed ticket reservations are required to guarantee entry.
            </p>
            <p>
              <strong>If an entry time is sold out online it is also sold out onsite.</strong>
            </p>
            <p>
              Members are required to make a timed ticket reservation on weekends (Sat + Sun) and holidays.
            </p>
          </div>
        </section>

        {/* Ticket Pricing Section */}
        <section className="mb-12 border-t border-charcoal pt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full border-2 border-[#B1BBB9] flex items-center justify-center shrink-0">
              <Plus className="w-8 h-8 text-[#B1BBB9]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-normal tracking-wide text-charcoal font-arquitecta">
              Ticket Pricing (Now through February 2026)
            </h3>
          </div>
          <div className="space-y-4 text-sm text-charcoal leading-relaxed max-w-3xl font-normal">
            <p>
              Tickets available up to two weeks in advance and released on a weekly basis.
            </p>
            <p className="italic">
              All sales are final. Tickets are non-refundable. Grounds For Sculpture will make every effort to accommodate rescheduling of tickets.{' '}
              <a href="#" className="text-[#D4567A] underline hover:opacity-80 italic">
                Review our guidelines before you visit.
              </a>
            </p>
            <p>
              Use our <a href="#" className="text-[#D4567A] underline hover:opacity-80 italic">interactive map</a> or{' '}
              <a href="#" className="text-[#D4567A] underline hover:opacity-80 italic">print a map</a> at home before you visit.
            </p>
          </div>
        </section>

        {/* Guest Passes Section */}
        <section className="border-t border-border-light pt-8">
          <h3 className="text-xl font-normal uppercase tracking-wide text-charcoal mb-6 font-arquitecta">
            GUEST PASSES
          </h3>
          <div className="space-y-4 text-sm text-charcoal leading-relaxed max-w-3xl font-normal">
            <p>
              Guest passes require a free reservation and must be presented or scanned upon arrival. Enter the quantity to be redeemed when selecting tickets.
            </p>
            <p>
              Looking to gift tickets to friends or family? Grounds For Sculpture now offers guest passes that can be used all year long for general admission. Beautiful in every season!{' '}
              <a href="tel:6095860616" className="text-[#D4567A] underline hover:opacity-80">
                Call 609.586.0616
              </a>{' '}
              or{' '}
              <a href="#" className="text-[#D4567A] underline hover:opacity-80">
                purchase in person at the Museum Shop
              </a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
