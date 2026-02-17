import React from 'react';
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from './ui/dialog';

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <div
          data-state={open ? 'open' : 'closed'}
          className="fixed inset-0 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <div className="bg-white w-[calc(100%-2rem)] max-w-sm md:max-w-md border shadow-lg p-8 flex flex-col items-center gap-6">
            <DialogTitle className="text-xl font-black uppercase tracking-wide text-[#343433] font-arquitecta">
              Log out?
            </DialogTitle>
            <div className="flex flex-col w-full gap-3">
              <button
                onClick={() => {
                  onOpenChange(false);
                }}
                className="w-full py-3 text-base font-bold uppercase tracking-wider bg-[#343433] text-white hover:bg-[#1a1a1a] transition-colors font-arquitecta"
              >
                Yes, Log Out
              </button>
              <button
                onClick={() => onOpenChange(false)}
                className="w-full py-3 text-base font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors font-arquitecta"
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
