import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/siteData.js';
import Container from './Container.jsx';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
const headerOffset = 88;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => {
      setScrolled(window.scrollY > 12);

      const current = sectionIds.reduce((active, id) => {
        const section = document.getElementById(id);

        if (!section) {
          return active;
        }

        const top = section.getBoundingClientRect().top - headerOffset;
        return top <= 80 ? id : active;
      }, 'home');

      setActiveSection(current);
    };

    updateNavigationState();
    window.addEventListener('scroll', updateNavigationState, { passive: true });
    window.addEventListener('resize', updateNavigationState);

    return () => {
      window.removeEventListener('scroll', updateNavigationState);
      window.removeEventListener('resize', updateNavigationState);
    };
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);

    if (!section) {
      return;
    }

    const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    setActiveSection(href.replace('#', ''));
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300 ${
        scrolled
          ? 'border-white/70 bg-white/[0.9] shadow-[0_16px_48px_rgba(15,14,71,0.10)]'
          : 'border-white/60 bg-white/[0.84] shadow-[0_10px_34px_rgba(15,14,71,0.05)]'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <button type="button" onClick={() => scrollToSection('#home')} className="flex items-center gap-3 text-left" aria-label="SOMACIT home">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-somcit-navy text-lg font-black text-white shadow-soft">
            S
          </span>
          <span>
            <span className="block font-display text-xl font-extrabold tracking-normal text-somcit-navy">SOMACIT</span>
            <span className="block text-xs font-extrabold uppercase tracking-[0.18em] text-somcit-blue">Digital</span>
          </span>
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const active = activeSection === sectionId;

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className={`group relative py-2 text-sm font-bold transition ${
                  active ? 'text-somcit-navy' : 'text-slate-600 hover:text-somcit-navy'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-somcit-blue transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => scrollToSection('#contact')}
          className="hidden rounded-xl bg-somcit-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-somcit-blue hover:shadow-card lg:inline-flex"
        >
          Start a project
        </button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/80 text-somcit-navy shadow-sm lg:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-t border-slate-100 bg-white/95 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <Container className="grid gap-2 py-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const active = activeSection === sectionId;

                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={`rounded-xl px-3 py-3 text-left font-bold transition ${
                      active ? 'bg-somcit-sky text-somcit-blue' : 'text-slate-700 hover:bg-somcit-sky hover:text-somcit-navy'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
