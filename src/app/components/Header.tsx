import React, { useState } from 'react';
import clsx from 'clsx';
import { Logo } from './Logo';
import { XIcon } from 'lucide-react';

import { LogoutModal } from './LogoutModal';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
} from './ui/dialog';

interface HeaderProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView = 'dashboard', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <header className="bg-shell md:hidden flex justify-between items-center px-4 py-4">
      <Logo className="h-10 w-auto text-accent-green" />
      <button onClick={() => setIsOpen(true)} className="p-2 text-charcoal">
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
            <div className="bg-mist w-screen h-screen flex flex-col">
              {/* Top bar: logo + close */}
              <div className="flex justify-between items-center px-4 py-4">
                <Logo className="h-10 w-auto text-accent-green" />
                <button onClick={() => setIsOpen(false)} className="p-2 text-charcoal hover:opacity-70 transition-opacity">
                  <XIcon className="w-7 h-7" strokeWidth={2.5} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col px-6 pt-8 space-y-6">
                {(['dashboard', 'membership', 'visits', 'profile'] as const).map((view) => {
                  const isActive = currentView === view;
                  return (
                    <button
                      key={view}
                      onClick={() => { onNavigate?.(view); setIsOpen(false); }}
                      className={clsx(
                        'text-2xl font-black font-arquitecta uppercase tracking-wide text-left flex items-center gap-3',
                        isActive ? 'text-charcoal' : 'text-muted-text pl-4'
                      )}
                    >
                      {isActive && <span className="w-[3px] h-6 bg-accent-green shrink-0" />}
                      {view.charAt(0).toUpperCase() + view.slice(1)}
                    </button>
                  );
                })}
              </nav>

              {/* Log Out pinned to bottom */}
              <div className="mt-auto px-6 pb-8">
                <hr className="border-border-light mb-6" />
                <button
                  onClick={() => { setLogoutOpen(true); setIsOpen(false); }}
                  className="text-xl font-bold text-muted-text font-arquitecta uppercase tracking-wide text-left"
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
