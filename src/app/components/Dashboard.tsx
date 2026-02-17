import React from 'react';
import { assets, bookedVisits, memberMornings, currentUser, members } from '../mockData';
import { ActionCard } from './ActionCard';
import { MemberCard } from './MemberCard';
import { ArrowUpRight, CloudSun } from 'lucide-react';

interface DashboardProps {
  onNavigate?: (view: string, subTab?: string) => void;
}

// Force update: Removed slick-carousel and use native CSS scroll
export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <>
    {/* Mobile: Grey background extending from header through to mid-hero */}
    <div className="md:hidden bg-[#EEEDEC] px-4 pb-4 pt-2">
      <h1 className="text-2xl font-black uppercase tracking-wide mb-4 font-arquitecta">WELCOME, {currentUser.name}!</h1>
      {/* Renewal Banner */}
      <div className="bg-[#E0E0E0] p-4 mt-4 mb-4 relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 9.09H20.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">Your membership ends on May 5th.</p>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              Renew your membership soon to continue visiting, reserving, and enjoying member perks.
            </p>
            <button className="text-sm font-semibold flex items-center gap-1 hover:underline">
              Renew Now <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Member Slider (Native Scroll) */}
      <div className="-mx-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory flex gap-4 no-scrollbar">
        {members.map((member, i) => (
          <div key={member.id} className="min-w-[90%] snap-center shrink-0">
            <MemberCard member={member} isPrimary={i === 0} className="h-full" />
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Hero — straddles grey/white boundary using pseudo-element for top half background */}
    <div className="md:hidden relative">
      {/* Grey top-half background behind the image */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#EEEDEC]"></div>
      <div className="relative px-4 pb-4">
        <div className="relative overflow-hidden group cursor-pointer h-64">
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(45deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0) 100%)' }} />
          <img
            src={assets.heroBanner}
            alt="Spring Member Preview Weekend"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 p-6 z-20 text-white max-w-2xl pointer-events-none">
            <p className="text-[#B6D840] font-medium tracking-wider text-base mb-2 uppercase font-arquitecta">Spring Member Preview Weekend</p>
            <h2 className="text-2xl font-black leading-tight mb-4 font-arquitecta">
              SEE NEW INSTALLATIONS BEFORE THEY OPEN TO THE PUBLIC
            </h2>
            <div className="flex items-center gap-2 text-base font-normal hover:text-[#B6D840] transition-colors pointer-events-auto font-arquitecta uppercase">
              RESERVE YOUR SPOT <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Desktop-only Hero Banner */}
      <div className="hidden md:block relative overflow-hidden mb-8 group cursor-pointer md:h-80">
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(45deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0) 100%)' }} />
        <img 
          src={assets.heroBanner} 
          alt="Spring Member Preview Weekend" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 text-white max-w-2xl pointer-events-none">
          <p className="text-[#B6D840] font-medium tracking-wider text-base mb-2 uppercase font-arquitecta">Spring Member Preview Weekend</p>
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 font-arquitecta">
            SEE NEW INSTALLATIONS BEFORE THEY OPEN TO THE PUBLIC
          </h2>
          <div className="flex items-center gap-2 text-base font-normal hover:text-[#B6D840] transition-colors pointer-events-auto font-arquitecta uppercase">
            RESERVE YOUR SPOT <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Flex wrapper: cards grid (left) + booked visits sidebar (right at 1400px+) */}
      <div className="flex flex-col min-[1400px]:flex-row gap-6">
        {/* Left side: action cards grid */}
        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          <ActionCard
            title="Guest Passes"
            count="1 of 2 remaining"
            className="min-h-[180px]"
            onClick={() => onNavigate?.('membership', 'guest-passes')}
          />
          <ActionCard
            title="Get Tickets"
            className="min-h-[180px]"
          />
          <ActionCard
            title="Manage Your Membership"
            className="min-h-[180px]"
            onClick={() => onNavigate?.('membership', 'overview')}
          />

          <div className="bg-[#f4f4f4] p-6 flex flex-col justify-between min-h-[180px] relative">
            <div>
              <h3 className="text-base font-black text-gray-900 uppercase tracking-wide mb-4 font-arquitecta">Weather at GFS</h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold font-arquitecta">87°</span>
                <span className="text-xl text-gray-500 font-normal font-arquitecta">F</span>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <CloudSun className="w-12 h-12 text-gray-800 stroke-1" />
            </div>
          </div>

          <div className="md:col-span-2 bg-white hover:bg-[#f7f7f6] border border-card-stroke p-6 flex justify-between items-center cursor-pointer transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]">
            <h3 className="text-lg font-black text-gray-900 uppercase font-arquitecta">OPEN INTERACTIVE MAP</h3>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Right side: Booked Visits — hidden on mobile, below cards at md, sidebar at 1400px+ */}
        <div className="hidden md:block min-[1400px]:w-[300px] min-[1400px]:shrink-0">
          <div className="border border-card-stroke p-6">
            <h3 className="text-lg font-black uppercase mb-6 font-arquitecta">Booked Visits</h3>
            <div className="space-y-6">
              {bookedVisits.map((visit, i) => (
                <div key={i} className="pb-6 border-b border-card-stroke last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <a href="#" className="text-base md:text-[20px] font-bold text-gray-900 font-arquitecta hover:underline cursor-pointer">{visit.title}</a>
                    <div className="text-right">
                      <div className="text-sm text-[#343433]">{visit.date}</div>
                      <div className="text-sm text-[#6B6B6B]">{visit.time}</div>
                    </div>
                  </div>
                  {visit.info && (
                    <div className="bg-[#f4f4f4] p-3 mt-3 text-sm text-gray-600 leading-relaxed flex gap-2">
                      <span className="mt-0.5">ⓘ</span>
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
                     <a href="#" className="text-base md:text-[20px] font-bold text-gray-900 font-arquitecta hover:underline cursor-pointer">{event.title}</a>
                     <p className="text-sm text-[#7F746C] italic mt-1">{event.tag}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#343433]">{event.date}</div>
                    <div className="text-sm text-[#6B6B6B]">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <a className="text-base font-semibold flex items-center gap-1 cursor-pointer hover:underline font-arquitecta">
              See All Visits <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
