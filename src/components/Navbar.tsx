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
    { name: 'Dashboard', href: '/dashboard', icon: User, premium: true },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-secondary/20 bg-background/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <Sparkles className="h-5 w-5 text-background" />
              </div>
              <span className="text-lg font-semibold text-primary">CareerLens</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium transition-all ${
                      isActive(item.href)
                        ? 'bg-primary text-background shadow-md'
                        : 'text-primary hover:bg-secondary/20'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                    {item.premium && <Crown className="w-3 h-3 ml-1 text-yellow-500" />}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center p-2 rounded-lg text-primary hover:bg-secondary/20 transition"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-24" />

      {/* Overlay + Blur Background */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-background shadow-xl border-l border-secondary/20 transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-secondary/20">
          <span className="text-lg font-semibold text-primary">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? 'bg-primary text-background shadow-md'
                    : 'text-primary hover:bg-secondary/20'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.name}
                {item.premium && <Crown className="w-3 h-3 ml-auto text-yellow-500" />}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
