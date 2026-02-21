import React from 'react';

interface OrderSummaryProps {
  selectedDate: string;
  selectedTime: string;
  tickets: {
    id: string;
    title: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}

export function OrderSummary({ selectedDate, selectedTime, tickets, total }: OrderSummaryProps) {
  const hasTickets = tickets.length > 0;
  const filteredTickets = tickets.filter(ticket => ticket.quantity > 0);

  return (
    <div className="bg-white border border-gray-200 shadow-sm sticky top-8">
      {/* Green Top Border */}
      <div className="h-[4px] bg-[#c5d63d] w-full" />
      
      <div className="p-6 pt-5">
        <h2 className="text-xs font-['Arquitecta'] font-bold tracking-[0.1em] text-gray-900 uppercase mb-6">
          Order Summary
        </h2>
        
        {/* Date / Time */}
        <div className="flex justify-between items-start border-b border-gray-100 pb-5 mb-5">
          <div>
            <div className="text-[11px] font-['Open_Sans'] font-bold text-gray-400 mb-1 uppercase tracking-wide">Date</div>
            <div className="text-gray-900 text-sm font-['Open_Sans'] font-semibold">{selectedDate}</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-['Open_Sans'] font-bold text-gray-400 mb-1 uppercase tracking-wide">Time</div>
            <div className="text-gray-900 text-sm font-['Open_Sans'] font-semibold">{selectedTime}</div>
          </div>
        </div>

        {/* Line Items */}
        <div className="space-y-4 mb-5 pb-5 border-b border-gray-100 min-h-[4rem]">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div key={ticket.id} className="flex justify-between items-start text-sm font-['Open_Sans']">
                <span className="text-gray-900 font-medium">{ticket.title}</span>
                <span className="text-gray-900 font-medium whitespace-nowrap">
                  {ticket.quantity} × ${ticket.price}
                </span>
              </div>
            ))
          ) : (
            <div className="text-gray-400 italic text-sm py-2">
              No tickets selected
            </div>
          )}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-8">
          <span className="font-['Arquitecta'] font-bold text-lg text-gray-900">Total</span>
          <span className="font-['Arquitecta'] font-bold text-lg text-gray-900">${total}</span>
        </div>

        <button 
          className={`w-full py-3 px-6 uppercase tracking-wider font-['Arquitecta'] font-bold text-sm transition-colors text-center
            ${hasTickets && total > 0
              ? 'bg-[#1a1a1a] text-white hover:bg-black shadow-md' 
              : 'bg-[#e0e0e0] text-white cursor-not-allowed'
            }`}
          disabled={!hasTickets || total === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
