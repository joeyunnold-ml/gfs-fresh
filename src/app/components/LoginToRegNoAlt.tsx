import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Logo } from './Logo';
import { FIELD_LABEL } from '../typography';

/**
 * Login-to-register (no Altru) variant: same as member-portal-entry
 * but "Register for Portal" links to Login: No Altru Acct. flow.
 */
export const LoginToRegNoAlt: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    navigate('/member-portal-entry/password', { state: { email: email.trim() } });
  };

  const canContinue = email.trim().length > 0;

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:h-screen font-opensans text-charcoal">
      {/* Left: form panel — 50% width, warm beige background */}
      <div className="flex-1 md:w-1/2 flex flex-col min-h-screen md:min-h-0 md:overflow-y-auto bg-mist">
        {/* Logo: tighter padding on mobile, more on desktop */}
        <div className="w-full flex justify-center pt-4 pb-4 md:pt-12 md:pb-12 lg:pt-16 border-b border-border-light">
          <Logo className="h-12 w-12 md:h-14 md:w-14 text-charcoal" />
        </div>

        {/* Mobile: full-bleed image strip between logo and heading (75% of original height) */}
        <div className="w-full md:hidden">
          <img
            src="https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png"
            alt="Grounds for Sculpture"
            className="w-full h-[210px] object-cover"
          />
        </div>

        {/* On mobile: reserve space for Back button (not shown) so labels/card align with password screen */}
        <div className="flex flex-col flex-1 pt-8 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-16 pb-6 max-w-lg mx-auto w-full md:max-w-none justify-start items-center">
          <div className="w-full h-12 md:hidden" aria-hidden />
          <h1 className="w-full text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-8">
            GFS Portal
          </h1>

          {/* Form in white container: green stroke at top, border, no shadow */}
          <div className="w-full max-w-md">
            <div className="border border-border-light bg-white">
              <div className="h-[3px] bg-accent-green" aria-hidden />
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-2">
                    Login
                  </p>
                  <div className="flex flex-col gap-1">
                    <label className={FIELD_LABEL}>
                      Enter your email address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      autoComplete="email"
                      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canContinue}
                    className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center"
                  >
                    Continue
                  </button>
                  <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-2 pt-4 border-t border-border-light">
                    Create an account
                  </p>
                  <Link
                    to="/login-no-altru-account"
                    className="w-full inline-flex items-center justify-center min-h-[44px] px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center"
                  >
                    Create portal account
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-16 py-6 flex justify-center">
          <a
            href="#"
            className="text-base text-charcoal hover:text-muted-text transition-colors underline font-opensans"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Right: hero image — 50% width, fixed viewport height (desktop only) */}
      <div className="hidden md:flex md:w-1/2 md:h-screen flex-shrink-0 bg-muted-bg overflow-hidden">
        <img
          src="https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png"
          alt="Grounds for Sculpture"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
