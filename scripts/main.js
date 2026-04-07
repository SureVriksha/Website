/* SureVriksha v2 — Main JS */

// ---- Header Scroll ----
const header = document.getElementById('header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---- Mobile Menu ----
const burger = document.getElementById('burger');
const mMenu = document.getElementById('mobileMenu');
if (burger && mMenu) {
  burger.addEventListener('click', () => {
    const open = mMenu.classList.toggle('open');
    burger.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mMenu.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}

// ---- Reveal on Scroll ----
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = parseInt(entry.target.dataset.delay || 0);
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach((el, i) => {
  const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
  el.dataset.delay = siblings.indexOf(el) * 90;
  revealObs.observe(el);
});

// ---- Counter Animation ----
function countUp(el, target, duration = 2000) {
  const suffix = el.dataset.suffix || '';
  let start = 0;
  const step = target / (duration / 16);
  const t = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString('en-IN') + suffix;
    if (start >= target) clearInterval(t);
  }, 16);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    countUp(el, +el.dataset.target);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

// ---- Contact Form Validation ----
const form = document.getElementById('contactForm');
if (form) {
  const rules = [
    { id: 'name',    test: v => v.length >= 2,                   msg: 'Please enter your full name.' },
    { id: 'phone',   test: v => /^[6-9]\d{9}$/.test(v),         msg: 'Enter a valid 10-digit mobile number.' },
    { id: 'email',   test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Enter a valid email address.' },
    { id: 'message', test: v => v.length >= 10,                  msg: 'Please write a brief message.' },
  ];

  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    rules.forEach(r => {
      const inp = document.getElementById(r.id);
      const err = document.getElementById(r.id + 'Error');
      if (!inp) return;
      const pass = r.test(inp.value.trim());
      if (err) { err.style.display = pass ? 'none' : 'block'; err.textContent = pass ? '' : r.msg; }
      inp.style.borderColor = pass ? '' : '#dc2626';
      if (!pass) ok = false;
    });

    if (!ok) return;

    const btn = form.querySelector('[type="submit"]');
    const success = document.getElementById('formSuccess');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const formData = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      service: document.getElementById('service')?.value || '',
      message: document.getElementById('message').value.trim()
    };

    fetch('https://script.google.com/macros/s/AKfycbzleA-I7espWKt-ktvQy6rn8PpclmZY44pTloXHGyKX1Y25xNkQOLz4ZsE0IZs-mEG3/exec', {   // ← yahan apna Google Apps Script URL daalo
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      if (success) {
        success.style.display = 'block';
        success.textContent = '✓ Thank you! We\'ll get back to you within 24 hours.';
      }
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        btn.style.background = '';
        if (success) success.style.display = 'none';
      }, 5000);
    })
    .catch(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      alert('Something went wrong. Please try again.');
    });
  });

  form.querySelectorAll('input, textarea').forEach(inp => {
    inp.addEventListener('input', () => {
      inp.style.borderColor = '';
      const err = document.getElementById(inp.id + 'Error');
      if (err) err.style.display = 'none';
    });
  });
}

// ---- Active nav highlight ----
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a => {
  const href = a.getAttribute('href');
  a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
});
