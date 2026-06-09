import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Lazy load pages to split bundle and speed up mobile load times
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));

function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      width: '100%'
    }}>
      <div className="spinner" style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(0, 77, 64, 0.1)',
        borderTop: '3px solid var(--green-base, #004d40)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}

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

  // 2. Setup IntersectionObserver for reveal animations
  useEffect(() => {
    // --- STEP A: Reset all reveal states from previous page ---
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('reveal-init', 'visible');
      el.removeAttribute('data-delay');
    });

    // --- STEP B: Create a robust IntersectionObserver ---
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        if (delay > 0) {
          setTimeout(() => {
            if (el) el.classList.add('visible');
          }, delay);
        } else {
          el.classList.add('visible');
        }
        revealObs.unobserve(el);
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 100px 0px' });

    const setupRevealElements = () => {
      const revealEls = document.querySelectorAll('.reveal');
      const viewportH = window.innerHeight;

      revealEls.forEach((el) => {
        // Skip already processed
        if (el.classList.contains('visible') || el.classList.contains('reveal-init')) return;

        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < viewportH + 50;

        if (isInViewport) {
          // Element is in viewport — show it immediately (CSS animation handles fade)
          // Don't add reveal-init, just let the default .reveal animation play
          return;
        }

        // Element is below fold — hide it and observe for scroll
        const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(el);
        const delay = Math.min(idx * 30, 200); // Max 200ms delay
        el.setAttribute('data-delay', delay.toString());
        el.classList.add('reveal-init');
        revealObs.observe(el);
      });
    };

    // --- STEP C: Wait for DOM paint, then set up ---
    // Use double-requestAnimationFrame to ensure the browser has painted the new page
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setupRevealElements();
      });
    });

    // --- STEP D: Watch for dynamic DOM additions (e.g. tab switches) ---
    let mutationDebounce = null;
    const mutationObs = new MutationObserver(() => {
      clearTimeout(mutationDebounce);
      mutationDebounce = setTimeout(() => {
        setupRevealElements();
      }, 50);
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    // --- STEP E: Safety fallback — force show any stuck elements after 1.5s ---
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal.reveal-init:not(.visible)').forEach((el) => {
        el.classList.add('visible');
      });
    }, 1500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(mutationDebounce);
      clearTimeout(fallbackTimer);
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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
