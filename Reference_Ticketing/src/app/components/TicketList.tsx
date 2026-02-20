import React from 'react';
import { Info } from 'lucide-react';
import { TicketItem } from './TicketItem';

interface Ticket {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: 'standard' | 'discounted' | 'member';
  isFree?: boolean;
}

interface TicketListProps {
  tickets: Ticket[];
  onQuantityChange: (id: string, newQuantity: number) => void;
}

export function TicketList({ tickets, onQuantityChange }: TicketListProps) {
  const standardTickets = tickets.filter(t => t.category === 'standard');
  const discountedTickets = tickets.filter(t => t.category === 'discounted');
  const memberTickets = tickets.filter(t => t.category === 'member');

  return (
    <div className="space-y-12">
      <div className="bg-[#e0e0e0] p-4 flex items-center gap-4 mb-8">
        <div className="w-5 h-5 rounded-full border border-gray-900 flex items-center justify-center shrink-0">
          <Info size={12} className="text-gray-900" />
        </div>
        <p className="text-gray-900 font-['Open_Sans'] text-sm leading-relaxed">
          Reminder: Prices are listed per ticket.
        </p>
      </div>

      <section>
        <h2 className="font-['Arquitecta'] font-bold text-sm tracking-[0.1em] text-gray-900 uppercase mb-4">
          Standard Tickets
        </h2>
        <div className="space-y-4">
          {standardTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              title={ticket.title}
              description={ticket.description}
              price={ticket.price}
              quantity={ticket.quantity}
              onQuantityChange={(qty) => onQuantityChange(ticket.id, qty)}
              isFree={ticket.isFree}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-['Arquitecta'] font-bold text-sm tracking-[0.1em] text-gray-900 uppercase mb-4 mt-8">
          Discounted Tickets
        </h2>
        <div className="space-y-4">
          {discountedTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              title={ticket.title}
              description={ticket.description}
              price={ticket.price}
              quantity={ticket.quantity}
              onQuantityChange={(qty) => onQuantityChange(ticket.id, qty)}
              isFree={ticket.isFree}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-['Arquitecta'] font-bold text-sm tracking-[0.1em] text-gray-900 uppercase mb-4 mt-8">
          Member
        </h2>
        <div className="space-y-4">
          {memberTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              title={ticket.title}
              description={ticket.description}
              price={ticket.price}
              quantity={ticket.quantity}
              onQuantityChange={(qty) => onQuantityChange(ticket.id, qty)}
              isFree={ticket.isFree}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
