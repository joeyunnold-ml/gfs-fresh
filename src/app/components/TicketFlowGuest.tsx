import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Pencil, Check } from 'lucide-react';
import clsx from 'clsx';
import { Logo } from './Logo';
import {
  TicketType,
  TicketFlowStep,
} from '../types';
import {
  TicketFlowStepIndicator,
  TicketFlowTicketList,
  TicketFlowOrderSummary,
  TicketFlowFooter,
} from './TicketFlow1';
import {
  initialTickets,
  ticketFlowOrderDefaults,
  primaryProfile,
} from '../mockData';

type StepId = 1 | 2 | 3;

const buildSteps = (currentStep: StepId): TicketFlowStep[] => {
  const base: { number: StepId; label: string }[] = [
    { number: 1, label: 'Visit date & entry time' },
    { number: 2, label: 'Select type of ticket' },
    { number: 3, label: 'Checkout' },
  ];

  return base.map((step) => ({
    ...step,
    status:
      step.number < currentStep
        ? 'completed'
        : step.number === currentStep
        ? 'active'
        : 'pending',
  }));
};

/* ------------------------------------------------------------------ */
/*  Reusable primitives                                                */
/* ------------------------------------------------------------------ */

const CardField: React.FC<{
  label: string;
  value: string;
  onClick?: () => void;
}> = ({ label, value, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full text-left border border-border-light bg-white px-6 py-4 flex items-center justify-between hover:bg-hover transition-colors"
  >
    <div>
      <div className="text-base font-normal text-charcoal font-opensans mb-1">
        {label}
      </div>
      <div className="text-base text-charcoal">{value}</div>
    </div>
    <Pencil className="w-4 h-4 text-muted-text" />
  </button>
);

const MembershipUpsellCard: React.FC<{ layout?: 'stacked' | 'inline' }> = ({ layout = 'stacked' }) => (
  <section
    className={clsx(
      'bg-mist border border-border-light p-6 font-opensans gap-4',
      layout === 'inline'
        ? 'flex flex-col sm:flex-row sm:items-center sm:justify-between'
        : 'flex flex-col',
    )}
  >
    <div className="flex-1">
      <h3 className="font-bold text-lg text-charcoal mb-3">
        Become a Member
      </h3>
      <p className="text-base text-muted-text leading-relaxed">
        Skip future ticket fees — upgrade to membership for $70 &amp; unlock member benefits.
      </p>
    </div>
    {layout === 'stacked' ? (
      <a href="#" className="text-base font-semibold text-charcoal underline hover:text-muted-text transition-colors">
        Add a Membership
      </a>
    ) : (
      <button
        className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors shrink-0"
      >
        Add Membership
      </button>
    )}
  </section>
);

const PrimaryCtaButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => (
  <button
    {...props}
    className={clsx(
      'w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center',
      className,
    )}
  >
    {children}
  </button>
);

const TextInputField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}> = ({ label, value, onChange, required, type = 'text' }) => (
  <label className="flex flex-col gap-1">
    <span className="text-base font-normal text-charcoal font-opensans">
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
    <span className="text-sm text-charcoal">{label}</span>
  </button>
);

/* ------------------------------------------------------------------ */
/*  Step 1: Visit date & time                                          */
/* ------------------------------------------------------------------ */

interface Step1Props {
  selectedDate: string;
  selectedTime: string;
  onChangeDate: (value: string) => void;
  onChangeTime: (value: string) => void;
  onContinue: () => void;
}

const Step1VisitDateTime: React.FC<Step1Props> = ({
  selectedDate,
  selectedTime,
  onChangeDate,
  onChangeTime,
  onContinue,
}) => {
  const canContinue = Boolean(selectedDate && selectedTime);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <section className="lg:col-span-8 space-y-10">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
            Visit date &amp; entry time
          </h2>
        </div>

        <div className="space-y-8 max-w-xl">
          <div className="space-y-3">
            <CardField
              label="Date"
              value={selectedDate}
            />
          </div>

          <div className="space-y-3">
            <CardField
              label="Entry time"
              value={selectedTime}
            />
            <div className="text-xs text-muted-text">
              This is your entry time — your visit has no time limit.
            </div>
          </div>
        </div>
      </section>

      <aside className="lg:col-span-4 space-y-6">
        <MembershipUpsellCard />
        <PrimaryCtaButton onClick={onContinue} disabled={!canContinue}>
          Continue
        </PrimaryCtaButton>
        {!canContinue && (
          <p className="text-sm text-muted-text text-center">
            Select a date and time to continue.
          </p>
        )}
      </aside>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 2: Ticket selection                                           */
/* ------------------------------------------------------------------ */

interface Step2Props {
  tickets: TicketType[];
  onQuantityChange: (id: string, qty: number) => void;
  selectedDate: string;
  selectedTime: string;
  onContinue: () => void;
}

const Step2Tickets: React.FC<Step2Props> = ({
  tickets,
  onQuantityChange,
  selectedDate,
  selectedTime,
  onContinue,
}) => {
  const total = tickets.reduce((sum, t) => sum + t.price * t.quantity, 0);
  const hasTickets = total > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
      <section className="lg:col-span-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 font-arquitecta">
          Tickets
        </h2>
        <TicketFlowTicketList tickets={tickets} onQuantityChange={onQuantityChange} />
      </section>

      <aside className="lg:col-span-4 lg:sticky lg:top-8">
        <TicketFlowOrderSummary
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          tickets={tickets}
          total={total}
        />
        <PrimaryCtaButton onClick={onContinue} disabled={!hasTickets} className="mt-6">
          Continue
        </PrimaryCtaButton>
        {!hasTickets && (
          <p className="text-sm text-muted-text mt-2 text-center">
            Select ticket quantity to continue.
          </p>
        )}
      </aside>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 3: Checkout                                                   */
/* ------------------------------------------------------------------ */

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

interface Step3Props {
  tickets: TicketType[];
  selectedDate: string;
  selectedTime: string;
  guestInfo: GuestInfo;
  onGuestInfoChange: (info: GuestInfo) => void;
  donation: string;
  onDonationChange: (value: string) => void;
  discountCode: string;
  onDiscountCodeChange: (value: string) => void;
  createAccount: boolean;
  onToggleCreateAccount: (next: boolean) => void;
  onCompleteOrder: () => void;
}

const Step3Checkout: React.FC<Step3Props> = ({
  tickets,
  selectedDate,
  selectedTime,
  guestInfo,
  onGuestInfoChange,
  donation,
  onDonationChange,
  discountCode,
  onDiscountCodeChange,
  createAccount,
  onToggleCreateAccount,
  onCompleteOrder,
}) => {
  const total = tickets.reduce((sum, t) => sum + t.price * t.quantity, 0);
  const canSubmit =
    !!guestInfo.firstName &&
    !!guestInfo.lastName &&
    !!guestInfo.email &&
    !!guestInfo.city &&
    !!guestInfo.state &&
    !!guestInfo.zip &&
    !!guestInfo.street &&
    total > 0;

  const handleFieldChange = (field: keyof GuestInfo, value: string) => {
    onGuestInfoChange({ ...guestInfo, [field]: value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <section className="lg:col-span-8 space-y-10">
        <MembershipUpsellCard layout="inline" />

        <div className="space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-wider font-arquitecta">
            Guest information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInputField
              label="First Name"
              required
              value={guestInfo.firstName}
              onChange={(v) => handleFieldChange('firstName', v)}
            />
            <TextInputField
              label="Last Name"
              required
              value={guestInfo.lastName}
              onChange={(v) => handleFieldChange('lastName', v)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInputField
              label="Email"
              required
              type="email"
              value={guestInfo.email}
              onChange={(v) => handleFieldChange('email', v)}
            />
            <TextInputField
              label="Phone"
              value={guestInfo.phone}
              onChange={(v) => handleFieldChange('phone', v)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInputField
              label="City"
              required
              value={guestInfo.city}
              onChange={(v) => handleFieldChange('city', v)}
            />
            <TextInputField
              label="State"
              required
              value={guestInfo.state}
              onChange={(v) => handleFieldChange('state', v)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInputField
              label="ZIP"
              required
              value={guestInfo.zip}
              onChange={(v) => handleFieldChange('zip', v)}
            />
            <TextInputField
              label="Street Address"
              required
              value={guestInfo.street}
              onChange={(v) => handleFieldChange('street', v)}
            />
          </div>

          <CheckboxField
            label="Create an account after checkout"
            checked={createAccount}
            onChange={onToggleCreateAccount}
          />
        </div>
      </section>

      <aside className="lg:col-span-4 space-y-6">
        <TicketFlowOrderSummary
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          tickets={tickets}
          total={total}
        />

        <section className="border border-card-stroke p-5 bg-white">
          <h3 className="text-base font-normal text-charcoal mb-4 font-opensans">
            Support GFS With an Additional Donation
          </h3>
          <div className="flex items-stretch gap-3 mb-2">
            <input
              type="number"
              min="0"
              value={donation}
              onChange={(e) => onDonationChange(e.target.value)}
              className="flex-1 text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
            />
            <button className="px-4 text-sm font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors">
              Add
            </button>
          </div>
        </section>

        <section className="border border-card-stroke p-5 bg-white space-y-3">
          <div className="flex items-center gap-3">
            <label className="text-base font-normal text-charcoal font-opensans">
              Discount Code
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => onDiscountCodeChange(e.target.value)}
              className="flex-1 text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
            />
            <button className="text-sm font-semibold text-charcoal hover:underline">
              Apply
            </button>
          </div>
        </section>

        <PrimaryCtaButton onClick={onCompleteOrder} disabled={!canSubmit}>
          Complete order
        </PrimaryCtaButton>
        {!canSubmit && (
          <p className="text-sm text-muted-text text-center">
            Fill in required fields and select at least one ticket to complete your order.
          </p>
        )}
      </aside>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Guest Ticket Flow                                             */
/* ------------------------------------------------------------------ */

export const TicketFlowGuest: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [tickets, setTickets] = useState<TicketType[]>(initialTickets);
  const [selectedDate] = useState(ticketFlowOrderDefaults.selectedDate);
  const [selectedTime] = useState(ticketFlowOrderDefaults.selectedTime);
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: primaryProfile.firstName,
    lastName: primaryProfile.lastName,
    email: primaryProfile.email,
    phone: primaryProfile.phone,
    city: primaryProfile.city,
    state: primaryProfile.state,
    zip: primaryProfile.zip,
    street: primaryProfile.street,
  });
  const [donation, setDonation] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [createAccount, setCreateAccount] = useState(false);

  const steps = buildSteps(currentStep);

  const handleQuantityChange = (id: string, qty: number) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, quantity: qty } : t)),
    );
  };

  const handleCompleteOrder = () => {
    // Placeholder behavior for now; real integration would hand off to backend.
    // eslint-disable-next-line no-alert
    alert('Order complete (prototype).');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black pb-14">
      {/* Header */}
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <button className="flex items-center gap-2 text-sm font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors">
            Account Portal
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main */}
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
            Timed Tickets
          </h1>

          <TicketFlowStepIndicator
            steps={steps}
            onStepClick={(stepNumber) => setCurrentStep(stepNumber as StepId)}
          />
        </div>

        {/* Step-specific content */}
        <div className="space-y-8">
          {currentStep === 1 && (
            <Step1VisitDateTime
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onChangeDate={() => {}}
              onChangeTime={() => {}}
              onContinue={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <Step2Tickets
              tickets={tickets}
              onQuantityChange={handleQuantityChange}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onContinue={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 3 && (
            <Step3Checkout
              tickets={tickets}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              guestInfo={guestInfo}
              onGuestInfoChange={setGuestInfo}
              donation={donation}
              onDonationChange={setDonation}
              discountCode={discountCode}
              onDiscountCodeChange={setDiscountCode}
              createAccount={createAccount}
              onToggleCreateAccount={setCreateAccount}
              onCompleteOrder={handleCompleteOrder}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <TicketFlowFooter />
    </div>
  );
}

