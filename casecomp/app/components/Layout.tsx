'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isMenuOpen={isMobileMenuOpen}
      />
      
      <div className="flex pt-16">
        {/* Sidebar - Only show on non-home pages */}
        {!isHomePage && (
          <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <Sidebar />
          </div>
        )}
        
        {/* Main Content - Adjust width based on sidebar visibility */}
        <main className={`flex-1 p-4 md:p-8 ${!isHomePage ? 'md:ml-64' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
} 