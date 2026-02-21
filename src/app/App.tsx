import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Visits } from './components/Visits';
import { Membership } from './components/Membership';
import { Profile } from './components/Profile';
import clsx from 'clsx';
import { LogoutModal } from './components/LogoutModal';

type View = 'dashboard' | 'visits' | 'membership' | 'profile';

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [hoveredView, setHoveredView] = useState<View | null>(null);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [membershipSubTab, setMembershipSubTab] = useState<'overview' | 'guest-passes'>('overview');

  const handleNavigate = (view: string, subTab?: string) => {
    setCurrentView(view as View);
    if (view === 'membership' && subTab) {
      setMembershipSubTab(subTab as 'overview' | 'guest-passes');
    }
  };

  const navRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Record<View, HTMLButtonElement | null>>({ dashboard: null, membership: null, visits: null, profile: null });
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const target = hoveredView || currentView;
    const el = tabRefs.current[target];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({ left: elRect.left - navRect.left, width: elRect.width });
    }
  }, [hoveredView, currentView]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  return (
    <div className="min-h-screen font-opensans text-charcoal" style={{ background: 'linear-gradient(to right, #F3F2F0 50%, #ffffff 50%)' }}>
      <Header currentView={currentView} onNavigate={handleNavigate} />

      <div className="max-w-[1400px] mx-auto md:flex min-h-screen bg-white">
        <Sidebar />

        <main className="flex-1 min-h-screen transition-all duration-300">
        {/* Desktop Top Navigation */}
        <div className="hidden md:flex justify-between items-end mx-8 pt-6 bg-white sticky top-0 z-40 border-b border-card-stroke">
          <nav ref={navRef} className="relative flex space-x-8" onMouseLeave={() => setHoveredView(null)}>
            {(['dashboard', 'membership', 'visits', 'profile'] as View[]).map((view) => (
              <button
                key={view}
                ref={(el) => { tabRefs.current[view] = el; }}
                onClick={() => setCurrentView(view)}
                onMouseEnter={() => setHoveredView(view)}
                className={clsx(
                  "text-base font-bold uppercase tracking-wider transition-colors duration-200 pb-3 font-arquitecta",
                  (hoveredView === view || (!hoveredView && currentView === view))
                    ? "text-charcoal"
                    : "text-muted-text"
                )}
              >
                {view === 'dashboard' ? 'Dashboard' : view === 'membership' ? 'Membership' : view === 'visits' ? 'Visits' : 'Profile'}
              </button>
            ))}
            <div
              className="absolute bottom-0 h-[2px] bg-accent-green transition-all duration-300 ease-in-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </nav>

          <button onClick={() => setLogoutOpen(true)} className="text-base font-bold uppercase tracking-wider text-muted-text hover:text-charcoal font-arquitecta pb-3">
            Log Out
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white">
          {currentView === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
          {currentView === 'visits' && <Visits />}
          {currentView === 'membership' && <Membership initialSubTab={membershipSubTab} />}
          {currentView === 'profile' && <Profile />}
        </div>
        </main>
      </div>

      <LogoutModal open={logoutOpen} onOpenChange={setLogoutOpen} />
    </div>
  );
}
