import React from 'react';
import { Link } from 'react-router-dom';

export default function Reviews() {
  const reviews = [
    {
      stars: "★★★★★",
      src: "Google",
      text: "SureVriksha helped our family get the right health plan. When Papa was hospitalized, the cashless claim was cleared in hours. Personally guided us through every step. Exceptional!",
      author: "Rajesh Kumar",
      loc: "Bhubaneswar • Health Insurance",
      bg: "#0F9D58"
    },
    {
      stars: "★★★★★",
      src: "Google",
      text: "I was confused between 5 term plans. They explained each one clearly — pros, cons, exclusions — and helped me choose the one that perfectly fits my family's needs and budget.",
      author: "Priya Sharma",
      loc: "Mumbai • Term Insurance",
      bg: "#1a73e8"
    },
    {
      stars: "★★★★★",
      src: "WhatsApp",
      text: "The tax planning advice saved me ₹80,000 in taxes last year! They restructured my investments into ELSS, NPS, and proper insurance. Everything perfectly aligned with 80C and 80D.",
      author: "Amit Mohanty",
      loc: "Cuttack • Investment Planning",
      bg: "#e91e63"
    },
    {
      stars: "★★★★★",
      src: "Google",
      text: "When my car met an accident, SureVriksha guided me through the entire claim. From garage intimation to final settlement — they handled everything. ₹1.8L settled without a single hassle!",
      author: "Vikram Rao",
      loc: "Hyderabad • Motor Insurance",
      bg: "#ff6f00"
    },
    {
      stars: "★★★★★",
      src: "Google",
      text: "As a small business owner, I needed fire and workmen's insurance together. SureVriksha found a combined solution at 30% less than other agents quoted. They truly care about value.",
      author: "Sunita Mishra",
      loc: "Raipur • Commercial Insurance",
      bg: "#7b1fa2"
    },
    {
      stars: "★★★★★",
      src: "Direct",
      text: "I was going on my first international trip and clueless about travel insurance. They explained everything — medical, cancellation, baggage. Traveled to Europe with complete peace of mind!",
      author: "Neha Kapoor",
      loc: "Pune • Travel Insurance",
      bg: "#00897b"
    },
    {
      stars: "★★★★★",
      src: "Google",
      text: "We bought home insurance after my neighbor's flood damage. When we had water damage from heavy rains, the claim was settled quickly and fairly. Best decision we ever made!",
      author: "Deepak Patel",
      loc: "Ahmedabad • Home Insurance",
      bg: "#d32f2f"
    },
    {
      stars: "★★★★★",
      src: "WhatsApp",
      text: "I started a SIP of ₹5,000/month through SureVriksha's guidance 3 years ago. Portfolio is growing beautifully. They gave me the confidence to invest when I was scared of it before.",
      author: "Anjali Joshi",
      loc: "Nagpur • Mutual Fund SIP",
      bg: "#1565c0"
    },
    {
      stars: "★★★★★",
      src: "Google",
      text: "SureVriksha's team answers calls even on weekends! When my mother needed emergency hospitalization, they coordinated with the insurer directly. That personal touch is incredibly rare today.",
      author: "Ravi Shankar",
      loc: "Chennai • Health Insurance",
      bg: "#388e3c"
    }
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Client Stories</div>
        <h1>Real People. <em style={{ color: 'var(--gold-light)' }}>Real Trust.</em></h1>
        <p>Every review is a family we helped protect. Every story is a trust we earned through genuine care and expert guidance.</p>
        <div className="page-hero-line"></div>
      </section>

      <section className="reviews-stat-bar" aria-label="Review statistics">
        <div className="container">
          <div className="rsb-grid">
            <div className="rsb-item reveal"><div className="rsb-num">4.9★</div><div className="rsb-label">Average Rating</div></div>
            <div className="rsb-item reveal"><div className="rsb-num">2,000+</div><div className="rsb-label">Happy Clients</div></div>
            <div className="rsb-item reveal"><div className="rsb-num">98%</div><div className="rsb-label">Claims Settled</div></div>
            <div className="rsb-item reveal"><div className="rsb-num">10+</div><div className="rsb-label">Years Trusted</div></div>
          </div>
        </div>
      </section>

      <section className="reviews-grid-section" aria-labelledby="reviews-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Verified Reviews</div>
            <h2 id="reviews-h">What Our Clients <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Are Saying</em></h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card reveal" key={i}>
                <div className="review-top">
                  <div className="stars" aria-label="5 stars">{r.stars}</div>
                  <span className="review-src">{r.src}</span>
                </div>
                <blockquote>"{r.text}"</blockquote>
                <div className="t-author">
                  <div className="t-avatar" style={{ background: r.bg }}>
                    {r.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span className="t-name">{r.author}</span>
                    <span className="t-location">{r.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-features-section" aria-labelledby="tf-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">The Difference</div>
            <h2 id="tf-h">Why SureVriksha Stands <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Apart</em></h2>
          </div>
          <div className="tf-grid">
            <div className="tf-item reveal"><div className="tf-icon-wrap">🎯</div><h3>Unbiased Advice</h3><p>We compare 30+ insurers. We recommend what's best for you — not what earns us the most.</p></div>
            <div className="tf-item reveal"><div className="tf-icon-wrap">⚡</div><h3>Same-Day Claims</h3><p>Claims support initiated within hours. We work until your claim is fully settled.</p></div>
            <div className="tf-item reveal"><div className="tf-icon-wrap">🔒</div><h3>Full Transparency</h3><p>No hidden fees. We explain every clause, every exclusion, every option — clearly.</p></div>
            <div className="tf-item reveal"><div className="tf-icon-wrap">🌟</div><h3>Lifelong Partnership</h3><p>Annual reviews, renewals, fresh advice — we're with you for every chapter of life.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orb" aria-hidden="true"></div>
        <div className="cta-orb2" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content reveal">
            <div className="cta-eyebrow"><div className="cta-eyebrow-line"></div><div className="cta-eyebrow-text">Your Turn</div><div className="cta-eyebrow-line"></div></div>
            <h2>Join 2,000+ <em>Protected Families</em></h2>
            <p>Start with one free conversation. No fees, no obligations. Just expert advice you can trust.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">Get Free Consultation</Link>
              <a href="https://wa.me/919583425025" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
