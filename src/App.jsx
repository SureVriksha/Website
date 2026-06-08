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

  // 1. Handle scroll positioning or hashes on location changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.search, location.hash]);

  // 2. Setup IntersectionObserver and MutationObserver for reveal animations
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
        setTimeout(() => {
          if (entry.target) entry.target.classList.add('visible');
        }, delay);
        revealObs.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 180px 0px' });

    const setupRevealElements = () => {
      const revealEls = document.querySelectorAll('.reveal');
      revealEls.forEach((el) => {
        // If already showing or animated, skip
        if (el.classList.contains('visible')) return;

        const rect = el.getBoundingClientRect();
        // Check if element is below the fold (not visible initially)
        const isBelowFold = rect.top > window.innerHeight + 100;

        if (isBelowFold) {
          if (el.classList.contains('reveal-init')) return;
          
          // Set cascading delay
          const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
          const delay = siblings.indexOf(el) * 35; // Snappy 35ms delay
          el.setAttribute('data-delay', delay.toString());

          // Hide and observe
          el.classList.add('reveal-init');
          revealObs.observe(el);
        }
        // If above the fold, we do nothing. The CSS keyframe animation handles its fade-in automatically!
      });
    };

    // Run initial check after DOM has had a moment to settle
    const timer = setTimeout(() => {
      setupRevealElements();
    }, 150);

    // Watch for dynamic additions to the DOM (like tab switcher panels mounting new cards)
    const mutationObs = new MutationObserver(() => {
      setupRevealElements();
    });

    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      revealObs.disconnect();
      mutationObs.disconnect();
    };
  }, [location.pathname]);

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
