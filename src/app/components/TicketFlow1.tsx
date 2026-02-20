import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, Info, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { ticketFlowSteps, initialTickets, ticketFlowOrderDefaults } from '../mockData';
import { TicketType, TicketFlowStep } from '../types';
import clsx from 'clsx';
import { CARD_LABEL } from '../typography';
import { AccountDropdown } from './AccountDropdown';

/* ------------------------------------------------------------------ */
/*  Step Indicator                                                      */
/* ------------------------------------------------------------------ */
const StepIndicator: React.FC<{
  steps: TicketFlowStep[];
  onStepClick?: (stepNumber: number) => void;
}> = ({ steps, onStepClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeStep = steps.find((s) => s.status === 'active') || steps[0];
  const totalSteps = steps.length;

  const handleClick = (step: TicketFlowStep) => {
    if (step.status === 'completed' && onStepClick) {
      onStepClick(step.number);
    }
  };

  return (
    <>
      {/* Desktop: horizontal step tabs */}
      <div className="hidden md:block w-full border-b border-border-light">
        <div className="flex items-center">
          {steps.map((step) => (
            <button
              key={step.number}
              type="button"
              onClick={() => handleClick(step)}
              disabled={step.status !== 'completed'}
              className={clsx(
                'flex items-center py-4 mr-8 relative text-base bg-transparent border-0',
                step.status === 'active' &&
                  'text-charcoal font-bold !border-b-[3px] border-accent-green -mb-px z-10',
                step.status === 'completed' &&
                  'text-muted-text cursor-pointer hover:text-charcoal',
                step.status === 'pending' &&
                  'text-stone cursor-default'
              )}
            >
              <span className="mr-1">{step.number}.</span>
              <span>{step.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: styled dropdown showing current step */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between py-4 border-b border-border-light"
        >
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-muted-text">
              {activeStep.number} / {totalSteps}
            </span>
            <span className="text-base font-bold text-charcoal">
              {activeStep.label}
            </span>
          </div>
          <ChevronDown
            className={clsx(
              'w-4 h-4 text-muted-text transition-transform duration-200',
              mobileOpen && 'rotate-180'
            )}
          />
        </button>

        {/* Dropdown panel */}
        {mobileOpen && (
          <div className="border-b border-border-light bg-mist animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
            {steps.map((step) => (
              <button
                key={step.number}
                type="button"
                onClick={() => { handleClick(step); setMobileOpen(false); }}
                disabled={step.status !== 'completed'}
                className={clsx(
                  'flex items-center px-4 py-3 text-base w-full text-left border-x border-border-light',
                  step.status === 'active' &&
                    'text-charcoal font-bold bg-white border-l-2 border-l-accent-green',
                  step.status === 'completed' &&
                    'text-muted-text cursor-pointer hover:bg-hover',
                  step.status === 'pending' &&
                    'text-muted-fg cursor-default'
                )}
              >
                <span className="mr-1.5">{step.number}.</span>
                <span>{step.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Ticket Item                                                         */
/* ------------------------------------------------------------------ */
const TicketItem: React.FC<{
  ticket: TicketType;
  onQuantityChange: (qty: number) => void;
}> = ({ ticket, onQuantityChange }) => {
  const handleDecrement = () => {
    if (ticket.quantity > 0) onQuantityChange(ticket.quantity - 1);
  };
  const handleIncrement = () => {
    onQuantityChange(ticket.quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-border-light border-l-4 border-l-border-light bg-white">
      <div className="flex-1 max-w-xl pr-4">
        <h3 className="font-bold text-charcoal text-base mb-1">{ticket.title}</h3>
        <p className="text-muted-text text-base md:text-base leading-relaxed">
          {ticket.description}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <span className="font-bold text-charcoal text-base">
          {ticket.isFree ? 'Free' : `$${ticket.price}`}
        </span>

        <div className="flex items-stretch min-h-[44px]">
          <button
            onClick={handleDecrement}
            disabled={ticket.quantity === 0}
            className={clsx(
              'min-w-[44px] min-h-[44px] flex items-center justify-center border bg-white hover:bg-hover active:bg-mist disabled:cursor-not-allowed transition-colors text-muted-text',
              ticket.quantity > 0
                ? 'border-border-light border-r-charcoal'
                : 'border-border-light'
            )}
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className={clsx(
            'min-w-[44px] min-h-[44px] w-10 flex items-center justify-center font-bold text-base border-y transition-colors',
            ticket.quantity > 0
              ? 'bg-accent-green border-charcoal text-near-black'
              : 'bg-mist border-border-light text-muted-fg'
          )}>
            {ticket.quantity}
          </div>
          <button
            onClick={handleIncrement}
            className={clsx(
              'min-w-[44px] min-h-[44px] flex items-center justify-center border bg-white hover:bg-hover active:bg-mist transition-colors text-muted-text',
              ticket.quantity > 0
                ? 'border-border-light border-l-charcoal'
                : 'border-border-light'
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

/* ------------------------------------------------------------------ */
/*  Ticket List (grouped by category)                                   */
/* ------------------------------------------------------------------ */
const TicketList: React.FC<{
  tickets: TicketType[];
  onQuantityChange: (id: string, qty: number) => void;
}> = ({ tickets, onQuantityChange }) => {
  const standard = tickets.filter((t) => t.category === 'standard');
  const discounted = tickets.filter((t) => t.category === 'discounted');
  const member = tickets.filter((t) => t.category === 'member');

  return (
    <div className="space-y-8">
      {/* Info banner — uses tooltip/info banner pattern from style guide */}
      <div className="bg-canvas p-3 text-base text-muted-text leading-relaxed flex gap-2">
        <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-text" />
        Reminder: Prices are listed per ticket.
      </div>

      {/* Standard Tickets */}
      <section>
        <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mb-4 font-arquitecta">
          Standard Tickets
        </h3>
        <div className="space-y-4">
          {standard.map((t) => (
            <TicketItem key={t.id} ticket={t} onQuantityChange={(qty) => onQuantityChange(t.id, qty)} />
          ))}
        </div>
      </section>

      {/* Discounted Tickets */}
      <section>
        <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mt-4 mb-4 font-arquitecta">
          Discounted Tickets
        </h3>
        <div className="space-y-4">
          {discounted.map((t) => (
            <TicketItem key={t.id} ticket={t} onQuantityChange={(qty) => onQuantityChange(t.id, qty)} />
          ))}
        </div>
      </section>

      {/* Member */}
      <section>
        <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mt-4 mb-4 font-arquitecta">
          Member
        </h3>
        <div className="space-y-4">
          {member.map((t) => (
            <TicketItem key={t.id} ticket={t} onQuantityChange={(qty) => onQuantityChange(t.id, qty)} />
          ))}
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Order Summary                                                       */
/* ------------------------------------------------------------------ */
const OrderSummary: React.FC<{
  selectedDate: string;
  selectedTime: string;
  tickets: TicketType[];
  total: number;
  /** When true, show only the heading and date/time (for step 1 of timed ticket flows). */
  dateTimeOnly?: boolean;
}> = ({ selectedDate, selectedTime, tickets, total, dateTimeOnly = false }) => {
  const selected = tickets.filter((t) => t.quantity > 0);
  const hasTickets = selected.length > 0;

  return (
    <div className="border border-card-stroke border-t-[3px] border-t-accent-green">
      <div className="p-8">
        {/* Heading */}
        <div className="pb-4 mb-5 border-b border-border-light">
          <h2 className="text-base font-bold tracking-widest text-charcoal uppercase font-arquitecta">
            Order Summary
          </h2>
        </div>

        {/* Date / Time */}
        <div className={dateTimeOnly ? 'grid grid-cols-2 gap-4 border-b-0 mb-0 pb-0' : 'grid grid-cols-2 gap-4 pb-4 mb-5 border-b border-border-light'}>
          <div className="min-w-0">
            <div className={`${CARD_LABEL} mb-2`}>
              Date
            </div>
            <div className="text-charcoal text-base break-words">{selectedDate}</div>
          </div>
          <div className="min-w-0">
            <div className={`${CARD_LABEL} mb-2`}>
              Time
            </div>
            <div className="text-charcoal text-base break-words">{selectedTime}</div>
          </div>
        </div>

        {!dateTimeOnly && (
          <>
            {/* Line items */}
            <div className="space-y-3 mb-5 pb-5 border-b border-border-light min-h-16">
              {hasTickets ? (
                selected.map((t) => (
                  <div key={t.id} className="flex justify-between items-start text-base">
                    <span className="text-charcoal">{t.title}</span>
                    <span className="text-charcoal whitespace-nowrap">
                      {t.quantity} &times; ${t.price}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-muted-text italic text-base leading-relaxed py-2">
                  No tickets selected
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="font-bold text-base text-charcoal">Total</span>
              <span className="font-bold text-base text-charcoal">${total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */
const TicketFooter: React.FC = () => (
  <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#171717] text-white py-4 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4 text-base">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-lime" />
        <span className="font-arquitecta text-lg">Open today</span>
        <span className="text-disabled-icon font-arquitecta hidden md:inline">10:00 AM – 5:00 PM</span>
      </div>
      <div className="text-center md:text-right flex items-center gap-2">
        {/* Min 44px tap target for mobile (WCAG 2.5.5) */}
        <a href="#" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center py-2 text-base text-accent-pink underline hover:opacity-80 transition-opacity md:hidden">
          Need help?
        </a>
        <span className="text-base text-card-stroke hidden md:inline">Need help? Call us at 609.586.0616 or </span>
        <a href="#" className="hidden md:inline-flex items-center min-h-[44px] justify-center py-2 text-base text-accent-pink underline hover:opacity-80 transition-opacity">
          learn more.
        </a>
      </div>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/*  Main Page                                                           */
/* ------------------------------------------------------------------ */
export const TicketFlow1: React.FC = () => {
  const [tickets, setTickets] = useState<TicketType[]>(initialTickets);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, quantity: newQuantity } : t))
    );
  };

  const total = tickets.reduce((sum, t) => sum + t.price * t.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black pb-24 md:pb-14">
      {/* ── Header ── */}
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <AccountDropdown />
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        {/* Back link + page title */}
        <div className="mb-10">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.history.back(); }}
            className="inline-flex items-center text-warm-muted hover:text-near-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-base">Return to main site</span>
          </a>

          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-10 font-arquitecta">
            Timed Tickets
          </h1>

          <StepIndicator steps={ticketFlowSteps} />
        </div>

        {/* Two-column: tickets (left) + order summary (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 font-arquitecta">
              Tickets
            </h2>
            <TicketList tickets={tickets} onQuantityChange={handleQuantityChange} />
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <OrderSummary
              selectedDate={ticketFlowOrderDefaults.selectedDate}
              selectedTime={ticketFlowOrderDefaults.selectedTime}
              tickets={tickets}
              total={total}
            />
            <button
              disabled={total === 0}
              className={clsx(
                'w-full py-4 px-6 mt-6 uppercase tracking-wider font-bold text-base font-arquitecta transition-colors text-center',
                total > 0
                  ? 'bg-near-black text-white hover:bg-charcoal'
                  : 'bg-border-light text-white cursor-not-allowed'
              )}
            >
              Continue
            </button>
            {total === 0 && (
              <p className="text-base text-muted-text mt-2 text-center">
                Select ticket quantity to continue.
              </p>
            )}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <TicketFooter />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Re-exports for shared ticketing patterns                            */
/* ------------------------------------------------------------------ */

// These exports allow other ticketing flows (e.g., guest checkout)
// to reuse the same visual patterns and layout primitives.
export { StepIndicator as TicketFlowStepIndicator };
export { TicketList as TicketFlowTicketList };
export { OrderSummary as TicketFlowOrderSummary };
export { TicketFooter as TicketFlowFooter };
