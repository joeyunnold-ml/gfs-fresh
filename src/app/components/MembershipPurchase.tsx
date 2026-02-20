import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown, Minus, Plus, Check } from 'lucide-react';
import clsx from 'clsx';
import { FIELD_LABEL } from '../typography';
import { Logo } from './Logo';
import { Dialog, DialogOverlay, DialogPortal, DialogTitle } from './ui/dialog';
import { TicketFlowStepIndicator, TicketFlowFooter } from './TicketFlow1';
import type { TicketFlowStep } from '../types';
import type { MembershipType } from '../types';
import { initialMembershipTypes } from '../mockData';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

type StepId = 1 | 2;

const buildSteps = (currentStep: StepId): TicketFlowStep[] => {
  const base: { number: StepId; label: string }[] = [
    { number: 1, label: 'Membership Type' },
    { number: 2, label: 'Checkout' },
  ];
  return base.map((step) => ({
    ...step,
    status:
      step.number < currentStep ? 'completed' : step.number === currentStep ? 'active' : 'pending',
  }));
};

interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  street: string;
}

const TextInputField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}> = ({ label, value, onChange, required, type = 'text' }) => (
  <label className="flex flex-col gap-1">
    <span className={FIELD_LABEL}>
      {label} {required && <span className="text-accent-pink">*</span>}
    </span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
    />
  </label>
);

const CheckboxField: React.FC<{
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}> = ({ label, checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className="flex items-center gap-3 cursor-pointer"
  >
    <div
      className={clsx(
        'w-5 h-5 border-2 flex items-center justify-center transition-colors',
        checked ? 'bg-charcoal border-charcoal' : 'border-card-stroke hover:border-charcoal',
      )}
    >
      {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
    </div>
    <span className="text-base text-charcoal">{label}</span>
  </button>
);

const MembershipItem: React.FC<{
  membership: MembershipType;
  onQuantityChange: (qty: number) => void;
}> = ({ membership, onQuantityChange }) => {
  const handleDecrement = () => {
    if (membership.quantity > 0) onQuantityChange(membership.quantity - 1);
  };
  const handleIncrement = () => onQuantityChange(membership.quantity + 1);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-border-light border-l-4 border-l-border-light bg-white">
      <div className="flex-1 max-w-xl pr-4">
        <h3 className="font-bold text-charcoal text-base mb-1">{membership.title}</h3>
        <p className="text-muted-text text-base leading-relaxed">
          {membership.description}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <span className="font-bold text-charcoal text-base">${membership.price}</span>
        <div className="flex flex-stretch h-10">
          <button
            onClick={handleDecrement}
            disabled={membership.quantity === 0}
            className={clsx(
              'w-10 flex items-center justify-center border bg-white hover:bg-hover active:bg-mist disabled:cursor-not-allowed transition-colors text-muted-text',
              membership.quantity > 0 ? 'border-border-light border-r-charcoal' : 'border-border-light',
            )}
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div
            className={clsx(
              'w-10 flex items-center justify-center font-bold text-base border-y transition-colors',
              membership.quantity > 0
                ? 'bg-accent-green border-charcoal text-near-black'
                : 'bg-mist border-border-light text-muted-fg',
            )}
          >
            {membership.quantity}
          </div>
          <button
            onClick={handleIncrement}
            className={clsx(
              'w-10 flex items-center justify-center border bg-white hover:bg-hover active:bg-mist transition-colors text-muted-text',
              membership.quantity > 0 ? 'border-border-light border-l-charcoal' : 'border-border-light',
            )}
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MembershipOrderSummary: React.FC<{ memberships: MembershipType[]; total: number }> = ({
  memberships,
  total,
}) => {
  const selected = memberships.filter((m) => m.quantity > 0);
  const hasItems = selected.length > 0;

  return (
    <div className="border border-card-stroke">
      <div className="h-1 bg-lime w-full" />
      <div className="p-8">
        <div className="pb-4 mb-5 border-b border-border-light">
          <h2 className="text-base font-bold tracking-widest text-charcoal uppercase font-arquitecta">
            Order Summary
          </h2>
        </div>
        <div className="space-y-3 mb-5 pb-5 border-b border-border-light min-h-16">
          {hasItems ? (
            selected.map((m) => (
              <div key={m.id} className="flex justify-between items-start text-base">
                <span className="text-charcoal">{m.title}</span>
                <span className="text-charcoal whitespace-nowrap">
                  {m.quantity} &times; ${m.price}
                </span>
              </div>
            ))
          ) : (
            <div className="text-muted-text italic text-base py-2">No membership selected</div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-base text-charcoal">Total</span>
          <span className="font-bold text-base text-charcoal">${total}</span>
        </div>
      </div>
    </div>
  );
};

export const MembershipPurchase: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [memberships, setMemberships] = useState<MembershipType[]>(initialMembershipTypes);
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    street: '',
  });
  const [createAccount, setCreateAccount] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Scroll to top when step changes (e.g. after tapping Continue)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const steps = buildSteps(currentStep);
  const total = memberships.reduce((sum, m) => sum + m.price * m.quantity, 0);
  const hasSelection = total > 0;

  const handleQuantityChange = (id: string, qty: number) => {
    setMemberships((prev) =>
      prev.map((m) => (m.id === id ? { ...m, quantity: qty } : m)),
    );
  };

  const canSubmitCheckout =
    hasSelection &&
    !!guestInfo.firstName &&
    !!guestInfo.lastName &&
    !!guestInfo.email &&
    !!guestInfo.city &&
    !!guestInfo.state &&
    !!guestInfo.zip &&
    !!guestInfo.street &&
    (!createAccount || (password.trim() && confirmPassword.trim()));

  const handlePay = () => setCheckoutModalOpen(true);

  const handleCompletePayment = () => {
    setCheckoutModalOpen(false);
    const selected = memberships
      .filter((m) => m.quantity > 0)
      .map((m) => ({ title: m.title, quantity: m.quantity, price: m.price }));
    navigate('/membership-purchase/confirmation', {
      state: {
        firstName: guestInfo.firstName,
        lastName: guestInfo.lastName,
        memberships: selected,
        total,
      },
    });
  };

  const individual = memberships.filter((m) => m.category === 'individual');
  const family = memberships.filter((m) => m.category === 'family');
  const other = memberships.filter((m) => m.category === 'other');

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black pb-24 md:pb-14">
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <button className="flex items-center gap-2 text-base font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors">
            Account Portal
            <ChevronDown className="w-4 h-4" />
          </button>
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
            Membership
          </h1>

          <TicketFlowStepIndicator
            steps={steps}
            onStepClick={(stepNumber) => setCurrentStep(stepNumber as StepId)}
          />
        </div>

        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 font-arquitecta">
                Select a Membership
              </h2>
              <section>
                <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mb-4 font-arquitecta">
                  Individual Memberships
                </h3>
                <div className="space-y-4">
                  {individual.map((m) => (
                    <MembershipItem
                      key={m.id}
                      membership={m}
                      onQuantityChange={(qty) => handleQuantityChange(m.id, qty)}
                    />
                  ))}
                </div>
              </section>
              <section>
                <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mb-4 font-arquitecta">
                  Family Memberships
                </h3>
                <div className="space-y-4">
                  {family.map((m) => (
                    <MembershipItem
                      key={m.id}
                      membership={m}
                      onQuantityChange={(qty) => handleQuantityChange(m.id, qty)}
                    />
                  ))}
                </div>
              </section>
              <section>
                <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mb-4 font-arquitecta">
                  Other Memberships
                </h3>
                <div className="space-y-4">
                  {other.map((m) => (
                    <MembershipItem
                      key={m.id}
                      membership={m}
                      onQuantityChange={(qty) => handleQuantityChange(m.id, qty)}
                    />
                  ))}
                </div>
              </section>
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-8">
              <MembershipOrderSummary memberships={memberships} total={total} />
              <div className="space-y-4">
                <button
                  disabled={!hasSelection}
                  onClick={() => setCurrentStep(2)}
                  className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center"
                >
                  Check Out as a Guest
                </button>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="block w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <section className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-arquitecta">
                Personal information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextInputField
                    label="First Name"
                    required
                    value={guestInfo.firstName}
                    onChange={(v) => setGuestInfo((prev) => ({ ...prev, firstName: v }))}
                  />
                  <TextInputField
                    label="Last Name"
                    required
                    value={guestInfo.lastName}
                    onChange={(v) => setGuestInfo((prev) => ({ ...prev, lastName: v }))}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextInputField
                    label="Email"
                    required
                    type="email"
                    value={guestInfo.email}
                    onChange={(v) => setGuestInfo((prev) => ({ ...prev, email: v }))}
                  />
                  <TextInputField
                    label="Phone"
                    value={guestInfo.phone}
                    onChange={(v) => setGuestInfo((prev) => ({ ...prev, phone: v }))}
                  />
                </div>
                <div>
                  <TextInputField
                    label="Street Address"
                    required
                    value={guestInfo.street}
                    onChange={(v) => setGuestInfo((prev) => ({ ...prev, street: v }))}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-cols-[1fr_auto_8rem]">
                  <TextInputField
                    label="City"
                    required
                    value={guestInfo.city}
                    onChange={(v) => setGuestInfo((prev) => ({ ...prev, city: v }))}
                  />
                  <label className="flex flex-col gap-1 md:w-24">
                    <span className={FIELD_LABEL}>
                      State <span className="text-accent-pink">*</span>
                    </span>
                    <select
                      value={guestInfo.state}
                      onChange={(e) => setGuestInfo((prev) => ({ ...prev, state: e.target.value }))}
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
                      value={guestInfo.zip}
                      onChange={(e) => setGuestInfo((prev) => ({ ...prev, zip: e.target.value }))}
                      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full max-w-[8rem]"
                    />
                  </label>
                </div>
              </div>
              <CheckboxField
                label="Create an account for managing my membership and ticketing"
                checked={createAccount}
                onChange={setCreateAccount}
              />
              {createAccount && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <TextInputField
                    label="Select a Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                  />
                  <TextInputField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                  />
                </div>
              )}
            </section>
            <aside className="lg:col-span-4 space-y-8">
              <MembershipOrderSummary memberships={memberships} total={total} />
              <div className="space-y-4">
                <button
                  disabled={!canSubmitCheckout}
                  onClick={handlePay}
                  className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center"
                >
                  Complete order
                </button>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="block w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center"
                >
                  Sign In
                </a>
              </div>
            </aside>
          </div>
        )}
      </main>

      <TicketFlowFooter />

      <Dialog open={checkoutModalOpen} onOpenChange={setCheckoutModalOpen}>
        <DialogPortal>
          <DialogOverlay
            className="bg-black/60"
            onClick={() => setCheckoutModalOpen(false)}
          />
          <div
            data-state={checkoutModalOpen ? 'open' : 'closed'}
            className="fixed inset-0 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200 ease-out pointer-events-none"
          >
            <div
              className="pointer-events-auto bg-white border border-border-light p-8 max-w-sm w-[calc(100%-2rem)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200 ease-out"
              data-state={checkoutModalOpen ? 'open' : 'closed'}
              onClick={(e) => e.stopPropagation()}
            >
              <DialogTitle className="text-xl font-black uppercase tracking-wide text-charcoal font-arquitecta mb-6">
                Checkout
              </DialogTitle>
              <button
                type="button"
                onClick={handleCompletePayment}
                className="w-full py-3 text-base font-bold uppercase tracking-wider bg-charcoal text-white hover:bg-near-black transition-colors duration-150 ease-out font-arquitecta"
              >
                Complete
              </button>
            </div>
          </div>
        </DialogPortal>
      </Dialog>
    </div>
  );
};
