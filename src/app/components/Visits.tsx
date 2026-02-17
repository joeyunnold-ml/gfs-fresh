import React, { useState } from 'react';
import { visits } from '../mockData';
import { ChevronDown, ArrowUpRight, PartyPopper } from 'lucide-react';
import clsx from 'clsx';

export const Visits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const filteredVisits = visits.filter(v => v.status === activeTab);

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
    {/* Mobile Header — grey background extending from header */}
    <div className="md:hidden bg-shell px-4 pb-0 pt-2">
       <h1 className="text-2xl font-black uppercase tracking-wide mb-4 font-arquitecta">WELCOME, TOM!</h1>
       <div className="border-b-2 border-accent-green inline-block pb-1">
         <span className="font-bold text-charcoal uppercase tracking-wider font-arquitecta">VISITS</span>
       </div>
    </div>

    <div className="p-4 md:p-8">
      {/* Tabs */}
      <div className="flex space-x-2 mb-8 md:border-none md:pb-0">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={clsx(
              "px-4 py-2 text-base font-semibold transition-colors",
              activeTab === 'upcoming' ? "bg-mist text-charcoal" : "text-stone hover:text-charcoal"
            )}
          >
            Upcoming
          </button>
          <button
             onClick={() => setActiveTab('past')}
             className={clsx(
              "px-4 py-2 text-base font-semibold transition-colors",
              activeTab === 'past' ? "bg-mist text-charcoal" : "text-stone hover:text-charcoal"
            )}
          >
            Past
          </button>
      </div>

      {/* Info banner */}
      <div className="bg-canvas p-4 text-base text-muted-text leading-relaxed flex gap-3 mb-8">
        <PartyPopper className="w-5 h-5 mt-0.5 shrink-0 text-muted-text" />
        You&apos;ve saved $250 with your membership this year.
      </div>

      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-12 gap-6 text-base font-bold text-muted-text uppercase tracking-wider mb-4 px-6 font-arquitecta">
        <div className="col-span-3">Date & Time</div>
        <div className="col-span-3">Visit</div>
        <div className="col-span-2">Ticket</div>
        <div className="col-span-2">Fee</div>
        <div className="col-span-2"></div>
      </div>

      <div className="space-y-4 md:space-y-6">
        {filteredVisits.length === 0 ? (
          <div className="text-center py-12 text-stone bg-hover">
            No {activeTab} visits found.
          </div>
        ) : (
          filteredVisits.map((visit) => {
            const isExpanded = expandedIds.has(visit.id);

            return (
              <div key={visit.id} className="bg-white border border-card-stroke p-6 md:px-6 md:py-8">

                {/* Desktop Row Layout */}
                <div className="hidden md:grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-3">
                    <p className="font-medium text-charcoal">{visit.date}</p>
                    <p className="text-stone text-sm mt-1">{visit.time}</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-muted-text">{visit.title}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-text">{visit.tickets}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-text">{visit.fee}</p>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 text-base font-bold uppercase tracking-wider border-[1.5px] border-charcoal hover:bg-hover transition-colors font-arquitecta">
                        MODIFY
                      </button>
                      <button
                        onClick={() => toggleExpanded(visit.id)}
                        className="px-2 py-2 border-[1.5px] border-charcoal hover:bg-hover transition-colors self-stretch"
                      >
                        <ChevronDown className={clsx("w-5 h-5 text-muted-text transition-transform duration-200", isExpanded && "rotate-180")} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop Expanded Content */}
                {isExpanded && visit.description && (
                  <div className="hidden md:block border-t border-card-stroke mt-6 pt-6">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-3" />
                      <div className="col-span-7">
                        <p className="text-base text-muted-text leading-relaxed">{visit.description}</p>
                        <a href="#" className="text-base font-semibold text-charcoal flex items-center gap-1 mt-4 hover:underline font-arquitecta">
                          More Info <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Card Layout */}
                <div className="md:hidden space-y-6">
                   <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-bold text-muted-text uppercase tracking-wider mb-1 font-arquitecta">DATE & TIME</h4>
                        <div className="flex flex-col gap-1">
                           <p className="text-sm font-medium text-charcoal">{visit.date}</p>
                           <p className="text-sm text-stone">{visit.time}</p>
                        </div>
                      </div>
                   </div>

                   <div>
                     <h4 className="text-base font-bold text-muted-text uppercase tracking-wider mb-1 font-arquitecta">VISIT</h4>
                     <p className="text-sm text-charcoal">{visit.title}</p>
                   </div>

                   <div>
                     <h4 className="text-base font-bold text-muted-text uppercase tracking-wider mb-1 font-arquitecta">TICKET</h4>
                     <p className="text-sm text-charcoal">{visit.tickets}</p>
                   </div>

                   <div>
                     <h4 className="text-base font-bold text-muted-text uppercase tracking-wider mb-1 font-arquitecta">FEE</h4>
                     <p className="text-sm text-charcoal">{visit.fee}</p>
                   </div>

                   <div className="pt-2 flex items-center gap-2">
                      <button className="flex-1 py-3 text-base font-bold uppercase tracking-wider border-[1.5px] border-charcoal hover:bg-hover transition-colors text-center font-arquitecta">
                        MODIFY
                      </button>
                      <button
                        onClick={() => toggleExpanded(visit.id)}
                        className="py-3 px-3 border-[1.5px] border-charcoal hover:bg-hover transition-colors self-stretch"
                      >
                        <ChevronDown className={clsx("w-5 h-5 text-muted-text transition-transform duration-200", isExpanded && "rotate-180")} />
                      </button>
                   </div>

                   {/* Mobile Expanded Content */}
                   {isExpanded && visit.description && (
                     <div className="border-t border-card-stroke pt-6">
                       <p className="text-sm text-muted-text leading-relaxed">{visit.description}</p>
                       <a href="#" className="text-base font-semibold text-charcoal flex items-center gap-1 mt-4 hover:underline font-arquitecta">
                         More Info <ArrowUpRight className="w-3.5 h-3.5" />
                       </a>
                     </div>
                   )}
                </div>

              </div>
            );
          })
        )}
      </div>
    </div>
    </>
  );
};
