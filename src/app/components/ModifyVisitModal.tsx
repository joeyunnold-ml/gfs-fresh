import React, { useState } from 'react';
import { Visit } from '../types';
import {
  Dialog,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from './ui/dialog';
import { CARD_LABEL } from '../typography';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parse } from 'date-fns';
import { ChevronLeft, ChevronRight, Pencil, X, Info, Loader2 } from 'lucide-react';
import clsx from 'clsx';

const UNAVAILABLE_DATES: number[] = [12, 16, 17, 18];

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
];

interface ModifyVisitModalProps {
  visit: Visit;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CardFieldRow: React.FC<{
  label: string;
  value: string;
  onClear?: () => void;
  expanded?: boolean;
  onToggle?: () => void;
}> = ({ label, value, onClear, expanded, onToggle }) => (
  <div className="border border-border-light bg-white overflow-hidden">
    <div className={clsx('px-6 py-4 flex items-center justify-between', expanded && 'bg-hover')}>
      <div>
        <div className={`${CARD_LABEL} mb-1`}>{label}</div>
        <div className="text-base text-charcoal">{value}</div>
      </div>
      <div className="flex items-center gap-2">
        {onClear && value && !expanded && (
          <button
            type="button"
            onClick={onClear}
            className="p-1 text-muted-text hover:text-charcoal"
            aria-label="Clear"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {onToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="p-1 text-muted-text hover:text-charcoal"
            aria-label={expanded ? 'Collapse' : 'Edit'}
          >
            {expanded ? <X className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  </div>
);

export const ModifyVisitModal: React.FC<ModifyVisitModalProps> = ({
  visit,
  open,
  onOpenChange,
}) => {
  const [selectedDate, setSelectedDate] = useState(visit.date);
  const [selectedTime, setSelectedTime] = useState(visit.time);
  const [calendarOpen, setCalendarOpen] = useState(true);
  const [timeListOpen, setTimeListOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirmChange = () => {
    setIsConfirming(true);
    setTimeout(() => {
      onOpenChange(false);
      setIsConfirming(false);
    }, 2000);
  };

  const hasChanges = selectedDate !== visit.date || selectedTime !== visit.time;

  const parsedDate = selectedDate ? (() => { try { return parse(selectedDate, 'MMM. d, yyyy', new Date()); } catch { return new Date(); } })() : new Date();
  const [viewMonth, setViewMonth] = useState(parsedDate);
  const selectedDateObj = selectedDate ? (() => { try { return parse(selectedDate, 'MMM. d, yyyy', new Date()); } catch { return null; } })() : null;
  const today = new Date();

  const monthStart = startOfMonth(viewMonth);
  const days = eachDayOfInterval({ start: monthStart, end: endOfMonth(viewMonth) });
  const firstDayOfWeek = monthStart.getDay();
  const leadingEmpty = Array(firstDayOfWeek).fill(null);

  const handleSelectDate = (d: Date) => {
    const day = d.getDate();
    if (UNAVAILABLE_DATES.includes(day)) return;
    setSelectedDate(format(d, 'MMM. d, yyyy'));
  };

  const handleToday = () => handleSelectDate(today);

  const handleNextAvailable = () => {
    const next = days.find((d) => !UNAVAILABLE_DATES.includes(d.getDate()));
    if (next) handleSelectDate(next);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <div
          data-state={open ? 'open' : 'closed'}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <div className="bg-white w-screen h-screen flex flex-col md:w-auto md:h-[90vh] md:max-h-[90vh] md:max-w-2xl md:min-w-[36rem] md:border md:shadow-lg relative">
            <div className={clsx('flex flex-col flex-1 min-h-0 overflow-hidden', isConfirming && 'invisible')}>
            {/* Header */}
            <div className="p-6 pb-4 shrink-0">
              <DialogTitle className="text-xl font-bold text-charcoal uppercase tracking-wider font-arquitecta">
                Modify date & entry time
              </DialogTitle>
              <div className="bg-canvas p-3 text-base text-muted-text leading-relaxed flex gap-2 items-center mt-4">
                <Info className="w-4 h-4 shrink-0 text-muted-text self-center" />
                <span>
                  If you need help, or for cancellations,{' '}
                  <a href="#" className="text-charcoal underline hover:no-underline">
                    contact us
                  </a>
                  .
                </span>
              </div>
            </div>

            {/* Content: Date + Entry time — scrollable area */}
            <div
              className="px-6 pb-4 flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y space-y-6"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="space-y-3">
                <div>
                  <CardFieldRow
                    label="Date"
                    value={selectedDate}
                    expanded={calendarOpen}
                    onToggle={() => {
                      setTimeListOpen(false);
                      setCalendarOpen((prev) => !prev);
                    }}
                  />
                  {calendarOpen && (
                    <div className="border border-t-0 border-border-light bg-white p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">
                          {format(viewMonth, 'MMMM yyyy').toUpperCase()}
                        </h3>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => setViewMonth((m) => subMonths(m, 1))}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-hover transition-colors"
                            aria-label="Previous month"
                          >
                            <ChevronLeft className="w-6 h-6 text-charcoal" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setViewMonth((m) => addMonths(m, 1))}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-hover transition-colors"
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
                          <div key={`e-${i}`} className="border-r border-b border-border-light bg-white min-h-[2.75rem]" />
                        ))}
                        {days.map((d) => {
                          const dayNum = d.getDate();
                          const unavailable = UNAVAILABLE_DATES.includes(dayNum);
                          const selected = selectedDateObj && isSameDay(d, selectedDateObj);
                          return (
                            <button
                              key={d.toISOString()}
                              type="button"
                              onClick={() => handleSelectDate(d)}
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
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <CardFieldRow
                    label="Entry time"
                    value={selectedTime}
                    expanded={timeListOpen}
                    onToggle={() => {
                      setCalendarOpen(false);
                      setTimeListOpen((prev) => !prev);
                    }}
                  />
                  {timeListOpen && (
                    <div className="border border-t-0 border-border-light bg-white max-h-[320px] overflow-y-auto">
                      {TIME_SLOTS.map((time) => {
                        const selected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              setSelectedTime(time);
                              setTimeListOpen(false);
                            }}
                            className={clsx(
                              'w-full flex items-center justify-between px-4 py-3 text-left border-b border-border-light last:border-b-0 transition-colors',
                              selected
                                ? 'bg-lime border-l-4 border-l-accent-green'
                                : 'bg-white hover:bg-lime',
                            )}
                          >
                            <span className="font-bold text-charcoal">{time}</span>
                            <span className="text-base text-muted-text">Available</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <p className="text-base text-muted-text">
                  This is your entry time — your visit has no time limit.
                </p>
              </div>
            </div>
            </div>

            {/* Fixed footer: Confirm + Cancel */}
            <div className="shrink-0 border-t border-card-stroke p-6 space-y-3 bg-white">
              <button
                type="button"
                onClick={handleConfirmChange}
                disabled={!hasChanges}
                className="w-full min-h-[44px] py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="w-full min-h-[44px] py-3 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal text-charcoal hover:bg-hover transition-colors"
              >
                Cancel
              </button>
            </div>
            {isConfirming && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <Loader2 className="w-10 h-10 animate-spin text-charcoal" />
              </div>
            )}
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
};
