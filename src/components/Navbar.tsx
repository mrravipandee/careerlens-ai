// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Home, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Info, 
  Mail, 
  User,
  Crown,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Resume Analyzer', href: '/resume-analyzer', icon: FileText },
    { name: 'Career Coach', href: '/career-coach', icon: GraduationCap },
    { name: 'Job Match', href: '/job-match', icon: Briefcase },
    // { name: 'About', href: '/about', icon: Info },
    // { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Dashboard', href: '/dashboard', icon: User, premium: true },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-secondary/20 bg-background/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <Sparkles className="h-5 w-5 text-background" />
                </div>
                <span className="text-lg font-semibold text-primary">
                  CareerLens
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary text-background shadow-sm'
                        : 'text-primary hover:bg-secondary/20 hover:text-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                    {item.premium && (
                      <Crown className="w-3 h-3 ml-1 text-yellow-500" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="mt-4 md:hidden border-t border-secondary/20 pt-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-primary text-background shadow-sm'
                          : 'text-primary hover:bg-secondary/20 hover:text-primary'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                      {item.premium && (
                        <Crown className="w-3 h-3 ml-auto text-yellow-500" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-24" />
    </>
  );
};

export default Navbar;