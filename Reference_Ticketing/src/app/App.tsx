import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StepIndicator } from './components/StepIndicator';
import { TicketList } from './components/TicketList';
import { OrderSummary } from './components/OrderSummary';
import { ArrowLeft } from 'lucide-react';

interface Ticket {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: 'standard' | 'discounted' | 'member';
  isFree?: boolean;
}

const INITIAL_TICKETS: Ticket[] = [
  {
    id: 'adult',
    title: 'Adult',
    description: 'General admission for ages 18+. Includes outdoor sculptures and indoor galleries.',
    price: 25,
    quantity: 0,
    category: 'standard'
  },
  {
    id: 'child',
    title: 'Child',
    description: 'Ages 6–17. Children under 6 are free. Must be with an adult.',
    price: 15,
    quantity: 0,
    category: 'standard'
  },
  {
    id: 'senior',
    title: 'Senior',
    description: 'Ages 65+. Valid ID may be required.',
    price: 20,
    quantity: 0,
    category: 'discounted'
  },
  {
    id: 'veteran',
    title: 'Veteran',
    description: 'Active military and veterans. Military ID required at entry.',
    price: 12,
    quantity: 0,
    category: 'discounted'
  },
  {
    id: 'member-adult',
    title: 'Adult',
    description: 'Free for Grounds For Sculpture members. Membership card required at entry.',
    price: 0,
    quantity: 0,
    category: 'member',
    isFree: true
  }
];

export default function App() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setTickets(prev => prev.map(ticket => 
      ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket
    ));
  };

  const total = tickets.reduce((sum, ticket) => sum + (ticket.price * ticket.quantity), 0);
  
  const selectedTickets = tickets.filter(t => t.quantity > 0).map(t => ({
    id: t.id,
    title: t.title,
    quantity: t.quantity,
    price: t.price
  }));

  return (
    <div className="min-h-screen flex flex-col bg-white font-['Open_Sans'] text-[#1a1a1a]">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <a href="#" className="inline-flex items-center text-[#8b8178] hover:text-[#1a1a1a] transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-normal text-sm md:text-base">Return to main site</span>
          </a>
          
          <h1 className="text-4xl md:text-5xl font-['Arquitecta'] font-bold uppercase tracking-wider mb-10">
            Timed Tickets
          </h1>

          <StepIndicator />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-['Arquitecta'] font-bold uppercase tracking-wider mb-8">
              Tickets
            </h2>
            
            <TicketList 
              tickets={tickets} 
              onQuantityChange={handleQuantityChange} 
            />
          </div>

          <div className="lg:col-span-4 sticky top-8">
            <OrderSummary 
              selectedDate="Aug. 7, 2025" 
              selectedTime="9:30 AM" 
              tickets={selectedTickets} 
              total={total} 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
