import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Pencil, Loader2, Info } from 'lucide-react';
import clsx from 'clsx';
import { Logo } from './Logo';
import { FIELD_LABEL } from '../typography';

const HERO_IMAGE = 'https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png';

/**
 * Login: No Altru Account flow: email → loader → email + phone → loader → create-account message + steps.
 * Wireframe: split layout (form left, image right), green accent, style guide inputs.
 */
export const LoginNoAltruAccount: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasClickedTicketingRegistration, setHasClickedTicketingRegistration] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  // Handle loader after phone submission → go to step 5
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Handle loader after step 6 (email) → go to step 8 (password form)
  useEffect(() => {
    if (step === 7) {
      const timer = setTimeout(() => {
        setStep(8);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Handle loader after step 8 (password) → redirect to /current-member
  useEffect(() => {
    if (step === 9) {
      const timer = setTimeout(() => {
        navigate('/current-member');
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

  const canContinueStep6 = loginEmail.trim().length > 0;
  const handleStep6 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinueStep6) return;
    setStep(7); // Loader, then step 8 (password form)
  };

  const bothPasswordsFilled = password.trim().length > 0 && confirmPassword.trim().length > 0;
  const canContinueStep8 = bothPasswordsFilled;
  const handleStep8 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinueStep8) return;
    setStep(9); // Loader, then redirect to /current-member
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:h-screen font-opensans text-charcoal">
      <div className="flex-1 md:w-1/2 flex flex-col min-h-screen md:min-h-0 md:overflow-y-auto bg-mist">
        <div className="w-full flex justify-center pt-4 pb-4 md:pt-12 md:pb-12 lg:pt-16 border-b border-border-light">
          <Logo className="h-12 w-12 md:h-14 md:w-14 text-charcoal" />
        </div>

        <div
          className={clsx(
            'w-full md:hidden overflow-hidden transition-[max-height] duration-300 ease-out',
            step === 2 || step === 4 || step === 7 || step === 9 ? 'max-h-0' : 'max-h-[210px]'
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
              </>
            )}

            {/* Step 4: Loader (no left panel content) */}
            {step === 4 && (
              <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            )}

            {/* Step 5: Create account message + actions */}
            {step === 5 && (
              <>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-6">
                  Create an account
                </h1>
                <div className="border border-border-light bg-white">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex justify-center">
                      <Info className="w-14 h-14 text-charcoal" aria-hidden />
                    </div>
                    <p className="text-base text-charcoal pb-6 border-b border-border-light">
                      Before you continue, create an account in GFS Ticketing.
                    </p>
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-xl font-black text-charcoal border-2 border-charcoal font-arquitecta">
                          1
                        </span>
                        <p className="text-base text-charcoal pt-1">
                          Click the button to create an account in our ticketing platform.
                        </p>
                      </div>
                      <a
                        href="/altru-registration"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setHasClickedTicketingRegistration(true)}
                        className="w-full inline-flex items-center justify-center min-h-[44px] px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center"
                      >
                        Continue to ticketing registration
                      </a>
                      <div className="border-b border-border-light" aria-hidden />
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-xl font-black text-charcoal border-2 border-charcoal font-arquitecta">
                          2
                        </span>
                        <p className="text-base text-charcoal pt-1">
                          Return and click the button below.
                        </p>
                      </div>
                      <button
                        type="button"
                        disabled={!hasClickedTicketingRegistration}
                        onClick={() => setStep(6)}
                        className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-accent-green text-charcoal border-2 border-accent-green hover:bg-white hover:border-accent-green transition-colors min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent-green disabled:hover:border-accent-green"
                      >
                        I made a ticketing account, continue
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Step 6: Login with ticketing account (email + continue) */}
            {step === 6 && (
              <>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-6">
                  Create an account
                </h1>
                <div className="border border-border-light bg-white">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8">
                    <form onSubmit={handleStep6} className="flex flex-col gap-4">
                      <p className="text-base text-charcoal pb-6 border-b border-border-light">
                        Enter the email address you used to register for GFS Ticketing.
                      </p>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="login-email-step6" className={FIELD_LABEL}>
                          Enter your email address
                        </label>
                        <input
                          id="login-email-step6"
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="Email Address"
                          autoComplete="email"
                          className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!canContinueStep6}
                        className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}

            {/* Step 7: Loader after email (no left panel content) */}
            {step === 7 && (
              <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            )}

            {/* Step 9: Loader after password (no left panel content), then redirect to /current-member */}
            {step === 9 && (
              <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            )}

            {/* Step 8: Create a password form */}
            {step === 8 && (
              <>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-6">
                  Create an account
                </h1>
                <div className="border border-border-light bg-white">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8 space-y-4">
                    <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-4">
                      Create a password
                    </p>
                    <form onSubmit={handleStep8} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="no-altru-password" className={FIELD_LABEL}>Password</label>
                        <input
                          id="no-altru-password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          autoComplete="new-password"
                          className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="no-altru-confirm-password" className={FIELD_LABEL}>Confirm Password</label>
                        <input
                          id="no-altru-confirm-password"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm Password"
                          autoComplete="new-password"
                          className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                        />
                      </div>
                      {!bothPasswordsFilled && (
                        <div className="pt-2">
                          <p className={`${FIELD_LABEL} mb-2`}>Password requirements</p>
                          <ul className="text-base text-muted-text space-y-1">
                            <li>At least 8 characters</li>
                            <li>Includes one uppercase letter</li>
                            <li>Includes one lowercase letter</li>
                            <li>Includes one number</li>
                            <li>Includes one special character (e.g. ! @ # $ %)</li>
                          </ul>
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={!canContinueStep8}
                        className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
              </>
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
