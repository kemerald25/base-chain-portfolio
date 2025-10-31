import React from 'react';
import Link from 'next/link';
import { Wallet, Bot } from 'lucide-react';
import MainNav from '@/components/layout/main-nav';
import WalletButton from '@/components/wallet-button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Base Chain Portfolio
            </span>
          </Link>
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <WalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
