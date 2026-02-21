import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Pencil, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { Logo } from './Logo';
import { FIELD_LABEL } from '../typography';

const HERO_IMAGE = 'https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

interface PersonalDetails {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const defaultDetails: PersonalDetails = {
  firstName: '',
  lastName: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: 'United States',
};

/**
 * Account Registration flow: email → personal details → set password → finish.
 * Wireframe: split layout (form left, image right), green accent, style guide inputs.
 */
export const AccountRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState<PersonalDetails>(defaultDetails);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const setDetail = (field: keyof PersonalDetails, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  // Scroll to top when step changes (e.g. after tapping Continue)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const canContinueStep1 = email.trim().length > 0;
  const canContinueStep2 =
    details.firstName.trim() &&
    details.lastName.trim() &&
    details.street.trim() &&
    details.city.trim() &&
    details.state &&
    details.zip.trim();
  const bothPasswordsFilled = password.trim().length > 0 && confirmPassword.trim().length > 0;
  const canContinueStep3 = bothPasswordsFilled;

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinueStep1) return;
    setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinueStep2) return;
    setStep(3);
  };

  const handleStep3 = () => {
    if (!canContinueStep3) return;
    setIsRedirecting(true);
  };

  useEffect(() => {
    if (!isRedirecting) return;
    const t = setTimeout(() => {
      navigate('/ticket-flow-member', { state: { fromRegistration: true } });
    }, 2000);
    return () => clearTimeout(t);
  }, [isRedirecting, navigate]);

  const fullName = [details.firstName, details.lastName].filter(Boolean).join(' ') || '—';
  const fullAddress = [details.street, details.city, details.state, details.zip].filter(Boolean).join(', ') || '—';

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:h-screen font-opensans text-charcoal">
      <div className="flex-1 md:w-1/2 flex flex-col min-h-screen md:min-h-0 md:overflow-y-auto bg-mist">
        <div className="w-full flex justify-center pt-4 pb-4 md:pt-12 md:pb-12 lg:pt-16 border-b border-border-light">
          <Logo className="h-12 w-12 md:h-14 md:w-14 text-charcoal" />
        </div>

        <div
          className={clsx(
            'w-full md:hidden overflow-hidden transition-[max-height] duration-300 ease-out',
            step === 2 || step === 3 ? 'max-h-0' : 'max-h-[210px]'
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
                        <label htmlFor="reg-email" className={FIELD_LABEL}>
                          Enter your email address to get started
                        </label>
                        <input
                          id="reg-email"
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

            {/* Step 2: Personal details — two cards */}
            {step === 2 && (
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
                {/* Card 2: Personal + Address */}
                <div className="border border-border-light bg-white">
                  <div className="h-[3px] bg-accent-green" aria-hidden />
                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-4">
                        Enter your personal
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="reg-first" className={FIELD_LABEL}>First Name</label>
                          <input
                            id="reg-first"
                            type="text"
                            value={details.firstName}
                            onChange={(e) => setDetail('firstName', e.target.value)}
                            className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="reg-last" className={FIELD_LABEL}>Last Name</label>
                          <input
                            id="reg-last"
                            type="text"
                            value={details.lastName}
                            onChange={(e) => setDetail('lastName', e.target.value)}
                            className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                          <label htmlFor="reg-phone" className={FIELD_LABEL}>Phone</label>
                          <input
                            id="reg-phone"
                            type="tel"
                            value={details.phone}
                            onChange={(e) => setDetail('phone', e.target.value)}
                            placeholder="(555) 555-5555"
                            className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-4">
                        Address
                      </p>
                      <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="reg-street" className={FIELD_LABEL}>Street Address</label>
                          <input
                            id="reg-street"
                            type="text"
                            value={details.street}
                            onChange={(e) => setDetail('street', e.target.value)}
                            className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label htmlFor="reg-city" className={FIELD_LABEL}>City</label>
                            <input
                              id="reg-city"
                              type="text"
                              value={details.city}
                              onChange={(e) => setDetail('city', e.target.value)}
                              className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label htmlFor="reg-state" className={FIELD_LABEL}>State</label>
                            <select
                              id="reg-state"
                              value={details.state}
                              onChange={(e) => setDetail('state', e.target.value)}
                              className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                            >
                              <option value="">Select</option>
                              {US_STATES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label htmlFor="reg-zip" className={FIELD_LABEL}>ZIP</label>
                            <input
                              id="reg-zip"
                              type="text"
                              value={details.zip}
                              onChange={(e) => setDetail('zip', e.target.value)}
                              className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label htmlFor="reg-country" className={FIELD_LABEL}>Country</label>
                            <select
                              id="reg-country"
                              value={details.country}
                              onChange={(e) => setDetail('country', e.target.value)}
                              className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                            >
                              <option value="United States">United States</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => canContinueStep2 && setStep(3)}
                      disabled={!canContinueStep2}
                      className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Set password */}
            {step === 3 && (
              <>
                {isRedirecting ? (
                  <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                    <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
                  </div>
                ) : (
                <div className="space-y-6">
                  <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-6">
                    Create an account
                  </h1>
                  <div className="border border-border-light bg-white">
                    <div className="h-[3px] bg-accent-green" aria-hidden />
                    <div className="p-6 space-y-4">
                      {[
                        { label: 'Email', value: email, editStep: 1 },
                        { label: 'Name', value: fullName, editStep: 2 },
                        { label: 'Phone', value: details.phone || '—', editStep: 2 },
                        { label: 'Address', value: fullAddress, editStep: 2 },
                      ].map(({ label, value, editStep }) => (
                        <div key={label} className="flex items-center justify-between gap-4 border-b border-border-light pb-4 last:border-b-0 last:pb-0">
                          <div>
                            <span className={`${FIELD_LABEL} block`}>{label}</span>
                            <span className="text-base text-charcoal truncate block max-w-[200px] md:max-w-none">{value}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setStep(editStep)}
                            className="shrink-0 p-1 text-muted-text hover:text-accent-green transition-colors"
                            aria-label={`Edit ${label}`}
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-border-light bg-white">
                    <div className="h-[3px] bg-accent-green" aria-hidden />
                    <div className="p-6 md:p-8 space-y-4">
                      <p className="text-lg font-black uppercase tracking-wide text-charcoal font-arquitecta mb-4">
                        Create a password
                      </p>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="reg-password" className={FIELD_LABEL}>Password</label>
                        <input
                          id="reg-password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          autoComplete="new-password"
                          className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="reg-confirm" className={FIELD_LABEL}>Confirm Password</label>
                        <input
                          id="reg-confirm"
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
                        type="button"
                        onClick={() => handleStep3()}
                        disabled={!canContinueStep3}
                        className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                )}
              </>
            )}

            {/* Step 4: Finish */}
            {step === 4 && (
              <div className="border border-border-light bg-white text-center">
                <div className="h-[3px] bg-accent-green" aria-hidden />
                <div className="p-8 md:p-12">
                  <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal mb-4">
                    You&apos;re all set
                  </h1>
                  <p className="text-base text-muted-text mb-8">
                    Your account has been created. You can now sign in to the member portal.
                  </p>
                  <Link
                    to="/member-portal-entry"
                    className="inline-block w-full md:w-auto min-h-[44px] px-8 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black transition-colors text-center"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 md:h-screen flex-shrink-0 bg-muted-bg overflow-hidden">
        <img src={HERO_IMAGE} alt="Grounds for Sculpture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
