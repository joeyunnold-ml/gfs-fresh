import React from 'react';
import { useLocation } from 'react-router';
import { Printer } from 'lucide-react';

/**
 * Ticket confirmation page shown after checkout.
 * Matches GFS timed admission ticket confirmation layout.
 */
export const TicketConfirmation: React.FC = () => {
  const location = useLocation();
  const order = (location.state as { selectedDate?: string; selectedTime?: string; tickets?: { title: string; quantity: number; price: number }[] }) ?? {};
  const selectedDate = order.selectedDate ?? 'Friday, August 22, 2025';
  const selectedTime = order.selectedTime ?? '11:30 AM';
  const lineItems = order.tickets ?? [{ title: 'Child 5 & Under', quantity: 1, price: 0 }];

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white font-opensans text-charcoal">
      <main className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-base text-charcoal mb-2">
          Please print your tickets or have them ready on your mobile device when you arrive at check-in.
        </p>
        <p className="text-base text-charcoal mb-6">
          Explore with our interactive map. ▸{' '}
          <a href="https://gfsmap.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal underline hover:text-accent-green transition-colors">
            gfsmap.org
          </a>
        </p>

        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E87500] text-white font-bold uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>

        <div className="border-2 border-near-black p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-bold text-charcoal mb-2">Order # 16376973</p>
              <div className="h-14 bg-white border border-border-light flex items-center justify-center mb-2" aria-hidden>
                <span className="text-xs text-muted-text">Barcode</span>
              </div>
              <p className="text-sm font-bold text-charcoal">Ticket # 11739669</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-charcoal mb-1">
                <span className="font-normal">Grounds </span>For Sculpture
              </h2>
              <p className="text-xl font-bold text-charcoal mb-2">Timed Admission Tickets</p>
              <p className="text-sm text-charcoal mb-2">Arrive up to 30 minutes after entry time</p>
              <p className="text-base font-bold text-charcoal">{selectedDate}</p>
              <p className="text-base font-bold text-charcoal mb-4">{selectedTime}</p>
              {lineItems.map((item, i) => (
                <p key={i} className="text-sm text-charcoal">
                  {item.title} — {item.price === 0 ? '$0.00' : `$${item.price.toFixed(2)}`}
                </p>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-2 font-arquitecta">
            Cancellation policy
          </h3>
          <p className="text-sm text-charcoal leading-relaxed">
            All sales are final. Tickets are non-refundable and may not be exchanged for another date and time. In the
            event you are feeling unwell, please contact us for a refund of your tickets.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-2 font-arquitecta">
            Membership
          </h3>
          <p className="text-sm text-charcoal leading-relaxed">
            Apply the cost of your general admission tickets toward a membership by calling (609) 586-0616. Valid only
            for general admission — workshop or program tickets not applicable.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-2 font-arquitecta">
            Public notice of photography
          </h3>
          <p className="text-sm text-charcoal leading-relaxed">
            Please be aware that authorized photographers, commissioned by Grounds For Sculpture, Inc., may be taking
            photos or filming on the day of your visit. These images are intended to be used for promotional purposes
            i.e. distribution on the internet, media and corporate publications, as well as for archival purposes. If
            you prefer not to have your image or likeness used, please see a staff member so we can ensure your
            privacy.
          </p>
        </section>
      </main>
    </div>
  );
};
