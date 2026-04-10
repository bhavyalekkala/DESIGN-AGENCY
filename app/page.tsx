"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Image from 'next/image';

// Import your components using ./ since they are in the same 'app' folder
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle body class for dark mode global styles
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen font-sans antialiased ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-900 transition-colors duration-500">
        
        {/* Navigation Bar */}
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center">
              <Image 
                src="/WEBOIN-BANNER.webp" 
                alt="Weboin Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions (Dark Mode + Mobile Toggle) */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button 
                className="md:hidden p-2 text-slate-900 dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-slate-900 dark:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Main Content Areas */}
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center transition-colors duration-500">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Weboin. All rights reserved.
          </p>        </footer>

      </div>
    </div>
  );
}