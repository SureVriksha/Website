import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const messageParam = searchParams.get('message');
    setFormData(prev => ({
      ...prev,
      ...(serviceParam ? { service: serviceParam } : {}),
      ...(messageParam ? { message: messageParam } : {})
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write a brief message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitSuccess(false);

    fetch('https://script.google.com/macros/s/AKfycbzleA-I7espWKt-ktvQy6rn8PpclmZY44pTloXHGyKX1Y25xNkQOLz4ZsE0IZs-mEG3/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    })
    .catch(() => {
      setSubmitting(false);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Get In Touch</div>
        <h1>We're Here to <em style={{ color: 'var(--gold-light)' }}>Help You</em></h1>
        <p>Whether you have a quick question or need comprehensive financial advice — reach out. We respond within 2 hours.</p>
        <div className="page-hero-line"></div>
      </section>

      <section className="contact-section" aria-labelledby="contact-h">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-card reveal">
              <h2 id="contact-h">Send Us a Message</h2>
              <p>Fill in your details and we'll reach out within 2 business hours with expert advice.</p>
              <form id="contactForm" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name" 
                    autocomplete="name" 
                    required
                    style={{ borderColor: errors.name ? '#dc2626' : '' }}
                  />
                  {errors.name && <div className="form-error" style={{ display: 'block' }} role="alert">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number" 
                    autocomplete="tel" 
                    required
                    style={{ borderColor: errors.phone ? '#dc2626' : '' }}
                  />
                  {errors.phone && <div className="form-error" style={{ display: 'block' }} role="alert">{errors.phone}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    autocomplete="email" 
                    required
                    style={{ borderColor: errors.email ? '#dc2626' : '' }}
                  />
                  {errors.email && <div className="form-error" style={{ display: 'block' }} role="alert">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service (optional)</option>
                    <option value="health">Health Insurance</option>
                    <option value="term">Term Life Insurance</option>
                    <option value="motor">Motor Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="commercial">Commercial Insurance</option>
                    <option value="investment">Investment & Wealth Planning</option>
                    <option value="gst">GST Registration & Filing</option>
                    <option value="itr">ITR Filing & Tax Audit</option>
                    <option value="company">Company Registration</option>
                    <option value="msme">MSME / Udyam Registration</option>
                    <option value="gem">GEM & Tender Services</option>
                    <option value="oem">OEM Vendor Registration</option>
                    <option value="stock-audit">Stock Audit & Valuation</option>
                    <option value="certificates">Govt Certificates (Caste/Income/Residence)</option>
                    <option value="rto">RTO Services (Driving License/RC)</option>
                    <option value="passport-visa">Passport & VISA Services</option>
                    <option value="student-desk">Student Desk (Scholarships/Exams)</option>
                    <option value="licenses">Business Licenses (Trademark, FSSAI, etc.)</option>
                    <option value="other">Other / General Query</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your insurance or financial planning needs…" 
                    required
                    style={{ borderColor: errors.message ? '#dc2626' : '' }}
                  ></textarea>
                  {errors.message && <div className="form-error" style={{ display: 'block' }} role="alert">{errors.message}</div>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-gold" 
                  disabled={submitting}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '1rem',
                    fontSize: '1rem',
                    background: submitSuccess ? 'linear-gradient(135deg, #22c55e, #16a34a)' : ''
                  }}
                >
                  {submitting ? 'Sending...' : submitSuccess ? 'Message Sent ✓' : 'Send Message →'}
                </button>

                {submitSuccess && (
                  <div className="form-success" style={{ display: 'block' }} role="status" aria-live="polite">
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
            <div className="contact-info-side">
              <div className="cis-card reveal"><div className="cis-header"><div className="cis-icon">📞</div><h3>Call Us</h3></div><p><a href="tel:+919583425025">+91 95834 25025</a></p><p style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Mon–Sat, 9 AM – 7 PM</p></div>
              <div className="cis-card reveal"><div className="cis-header"><div className="cis-icon">💬</div><h3>WhatsApp</h3></div><a href="https://wa.me/919583425025?text=Hello%20SureVriksha!%20I%20need%20financial%20advice." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>Chat on WhatsApp →</a></div>
              <div className="cis-card reveal"><div className="cis-header"><div className="cis-icon">✉️</div><h3>Email Us</h3></div><p><a href="mailto:surevriksha@gmail.com">surevriksha@gmail.com</a></p></div>
              <div className="cis-card reveal" style={{ background: 'linear-gradient(160deg,var(--green-deeper),var(--green-dark))', color: 'white', border: 'none' }}><div style={{ textAlign: 'center', padding: '0.5rem 0' }}><div style={{ fontSize: '2.5rem', marginBottom: '0.875rem' }}>🎁</div><h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Free Consultation</h3><p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.25rem' }}>No fees. No pressure. Just expert guidance.</p><a href="tel:+919583425025" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>📞 Call Now — It's Free</a></div></div>
              <div className="map-box reveal"><span className="map-icon">🗺️</span><strong>Pan India Advisory Services</strong><p>We serve clients across all states in India</p><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-gold" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Open Google Maps →</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
