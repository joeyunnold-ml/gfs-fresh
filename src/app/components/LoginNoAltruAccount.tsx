import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Pencil, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { Logo } from './Logo';
import { FIELD_LABEL } from '../typography';

const HERO_IMAGE = 'https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png';

/**
 * Login: No Altru Account flow: email → loader → email display + phone → loader → redirect to altru-registration.
 * Wireframe: split layout (form left, image right), green accent, style guide inputs.
 */
export const LoginNoAltruAccount: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // Handle loader after email submission
  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setStep(3);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Handle loader after phone submission and redirect
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        navigate('/altru-registration');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const canContinueStep1 = email.trim().length > 0;
  const canContinueStep3 = phone.trim().length > 0;

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinueStep1) return;
    setStep(2); // Move to loader step
  };

  const handleStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinueStep3) return;
    setStep(4); // Move to loader step before redirect
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:h-screen font-opensans text-charcoal">
      <div className="flex-1 md:w-1/2 flex flex-col min-h-screen md:min-h-0 md:overflow-y-auto" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="w-full flex justify-center pt-4 pb-4 md:pt-12 md:pb-12 lg:pt-16 border-b border-border-light">
          <Logo className="h-12 w-12 md:h-14 md:w-14 text-charcoal" />
        </div>

        <div
          className={clsx(
            'w-full md:hidden overflow-hidden transition-[max-height] duration-300 ease-out',
            step === 2 || step === 3 || step === 4 ? 'max-h-0' : 'max-h-[210px]'
          )}
        >
          <img src={HERO_IMAGE} alt="Grounds for Sculpture" className="w-full h-[210px] object-cover" />
        </div>

        <div className="flex flex-col flex-1 pt-8 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-16 pb-6 max-w-lg mx-auto w-full md:max-w-none justify-start items-center">
          <div className="w-full max-w-md">

            {/* Step 1: Email */}
            {step === 1 && (
              <>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-6">
                  Create an account
                </h1>
                <div className="border border-border-light bg-white">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8">
                    <form onSubmit={handleStep1} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="no-altru-email" className={FIELD_LABEL}>
                          Enter your email address to get started
                        </label>
                        <input
                          id="no-altru-email"
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
                        disabled={!canContinueStep1}
                        className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
                <p className="text-center mt-4 text-base text-charcoal">
                  Already have an account?{' '}
                  <a href="#" className="underline hover:text-accent-green transition-colors">
                    Login here
                  </a>
                </p>
              </>
            )}

            {/* Step 2: Loader (no left panel content) */}
            {step === 2 && (
              <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            )}

            {/* Step 3: Email display + Phone number */}
            {step === 3 && (
              <>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-6">
                  Create an account
                </h1>
                {/* Card 1: Email (read-only, editable via back to step 1) */}
                <div className="border border-border-light bg-white mb-6">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={FIELD_LABEL}>Email</span>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="p-1 text-charcoal hover:text-accent-green transition-colors"
                          aria-label="Edit email address"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-base text-muted-text">{email}</p>
                    </div>
                  </div>
                </div>
                {/* Card 2: Phone number */}
                <div className="border border-border-light bg-white">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8">
                    <form onSubmit={handleStep3} className="flex flex-col gap-4">
                      <div>
                        <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-4">
                          Enter your phone number to continue
                        </p>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="no-altru-phone" className={FIELD_LABEL}>Phone</label>
                          <input
                            id="no-altru-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(555) 555-5555"
                            className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={!canContinueStep3}
                        className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <a href="#" className="text-base text-accent-pink underline hover:opacity-80 transition-opacity">
                    Help logging in
                  </a>
                </div>
              </>
            )}

            {/* Step 4: Loader before redirect (no left panel content) */}
            {step === 4 && (
              <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Right panel - always visible */}
      <div className="hidden md:flex md:w-1/2 md:h-screen flex-shrink-0 bg-muted-bg overflow-hidden">
        <img src={HERO_IMAGE} alt="Grounds for Sculpture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
