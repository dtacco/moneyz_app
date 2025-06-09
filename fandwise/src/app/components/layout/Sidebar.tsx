'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // To highlight active link

// Define navigation items here for clarity
const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Transactions', href: '/transactions' },
  { name: 'Accounts', href: '/accounts' },
  { name: 'Investments', href: '/investments' },
  { name: 'Categories', href: '/categories' },
  { name: 'Recurrings', href: '/recurrings' },
  { name: 'Income', href: '/income' },
];

export default function Sidebar() {
  const pathname = usePathname(); // Get current path

  return (
    <aside className="w-60 bg-neutral-800 text-neutral-100 flex flex-col">
      <div className="p-6 border-b border-neutral-700">
        <h2 className="text-2xl font-semibold text-white">Fandwise</h2>
      </div>
      <nav className="flex-grow p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-3 py-2.5 rounded-md text-sm font-medium
                transition-colors duration-150 ease-in-out
                ${
                  isActive
                    ? 'bg-primary-dark text-white'
                    : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }
              `}
            >
              {/* Placeholder for icons - could add them here later */}
              {/* <span className="mr-3">ICON</span> */}
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-neutral-700">
        {/* Placeholder for user profile or settings link */}
        <p className="text-xs text-neutral-400">© 2024 Fandwise</p>
      </div>
    </aside>
  );
}
