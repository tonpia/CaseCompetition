'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    { href: '/challenges', label: 'All Challenges', icon: '🎯' },
    { href: '/challenges/active', label: 'Active Cases', icon: '⚡' },
    { href: '/challenges/completed', label: 'Completed', icon: '✅' },
    { href: '/challenges/saved', label: 'Saved', icon: '🔖' },
  ];

  return (
    <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                pathname === link.href
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800'
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 