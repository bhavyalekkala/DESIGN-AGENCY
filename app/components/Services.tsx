import React from 'react';
import { Monitor, PenTool, Megaphone, Code } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const servicesData = [
  {
    id: '01',
    title: 'UI/UX Design',
    description: 'Creating intuitive, engaging, and beautiful user interfaces tailored for your target audience.',
    icon: <PenTool className="w-8 h-8" />
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'Building robust, scalable, and high-performance web applications using modern technologies.',
    icon: <Code className="w-8 h-8" />
  },
  {
    id: '03',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns to boost your visibility, engage audiences, and drive conversions.',
    icon: <Megaphone className="w-8 h-8" />
  },
  {
    id: '04',
    title: 'Branding Strategy',
    description: 'Developing compelling brand identities that resonate and establish market authority.',
    icon: <Monitor className="w-8 h-8" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimateOnScroll direction="up" className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Our Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">Turning ideas into digital realities that actually perform</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <AnimateOnScroll 
              direction={index < 2 ? "left-far" : "right-far"} 
              delay={(index % 2) * 150} 
              repeat={true}
              key={service.id}
            >
              <div 
                className="group relative p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100 dark:hover:shadow-none overflow-hidden h-full flex flex-col"
              >
              {/* Background Number Watermark */}
              <div className="absolute -top-4 -right-2 text-7xl md:text-8xl font-black text-slate-100 dark:text-slate-800/50 opacity-50 group-hover:text-indigo-50 dark:group-hover:text-indigo-900/20 transition-colors duration-500 pointer-events-none">
                {service.id}
              </div>
              
              <div className="relative z-10 flex-grow">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 md:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}