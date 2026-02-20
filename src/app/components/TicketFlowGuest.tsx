import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Pencil, Check, X, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { FIELD_LABEL, CARD_LABEL } from '../typography';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parse } from 'date-fns';
import { Logo } from './Logo';
import { Dialog, DialogOverlay, DialogPortal, DialogTitle, DialogContent } from './ui/dialog';
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

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

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
  expanded?: boolean;
}> = ({ label, value, onClick, expanded }) => (
  <button
    type="button"
    onClick={onClick}
    className={clsx(
      'w-full text-left border border-border-light px-6 py-4 flex items-center justify-between hover:bg-hover transition-colors duration-150 ease-out',
      expanded ? 'bg-hover' : 'bg-white',
    )}
  >
    <div>
      <div className={`${CARD_LABEL} mb-1`}>
        {label}
      </div>
      <div className="text-base text-charcoal">{value}</div>
    </div>
    {expanded ? (
      <X className="w-4 h-4 text-muted-text" />
    ) : (
      <Pencil className="w-4 h-4 text-muted-text" />
    )}
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
      <a href="#" className="inline-flex items-center min-h-[44px] py-2 text-base font-semibold text-charcoal underline hover:text-muted-text transition-colors">
        Add a Membership
      </a>
    ) : (
      <button
        className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors shrink-0"
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
      'w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-center',
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
    <span className={FIELD_LABEL}>{label}</span>
  </button>
);

/* ------------------------------------------------------------------ */
/*  Step 1.1: Expanded date calendar (drawer below card)               */
/* ------------------------------------------------------------------ */
const UNAVAILABLE_DATES: number[] = [12, 16, 17, 18]; // Aug 2025: unavailable dates

const DateCalendarDrawer: React.FC<{
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}> = ({ value, onChange, onClose }) => {
  const parsed = value ? (() => { try { return parse(value, 'MMM. d, yyyy', new Date()); } catch { return new Date(); } })() : new Date();
  const [viewMonth, setViewMonth] = useState(parsed);
  const selectedDate = value ? (() => { try { return parse(value, 'MMM. d, yyyy', new Date()); } catch { return null; } })() : null;
  const today = new Date();

  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDayOfWeek = monthStart.getDay();
  const leadingEmpty = Array(firstDayOfWeek).fill(null);

  const handleSelect = (d: Date) => {
    const day = d.getDate();
    if (UNAVAILABLE_DATES.includes(day)) return;
    onChange(format(d, 'MMM. d, yyyy'));
  };

  const handleToday = () => {
    handleSelect(today);
  };

  const handleNextAvailable = () => {
    const next = days.find((d) => !UNAVAILABLE_DATES.includes(d.getDate()));
    if (next) handleSelect(next);
  };

  return (
    <div className="border border-t-0 border-border-light bg-white p-6 animate-in fade-in-0 slide-in-from-top-2 duration-200 ease-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">
          {format(viewMonth, 'MMMM yyyy').toUpperCase()}
        </h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setViewMonth((m) => subMonths(m, 1))}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-hover transition-colors duration-150 ease-out"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal" />
          </button>
          <button
            type="button"
            onClick={() => setViewMonth((m) => addMonths(m, 1))}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-hover transition-colors duration-150 ease-out"
            aria-label="Next month"
          >
            <ChevronRight className="w-6 h-6 text-charcoal" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          type="button"
          onClick={handleToday}
          className="text-base font-bold uppercase tracking-wider text-charcoal hover:underline font-arquitecta"
        >
          Today
        </button>
        <button
          type="button"
          onClick={handleNextAvailable}
          className="text-base font-bold uppercase tracking-wider text-charcoal hover:underline font-arquitecta"
        >
          Next available date
        </button>
      </div>
      <div className="grid grid-cols-7 mb-4 border-t border-l border-border-light">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
          <div key={d} className="border-r border-b border-border-light bg-muted-bg text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta text-center py-2">
            {d}
          </div>
        ))}
        {leadingEmpty.map((_, i) => (
          <div key={`empty-${i}`} className="border-r border-b border-border-light bg-white min-h-[2.75rem]" />
        ))}
        {days.map((d) => {
          const dayNum = d.getDate();
          const unavailable = UNAVAILABLE_DATES.includes(dayNum);
          const selected = selectedDate && isSameDay(d, selectedDate);
          return (
            <button
              key={d.toISOString()}
              type="button"
              onClick={() => handleSelect(d)}
              disabled={unavailable}
              className={clsx(
                'min-h-[2.75rem] flex items-center justify-center text-base text-charcoal transition-colors',
                selected && 'bg-lime border border-near-black font-bold',
                !selected && 'border-r border-b border-border-light font-normal',
                !selected && unavailable && 'bg-mist text-muted-text cursor-not-allowed',
                !selected && !unavailable && 'bg-white hover:bg-hover',
              )}
            >
              {dayNum}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4 text-base text-muted-text">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-lime border border-border-light" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-border-light" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-mist border border-border-light" />
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 1.2: Expanded time slot list (drawer below card)              */
/* ------------------------------------------------------------------ */
const TIME_SLOTS = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
];

const TimeSlotDrawer: React.FC<{
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
  /** When true (member flow, logged in), members-only slots become available and show "Available". */
  isMember?: boolean;
}> = ({ value, onChange, onClose, isMember = false }) => {
  const handleSelect = (time: string) => {
    onChange(time);
    onClose();
  };

  return (
    <div className="border border-t-0 border-border-light bg-white max-h-[320px] overflow-y-auto animate-in fade-in-0 slide-in-from-top-2 duration-200 ease-out">
      {TIME_SLOTS.map((time, index) => {
        const selected = value === time;
        const isMembersOnly = !isMember && index < 2;
        return (
          <button
            key={time}
            type="button"
            onClick={() => !isMembersOnly && handleSelect(time)}
            disabled={isMembersOnly}
            className={clsx(
              'w-full flex items-center justify-between px-4 py-3 text-left border-b border-border-light last:border-b-0 transition-colors duration-150 ease-out',
              selected
                ? 'bg-lime border-l-4 border-l-accent-green'
                : isMembersOnly
                  ? 'bg-canvas text-muted-text cursor-not-allowed opacity-60'
                  : 'bg-white hover:bg-lime',
            )}
          >
            <span className="font-bold text-charcoal">{time}</span>
            <div className="flex items-center gap-4 text-base text-muted-text">
              {isMembersOnly ? <span>Members Only</span> : <span>Available</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 1: Visit date & time                                          */
/* ------------------------------------------------------------------ */

interface Step1Props {
  selectedDate: string;
  selectedTime: string;
  onChangeDate: (value: string) => void;
  onChangeTime: (value: string) => void;
  onContinue: () => void;
  onSignIn?: () => void;
  /** When true (member flow after login), show only Continue. When false and onSignIn set, show guest + sign-in options. */
  isMember?: boolean;
  /** When true, use "Continue as Guest →" and "Sign in as Member →" button labels. */
  memberFlowLabels?: boolean;
}

const Step1VisitDateTime: React.FC<Step1Props> = ({
  selectedDate,
  selectedTime,
  onChangeDate,
  onChangeTime,
  onContinue,
  onSignIn,
  isMember = false,
  memberFlowLabels = false,
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeListOpen, setTimeListOpen] = useState(false);
  const canContinue = Boolean(selectedDate && selectedTime);
  const showSignInOption = !isMember && onSignIn != null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <section className="lg:col-span-8 space-y-10">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
            Visit date &amp; entry time
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <CardField
                label="Date"
                value={selectedDate}
                expanded={calendarOpen}
                onClick={() => {
                  setTimeListOpen(false);
                  setCalendarOpen((prev) => !prev);
                }}
              />
              {calendarOpen && (
                <DateCalendarDrawer
                  value={selectedDate}
                  onChange={onChangeDate}
                  onClose={() => setCalendarOpen(false)}
                />
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <CardField
                label="Entry time"
                value={selectedTime}
                expanded={timeListOpen}
                onClick={() => {
                  setCalendarOpen(false);
                  setTimeListOpen((prev) => !prev);
                }}
              />
              {timeListOpen && (
                <TimeSlotDrawer
                  value={selectedTime}
                  onChange={onChangeTime}
                  onClose={() => setTimeListOpen(false)}
                  isMember={isMember}
                />
              )}
            </div>
            <div className="text-base text-muted-text">
              This is your entry time — your visit has no time limit.
            </div>
          </div>
        </div>
      </section>

      <aside className="lg:col-span-4 space-y-6">
        <TicketFlowOrderSummary
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          tickets={[]}
          total={0}
          dateTimeOnly
        />
        {!isMember && <MembershipUpsellCard />}
        <div className="flex flex-col gap-3">
          {showSignInOption && (
            <p className="text-base text-muted-text">
              Sign in for member pricing and saved checkout details.
            </p>
          )}
          {showSignInOption && memberFlowLabels ? (
            <a
              href="#"
              className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black transition-colors text-center inline-block"
            >
              Continue as Guest
            </a>
          ) : (
            <PrimaryCtaButton onClick={onContinue} disabled={!canContinue}>
              {showSignInOption ? 'Continue as a guest' : 'Continue'}
            </PrimaryCtaButton>
          )}
          {showSignInOption && (
            memberFlowLabels ? (
              <button
                type="button"
                onClick={onSignIn}
                className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center"
              >
                Sign In
              </button>
            ) : (
              <a
                href="#"
                className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center inline-block"
              >
                Sign In
              </a>
            )
          )}
        </div>
        {!canContinue && (
          <p className="text-base text-muted-text text-center">
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
          <p className="text-base text-muted-text mt-2 text-center">
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
  /** When true (member flow, logged in), hide "Create an account after checkout" checkbox. */
  isMember?: boolean;
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
  isMember = false,
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
          <div>
            <TextInputField
              label="Street Address"
              required
              value={guestInfo.street}
              onChange={(v) => handleFieldChange('street', v)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-cols-[1fr_auto_8rem]">
            <TextInputField
              label="City"
              required
              value={guestInfo.city}
              onChange={(v) => handleFieldChange('city', v)}
            />
            <label className="flex flex-col gap-1 md:w-24">
              <span className={FIELD_LABEL}>
                State <span className="text-accent-pink">*</span>
              </span>
              <select
                value={guestInfo.state}
                onChange={(e) => handleFieldChange('state', e.target.value)}
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
                onChange={(e) => handleFieldChange('zip', e.target.value)}
                className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full max-w-[8rem]"
              />
            </label>
          </div>

          {!isMember && (
            <CheckboxField
              label="Create an account after checkout"
              checked={createAccount}
              onChange={onToggleCreateAccount}
            />
          )}
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
          <h3 className={`${CARD_LABEL} mb-4`}>
            Support GFS With a Donation
          </h3>
          <div className="flex items-stretch gap-3 mb-2 min-w-0">
            <div className="flex flex-1 min-w-0 items-center border border-border-light bg-white focus-within:border-accent-green transition-colors overflow-hidden">
              {donation !== '' && (
                <span className="pl-3 text-base text-charcoal select-none shrink-0" aria-hidden>
                  $
                </span>
              )}
              <input
                type="number"
                min="0"
                value={donation}
                onChange={(e) => onDonationChange(e.target.value)}
                className="flex-1 min-w-0 w-full text-base text-charcoal border-0 px-3 py-2 bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
            <button type="button" className="shrink-0 px-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors">
              Add
            </button>
          </div>
        </section>

        <section className="border border-card-stroke p-5 bg-white space-y-3">
          <div className="flex items-center gap-3">
            <label className={FIELD_LABEL}>
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
            <button className="text-base font-semibold text-charcoal hover:underline">
              Apply
            </button>
          </div>
        </section>

        <PrimaryCtaButton onClick={onCompleteOrder} disabled={!canSubmit}>
          Complete order
        </PrimaryCtaButton>
        {!canSubmit && (
          <p className="text-base text-muted-text text-center">
            Fill in required fields and select at least one ticket to complete your order.
          </p>
        )}
      </aside>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Login modal (Member Checkout flow)                                  */
/* ------------------------------------------------------------------ */

const LoginModal: React.FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}> = ({ open, onOpenChange, onSuccess }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    setIsLoggingIn(true);
  };

  useEffect(() => {
    if (!isLoggingIn) return;
    const t = setTimeout(() => {
      onSuccess();
      onOpenChange(false);
      setUsername('');
      setPassword('');
      setIsLoggingIn(false);
    }, 2000);
    return () => clearTimeout(t);
  }, [isLoggingIn, onSuccess, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border border-border-light p-0 gap-0 max-w-[calc(100%-2rem)] sm:max-w-md rounded-none">
        {isLoggingIn ? (
          <div className="flex flex-col items-center justify-center min-h-[360px] p-6" aria-live="polite" aria-busy="true">
            <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
          </div>
        ) : (
          <>
          <div className="p-6 pb-4">
            <DialogTitle className="text-xl font-black uppercase tracking-wide text-charcoal font-arquitecta">
              Log in to GFS
            </DialogTitle>
          </div>
          <form onSubmit={handleLogin} className="px-6 pb-6 space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="login-username" className={FIELD_LABEL}>
                Username
              </label>
              <input
                id="login-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Insert your email or phone number"
                autoComplete="username"
                className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="login-password" className={FIELD_LABEL}>
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
              />
            </div>
            <a
              href="#"
              className="text-base text-accent-pink hover:underline block text-right"
              onClick={(e) => { e.preventDefault(); }}
            >
              Need help logging in?
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                disabled={!username.trim() || !password.trim()}
                className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  navigate('/account-registration');
                }}
                className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors"
              >
                Register
              </button>
            </div>
          </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Guest / Member Ticket Flow                                     */
/* ------------------------------------------------------------------ */

export const TicketFlowGuest: React.FC<{ memberFlow?: boolean }> = ({ memberFlow = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tickets, setTickets] = useState<TicketType[]>(initialTickets);
  const [selectedDate, setSelectedDate] = useState(ticketFlowOrderDefaults.selectedDate);
  const [selectedTime, setSelectedTime] = useState(ticketFlowOrderDefaults.selectedTime);
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

  // When arriving from Account Registration, treat as logged in (prototype)
  useEffect(() => {
    if (memberFlow && (location.state as { fromRegistration?: boolean } | undefined)?.fromRegistration) {
      setIsLoggedIn(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [memberFlow, location.state, location.pathname, navigate]);

  // Scroll to top when step changes (e.g. after tapping Continue)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const steps = buildSteps(currentStep);

  const handleQuantityChange = (id: string, qty: number) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, quantity: qty } : t)),
    );
  };

  const handleCompleteOrder = () => {
    setCheckoutModalOpen(true);
  };

  const handleGoToConfirmation = () => {
    setCheckoutModalOpen(false);
    const selectedTickets = tickets.filter((t) => t.quantity > 0).map((t) => ({ title: t.title, quantity: t.quantity, price: t.price }));
    navigate('/ticket-flow-guest/confirmation', {
      state: { selectedDate, selectedTime, tickets: selectedTickets },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black pb-24 md:pb-14">
      {/* Header */}
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <button className="flex items-center gap-2 text-base font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors">
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
              onChangeDate={setSelectedDate}
              onChangeTime={setSelectedTime}
              onContinue={() => setCurrentStep(2)}
              onSignIn={memberFlow ? () => setLoginModalOpen(true) : () => navigate('/member-portal-entry')}
              isMember={memberFlow ? isLoggedIn : false}
              memberFlowLabels={memberFlow}
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
              isMember={memberFlow && isLoggedIn}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <TicketFlowFooter />

      {/* Checkout modal overlay */}
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
                onClick={handleGoToConfirmation}
                className="w-full py-4 text-base font-bold uppercase tracking-wider bg-charcoal text-white hover:bg-near-black transition-colors duration-150 ease-out font-arquitecta"
              >
                View tickets
              </button>
            </div>
          </div>
        </DialogPortal>
      </Dialog>

      {/* Member flow: login modal */}
      {memberFlow && (
        <LoginModal
          open={loginModalOpen}
          onOpenChange={setLoginModalOpen}
          onSuccess={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
}

