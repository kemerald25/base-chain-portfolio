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
            'transition-colors hover:text-primary',
            pathname === route.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
