import React, { useState, useEffect } from 'react';
import { guestPasses, membershipTiers } from '../mockData';
import { GuestPass, MembershipTier } from '../types';
import { Check, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from './ui/dialog';

type SubTab = 'overview' | 'guest-passes';

const TicketIcon: React.FC<{ className?: string; muted?: boolean }> = ({ className, muted }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="32" height="24" rx="2" stroke={muted ? "#B0B0B0" : "#B6D840"} strokeWidth="2" />
    <path d="M14 8V32" stroke={muted ? "#B0B0B0" : "#B6D840"} strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="26" cy="18" r="3" stroke={muted ? "#B0B0B0" : "#B6D840"} strokeWidth="1.5" />
    <path d="M23 24h6" stroke={muted ? "#B0B0B0" : "#B6D840"} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SharePassModal: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void; onSend: () => void }> = ({ open, onOpenChange, onSend }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleClose = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    onOpenChange(false);
  };

  const handleSend = () => {
    onSend();
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <div
          data-state={open ? 'open' : 'closed'}
          className="fixed inset-0 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <div className="bg-white w-[calc(100%-2rem)] max-w-sm md:max-w-md border shadow-lg p-8 flex flex-col gap-6">
            <DialogTitle className="text-xl font-black uppercase tracking-wide text-[#343433] font-arquitecta">
              Share Guest Pass
            </DialogTitle>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
                  Phone <span className="text-[#6B6B6B] text-[11px] normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-3">
              <button
                onClick={handleSend}
                className="w-full py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-[#343433] text-white hover:bg-[#1a1a1a] transition-colors"
              >
                Send
              </button>
              <button
                onClick={handleClose}
                className="w-full py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-gray-50 transition-colors"
                style={{ border: '1.5px solid #343433' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
};

const GuestPassCard: React.FC<{ pass: GuestPass; onShareSend: () => void }> = ({ pass, onShareSend }) => {
  const isUsed = pass.status === 'used';
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div
      className={clsx(
        "relative p-6 flex flex-col items-start min-h-[220px] transition-colors duration-200",
        isUsed
          ? "bg-[#F5F5F3] border border-card-stroke"
          : "bg-white hover:bg-[#f7f7f6] cursor-pointer group"
      )}
    >
      {/* Border + flat shadow (available cards only) */}
      {!isUsed && (
        <div aria-hidden="true" className="absolute inset-0 border border-[#e0e0e0] pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)] group-hover:shadow-[6px_6px_0px_0px_rgba(139,129,120,0.32)] transition-shadow duration-200" />
      )}
      <TicketIcon className="w-10 h-10 mb-6" muted={isUsed} />

      <h4 className="text-base font-black uppercase tracking-wider font-arquitecta mb-1">
        Guest Pass
      </h4>

      {isUsed ? (
        <div className="mt-auto px-4 py-2 bg-[#E5E5E3] text-[#6B6B6B] text-sm font-bold uppercase tracking-wider font-arquitecta">
          Used {pass.dateUsed}
        </div>
      ) : (
        <>
          <p className="text-sm text-[#6B6B6B] mb-auto">
            Expires {pass.expires}
          </p>
          <button
            onClick={() => setShareOpen(true)}
            className="relative mt-4 px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-[#f7f7f6] transition-colors z-10"
            style={{ border: '1.5px solid #343433' }}
          >
            Share Pass
          </button>
          <SharePassModal open={shareOpen} onOpenChange={setShareOpen} onSend={onShareSend} />
        </>
      )}
    </div>
  );
};

const TierCard: React.FC<{ tier: MembershipTier }> = ({ tier }) => {
  const isCurrent = tier.isCurrent;

  return (
    <div
      className={clsx(
        "relative flex flex-col p-6",
        isCurrent
          ? "bg-[#343433] text-white"
          : "bg-white border border-card-stroke"
      )}
    >
      {isCurrent && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B6D840]" />
      )}

      <div className="mb-6">
        {isCurrent && (
          <span className="inline-block px-[9px] py-[5px] text-[12px] font-bold uppercase tracking-wider border border-[#B6D840] text-[#B6D840] mb-3 leading-none">
            Your Membership
          </span>
        )}
        <h3 className="text-lg font-black uppercase tracking-wide font-arquitecta">
          {tier.name}
        </h3>
        <div className="mt-2">
          <span className="text-2xl font-bold font-arquitecta">{tier.price}</span>
          <span className={clsx("text-sm ml-1", isCurrent ? "text-gray-400" : "text-[#6B6B6B]")}>
            {tier.priceInterval}
          </span>
        </div>
      </div>

      <div className={clsx("border-t pt-4 mb-6", isCurrent ? "border-gray-600" : "border-card-stroke")}>
        <ul className="space-y-3">
          {tier.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className={clsx("w-4 h-4 mt-0.5 shrink-0", isCurrent ? "text-[#B6D840]" : "text-[#6B6B6B]")} />
              <span className={isCurrent ? "text-gray-200" : "text-[#6B6B6B]"}>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        {isCurrent && tier.expires && (
          <p className="text-sm text-gray-400 mb-3">Expires {tier.expires}</p>
        )}
        {isCurrent ? (
          <button
            className="w-full py-3 text-base font-bold uppercase tracking-wider font-arquitecta transition-colors hover:bg-gray-700"
            style={{ border: '1.5px solid #B6D840' }}
          >
            Renew Membership
          </button>
        ) : (
          <button
            className="w-full py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-[#f7f7f6] transition-colors"
            style={{ border: '1.5px solid #343433' }}
          >
            Upgrade
          </button>
        )}
      </div>
    </div>
  );
};

interface MembershipProps {
  initialSubTab?: SubTab;
}

export const Membership: React.FC<MembershipProps> = ({ initialSubTab = 'overview' }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>(initialSubTab);
  const [passes, setPasses] = useState<GuestPass[]>(guestPasses);

  useEffect(() => {
    setActiveSubTab(initialSubTab);
  }, [initialSubTab]);

  const handleSharePass = (passId: string) => {
    setPasses(prev => prev.map(p =>
      p.id === passId
        ? { ...p, status: 'used' as const, dateUsed: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
        : p
    ));
  };

  return (
    <>
      {/* Mobile Header — grey background extending from header */}
      <div className="md:hidden bg-[#EEEDEC] px-4 pb-0 pt-2">
        <h1 className="text-2xl font-black uppercase tracking-wide mb-4 font-arquitecta">WELCOME, TOM!</h1>
        <div className="border-b-2 border-[#B6D840] inline-block pb-1">
          <span className="font-bold text-gray-900 uppercase tracking-wider font-arquitecta">MEMBERSHIP</span>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Sub-tabs */}
        <div className="flex space-x-2 mb-8">
          {([
            { key: 'overview' as SubTab, label: 'Overview' },
            { key: 'guest-passes' as SubTab, label: 'Guest Passes' },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSubTab(tab.key)}
              className={clsx(
                "px-4 py-2 text-base font-semibold transition-colors",
                activeSubTab === tab.key
                  ? "bg-[#F5F5F3] text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Guest Passes Tab */}
        {activeSubTab === 'guest-passes' && (
          <div>
            {/* Pass Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {passes.map((pass) => (
                <GuestPassCard key={pass.id} pass={pass} onShareSend={() => handleSharePass(pass.id)} />
              ))}
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeSubTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipTiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>
        )}


      </div>
    </>
  );
};
