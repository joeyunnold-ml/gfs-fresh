import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Logo } from './Logo';
import { FIELD_LABEL } from '../typography';
import { AccountDropdown } from './AccountDropdown';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const TITLE_OPTIONS = [
  'Mr.',
  'Mrs.',
  'Ms.',
  'Miss',
  'Dr.',
  'Prof.',
];

interface RegistrationForm {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  password: string;
  confirmPassword: string;
}

const defaultForm: RegistrationForm = {
  title: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: 'United States',
  address: '',
  city: '',
  state: '',
  zip: '',
  password: '',
  confirmPassword: '',
};

const TextInputField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
}> = ({ label, value, onChange, required, type = 'text', placeholder }) => (
  <label className="flex flex-col gap-1">
    <span className={FIELD_LABEL}>
      {label} {required && <span className="text-accent-pink">*</span>}
    </span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
    />
  </label>
);

const SelectField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  options: string[];
  placeholder?: string;
}> = ({ label, value, onChange, required, options, placeholder }) => (
  <label className="flex flex-col gap-1">
    <span className={FIELD_LABEL}>
      {label} {required && <span className="text-accent-pink">*</span>}
    </span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </label>
);

const TextareaField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}> = ({ label, value, onChange, required, rows = 3 }) => (
  <label className="flex flex-col gap-1">
    <span className={FIELD_LABEL}>
      {label} {required && <span className="text-accent-pink">*</span>}
    </span>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors resize-y"
    />
  </label>
);

export const AltruRegistration: React.FC = () => {
  const [form, setForm] = useState<RegistrationForm>(defaultForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const updateField = (field: keyof RegistrationForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canSubmit =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.address.trim() &&
    form.city.trim() &&
    form.state &&
    form.zip.trim() &&
    form.password.trim() &&
    form.confirmPassword.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // Mark user as logged in
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', `${form.firstName} ${form.lastName}`);
    setIsRegistered(true);
  };

  const handleBack = () => {
    window.history.back();
  };

  // Show confirmation screen if registered
  if (isRegistered) {
    const userName = `${form.firstName} ${form.lastName}`.trim() || 'User';
    return (
      <div className="min-h-screen flex flex-col bg-white font-opensans text-charcoal">
        <header className="border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Logo className="h-10 w-auto text-accent-green" />
            <AccountDropdown />
          </div>
        </header>

        <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
              Thank you for registering, {userName}.
            </h1>
            <button
              onClick={handleBack}
              className="px-8 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors min-h-[44px]"
            >
              Back
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-charcoal">
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Logo className="h-10 w-auto text-accent-green" />
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
            className="inline-flex items-center text-warm-muted hover:text-near-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-base">Return to main site</span>
          </a>

          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
            Registration
          </h1>
          
          <div className="space-y-4 mb-8 text-base text-charcoal leading-relaxed max-w-3xl">
            <p>
              Members should register with the same information as their membership (address, email, phone, etc.).
            </p>
            <p>
              Login information will be an email and created password. Please sign-in for member discounts before purchasing tickets.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Registration Details Section */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
              Registration Details
            </h2>
            <div className="space-y-6">
              {/* Title and First Name, Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid grid-cols-[auto_1fr] gap-6">
                  <div className="w-24">
                    <SelectField
                      label="TITLE"
                      value={form.title}
                      onChange={(v) => updateField('title', v)}
                      options={TITLE_OPTIONS}
                      placeholder="-"
                    />
                  </div>
                  <TextInputField
                    label="First Name"
                    value={form.firstName}
                    onChange={(v) => updateField('firstName', v)}
                    required
                  />
                </div>
                <TextInputField
                  label="Last Name"
                  value={form.lastName}
                  onChange={(v) => updateField('lastName', v)}
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextInputField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => updateField('email', v)}
                  required
                />
                <TextInputField
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => updateField('phone', v)}
                  required
                />
              </div>

              {/* Street Address */}
              <div>
                <TextareaField
                  label="Street Address"
                  value={form.address}
                  onChange={(v) => updateField('address', v)}
                  required
                  rows={3}
                />
              </div>

              {/* City, State, ZIP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-cols-[1fr_auto_8rem]">
                <TextInputField
                  label="City"
                  value={form.city}
                  onChange={(v) => updateField('city', v)}
                  required
                />
                <label className="flex flex-col gap-1 md:w-24">
                  <span className={FIELD_LABEL}>
                    State <span className="text-accent-pink">*</span>
                  </span>
                  <select
                    value={form.state}
                    onChange={(e) => updateField('state', e.target.value)}
                    className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                  >
                    <option value="">Select</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span className={FIELD_LABEL}>
                    ZIP <span className="text-accent-pink">*</span>
                  </span>
                  <input
                    type="text"
                    value={form.zip}
                    onChange={(e) => updateField('zip', e.target.value)}
                    className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full max-w-[8rem]"
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Password Section */}
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
              Password
            </h2>
            <div className="space-y-6 max-w-2xl">
              {/* Password with visibility toggle */}
              <div>
                <label className="flex flex-col gap-1">
                  <span className={FIELD_LABEL}>
                    PASSWORD <span className="text-accent-pink">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={form.password}
                      onChange={(e) => updateField('password', e.target.value)}
                      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-charcoal transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </label>
              </div>

              {/* Confirm Password with visibility toggle */}
              <div>
                <label className="flex flex-col gap-1">
                  <span className={FIELD_LABEL}>
                    CONFIRM PASSWORD <span className="text-accent-pink">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={form.confirmPassword}
                      onChange={(e) => updateField('confirmPassword', e.target.value)}
                      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-charcoal transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </label>
              </div>

              {/* Password Requirements */}
              <div className="pt-2">
                <p className={`${FIELD_LABEL} mb-3`}>Password requirements</p>
                <ul className="space-y-2 text-base text-muted-text">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span>At least 12 characters, include one numeric, one special character ($, #, %, *), and one lowercase/uppercase letter.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span>Password cannot contain your name(s), username, or organization name.</span>
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full md:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[44px]"
                >
                  Register
                </button>
              </div>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
};
