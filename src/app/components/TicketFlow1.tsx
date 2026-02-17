import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, Info, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { ticketFlowSteps, initialTickets, ticketFlowOrderDefaults } from '../mockData';
import { TicketType, TicketFlowStep } from '../types';
import clsx from 'clsx';

/* ------------------------------------------------------------------ */
/*  Step Indicator                                                      */
/* ------------------------------------------------------------------ */
const StepIndicator: React.FC<{ steps: TicketFlowStep[] }> = ({ steps }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeStep = steps.find((s) => s.status === 'active') || steps[0];
  const totalSteps = steps.length;

  return (
    <>
      {/* Desktop: horizontal step tabs */}
      <div className="hidden md:block w-full border-b border-border-light">
        <div className="flex items-center">
          {steps.map((step) => (
            <div
              key={step.number}
              className={clsx(
                'flex items-center py-4 mr-8 relative text-base',
                step.status === 'active' &&
                  'text-charcoal font-bold border-b-2 border-accent-green -mb-px z-10',
                step.status === 'completed' &&
                  'text-muted-text cursor-pointer',
                step.status === 'pending' &&
                  'text-stone'
              )}
            >
              <span className="mr-1">{step.number}.</span>
              <span>{step.label}</span>
            </div>
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
          <div className="border-b border-border-light bg-mist">
            {steps.map((step) => (
              <div
                key={step.number}
                className={clsx(
                  'flex items-center px-4 py-3 text-sm',
                  step.status === 'active' &&
                    'text-charcoal font-bold bg-white border-l-2 border-l-accent-green',
                  step.status === 'completed' &&
                    'text-muted-text cursor-pointer hover:bg-hover',
                  step.status === 'pending' &&
                    'text-muted-fg'
                )}
              >
                <span className="mr-1.5">{step.number}.</span>
                <span>{step.label}</span>
              </div>
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
        <p className="text-muted-text text-sm md:text-base leading-relaxed">
          {ticket.description}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <span className="font-bold text-charcoal text-base">
          {ticket.isFree ? 'Free' : `$${ticket.price}`}
        </span>

        <div className="flex items-stretch h-10">
          <button
            onClick={handleDecrement}
            disabled={ticket.quantity === 0}
            className={clsx(
              'w-10 flex items-center justify-center border bg-white hover:bg-hover active:bg-mist disabled:cursor-not-allowed transition-colors text-muted-text',
              ticket.quantity > 0
                ? 'border-border-light border-r-charcoal'
                : 'border-border-light'
            )}
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className={clsx(
            'w-10 flex items-center justify-center font-bold text-base border-y transition-colors',
            ticket.quantity > 0
              ? 'bg-accent-green border-charcoal text-near-black'
              : 'bg-mist border-border-light text-muted-fg'
          )}>
            {ticket.quantity}
          </div>
          <button
            onClick={handleIncrement}
            className={clsx(
              'w-10 flex items-center justify-center border bg-white hover:bg-hover active:bg-mist transition-colors text-muted-text',
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
      <div className="bg-canvas p-3 text-sm text-muted-text leading-relaxed flex gap-2">
        <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-text" />
        Reminder: Prices are listed per ticket.
      </div>

      {/* Standard Tickets */}
      <section>
        <h3 className="font-bold text-sm tracking-widest text-charcoal uppercase mb-4 font-arquitecta">
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
        <h3 className="font-bold text-sm tracking-widest text-charcoal uppercase mt-4 mb-4 font-arquitecta">
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
        <h3 className="font-bold text-sm tracking-widest text-charcoal uppercase mt-4 mb-4 font-arquitecta">
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
}> = ({ selectedDate, selectedTime, tickets, total }) => {
  const selected = tickets.filter((t) => t.quantity > 0);
  const hasTickets = selected.length > 0;

  return (
    <div className="border border-card-stroke">
      {/* Green top accent */}
      <div className="h-1 bg-lime w-full" />

      <div className="p-8">
        {/* Heading */}
        <div className="pb-4 mb-5 border-b border-border-light">
          <h2 className="text-sm font-bold tracking-widest text-charcoal uppercase font-arquitecta">
            Order Summary
          </h2>
        </div>

        {/* Date / Time */}
        <div className="flex justify-between items-start pb-4 mb-5 border-b border-border-light">
          <div>
            <div className="text-sm font-bold text-muted-text uppercase tracking-wider font-arquitecta mb-2">
              Date
            </div>
            <div className="text-charcoal text-base">{selectedDate}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-muted-text uppercase tracking-wider font-arquitecta mb-2">
              Time
            </div>
            <div className="text-charcoal text-base">{selectedTime}</div>
          </div>
        </div>

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
            <div className="text-muted-text italic text-sm py-2">
              No tickets selected
            </div>
          )}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-base text-charcoal">Total</span>
          <span className="font-bold text-base text-charcoal">${total}</span>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */
const TicketFooter: React.FC = () => (
  <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#171717] text-white py-4 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-lime" />
        <span className="font-arquitecta">Open Today</span>
        <span className="text-disabled-icon font-arquitecta">10:00 AM – 5:00 PM</span>
      </div>
      <div className="text-center md:text-right">
        <span className="text-card-stroke">Need help? Call us at 609.586.0616 or </span>
        <a href="#" className="text-accent-pink underline hover:opacity-80 transition-opacity">
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
    <div className="min-h-screen flex flex-col bg-white font-opensans text-near-black pb-14">
      {/* ── Header ── */}
      <header className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="h-10 w-auto text-accent-green" />
          <button className="flex items-center gap-2 text-sm font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors">
            Account Portal
            <ChevronDown className="w-4 h-4" />
          </button>
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
                'w-full py-3 px-6 mt-6 uppercase tracking-wider font-bold text-sm font-arquitecta transition-colors text-center',
                total > 0
                  ? 'bg-near-black text-white hover:bg-charcoal'
                  : 'bg-border-light text-white cursor-not-allowed'
              )}
            >
              Continue
            </button>
            {total === 0 && (
              <p className="text-sm text-muted-text mt-2 text-center">
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
