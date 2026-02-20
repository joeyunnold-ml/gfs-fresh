import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { LogoutModal } from './LogoutModal';

const accountButtonClass =
  'flex items-center gap-2 text-base font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors min-h-[44px]';

export const AccountDropdown: React.FC = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const userName = 'tomwhite@gmail.com';

  const handleChangePassword = () => {
    // Navigate to change password page
    // For now, just log it
    console.log('Change password clicked');
  };

  const handleLogout = () => {
    setLogoutOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    // Optionally redirect to home or login page
    window.location.href = '/';
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={accountButtonClass}>
              Account
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white border border-border-light shadow-lg rounded-none">
          <DropdownMenuLabel className="text-base font-normal text-charcoal px-3 py-2">
            {userName}
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={handleChangePassword}
            className="text-base font-semibold text-charcoal underline hover:text-accent-green transition-colors cursor-pointer px-3 py-2 min-h-[44px] rounded-none"
          >
            Change Password
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className="text-base font-semibold text-charcoal underline hover:text-accent-green transition-colors cursor-pointer px-3 py-2 min-h-[44px] rounded-none"
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        <span className="h-4 w-px bg-border-light shrink-0" aria-hidden />
        <Link
          to="/current-member"
          className={accountButtonClass}
        >
          GFS Portal
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <LogoutModal
        open={logoutOpen}
        onOpenChange={setLogoutOpen}
        onConfirm={confirmLogout}
      />
    </>
  );
};
