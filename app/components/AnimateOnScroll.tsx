import React, { useState, useEffect, useRef } from 'react';

// --- NEW: Reusable Scroll Animation Wrapper ---
export const AnimateOnScroll = ({ 
  children, 
  className = "", 
  direction = "up", 
  delay = 0,
  repeat = false
}: { 
  children: React.ReactNode; 
  className?: string; 
  direction?: "up" | "down" | "left" | "right" | "none" | "left-far" | "right-far"; 
  delay?: number; 
  repeat?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it has animated in, unless repeat is true
          if (!repeat && domRef.current) observer.unobserve(domRef.current);
        } else if (repeat) {
          // If repeat is true and we leave the view, reset to hidden state
          setIsVisible(false);
        }
      });
    }, { 
      // Use 0 threshold and large horizontal rootMargin so items translated 
      // completely off-screen horizontally still intersect when scrolled into vertical view
      threshold: 0, 
      rootMargin: "0px 3000px 0px 3000px" 
    }); 
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [repeat]);

  const baseClass = "transition-all duration-1000 ease-out";
  const hiddenClass = {
    up: "opacity-0 translate-y-12",
    down: "opacity-0 -translate-y-12",
    left: "opacity-0 -translate-x-12",
    right: "opacity-0 translate-x-12",
    "left-far": "opacity-0 translate-y-12 md:translate-y-0 md:-translate-x-[150%]",
    "right-far": "opacity-0 translate-y-12 md:translate-y-0 md:translate-x-[150%]",
    none: "opacity-0"
  }[direction as 'up' | 'down' | 'left' | 'right' | 'left-far' | 'right-far' | 'none'];
  const visibleClass = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div ref={domRef} className={`${baseClass} ${isVisible ? visibleClass : hiddenClass} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};