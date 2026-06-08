import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function ScrollToTopAndAnimations() {
  const location = useLocation();

  useEffect(() => {
    // 1. Handle scroll positioning or hashes
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    // 2. Setup IntersectionObserver for reveal animations on mount/location change
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal');
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          revealObs.unobserve(entry.target);
        });
      }, { threshold: 0.05, rootMargin: '0px 0px 180px 0px' });

      revealEls.forEach((el) => {
        if (el.classList.contains('visible')) return;

        const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
        const delay = siblings.indexOf(el) * 60;
        el.setAttribute('data-delay', delay.toString());
        revealObs.observe(el);
      });

      return () => {
        revealObs.disconnect();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTopAndAnimations />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
