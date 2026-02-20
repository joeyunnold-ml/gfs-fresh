import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parse } from 'date-fns';
import { Logo } from './Logo';
import type { TicketFlowStep } from '../types';
import { TicketFlowStepIndicator, TicketFlowOrderSummary, TicketFlowFooter } from './TicketFlow1';

const EVENT_TITLE = 'ArtBox';
const FIXED_TIME = '10:30 - 11:30 AM';
const SOLD_OUT_DATE = new Date(2026, 2, 12); // March 12, 2026

const steps: TicketFlowStep[] = [
  { number: 1, label: 'Select a date', status: 'active' },
];

/* ------------------------------------------------------------------ */
/*  Calendar: selected date is sold out (March 12, 2026), disabled    */
/* ------------------------------------------------------------------ */
const SoldOutDateCalendar: React.FC<{ value: string }> = ({ value }) => {
  const parsed = value ? (() => { try { return parse(value, 'MMM. d, yyyy', new Date()); } catch { return SOLD_OUT_DATE; } })() : SOLD_OUT_DATE;
  const [viewMonth, setViewMonth] = useState(startOfMonth(parsed));
  const selectedDate = value ? (() => { try { return parse(value, 'MMM. d, yyyy', new Date()); } catch { return SOLD_OUT_DATE; } })() : SOLD_OUT_DATE;

  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const firstDayOfWeek = monthStart.getDay();
  const leadingEmpty = Array(firstDayOfWeek).fill(null);

  const isSoldOut = (d: Date) => isSameDay(d, SOLD_OUT_DATE);

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
      <div className="grid grid-cols-7 mb-4 border-t border-l border-border-light">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
          <div key={d} className="border-r border-b border-border-light bg-muted-bg text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta text-center py-2 md:py-3">
            {d}
          </div>
        ))}
        {leadingEmpty.map((_, i) => (
          <div key={`empty-${i}`} className="border-r border-b border-border-light bg-white min-h-[4.125rem] md:min-h-[5.5rem]" />
        ))}
        {days.map((d) => {
          const soldOut = isSoldOut(d);
          const selected = selectedDate && isSameDay(d, selectedDate);
          const isSelectedSoldOut = selected && soldOut;
          return (
            <div
              key={d.toISOString()}
              role="button"
              aria-disabled="true"
              className={clsx(
                'min-h-[4.125rem] md:min-h-[5.5rem] flex items-center justify-center text-base transition-colors',
                isSelectedSoldOut && 'bg-mist border-2 border-accent-pink font-bold text-muted-text cursor-not-allowed',
                !isSelectedSoldOut && 'border-r border-b border-border-light font-normal bg-white text-charcoal',
              )}
            >
              {d.getDate()}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4 text-base text-muted-text">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-mist border-2 border-accent-pink" />
          <span>Sold out</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-border-light" />
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
};

export function EventSoldOut() {
  const selectedDate = format(SOLD_OUT_DATE, 'MMM. d, yyyy');

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
            onClick={(e) => { e.preventDefault(); window.history.back(); }}
            className="inline-flex items-center text-warm-muted hover:text-near-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-base">Return to main site</span>
          </a>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 font-arquitecta flex items-center gap-3 flex-wrap">
            {EVENT_TITLE}
            <span className="inline-block px-2.5 py-1.5 text-base font-bold text-accent-pink uppercase tracking-wider border border-accent-pink rounded-none leading-none bg-accent-pink text-white">
              SOLD OUT
            </span>
          </h1>
          <TicketFlowStepIndicator steps={steps} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <section className="lg:col-span-8">
            <SoldOutDateCalendar value={selectedDate} />
          </section>
          <aside className="lg:col-span-4 space-y-6">
            <TicketFlowOrderSummary
              selectedDate={selectedDate}
              selectedTime={FIXED_TIME}
              tickets={[]}
              total={0}
              dateTimeOnly
            />
          </aside>
        </div>
      </main>

      <TicketFlowFooter />
    </div>
  );
}
