import React from 'react';
import { Member } from '../types';
import {
  Dialog,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from './ui/dialog';

interface MemberDetailModalProps {
  member: Member;
  isPrimary: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QrCodeLarge: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 29 29" fill="none">
    <rect x="1" y="1" width="10" height="10" stroke="#343433" strokeWidth="1.5" />
    <rect x="3.5" y="3.5" width="5" height="5" fill="#343433" />
    <rect x="17" y="1" width="10" height="10" stroke="#343433" strokeWidth="1.5" />
    <rect x="19.5" y="3.5" width="5" height="5" fill="#343433" />
    <rect x="1" y="17" width="10" height="10" stroke="#343433" strokeWidth="1.5" />
    <rect x="3.5" y="19.5" width="5" height="5" fill="#343433" />
    <rect x="13" y="1" width="2" height="2" fill="#343433" />
    <rect x="13" y="5" width="2" height="2" fill="#343433" />
    <rect x="13" y="13" width="2" height="2" fill="#343433" />
    <rect x="17" y="13" width="2" height="2" fill="#343433" />
    <rect x="13" y="17" width="2" height="2" fill="#343433" />
    <rect x="17" y="17" width="2" height="2" fill="#343433" />
    <rect x="21" y="17" width="2" height="2" fill="#343433" />
    <rect x="25" y="17" width="2" height="2" fill="#343433" />
    <rect x="17" y="21" width="2" height="2" fill="#343433" />
    <rect x="21" y="21" width="2" height="2" fill="#343433" />
    <rect x="25" y="21" width="2" height="2" fill="#343433" />
    <rect x="17" y="25" width="2" height="2" fill="#343433" />
    <rect x="21" y="25" width="2" height="2" fill="#343433" />
    <rect x="25" y="25" width="2" height="2" fill="#343433" />
    <rect x="13" y="21" width="2" height="2" fill="#343433" />
    <rect x="13" y="25" width="2" height="2" fill="#343433" />
    <rect x="1" y="13" width="2" height="2" fill="#343433" />
    <rect x="5" y="13" width="2" height="2" fill="#343433" />
    <rect x="9" y="13" width="2" height="2" fill="#343433" />
  </svg>
);

export const MemberDetailModal: React.FC<MemberDetailModalProps> = ({
  member,
  isPrimary,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <div
          data-state={open ? 'open' : 'closed'}
          className="fixed inset-0 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <div className="bg-white w-screen h-screen md:w-auto md:h-auto md:max-w-2xl md:min-w-[36rem] md:border md:shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-6 pb-0">
              <div className="flex flex-col gap-1">
                {isPrimary && (
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-normal text-black">{member.type}</span>
                    {member.status === 'ACTIVE' && (
                      <span className="px-[9px] py-[5px] text-[12px] font-bold text-black uppercase tracking-wider border border-[#c5d63d] rounded-none leading-none">
                        Active
                      </span>
                    )}
                  </div>
                )}
                <DialogTitle className="text-xl font-bold text-[#343433]">
                  {member.name}
                </DialogTitle>
              </div>
            </div>

            {/* QR Code - centered */}
            <div className="flex-1 flex items-center justify-center px-6 py-8 md:py-10">
              <QrCodeLarge className="w-[200px] h-[200px] md:w-[180px] md:h-[180px]" />
            </div>

            {/* Member Details */}
            <div className="px-6 space-y-1">
              {isPrimary && (
                <>
                  <p className="text-[14px] text-[#6b6b6b]">Member Since {member.memberSince}</p>
                  <p className="text-[14px]">
                    <span className="text-[#6b6b6b]">Expires </span>
                    <span className="text-[#1a1a1a]">{member.expires}</span>
                  </p>
                </>
              )}
              <p className="text-[14px] text-[#6b6b6b]">ID: {member.displayId}</p>
            </div>

            {/* Done Button */}
            <div className="p-6">
              <DialogClose asChild>
                <button className="w-full py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-[#343433] text-white hover:bg-[#1a1a1a] transition-colors">
                  Done
                </button>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
};
