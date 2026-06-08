import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';

function StatCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const t = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(Math.floor(start));
          if (start >= target) clearInterval(t);
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('insurance-services');

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="hero-decor" aria-hidden="true">
          <div className="hero-decor-circle hdc-1"></div>
          <div className="hero-decor-circle hdc-2"></div>
          <div className="hero-decor-circle hdc-3"></div>
          <div className="hero-decor-circle hdc-4"></div>
          <div className="hero-dots"></div>
        </div>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="eyebrow-line"></div>
                <span className="eyebrow-text">Trusted by 2,000+ Indian Families</span>
              </div>
              <h1 className="hero-h1" id="hero-h1">
                Secure Your Life,
                <span className="line-break"><span className="gold-accent">Health</span> &amp; Wealth</span>
              </h1>
              <p className="hero-desc">
                Expert insurance advisory and financial planning designed for you — not just policies, but genuine protection for everything you've built and everyone you love.
              </p>
              <div className="hero-ctas">
                <Link to="/contact" className="btn btn-gold btn-lg">Get Free Consultation</Link>
                <Link to="/services" className="btn btn-ghost btn-lg">Explore Services →</Link>
              </div>
              <div className="hero-proof">
                <div className="hero-proof-item">
                  <div className="hero-proof-num">
                    <StatCounter target={2000} suffix="+" />
                  </div>
                  <div className="hero-proof-label">Happy Families</div>
                </div>
                <div className="hero-proof-item">
                  <div className="hero-proof-num">
                    <StatCounter target={98} suffix="%" />
                  </div>
                  <div className="hero-proof-label">Claims Settled</div>
                </div>
                <div className="hero-proof-item">
                  <div className="hero-proof-num">
                    <StatCounter target={10} suffix="+" />
                  </div>
                  <div className="hero-proof-label">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-card">
                <div className="hvc-header">
                  <img src="/images/logo.png" alt="" className="hvc-logo" />
                  <div>
                    <div className="hvc-brand-name">SureVriksha</div>
                    <div className="hvc-brand-sub">Financial Advisory</div>
                  </div>
                </div>
                <div className="hvc-stats">
                  <div className="hvc-stat"><div className="hvc-stat-num">2K+</div><div className="hvc-stat-lbl">Clients</div></div>
                  <div className="hvc-stat"><div className="hvc-stat-num">5K+</div><div className="hvc-stat-lbl">Policies</div></div>
                  <div className="hvc-stat"><div className="hvc-stat-num">98%</div><div className="hvc-stat-lbl">Claims</div></div>
                </div>
                <div className="hvc-rating">
                  <div>
                    <div className="hvc-stars">★★★★★</div>
                    <div className="hvc-rating-text">4.9 / 5 Rating</div>
                  </div>
                  <div className="hvc-rating-sub">from 500+ Google reviews</div>
                </div>
                <div className="hvc-badge">
                  <div className="hvc-badge-dot"></div>
                  IRDAI Certified Advisor • Est. 2014
                </div>
              </div>
              <div className="hero-float hf-1"><span className="float-icon">🏆</span>Top Advisor 2024</div>
              <div className="hero-float hf-2"><span className="float-icon">✅</span>Claim Settled in 3 Days</div>
              <div className="hero-float hf-3"><span class="float-icon">⚡</span>Same-Day Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar" role="list" aria-label="Trust indicators">
        <div className="trust-bar-inner">
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">🛡️</span> IRDAI Compliant</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">⭐</span> 4.9★ Google Rating</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">🏦</span> 30+ Insurer Partners</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">⚡</span> 2-Hour Response</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">💼</span> 10+ Years Experience</div>
          <div className="trust-bar-item" role="listitem"><span className="tbi-icon">🔒</span> 100% Transparent</div>
        </div>
      </div>

      {/* PARTNERS MARQUEE */}
      <PartnerMarquee />

      {/* STATS SECTION */}
      <section className="stats-section" aria-label="Statistics">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Numbers Speak</div>
            <div className="gold-divider"><span>a decade of trust</span></div>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">😊</div>
              <div className="stat-number">
                <StatCounter target={2000} suffix="+" />
              </div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">📋</div>
              <div className="stat-number">
                <StatCounter target={5000} suffix="+" />
              </div>
              <div className="stat-label">Policies Issued</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">🏆</div>
              <div className="stat-number">
                <StatCounter target={98} suffix="%" />
              </div>
              <div className="stat-label">Claims Settled</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrap">⭐</div>
              <div className="stat-number">
                <StatCounter target={10} suffix="+" />
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-section" aria-labelledby="services-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">What We Offer</div>
            <h2 id="services-h">Complete Protection,<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>For Every Chapter of Life</em></h2>
            <p className="section-desc">From your health to your home, your business to your future — we have expert-curated plans for every need.</p>
          </div>

          {/* Tab buttons */}
          <div className="tab-container reveal">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'insurance-services' ? 'active' : ''}`}
                onClick={() => setActiveTab('insurance-services')}
              >
                Insurance & Wealth
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tax-services' ? 'active' : ''}`}
                onClick={() => setActiveTab('tax-services')}
              >
                Tax & Business Services
              </button>
            </div>
          </div>

          {/* Insurance Tab Panel */}
          {activeTab === 'insurance-services' && (
            <div className="services-grid">
              <Link to="/services#health" className="service-card reveal" aria-label="Health Insurance">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)' }}>🏥</div>
                <h3>Health Insurance</h3>
                <p>Cashless treatment at 10,000+ hospitals. Comprehensive cover for your entire family with zero stress at the time of need.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#term" className="service-card reveal" aria-label="Term Life Insurance">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>🛡️</div>
                <h3>Term Life Insurance</h3>
                <p>₹1 Crore cover at ₹500/month. Protect your family's entire future for an amount you'll barely notice.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#motor" className="service-card reveal" aria-label="Motor Insurance">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>🚗</div>
                <h3>Motor Insurance</h3>
                <p>Comprehensive car and bike cover with cashless garages, zero-dep add-ons, and 24/7 roadside assistance.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#travel" className="service-card reveal" aria-label="Travel Insurance">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' }}>✈️</div>
                <h3>Travel Insurance</h3>
                <p>Travel the world without worry. Medical emergencies, trip cancellations, baggage loss — all covered.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#home" className="service-card reveal" aria-label="Home Insurance">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🏠</div>
                <h3>Home Insurance</h3>
                <p>Your biggest asset deserves the best protection. Cover against fire, flood, theft, and natural disasters.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#investment" className="service-card reveal" aria-label="Investment Planning">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📈</div>
                <h3>Investment & Tax Planning</h3>
                <p>Grow your wealth intelligently. SIP, ELSS, NPS, and tax-saving strategies that actually work for you.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
            </div>
          )}

          {/* Tax Tab Panel */}
          {activeTab === 'tax-services' && (
            <div className="services-grid">
              <Link to="/services#gst" className="service-card reveal" aria-label="GST Compliance">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>🧾</div>
                <h3>GST Services</h3>
                <p>Hassle-free GST registration, timely return filings, LUT for exports, cancellation, and compliance support.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#itr" className="service-card reveal" aria-label="ITR Filing">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📊</div>
                <h3>ITR Filing</h3>
                <p>Expert Income Tax Return filing for salaried individuals, freelancers, business owners, and tax audit audits.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#company" className="service-card reveal" aria-label="Company Registration">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#e8eaf6,#c5cae9)' }}>🏢</div>
                <h3>Company Registration</h3>
                <p>Launch your business smoothly. Registration for Private Limited, LLP, One Person Company, and Partnership firms.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#msme" className="service-card reveal" aria-label="MSME Registration">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>📜</div>
                <h3>MSME / Udyam</h3>
                <p>Get Udyam Certification to unlock government schemes, bank credit benefits, interest subsidies, and MSME support.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
              <Link to="/services#licenses" className="service-card reveal" aria-label="Business Licenses">
                <div className="service-icon-box" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🔑</div>
                <h3>Licenses & Registrations</h3>
                <p>Trademark filing, FSSAI Food License, Import Export Code (IEC), ISO certification, PAN/TAN registration, and more.</p>
                <div className="service-arrow">Explore plan <span>→</span></div>
              </Link>
            </div>
          )}

          <div className="text-center reveal" style={{ marginTop: '3rem' }}>
            <Link 
              to={activeTab === 'insurance-services' ? "/services?tab=insurance" : "/services?tab=tax"} 
              className="btn btn-primary btn-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section" aria-labelledby="why-h">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <div className="why-label reveal">Why SureVriksha</div>
              <h2 id="why-h" className="reveal">We Don't Just Sell Policies —<br /><span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>We Stand With You</span></h2>
              <p className="reveal">For over a decade, we've built our entire reputation on one thing: doing right by our clients. No pushy sales, no confusing jargon — just honest advice and genuine care.</p>
              <ul className="why-list">
                <li className="why-item reveal">
                  <div className="why-icon">🎯</div>
                  <div><strong>Completely Unbiased Advice</strong><p>We compare 30+ insurers to find what's best for you — not what earns us the highest commission.</p></div>
                </li>
                <li className="why-item reveal">
                  <div className="why-icon">⚡</div>
                  <div><strong>Lightning-Fast Claims Support</strong><p>When you need us most, we're there. Claims initiated same day, guided step-by-step till settlement.</p></div>
                </li>
                <li className="why-item reveal">
                  <div className="why-icon">🔍</div>
                  <div><strong>Crystal-Clear Transparency</strong><p>No hidden charges. No fine-print surprises. We explain everything so you decide with full confidence.</p></div>
                </li>
                <li className="why-item reveal">
                  <div className="why-icon">📞</div>
                  <div><strong>Always Reachable, Always Caring</strong><p>365 days a year. One WhatsApp message and we respond — whether it's a renewal or an emergency.</p></div>
                </li>
              </ul>
              <div className="reveal" style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-primary">Our Story →</Link>
              </div>
            </div>
            <div className="why-visual reveal">
              <div className="why-big-card">
                <div className="wbc-logo-row">
                  <img src="/images/logo.png" alt="SureVriksha" className="wbc-logo" />
                  <div>
                    <div className="wbc-brand">SureVriksha</div>
                    <div className="wbc-sub">Financial Advisory</div>
                  </div>
                </div>
                <div className="wbc-grid">
                  <div className="wbc-stat"><div className="wbc-num">2K+</div><div class="wbc-lbl">Families Protected</div></div>
                  <div className="wbc-stat"><div className="wbc-num">10+</div><div class="wbc-lbl">Years Trusted</div></div>
                  <div className="wbc-stat"><div className="wbc-num">30+</div><div class="wbc-lbl">Insurers</div></div>
                </div>
                <div className="wbc-progress">
                  <div className="wbc-progress-label"><span>Client Satisfaction</span><span>98%</span></div>
                  <div className="wbc-progress-bar"><div className="wbc-progress-fill" style={{ width: '98%' }}></div></div>
                </div>
                <div className="wbc-progress">
                  <div className="wbc-progress-label"><span>Claims Settled</span><span>98%</span></div>
                  <div className="wbc-progress-bar"><div className="wbc-progress-fill" style={{ width: '98%', animationDelay: '0.3s' }}></div></div>
                </div>
                <div className="wbc-badges" style={{ marginTop: '1.5rem' }}>
                  <div className="wbc-badge-chip">✅ IRDAI Certified</div>
                  <div className="wbc-badge-chip">⭐ 4.9 Rated</div>
                  <div className="wbc-badge-chip">🏆 Top Advisor</div>
                </div>
              </div>
              <div className="why-fc wfc-a"><span className="why-fc-icon">🌟</span> Top Advisor 2024</div>
              <div className="why-fc wfc-b"><span className="why-fc-icon">💚</span> Claim in 3 Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" aria-labelledby="test-h">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Client Stories</div>
            <h2 id="test-h">Real People. <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>Real Protection.</em></h2>
            <p className="section-desc">Every review is a family we helped protect. Every story is a trust we earned.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>"SureVriksha got our family the right health plan. When Papa was hospitalized, the cashless claim was cleared in hours. Yashraj personally guided us through every step. Exceptional service!"</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: '#0F9D58' }}>RK</div>
                <div><span className="t-name">Rajesh Kumar</span><span className="t-location">Bhubaneswar, Odisha</span></div>
              </div>
            </div>
            <div className="testimonial-card featured reveal">
              <div className="feat-badge">⭐ Most Helpful Review</div>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>"As a business owner I needed commercial insurance and investment planning together. SureVriksha gave me a complete, tailored solution I couldn't find anywhere else. The trust and expertise are unmatched."</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: '#1a73e8' }}>PS</div>
                <div><span className="t-name">Priya Sharma</span><span className="t-location">Mumbai, Maharashtra</span></div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>"The tax planning advice alone saved me ₹80,000 last year. Plus they got me perfect term insurance at half the price I expected. Professional, honest, and genuinely caring. Highly recommend!"</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: '#e91e63' }}>AM</div>
                <div><span className="t-name">Amit Mohanty</span><span className="t-location">Cuttack, Odisha</span></div>
              </div>
            </div>
          </div>
          <div className="text-center reveal" style={{ marginTop: '3rem' }}>
            <Link to="/reviews" className="btn btn-outline-gold">Read All Reviews →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-h">
        <div className="cta-orb" aria-hidden="true"></div>
        <div className="cta-orb2" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content reveal">
            <div className="cta-eyebrow">
              <div className="cta-eyebrow-line"></div>
              <div className="cta-eyebrow-text">Start Today</div>
              <div className="cta-eyebrow-line"></div>
            </div>
            <h2 id="cta-h">Ready to Secure<br /><em>Everything You Love?</em></h2>
            <p>Get personalized insurance and investment advice — completely free. No obligations, no fine print surprises. Just expert guidance that puts you first.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
              <a href="https://wa.me/919583425025?text=Hello%20SureVriksha!%20I%20need%20financial%20advice." className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a7.929 7.929 0 01-3.794-.968l-4.208 1.105 1.127-4.115A7.929 7.929 0 014.07 12c0-4.386 3.573-7.951 7.959-7.951 4.386 0 7.951 3.565 7.951 7.951 0 4.386-3.565 7.88-7.951 7.88z"/></svg>
                Chat on WhatsApp
              </a>
              <a href="tel:+919583425025" className="btn btn-ghost btn-lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
