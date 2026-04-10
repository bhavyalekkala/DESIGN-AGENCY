"use client";

import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    
    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimateOnScroll direction="left">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Got an idea? Let’s turn it into something the internet can’t ignore.</h2>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delay={100}>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
                From ‘what if’ to ‘wow’ — we’ve got you. start the conversation.
              </p>
            </AnimateOnScroll>
            
            <div className="space-y-6">
              <AnimateOnScroll direction="left" delay={200}>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">bhavyalekkala@gmail.com</p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll direction="left" delay={300}>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Visit Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">766, 1st floor, Shakti Towers,<br /> Anna Salai, Chennai - 600 002.</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <AnimateOnScroll direction="right" delay={200}>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimateOnScroll direction="up" delay={300}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                      placeholder="name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                  </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll direction="up" delay={400}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                      placeholder="name@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={500}>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-indigo-500'} text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-colors resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={600}>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          <Mail className="w-4 h-4" />
                        </span>
                      </span>
                    )}
                  </button>
                </AnimateOnScroll>
              </form>
            )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}