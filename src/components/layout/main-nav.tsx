'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    { href: '/', label: 'Dashboard' },
    { href: '/discover', label: 'Discover' },
  ];

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'transition-colors hover:text-primary relative',
            pathname === route.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {route.label}
          {pathname === route.href && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-in fade-in duration-300"></span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
