import React from 'react';
import { assets, bookedVisits, memberMornings, currentUser, members } from '../mockData';
import { ActionCard } from './ActionCard';
import { MemberCard } from './MemberCard';
import { ExpiringSoonCard } from './ExpiringSoonCard';
import { isExpiringWithinDays } from '../utils/expiringSoon';
import { NonMemberPromoCard } from './NonMemberPromoCard';
import { RecentlyExpiredAlertCard } from './RecentlyExpiredAlertCard';
import { RecentlyExpiredMemberCard } from './RecentlyExpiredMemberCard';
import { ArrowUpRight, CloudSun, Info } from 'lucide-react';

interface DashboardProps {
  onNavigate?: (view: string, subTab?: string) => void;
  /** When 'expiring-soon' or 'recently-expired', mobile member slider shows only Jane Jones. When 'non-member', mobile shows promo card only. */
  sidebarVariant?: 'default' | 'expiring-soon' | 'recently-expired' | 'non-member';
}

// Force update: Removed slick-carousel and use native CSS scroll
export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, sidebarVariant = 'default' }) => {
  const primaryMember = members[0];
  const showExpiringSoon = primaryMember && isExpiringWithinDays(primaryMember.expires, 90);
  const isSingleMemberView = sidebarVariant === 'expiring-soon' || sidebarVariant === 'recently-expired';
  const isNonMemberView = sidebarVariant === 'non-member';
  const membersForSlider = isSingleMemberView
    ? [{ ...members[0], name: 'Jane Jones' }]
    : isNonMemberView
      ? []
      : members;

  return (
    <>
    {/* Mobile: Grey background extending from header through to mid-hero */}
    <div className="md:hidden bg-shell px-4 pb-4 pt-2">
      <h1 className="text-2xl font-black uppercase tracking-wide mb-4 font-arquitecta">WELCOME, {isNonMemberView ? 'SUSAN' : sidebarVariant === 'recently-expired' ? 'LISA' : currentUser.name}!</h1>

      {showExpiringSoon && sidebarVariant === 'expiring-soon' && (
        <ExpiringSoonCard
          expires={primaryMember.expires}
          onRenew={() => onNavigate?.('membership', 'overview')}
          className="mt-0 mb-4"
        />
      )}

      {/* Mobile: recently-expired shows the two expired cards; expiring-soon/default show member slider; non-member shows nothing here */}
      {sidebarVariant === 'recently-expired' ? (
        <div className="space-y-4 mb-4">
          <RecentlyExpiredAlertCard onRenew={() => onNavigate?.('membership', 'overview')} />
          <RecentlyExpiredMemberCard
            memberName="Lisa Bloomfield"
            memberType="Individual Plus Member"
            memberSince="2002"
            expiredDate="June 1, 2026"
            displayId="29834928_1"
            onRenew={() => onNavigate?.('membership', 'overview')}
          />
        </div>
      ) : !isNonMemberView ? (
      <div className="-mx-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory flex gap-4 no-scrollbar">
        {membersForSlider.map((member, i) => (
          <div
            key={member.id}
            className={sidebarVariant === 'expiring-soon' ? 'min-w-full snap-center shrink-0' : 'min-w-[90%] snap-center shrink-0'}
          >
            <MemberCard member={member} isPrimary={i === 0} className="h-full" />
          </div>
        ))}
      </div>
      ) : null}
    </div>

    {/* Mobile Hero — straddles grey/white boundary using pseudo-element for top half background */}
    <div className="md:hidden relative">
      {/* Grey top-half background behind the image */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-shell"></div>
      <div className="relative px-4 pb-4">
        <div className="relative overflow-hidden group cursor-pointer h-64">
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(45deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0) 100%)' }} />
          <img
            src={assets.heroBanner}
            alt="Spring Member Preview Weekend"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 p-6 z-20 text-white max-w-2xl pointer-events-none">
            {sidebarVariant !== 'recently-expired' && sidebarVariant !== 'non-member' && (
              <p className="text-accent-green font-medium tracking-wider text-base mb-2 uppercase font-arquitecta">Spring Member Preview Weekend</p>
            )}
            <h2 className="text-2xl font-black leading-tight mb-4 font-arquitecta">
              {sidebarVariant === 'recently-expired'
                ? 'RENEW AND ENJOY MORE ACCESS AND ADVENTURES AT GFS!'
                : sidebarVariant === 'non-member'
                  ? 'BECOME A MEMBER AND ENJOY MORE ACCESS AND ADVENTURES AT GFS!'
                  : 'SEE NEW INSTALLATIONS BEFORE THEY OPEN TO THE PUBLIC'}
            </h2>
            <div className="flex items-center gap-2 text-base font-normal hover:text-accent-green transition-colors pointer-events-auto font-arquitecta uppercase">
              {sidebarVariant === 'recently-expired'
                ? 'Renew your membership'
                : sidebarVariant === 'non-member'
                  ? 'Learn more about membership'
                  : 'RESERVE YOUR SPOT'}{' '}
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Desktop: Expiring Soon card lives in the left rail (Sidebar) above member cards */}

      {/* Desktop-only Hero Banner */}
      <div className="hidden md:block relative overflow-hidden mb-8 group cursor-pointer md:h-80">
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(45deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0) 100%)' }} />
        <img
          src={assets.heroBanner}
          alt="Spring Member Preview Weekend"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 text-white max-w-2xl pointer-events-none">
          {sidebarVariant !== 'recently-expired' && sidebarVariant !== 'non-member' && (
            <p className="text-accent-green font-medium tracking-wider text-base mb-2 uppercase font-arquitecta">Spring Member Preview Weekend</p>
          )}
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 font-arquitecta">
            {sidebarVariant === 'recently-expired'
              ? 'RENEW AND ENJOY MORE ACCESS AND ADVENTURES AT GFS!'
              : sidebarVariant === 'non-member'
                ? 'BECOME A MEMBER AND ENJOY MORE ACCESS AND ADVENTURES AT GFS!'
                : 'SEE NEW INSTALLATIONS BEFORE THEY OPEN TO THE PUBLIC'}
          </h2>
          <div className="flex items-center gap-2 text-base font-normal hover:text-accent-green transition-colors pointer-events-auto font-arquitecta uppercase">
            {sidebarVariant === 'recently-expired'
              ? 'Renew your membership'
              : sidebarVariant === 'non-member'
                ? 'Learn more about membership'
                : 'RESERVE YOUR SPOT'}{' '}
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Flex wrapper: cards grid (left) + booked visits sidebar (right at 1400px+) */}
      <div className="flex flex-col min-[1400px]:flex-row gap-6">
        {/* Left side: action cards grid */}
        <div className="flex-1 min-w-0 grid grid-cols-2 gap-4 md:gap-6 auto-rows-min">
          {sidebarVariant === 'non-member' ? (
            <ActionCard
              title="Open Interactive Map"
              className="order-1 min-h-[140px] md:min-h-[180px]"
            />
          ) : (
          <ActionCard
            title="Guest Passes"
            count={sidebarVariant === 'recently-expired' ? 'Renew membership for new guest passes' : '1 of 2 remaining'}
            className="order-1 min-h-[140px] md:min-h-[180px]"
            onClick={sidebarVariant === 'recently-expired' ? undefined : () => onNavigate?.('membership', 'guest-passes')}
            disabled={sidebarVariant === 'recently-expired'}
            hideArrow={sidebarVariant === 'recently-expired'}
          />
          )}
          <ActionCard
            title="Get Tickets"
            className="order-2 min-h-[140px] md:min-h-[180px]"
          />
          <ActionCard
            title="Manage Your Membership"
            className="order-3 min-h-[140px] md:min-h-[180px]"
            onClick={() => onNavigate?.('membership', 'overview')}
          />

          <div
            className={
              isNonMemberView
                ? 'order-4 col-span-1 min-h-[140px] md:min-h-[180px] bg-canvas p-6 flex flex-col justify-between relative md:col-span-1'
                : 'order-5 md:order-4 bg-canvas p-6 flex flex-col justify-between min-h-[180px] relative col-span-2 md:col-span-1'
            }
          >
            <div>
              <h3 className="text-base font-black text-charcoal uppercase tracking-wide mb-4 font-arquitecta">Weather at GFS</h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold font-arquitecta">87°</span>
                <span className="text-xl text-stone font-normal font-arquitecta">F</span>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <CloudSun className="w-12 h-12 text-charcoal stroke-1" />
            </div>
          </div>

          {sidebarVariant !== 'non-member' && (
          <div className="order-4 md:order-5 md:col-span-2">
            <ActionCard
              title="Open Interactive Map"
              className="min-h-[140px] md:min-h-[90px] md:max-h-[90px]"
            />
          </div>
          )}
        </div>

        {/* Right side: Booked Visits — below cards on mobile/md, sidebar at 1400px+ */}
        <div className="min-[1400px]:w-[300px] min-[1400px]:shrink-0">
          <div className="border border-card-stroke p-6">
            <h3 className="text-lg font-black uppercase mb-6 font-arquitecta">Booked Visits</h3>
            {sidebarVariant === 'recently-expired' || sidebarVariant === 'non-member' ? (
              <div className="bg-canvas p-3 text-base text-muted-text leading-relaxed">
                No visits booked
              </div>
            ) : (
            <>
            <div className="space-y-6">
              {bookedVisits.map((visit, i) => (
                <div key={i} className="pb-6 border-b border-card-stroke last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <a href="#" className="text-xl font-bold text-charcoal font-arquitecta hover:underline cursor-pointer">{visit.title}</a>
                    <div className="text-right">
                      <div className="text-base text-charcoal">{visit.date}</div>
                      <div className="text-base text-muted-text">{visit.time}</div>
                    </div>
                  </div>
                  {visit.info && (
                    <div className="bg-canvas p-3 mt-3 text-base text-muted-text leading-relaxed flex gap-2">
                      <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-text" />
                      {visit.info}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-card-stroke mt-6 pt-6 space-y-6">
              {memberMornings.map((event, i) => (
                <div key={i} className="pb-4 border-b border-card-stroke last:border-0 last:pb-0 flex justify-between items-start">
                  <div>
                     <a href="#" className="text-xl font-bold text-charcoal font-arquitecta hover:underline cursor-pointer">{event.title}</a>
                     <p className="text-base text-warm-muted italic mt-1">{event.tag}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-base text-charcoal">{event.date}</div>
                    <div className="text-base text-muted-text">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
            </>
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <a className="inline-flex items-center min-h-[44px] py-2 gap-1 text-base font-semibold cursor-pointer hover:underline font-arquitecta">
              See All Visits <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile non-member only: promo card at very bottom, below Booked Visits */}
    {isNonMemberView && (
      <div className="md:hidden px-4 pb-6">
        <NonMemberPromoCard onLearnMore={() => onNavigate?.('membership', 'overview')} />
      </div>
    )}
    </>
  );
};
