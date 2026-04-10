import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import Image from 'next/image';

const portfolioData = [
  {
    id: 1,
    title: 'FinTech App Interface',
    category: 'UI/UX Design',
    image: '/fintech.jpg',
    link: 'https://stripe.com'
  },
  {
    id: 2,
    title: 'Eco Brand Identity',
    category: 'Branding',
    image: '/eco-brand-2.jpg',
    link: 'https://www.ecosia.org'
  },
  {
    id: 3,
    title: 'Global Marketing Campaign',
    category: 'Digital Marketing',
    image: '/global.jpg',
    link: 'https://www.hubspot.com'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/e-commerce.jpg',
    link: 'https://www.shopify.com'
  },
  {
    id: 5,
    title: 'SaaS Dashboard Analytics',
    category: 'UI/UX Design',
    image: '/saas-dashborad.jpg',
    link: 'https://mixpanel.com'
  },
  {
    id: 6,
    title: 'Travel App Redesign',
    category: 'App Development',
    image: '/travell-app.jpg',
    link: 'https://www.airbnb.com'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimateOnScroll direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Selected Works</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Explore our recent projects and see how we&apos;ve helped brands achieve digital excellence.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            View All Projects <ArrowRight className="w-5 h-5" />
          </button>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <AnimateOnScroll direction="up" delay={index * 150} key={project.id}>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group relative overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="relative z-10">
                    <span className="inline-block transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out text-indigo-400 font-bold text-sm mb-3 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out text-white text-2xl md:text-3xl font-bold mb-6">
                      {project.title}
                    </h3>
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out">
                      <div 
                        aria-label={`View details for ${project.title}`}
                        className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:scale-110 hover:-rotate-12 transition-all duration-300 shadow-xl"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full flex items-center justify-center gap-2 py-4 font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
          View All Projects <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}