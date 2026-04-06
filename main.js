/* SureVriksha — Main JS */

// ---- Header scroll effect ----
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ---- Mobile menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  const siblings = el.parentElement.querySelectorAll('.reveal');
  const idx = Array.from(siblings).indexOf(el);
  el.dataset.delay = idx * 80;
  revealObserver.observe(el);
});

// ---- Counter animation ----
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target.toLocaleString('en-IN') + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start).toLocaleString('en-IN') + (el.dataset.suffix || '');
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// ---- Contact form validation ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'name', msg: 'Please enter your name.', min: 2 },
      { id: 'phone', msg: 'Please enter a valid 10-digit phone number.', pattern: /^[6-9]\d{9}$/ },
      { id: 'email', msg: 'Please enter a valid email address.', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { id: 'message', msg: 'Please enter your message.', min: 10 },
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const error = document.getElementById(f.id + 'Error');
      if (!input) return;
      const val = input.value.trim();
      let ok = true;
      if (f.pattern && !f.pattern.test(val)) ok = false;
      if (f.min && val.length < f.min) ok = false;
      if (!val) ok = false;
      if (error) {
        error.style.display = ok ? 'none' : 'block';
        error.textContent = ok ? '' : f.msg;
      }
      input.style.borderColor = ok ? '' : '#e53e3e';
      if (!ok) valid = false;
    });

    if (valid) {
      const btn = contactForm.querySelector('button[type="submit"]');
      const successMsg = document.getElementById('formSuccess');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.textContent = '✓ Thank you! We\'ll get back to you within 24 hours.';
        }
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.disabled = false;
          btn.style.background = '';
          if (successMsg) successMsg.style.display = 'none';
        }, 5000);
      }, 1200);
    }
  });

  // Live validation
  contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (input.style.borderColor === 'rgb(229, 62, 62)') {
        input.style.borderColor = '';
        const error = document.getElementById(input.id + 'Error');
        if (error) error.style.display = 'none';
      }
    });
  });
}

// ---- Smooth anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
