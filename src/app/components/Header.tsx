import React, { useState } from 'react';
import { Logo } from './Logo';
import { XIcon } from 'lucide-react';

import { LogoutModal } from './LogoutModal';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
} from './ui/dialog';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <header className="bg-[#EEEDEC] md:hidden flex justify-between items-center px-4 py-4">
      <Logo className="h-10 w-auto text-[#B6D840]" />
      <button onClick={() => setIsOpen(true)} className="p-2 text-[#343433]">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogPortal>
          <DialogOverlay />
          <div
            data-state={isOpen ? 'open' : 'closed'}
            className="fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          >
            <div className="bg-[#F5F5F3] w-screen h-screen flex flex-col">
              {/* Top bar: logo + close */}
              <div className="flex justify-between items-center px-4 py-4">
                <Logo className="h-10 w-auto text-[#B6D840]" />
                <button onClick={() => setIsOpen(false)} className="p-2 text-[#343433] hover:opacity-70 transition-opacity">
                  <XIcon className="w-7 h-7" strokeWidth={2.5} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col px-6 pt-8 space-y-6">
                <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-black text-[#343433] font-arquitecta uppercase tracking-wide flex items-center gap-3">
                  <span className="w-[3px] h-6 bg-[#B6D840]" />
                  Dashboard
                </a>
                <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-black text-[#6B6B6B] font-arquitecta uppercase tracking-wide pl-[15px]">Membership</a>
                <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-black text-[#6B6B6B] font-arquitecta uppercase tracking-wide pl-[15px]">Visits</a>
                <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-black text-[#6B6B6B] font-arquitecta uppercase tracking-wide pl-[15px]">Profile</a>
              </nav>

              {/* Log Out pinned to bottom */}
              <div className="mt-auto px-6 pb-8">
                <hr className="border-[#e0e0e0] mb-6" />
                <button
                  onClick={() => { setLogoutOpen(true); setIsOpen(false); }}
                  className="text-xl font-bold text-[#6B6B6B] font-arquitecta uppercase tracking-wide text-left"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </DialogPortal>
      </Dialog>

      <LogoutModal open={logoutOpen} onOpenChange={setLogoutOpen} />
    </header>
  );
};
