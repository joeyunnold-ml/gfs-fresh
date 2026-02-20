import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { LogoutModal } from './LogoutModal';

export const AccountDropdown: React.FC = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const userName = localStorage.getItem('userName') || 'John Henderson';

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 text-base font-bold tracking-wider text-charcoal uppercase font-arquitecta hover:text-muted-text transition-colors min-h-[44px]">
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

      <LogoutModal
        open={logoutOpen}
        onOpenChange={setLogoutOpen}
        onConfirm={confirmLogout}
      />
    </>
  );
};
