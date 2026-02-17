import React, { useState } from 'react';
import { Member } from '../types';
import clsx from 'clsx';
import { MemberDetailModal } from './MemberDetailModal';

interface MemberCardProps {
  member: Member;
  isPrimary?: boolean;
  className?: string;
}

// QR Code SVG icon matching the Figma comp (~29px)
const QrCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
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

export const MemberCard: React.FC<MemberCardProps> = ({ member, isPrimary = false, className }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className={clsx(
          "bg-white hover:bg-[#f7f7f6] relative flex flex-col items-start p-[17px] cursor-pointer transition-colors duration-200 group",
          isPrimary ? "gap-[22px]" : "h-[110px] justify-between",
          className
        )}
      >
        {/* Border + offset shadow matching Figma */}
        <div aria-hidden="true" className="absolute inset-0 border border-[#e0e0e0] pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)] group-hover:shadow-[6px_6px_0px_0px_rgba(139,129,120,0.32)] transition-shadow duration-200" />

        {/* Top section */}
        <div className="flex flex-col gap-[6px] w-full relative">
          {/* Type + Active badge row — only on primary card */}
          {isPrimary && (
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-normal text-black">{member.type}</span>
              {member.status === 'ACTIVE' && (
                <span className="px-[9px] py-[5px] text-[12px] font-bold text-black uppercase tracking-wider border border-[#c5d63d] rounded-none leading-none">
                  Active
                </span>
              )}
            </div>
          )}
          {/* Name */}
          <h3 className="text-[18px] font-bold text-[#343433]">{member.name}</h3>
        </div>

        {/* Bottom section */}
        <div className="flex items-end justify-between w-full relative">
          {isPrimary ? (
            <div className="flex flex-col gap-[2px] text-[14px] font-normal">
              <p className="text-[#6b6b6b]">Member Since {member.memberSince}</p>
              <p>
                <span className="text-[#6b6b6b]">Expires </span>
                <span className="text-[#1a1a1a]">{member.expires}</span>
              </p>
              <p className="text-[14px] text-[#6b6b6b] mt-1">ID: {member.displayId}</p>
            </div>
          ) : (
            <p className="text-[14px] font-normal text-[#6b6b6b]">
              ID: {member.displayId}
            </p>
          )}
          <QrCodeIcon className="w-[29px] h-[29px] shrink-0" />
        </div>
      </div>

      <MemberDetailModal
        member={member}
        isPrimary={isPrimary}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};
