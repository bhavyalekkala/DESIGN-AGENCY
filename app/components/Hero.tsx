import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Trigger entrance animation shortly after load
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      // Hide the cartoon man if scrolled down past the hero section (e.g., 300px)
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 dark:bg-blue-600/20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Professional Man Saying Hi Animation */}
      <div 
        className={`fixed top-24 -right-4 md:right-0 z-50 transition-transform duration-700 ease-in-out ${
          isLoaded && !isScrolled ? 'translate-x-0' : 'translate-x-[120%]'
        }`}
      >
        <div className="relative flex items-center">
          {/* Speech Bubble */}
          <div className="absolute top-[15%] right-[75%] bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-3 rounded-3xl rounded-tr-none shadow-2xl border border-slate-200 dark:border-slate-700 animate-bounce font-extrabold text-xl whitespace-nowrap z-10">
            Hi! 👋
          </div>
          {/* Simple Character SVG - Slanting from right */}
          <div className="transform -rotate-6 origin-bottom-right drop-shadow-xl">
            <svg className="w-32 h-40 md:w-40 md:h-48" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Minimalist Body */}
              <path d="M50 120 C50 100 150 100 150 120 L150 250 L50 250 Z" fill="#6366F1" />
              {/* Minimalist Head */}
              <circle cx="100" cy="65" r="35" fill="#A5B4FC" />
              {/* Waving Arm */}
              <g className="origin-[50px_130px] rotate-12">
                <path d="M50 130 Q10 100 30 50" stroke="#6366F1" strokeWidth="20" strokeLinecap="round" />
                <circle cx="30" cy="50" r="10" fill="#A5B4FC" />
              </g>
              {/* Tucked Arm */}
              <path d="M150 130 Q180 160 160 210" stroke="#6366F1" strokeWidth="20" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <AnimateOnScroll direction="up" className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wide border border-indigo-200 dark:border-indigo-800/50">
          Powered by imagination. Optimized by code.
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
          We take your business where the internet can’t  <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
            ignore it.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          We craft digital experiences so good, users don’t just visit — they stay, engage, and convert..
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#portfolio" className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-indigo-200 dark:shadow-none hover:-translate-y-1">
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-sm">
            Get Started
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
}