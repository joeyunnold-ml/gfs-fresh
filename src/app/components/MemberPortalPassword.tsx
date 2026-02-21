import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Logo } from './Logo';
import { FIELD_LABEL } from '../typography';

const PASSWORD_ERROR_ID = 'password-error';

/**
 * Member Portal password entry screen.
 * Follows email step; shows email (read-only), password field, and Continue.
 * Simulated validation: any non-empty password is "wrong" and shows an accessible error.
 */
export const MemberPortalPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string } | undefined)?.email ?? '';
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const errorRef = useRef<HTMLParagraphElement>(null);

  // Redirect if no email (e.g. direct URL)
  useEffect(() => {
    if (!email.trim()) {
      navigate('/member-portal-entry', { replace: true });
    }
  }, [email, navigate]);

  // When error appears, move focus to error message so screen readers announce it
  useEffect(() => {
    if (showError && errorRef.current) {
      errorRef.current.focus({ preventScroll: true });
    }
  }, [showError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    if (password.trim() === '1234') {
      setIsRedirecting(true);
    } else {
      setShowError(true);
    }
  };

  // After correct password (1234): show loader 2s then redirect to /current-member
  useEffect(() => {
    if (!isRedirecting) return;
    const timer = setTimeout(() => {
      navigate('/current-member');
    }, 2000);
    return () => clearTimeout(timer);
  }, [isRedirecting, navigate]);

  const canContinue = password.trim().length > 0;
  const hasError = showError;

  if (!email.trim()) {
    return null; // redirecting
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:h-screen font-opensans text-charcoal">
      <div className="flex-1 md:w-1/2 flex flex-col min-h-screen md:min-h-0 md:overflow-y-auto bg-mist">
        <div className="w-full flex justify-center pt-4 pb-4 md:pt-12 md:pb-12 lg:pt-16 border-b border-border-light">
          <Logo className="h-12 w-12 md:h-14 md:w-14 text-charcoal" />
        </div>

        <div className="w-full md:hidden">
          <img
            src="https://res.cloudinary.com/djwd8tgyz/image/upload/v1771534540/gfs_qm8bdw.png"
            alt="Grounds for Sculpture"
            className="w-full h-[210px] object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 pt-8 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-16 pb-6 max-w-lg mx-auto w-full md:max-w-none justify-start items-center">
          {/* Single max-w-md block so Back aligns with form; Back absolutely above on desktop so it doesn't push heading down */}
          <div className="w-full max-w-md relative">
            {!isRedirecting && (
              <div className="mb-4 md:mb-0 md:absolute md:top-[-3rem] md:left-0">
                <Link
                  to="/member-portal-entry"
                  state={{ email }}
                  className="inline-flex items-center text-charcoal hover:text-near-black transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-base">Back</span>
                </Link>
              </div>
            )}

            {!isRedirecting && (
              <h1 className="w-full text-2xl md:text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal text-center mb-8">
                Enter your password
              </h1>
            )}

            {isRedirecting ? (
              <div className="flex flex-col items-center justify-center py-16" aria-live="polite" aria-busy="true">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            ) : (
            <div className="w-full">
            <div className="border border-border-light bg-white">
              <div className="h-[3px] bg-accent-green" aria-hidden />
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="flex flex-col gap-1">
<span className={FIELD_LABEL}>
                    Email
                  </span>
                    <p className="text-base text-muted-text" aria-label={`Email: ${email}`}>
                      {email}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
<label htmlFor="member-portal-password" className={FIELD_LABEL}>
                    Password
                  </label>
                    <input
                      id="member-portal-password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (showError) setShowError(false);
                      }}
                      placeholder=""
                      autoComplete="current-password"
                      aria-invalid={hasError}
                      aria-describedby={hasError ? PASSWORD_ERROR_ID : undefined}
                      className={`text-base text-charcoal border px-3 py-2 bg-white focus:outline-none transition-colors w-full ${
                        hasError
                          ? 'border-accent-pink focus:border-accent-pink'
                          : 'border-border-light focus:border-accent-green'
                      }`}
                    />
                    {hasError && (
                      <p
                        id={PASSWORD_ERROR_ID}
                        ref={errorRef}
                        role="alert"
                        aria-live="polite"
                        tabIndex={-1}
                        className="text-base text-accent-pink mt-1 animate-in fade-in-0 duration-150 ease-out"
                      >
                        Wrong password. Try again or click "Help logging in" for more options.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!canContinue}
                    className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <a
                href="#"
                className="text-base text-accent-pink hover:underline font-opensans"
                onClick={(e) => { e.preventDefault(); }}
              >
                Help logging in
              </a>
            </div>
          </div>
            )}
        </div>

        {!isRedirecting && (
          <div className="px-6 md:px-12 lg:px-16 py-6 flex justify-center">
            <a
              href="#"
              className="text-base text-charcoal hover:text-muted-text transition-colors underline font-opensans"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </div>
        )}
      </div>
      </div>

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
