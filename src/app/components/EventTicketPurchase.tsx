import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Loader2, Minus, Plus, Info } from 'lucide-react';
import clsx from 'clsx';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parse, startOfDay } from 'date-fns';
import { Logo } from './Logo';
import { Dialog, DialogOverlay, DialogPortal, DialogTitle, DialogContent } from './ui/dialog';
import type { TicketType, TicketFlowStep } from '../types';
import { TicketFlowStepIndicator, TicketFlowOrderSummary, TicketFlowFooter } from './TicketFlow1';
import { primaryProfile } from '../mockData';

const EVENT_TITLE_DEFAULT = 'Workshop Wellness - Tai Chi';
const FIXED_TIME = '10:30 - 11:30 AM';
const WEDNESDAY = 3; // getDay() for Wednesday

function getNextWednesday(): Date {
  const today = new Date();
  const day = today.getDay();
  const daysUntilWed = (WEDNESDAY - day + 7) % 7;
  const d = new Date(today);
  d.setDate(today.getDate() + daysUntilWed);
  return d;
}

function formatEventDate(d: Date): string {
  return format(d, 'MMM. d, yyyy');
}

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
    { number: 1, label: 'Select a date' },
    { number: 2, label: 'Select type of ticket' },
    { number: 3, label: 'Checkout' },
  ];
  return base.map((step) => ({
    ...step,
    status: step.number < currentStep ? 'completed' : step.number === currentStep ? 'active' : 'pending',
  }));
};

const eventTicket: TicketType = {
  id: 'adult',
  title: 'Adult',
  description: 'Lorem ipsum dolor sit amet consectetur. At faucibus dui donec hac eu. In orci id euismod venenatis nulla ultrices dignissim elit id malesuada sagittis.',
  price: 0,
  quantity: 1,
  category: 'member',
  isFree: true,
};

/* ------------------------------------------------------------------ */
/*  Event calendar (always visible, only Wednesdays available)        */
/* ------------------------------------------------------------------ */
const EventDateCalendar: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const parsed = value ? (() => { try { return parse(value, 'MMM. d, yyyy', new Date()); } catch { return new Date(); } })() : new Date();
  const [viewMonth, setViewMonth] = useState(parsed);
  const selectedDate = value ? (() => { try { return parse(value, 'MMM. d, yyyy', new Date()); } catch { return null; } })() : null;

  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const firstDayOfWeek = monthStart.getDay();
  const leadingEmpty = Array(firstDayOfWeek).fill(null);

  const todayStart = startOfDay(new Date());
  const isWednesday = (d: Date) => d.getDay() === WEDNESDAY;
  const isPast = (d: Date) => startOfDay(d) < todayStart;
  const isAvailable = (d: Date) => isWednesday(d) && !isPast(d);

  const handleSelect = (d: Date) => {
    if (!isAvailable(d)) return;
    onChange(format(d, 'MMM. d, yyyy'));
  };

  const handleNextAvailable = () => {
    const next = getNextWednesday();
    setViewMonth(startOfMonth(next));
    onChange(format(next, 'MMM. d, yyyy'));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">
          {format(viewMonth, 'MMMM yyyy').toUpperCase()}
        </h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setViewMonth((m) => subMonths(m, 1))}
            className="p-1 hover:bg-hover transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setViewMonth((m) => addMonths(m, 1))}
            className="p-1 hover:bg-hover transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          type="button"
          onClick={handleNextAvailable}
          className="text-sm font-bold uppercase tracking-wider text-charcoal hover:underline font-arquitecta"
        >
          Next available date
        </button>
        <button
          type="button"
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          className="text-sm font-bold uppercase tracking-wider text-charcoal hover:underline font-arquitecta"
        >
          Next month
        </button>
      </div>
      <div className="grid grid-cols-7 mb-4 border-t border-l border-border-light">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
          <div key={d} className="border-r border-b border-border-light bg-muted-bg text-sm font-bold uppercase tracking-wider text-muted-text font-arquitecta text-center py-3">
            {d}
          </div>
        ))}
        {leadingEmpty.map((_, i) => (
          <div key={`empty-${i}`} className="border-r border-b border-border-light bg-white min-h-[5.5rem]" />
        ))}
        {days.map((d) => {
          const available = isAvailable(d);
          const selected = selectedDate && isSameDay(d, selectedDate);
          return (
            <button
              key={d.toISOString()}
              type="button"
              onClick={() => handleSelect(d)}
              disabled={!available}
              className={clsx(
                'min-h-[5.5rem] flex items-center justify-center text-base transition-colors',
                selected && 'bg-lime border border-near-black font-bold text-charcoal',
                !selected && 'border-r border-b border-border-light font-normal',
                !selected && !available && 'bg-mist text-muted-text cursor-not-allowed',
                !selected && available && 'bg-white text-charcoal hover:bg-hover',
              )}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4 text-xs text-muted-text">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-lime border border-border-light" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-border-light" />
          <span>Available (Wednesdays)</span>
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
/*  Login modal (same as member ticket flow)                           */
/* ------------------------------------------------------------------ */
const LoginModal: React.FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}> = ({ open, onOpenChange, onSuccess }) => {
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
            <div className="p-6 pb-4 flex flex-col items-center">
              <Logo className="h-10 w-auto text-charcoal" />
            </div>
            <form onSubmit={handleLogin} className="px-6 pb-6 space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="event-login-username" className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Username</label>
                <input
                  id="event-login-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Insert your email or phone number"
                  autoComplete="username"
                  className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="event-login-password" className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Password</label>
                <input
                  id="event-login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                />
              </div>
              <a href="#" className="text-sm text-accent-pink hover:underline block text-right" onClick={(e) => e.preventDefault()}>
                Need help logging in?
              </a>
              <button
                type="submit"
                disabled={!username.trim() || !password.trim()}
                className="w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors"
              >
                Register
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

/* ------------------------------------------------------------------ */
/*  Primitives for checkout                                            */
/* ------------------------------------------------------------------ */
const TextInputField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}> = ({ label, value, onChange, required, type = 'text' }) => (
  <label className="flex flex-col gap-1">
    <span className="text-base font-normal text-charcoal font-opensans">{label} {required && <span className="text-accent-pink">*</span>}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
    />
  </label>
);

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

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export const EventTicketPurchase: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventTitle = (location.state as { eventTitle?: string } | undefined)?.eventTitle ?? EVENT_TITLE_DEFAULT;

  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [selectedDate, setSelectedDate] = useState(() => formatEventDate(getNextWednesday()));
  const [tickets, setTickets] = useState<TicketType[]>([{ ...eventTicket }]);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
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

  const steps = buildSteps(currentStep);
  const total = tickets.reduce((sum, t) => sum + t.price * t.quantity, 0);
  const canSubmitCheckout =
    !!guestInfo.firstName && !!guestInfo.lastName && !!guestInfo.email &&
    !!guestInfo.city && !!guestInfo.state && !!guestInfo.zip && !!guestInfo.street && total >= 0;

  const handleQuantityChange = (id: string, qty: number) => {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, quantity: qty } : t)));
  };

  const handleGoToConfirmation = () => {
    setCheckoutModalOpen(false);
    const selectedTickets = tickets.filter((t) => t.quantity > 0).map((t) => ({ title: t.title, quantity: t.quantity, price: t.price }));
    navigate('/ticket-flow-guest/confirmation', {
      state: { selectedDate, selectedTime: FIXED_TIME, tickets: selectedTickets },
    });
  };

  const handleCompleteOrder = () => {
    if (isLoggedIn) {
      handleGoToConfirmation();
    } else {
      setCheckoutModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black pb-14">
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <button className="flex items-center gap-2 text-sm font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors">
            Account Portal
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.history.back(); }}
            className="inline-flex items-center text-warm-muted hover:text-near-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-base">Return to main site</span>
          </a>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
            {eventTitle}
          </h1>
          <TicketFlowStepIndicator steps={steps} onStepClick={(n) => setCurrentStep(n as StepId)} />
        </div>

        {/* Step 1: Select date — calendar always visible, time fixed */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <section className="lg:col-span-8">
              <EventDateCalendar value={selectedDate} onChange={setSelectedDate} />
            </section>
            <aside className="lg:col-span-4 space-y-6">
              <TicketFlowOrderSummary
                selectedDate={selectedDate}
                selectedTime={FIXED_TIME}
                tickets={[]}
                total={0}
                dateTimeOnly
              />
              <div className="flex flex-col gap-3">
                {!isLoggedIn && (
                  <p className="text-sm text-muted-text">
                    Sign in to see member pricing and saved checkout details.
                  </p>
                )}
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black transition-colors text-center"
                  >
                    Continue
                  </button>
                ) : (
                  <a
                    href="#"
                    className="w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black transition-colors text-center inline-block"
                  >
                    Continue as Guest
                  </a>
                )}
                {!isLoggedIn && (
                  <button
                    type="button"
                    onClick={() => setLoginModalOpen(true)}
                    className="w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </aside>
          </div>
        )}

        {/* Step 2: Select type of ticket — single option */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <section className="lg:col-span-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 font-arquitecta">
                Timed Admission
              </h2>
              <div className="bg-canvas p-3 text-sm text-muted-text leading-relaxed flex gap-2 mb-6">
                <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-text" />
                <span>Reminder: Prices are listed per ticket. The total cost will be shown in your order summary.</span>
              </div>
              <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mb-4 font-arquitecta">
                Member
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-border-light border-l-4 border-l-border-light bg-white">
                <div className="flex-1 max-w-xl pr-4">
                  <h3 className="font-bold text-charcoal text-base mb-1">{tickets[0].title}</h3>
                  <p className="text-muted-text text-sm md:text-base leading-relaxed">
                    {tickets[0].description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-mist text-charcoal">Member</span>
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider border border-charcoal text-charcoal">FREE</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="font-bold text-charcoal text-base">Free</span>
                  <div className="flex flex-stretch h-10">
                    <button
                      onClick={() => handleQuantityChange(tickets[0].id, tickets[0].quantity - 1)}
                      disabled={tickets[0].quantity === 0}
                      className={clsx(
                        'w-10 flex items-center justify-center border bg-white hover:bg-hover disabled:cursor-not-allowed transition-colors text-muted-text',
                        tickets[0].quantity > 0 ? 'border-border-light border-r-charcoal' : 'border-border-light',
                      )}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className={clsx(
                      'w-10 flex items-center justify-center font-bold text-base border-y transition-colors',
                      tickets[0].quantity > 0 ? 'bg-accent-green border-charcoal text-near-black' : 'bg-mist border-border-light text-muted-fg',
                    )}>
                      {tickets[0].quantity}
                    </div>
                    <button
                      onClick={() => handleQuantityChange(tickets[0].id, tickets[0].quantity + 1)}
                      className="w-10 flex items-center justify-center border bg-white hover:bg-hover transition-colors text-muted-text border-border-light border-l-charcoal"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <aside className="lg:col-span-4 lg:sticky lg:top-8">
              <TicketFlowOrderSummary
                selectedDate={selectedDate}
                selectedTime={FIXED_TIME}
                tickets={tickets}
                total={total}
              />
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                disabled={tickets[0].quantity < 1}
                className={clsx(
                  'w-full mt-6 px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta transition-colors text-center',
                  tickets[0].quantity >= 1 ? 'bg-charcoal text-white hover:bg-near-black' : 'bg-border-light text-white cursor-not-allowed',
                )}
              >
                Continue
              </button>
            </aside>
          </div>
        )}

        {/* Step 3: Checkout */}
        {currentStep === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <section className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-arquitecta">Guest information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextInputField label="First Name" required value={guestInfo.firstName} onChange={(v) => setGuestInfo((p) => ({ ...p, firstName: v }))} />
                <TextInputField label="Last Name" required value={guestInfo.lastName} onChange={(v) => setGuestInfo((p) => ({ ...p, lastName: v }))} />
                <TextInputField label="Email" required type="email" value={guestInfo.email} onChange={(v) => setGuestInfo((p) => ({ ...p, email: v }))} />
                <TextInputField label="Phone" value={guestInfo.phone} onChange={(v) => setGuestInfo((p) => ({ ...p, phone: v }))} />
              </div>
              <div>
                <TextInputField label="Street Address" required value={guestInfo.street} onChange={(v) => setGuestInfo((p) => ({ ...p, street: v }))} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-cols-[1fr_auto_8rem]">
                <TextInputField label="City" required value={guestInfo.city} onChange={(v) => setGuestInfo((p) => ({ ...p, city: v }))} />
                <label className="flex flex-col gap-1 md:w-24">
                  <span className="text-base font-normal text-charcoal font-opensans">State <span className="text-accent-pink">*</span></span>
                  <select
                    value={guestInfo.state}
                    onChange={(e) => setGuestInfo((p) => ({ ...p, state: e.target.value }))}
                    className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
                  >
                    <option value="">Select</option>
                    {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-base font-normal text-charcoal font-opensans">ZIP <span className="text-accent-pink">*</span></span>
                  <input
                    type="text"
                    value={guestInfo.zip}
                    onChange={(e) => setGuestInfo((p) => ({ ...p, zip: e.target.value }))}
                    className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full max-w-[8rem]"
                  />
                </label>
              </div>
            </section>
            <aside className="lg:col-span-4 space-y-6">
              <TicketFlowOrderSummary selectedDate={selectedDate} selectedTime={FIXED_TIME} tickets={tickets} total={total} />
              <button
                type="button"
                onClick={handleCompleteOrder}
                disabled={!canSubmitCheckout}
                className={clsx(
                  'w-full px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta text-center transition-colors',
                  canSubmitCheckout ? 'bg-charcoal text-white hover:bg-near-black' : 'bg-border-light text-white cursor-not-allowed',
                )}
              >
                Complete order
              </button>
            </aside>
          </div>
        )}
      </main>

      <TicketFlowFooter />

      {/* Payment placeholder modal */}
      <Dialog open={checkoutModalOpen} onOpenChange={setCheckoutModalOpen}>
        <DialogPortal>
          <DialogOverlay className="bg-black/60" onClick={() => setCheckoutModalOpen(false)} />
          <div
            data-state={checkoutModalOpen ? 'open' : 'closed'}
            className="fixed inset-0 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 pointer-events-none"
          >
            <div
              className="pointer-events-auto bg-white border border-border-light p-8 max-w-sm w-[calc(100%-2rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <DialogTitle className="text-xl font-black uppercase tracking-wide text-charcoal font-arquitecta mb-6">Checkout</DialogTitle>
              <button
                type="button"
                onClick={handleGoToConfirmation}
                className="w-full py-3 text-base font-bold uppercase tracking-wider bg-charcoal text-white hover:bg-near-black transition-colors font-arquitecta"
              >
                View tickets
              </button>
            </div>
          </div>
        </DialogPortal>
      </Dialog>

      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} onSuccess={() => setIsLoggedIn(true)} />
    </div>
  );
};
