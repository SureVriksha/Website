import React from 'react';

export default function Privacy() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Legal</div>
        <h1>Privacy Policy</h1>
        <p>How we collect, use, and protect your personal information.</p>
        <div className="page-hero-line"></div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-updated">🔒 Last Updated: December 1, 2024 | Effective Date: January 1, 2024</div>
          <div className="privacy-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#s1">Information We Collect</a></li>
              <li><a href="#s2">How We Use Your Information</a></li>
              <li><a href="#s3">Information Sharing</a></li>
              <li><a href="#s4">Data Security</a></li>
              <li><a href="#s5">Cookies & Tracking</a></li>
              <li><a href="#s6">Your Rights</a></li>
              <li><a href="#s7">Children's Privacy</a></li>
              <li><a href="#s8">Changes to This Policy</a></li>
              <li><a href="#s9">Contact Us</a></li>
            </ol>
          </div>
          <div className="privacy-section">
            <p>SureVriksha Financial Advisory ("we," "our," or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our website or advisory services. By accessing our services, you consent to the practices described here.</p>
          </div>
          <div className="privacy-section" id="s1">
            <h2>1. Information We Collect</h2>
            <p><strong>Information you provide:</strong> Name, date of birth, phone, email, address, financial information, health details (for health insurance), government IDs (PAN/Aadhaar for KYC), and communication records.</p>
            <p><strong>Automatically collected:</strong> IP address, browser type, pages visited, device information, and cookie data.</p>
          </div>
          <div className="privacy-section" id="s2">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Provide insurance advisory and financial planning services</li>
              <li>Process insurance applications and policy renewals</li>
              <li>Assist with claims coordination and settlement</li>
              <li>Conduct KYC verification as required by IRDAI regulations</li>
              <li>Send relevant updates about your policies and renewals</li>
              <li>Improve our services and client experience</li>
              <li>Comply with applicable Indian laws and regulations</li>
            </ul>
          </div>
          <div className="privacy-section" id="s3">
            <h2>3. Information Sharing</h2>
            <p>We do not sell or rent your personal data. We may share information with: insurance companies (to process your applications), IRDAI and regulatory bodies (as legally required), technology service providers (bound by confidentiality), and legal authorities (when required by law).</p>
          </div>
          <div className="privacy-section" id="s4">
            <h2>4. Data Security</h2>
            <p>We implement SSL/TLS encryption, access-controlled storage, regular security audits, and staff training on data protection. We retain your data for as long as your policy is active and for a minimum of 7 years as required by IRDAI and the Income Tax Act. In case of a data breach affecting your rights, we will notify you within 72 hours.</p>
          </div>
          <div className="privacy-section" id="s5">
            <h2>5. Cookies & Tracking</h2>
            <p>We use essential cookies (required for website function), analytics cookies (anonymized, via Google Analytics), and preference cookies. You can control cookie settings through your browser. We do not use cookies to collect sensitive financial or health information.</p>
          </div>
          <div className="privacy-section" id="s6">
            <h2>6. Your Rights</h2>
            <p>You have the right to: access your personal data, request corrections, request deletion (subject to legal retention requirements), receive data in portable format, object to marketing processing, and withdraw consent at any time. Contact us at <a href="mailto:privacy@surevriksha.com">privacy@surevriksha.com</a> to exercise these rights. We will respond within 30 days.</p>
          </div>
          <div className="privacy-section" id="s7">
            <h2>7. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18. We do not knowingly collect data from minors. If you believe we've inadvertently collected such data, contact us immediately and we'll delete it promptly.</p>
          </div>
          <div className="privacy-section" id="s8">
            <h2>8. Changes to This Policy</h2>
            <p>We may update this policy to reflect changes in our practices or legal requirements. We will notify active clients of significant changes via email or WhatsApp and post updates on this page with a revised "Last Updated" date.</p>
          </div>
          <div className="privacy-section" id="s9">
            <h2>9. Contact Us About Privacy</h2>
            <p><strong>Data Controller:</strong> SureVriksha Financial Advisory<br/>
            <strong>Email:</strong> <a href="mailto:privacy@surevriksha.com">privacy@surevriksha.com</a><br/>
            <strong>Phone:</strong> <a href="tel:+919583425025">+91 95834 25025</a><br/>
            <strong>WhatsApp:</strong> <a href="https://wa.me/919583425025" target="_blank" rel="noopener noreferrer">+91 95834 25025</a></p>
            <p style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'linear-gradient(135deg,#fffbeb,#fef9e7)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', color: 'var(--gold-dark)' }}>
              <strong>🔒 Our Commitment:</strong> Your trust is the foundation of our business. We handle your personal information with utmost care and transparency. If you ever feel your privacy has been compromised, reach out immediately — we will investigate and act promptly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
