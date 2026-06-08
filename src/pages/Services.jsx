import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

export default function Services() {
  const [activeTab, setActiveTab] = useState('insurance-services');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    const hash = location.hash;
    
    const taxHashes = ['#gst', '#itr', '#company', '#msme', '#licenses', '#gem', '#oem', '#stock-audit'];
    const govtHashes = ['#certificates', '#id-corrections', '#rto', '#passport-visa', '#student-desk', '#caste', '#income', '#residence', '#pan-change', '#aadhaar-change', '#voter-change', '#scholarships'];

    if (tabParam === 'tax' || taxHashes.includes(hash)) {
      setActiveTab('tax-services');
    } else if (tabParam === 'govt' || govtHashes.includes(hash)) {
      setActiveTab('govt-services');
    } else {
      setActiveTab('insurance-services');
    }

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams, location.hash]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams(
      tabId === 'tax-services' 
        ? { tab: 'tax' } 
        : tabId === 'govt-services' 
        ? { tab: 'govt' } 
        : { tab: 'insurance' }
    );
  };

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Our Services</div>
        <h1>Complete Protection for<br /><em style={{ color: 'var(--gold-light)' }}>Every Chapter of Your Life</em></h1>
        <p>From your health to your wealth — we offer expert-curated insurance and financial plans tailored to your exact needs.</p>
        <div className="page-hero-line"></div>
      </section>

      {/* Tab Switching Container */}
      <div className="tab-container" style={{ marginTop: '3rem', marginBottom: 0 }}>
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'insurance-services' ? 'active' : ''}`}
            onClick={() => handleTabChange('insurance-services')}
          >
            Insurance & Wealth
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tax-services' ? 'active' : ''}`}
            onClick={() => handleTabChange('tax-services')}
          >
            Tax & Corporate Services
          </button>
          <button 
            className={`tab-btn ${activeTab === 'govt-services' ? 'active' : ''}`}
            onClick={() => handleTabChange('govt-services')}
          >
            Govt & Student Services
          </button>
        </div>
      </div>

      {/* INSURANCE & WEALTH TAB PANEL */}
      {activeTab === 'insurance-services' && (
        <div id="insurance-services" className="tab-panel active">
          {/* HEALTH */}
          <section className="service-detail-section" id="health">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Health Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)' }}>🏥</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Never Let a Medical Bill<br /><em style={{ color: 'var(--gold-dark)' }}>Break Your Family</em></h2>
                  <p className="reveal">Medical emergencies are unpredictable. But financial ruin from healthcare costs doesn't have to be. We help you choose the right health insurance — cashless, comprehensive, and genuinely protective.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Cashless treatment at 10,000+ network hospitals</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Pre & post-hospitalization expenses covered</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>No-claim bonus up to 50% of sum insured</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Critical illness and maternity cover available</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Annual free health check-ups included</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tax deduction under Section 80D</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Everyone — individuals, families, senior citizens, and the self-employed. Especially those without employer-provided group health cover.</p></div>
                  <Link to="/contact?service=health" className="btn btn-gold reveal">Get Health Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏥</div>
                  <div className="sd-visual-title">Health Insurance</div>
                  <div className="sd-visual-sub">Comprehensive Family Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Individual Plans</div>
                    <div className="sd-chip">Family Floater</div>
                    <div className="sd-chip">Senior Citizen</div>
                    <div className="sd-chip">Super Top-up</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TERM LIFE */}
          <section className="service-detail-section bg-alt" id="term">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Term Life Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>🛡️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Give Your Family<br /><em style={{ color: 'var(--gold-dark)' }}>A Safety Net for Life</em></h2>
                  <p className="reveal">If something were to happen to you, would your family be able to maintain their lifestyle? Term insurance ensures the answer is always yes — ₹1 Crore cover for as little as ₹500/month.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Cover up to ₹10 Crore at minimal premiums</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tax-free death benefit paid to nominees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Return of premium option available</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Critical illness and accidental death riders</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Waiver of premium on permanent disability</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tax benefit under Section 80C</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Every earning individual with dependents — spouse, children, or parents. Also essential for home loan borrowers. Start young for the lowest premiums.</p></div>
                  <Link to="/contact?service=term" className="btn btn-gold reveal">Get Term Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🛡️</div>
                  <div className="sd-visual-title">Term Life Insurance</div>
                  <div className="sd-visual-sub">Maximum Protection, Minimal Cost</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">₹50L – ₹10Cr Cover</div>
                    <div className="sd-chip">10–40 Yr Tenure</div>
                    <div className="sd-chip">99%+ Claim Ratio</div>
                    <div className="sd-chip">Instant Online</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MOTOR */}
          <section className="service-detail-section" id="motor">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Motor Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>🚗</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Drive With<br /><em style={{ color: 'var(--gold-dark)' }}>Total Confidence</em></h2>
                  <p className="reveal">An accident can happen in seconds. Make sure when it does, your vehicle, your finances, and third parties are fully protected — with the right comprehensive motor insurance plan.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Comprehensive cover: own damage + third party</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Cashless repairs at 5,000+ garages across India</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Zero depreciation add-on for full value claims</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>24/7 roadside assistance and towing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Engine protection and consumables cover</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>NCB (No Claim Bonus) protection add-on</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>All vehicle owners in India — third-party cover is legally mandatory. Comprehensive cover is strongly recommended for any vehicle under 10 years old.</p></div>
                  <Link to="/contact?service=motor" className="btn btn-gold reveal">Get Motor Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🚗</div>
                  <div className="sd-visual-title">Motor Insurance</div>
                  <div className="sd-visual-sub">Car & Bike Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Car Insurance</div>
                    <div className="sd-chip">Bike Insurance</div>
                    <div className="sd-chip">Commercial Vehicle</div>
                    <div className="sd-chip">Instant Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRAVEL */}
          <section className="service-detail-section bg-alt" id="travel">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Travel Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' }}>✈️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Explore the World<br /><em style={{ color: 'var(--gold-dark)' }}>Worry-Free</em></h2>
                  <p className="reveal">From a medical emergency in Europe to a cancelled flight in Bangkok — travel insurance ensures that no unexpected event can derail your journey or drain your savings.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Medical emergency coverage worldwide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Trip cancellation and interruption protection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Baggage loss and flight delay compensation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Emergency evacuation and repatriation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Passport and document loss cover</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Schengen visa compliant policies available</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>International travelers, students studying abroad, frequent business flyers, and families on vacation. Schengen visa applicants must have travel insurance.</p></div>
                  <Link to="/contact?service=travel" className="btn btn-gold reveal">Get Travel Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">✈️</div>
                  <div className="sd-visual-title">Travel Insurance</div>
                  <div className="sd-visual-sub">Domestic & International Coverage</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Single Trip</div>
                    <div className="sd-chip">Annual Multi-Trip</div>
                    <div className="sd-chip">Student Travel</div>
                    <div className="sd-chip">Senior Friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOME */}
          <section className="service-detail-section" id="home">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Home Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🏠</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Your Biggest Asset<br /><em style={{ color: 'var(--gold-dark)' }}>Deserves the Best Guard</em></h2>
                  <p className="reveal">Your home is more than bricks and mortar — it's your life's biggest investment. Protect it against natural disasters, fire, theft, and accidental damage with a comprehensive home insurance policy.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Structure coverage: earthquake, flood, fire, cyclone</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Contents and valuables protection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Burglary and theft cover</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Third-party liability for visitors</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Temporary rental accommodation during repairs</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Plans starting at just ₹2,500/year</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Home owners, renters, landlords, and anyone in flood-prone, earthquake-prone, or coastal areas. Especially important if you have a home loan.</p></div>
                  <Link to="/contact?service=home" className="btn btn-gold reveal">Get Home Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏠</div>
                  <div className="sd-visual-title">Home Insurance</div>
                  <div className="sd-visual-sub">Structure & Contents Protection</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Home Structure</div>
                    <div className="sd-chip">Contents Cover</div>
                    <div className="sd-chip">Renters Insurance</div>
                    <div className="sd-chip">Landlord Plans</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMMERCIAL */}
          <section className="service-detail-section bg-alt" id="commercial">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Commercial Insurance</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8eaf6,#c5cae9)' }}>🏢</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Protect Your Business<br /><em style={{ color: 'var(--gold-dark)' }}>Like You Protect Your Family</em></h2>
                  <p className="reveal">Businesses face risks that personal policies can't cover. From fire to marine cargo to employee accidents — we provide complete commercial insurance tailored to your industry and scale.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Fire insurance for shops, offices & factories</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Marine cargo for goods in domestic/international transit</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Workmen Compensation (WC) policy</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Public and product liability insurance</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Group health and accident cover for employees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>D&O and professional indemnity for corporates</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>SMEs, retailers, manufacturers, exporters, IT firms, construction companies, and any business with employees, physical assets, or goods in transit.</p></div>
                  <Link to="/contact?service=commercial" className="btn btn-gold reveal">Get Commercial Insurance Quote →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">🏢</div>
                  <div className="sd-visual-title">Commercial Insurance</div>
                  <div className="sd-visual-sub">Complete Business Risk Protection</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Fire & Allied</div>
                    <div className="sd-chip">Marine Cargo</div>
                    <div className="sd-chip">Workmen Comp</div>
                    <div className="sd-chip">Group Health</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INVESTMENT */}
          <section className="service-detail-section" id="investment">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Investment & Tax Planning</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📈</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Make Your Money<br /><em style={{ color: 'var(--gold-dark)' }}>Work as Hard as You Do</em></h2>
                  <p className="reveal">Protection alone isn't enough — your money should grow too. Our certified advisors build tax-efficient investment portfolios aligned with your goals, whether that's retirement, education, or wealth creation.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ELSS mutual funds: tax saving + wealth growth</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>SIP planning for systematic, long-term wealth</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>PPF, NPS, and fixed income advisory</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Maximize tax savings under 80C, 80D, 80CCD</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Retirement planning and annuity products</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Child education and marriage corpus planning</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Salaried professionals, business owners, and HNIs. Start a ₹5,000/month SIP today — it can become ₹1 Crore in 20 years at 12% returns.</p></div>
                  <Link to="/contact?service=investment" className="btn btn-gold reveal">Start Investment Planning →</Link>
                </div>
                <div className="sd-visual reveal">
                  <div className="sd-visual-icon">📈</div>
                  <div className="sd-visual-title">Investment Planning</div>
                  <div className="sd-visual-sub">Wealth Creation & Tax Savings</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Mutual Funds</div>
                    <div className="sd-chip">Tax Planning</div>
                    <div className="sd-chip">Retirement</div>
                    <div className="sd-chip">Goal Planning</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAX & CORPORATE SERVICES TAB PANEL */}
      {activeTab === 'tax-services' && (
        <div id="tax-services" className="tab-panel active">
          {/* GST */}
          <section className="service-detail-section" id="gst">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">GST Services</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>🧾</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Simplify Your Business<br /><em style={{ color: 'var(--gold-dark)' }}>With Stress-Free GST</em></h2>
                  <p className="reveal">Tax compliance shouldn't distract you from growing your business. We handle everything from fresh GST registrations to month-on-month return filing (GSTR-1, GSTR-3B) with accurate input tax credit (ITC) reconciliation.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Quick registration approval within 3-5 business days</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Seamless monthly & quarterly return filing (GSTR-1, GSTR-3B, GSTR-9)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Export support: Letter of Undertaking (LUT) filing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Precise ITC reconciliation to save cash leakages</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Expert handling of GST audits, amendments, and cancellations</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Ongoing advice on GST rate revisions and compliance norms</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Any business owner with turnover exceeding the limit (₹20L/₹40L for goods/services) or doing inter-state sales.</p></div>
                  <Link to="/contact?service=gst" className="btn btn-gold reveal">Get GST Support →</Link>
                </div>
                <div className="sd-visual reveal badge-blue">
                  <div className="sd-visual-icon">🧾</div>
                  <div className="sd-visual-title">GST Compliance</div>
                  <div className="sd-visual-sub">Registrations & Return Filings</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">GST Registration</div>
                    <div className="sd-chip">Monthly Returns</div>
                    <div className="sd-chip">LUT for Exports</div>
                    <div className="sd-chip">GST Audit Support</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ITR */}
          <section className="service-detail-section bg-alt" id="itr">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Income Tax Return</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📊</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Maximize Your Tax Savings<br /><em style={{ color: 'var(--gold-dark)' }}>File With Experts</em></h2>
                  <p className="reveal">Don't just file your returns — optimize your taxes. Our chartered advisors review your income from salary, business, capital gains, and house property to minimize your tax liability legally and secure maximum refunds.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Accurate filing of ITR-1, ITR-2, ITR-3, and ITR-4 forms</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Double-checked computations under Old vs New Tax Regimes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Capital gains computation from stock market, mutual funds & property</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Section 80C, 80D, 80G, and 80CCD tax deduction reviews</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Professional representation in case of tax notices or scrutiny</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Advanced tax planning and annual tax audits for business owners</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Salaried professionals, freelancers, stock market traders, NRI taxpayers, and business owners who want error-free tax filing.</p></div>
                  <Link to="/contact?service=itr" className="btn btn-gold reveal">Start ITR Filing →</Link>
                </div>
                <div className="sd-visual reveal badge-teal">
                  <div className="sd-visual-icon">📊</div>
                  <div className="sd-visual-title">ITR Filing</div>
                  <div className="sd-visual-sub">Individual & Corporate Filings</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Salaried Returns</div>
                    <div className="sd-chip">Business Tax</div>
                    <div className="sd-chip">Capital Gains</div>
                    <div className="sd-chip">Tax Auditing</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMPANY REGISTRATION */}
          <section className="service-detail-section" id="company">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Business Registration</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8eaf6,#c5cae9)' }}>🏢</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Turn Your Vision Into Reality<br /><em style={{ color: 'var(--gold-dark)' }}>Incorporate Your Company</em></h2>
                  <p className="reveal">Give your business the credibility of a registered legal structure. From selecting the right entity type to getting your Incorporation Certificate, PAN, TAN, and DIN — we manage the entire Ministry of Corporate Affairs (MCA) process.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Complete company setup in 7-10 business days</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Incorporation Certificate (COI), PAN, TAN, and DIN included</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Setup Private Limited, LLP, One Person Company (OPC), or Partnerships</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Draft customized MoA, AoA, and LLP Agreements</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Free assistance in opening corporate bank accounts</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Complimentary MSME registration certificate with company setup</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Entrepreneurs, startup founders, partnership groups, and sole proprietors looking to raise capital, limit personal liability, or scale.</p></div>
                  <Link to="/contact?service=company" className="btn btn-gold reveal">Register Company Now →</Link>
                </div>
                <div className="sd-visual reveal badge-purple">
                  <div className="sd-visual-icon">🏢</div>
                  <div className="sd-visual-title">Company Setup</div>
                  <div className="sd-visual-sub">MCA Corporate Registrations</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Pvt Ltd Company</div>
                    <div className="sd-chip">LLP Setup</div>
                    <div className="sd-chip">OPC Registration</div>
                    <div className="sd-chip">Partnership Firm</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MSME / UDYAM */}
          <section className="service-detail-section bg-alt" id="msme">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">MSME / Udyam</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>📜</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Unlock Government Subsidies<br /><em style={{ color: 'var(--gold-dark)' }}>Get MSME Certified</em></h2>
                  <p className="reveal">The Government of India provides extensive benefits, lower interest rates, and financial protections to MSMEs. We help you obtain your Udyam Registration certificate and advise you on claiming government schemes.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Instant Udyam Registration certificate generation</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Collateral-free business loans under CGTMSE scheme</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Lower interest rates on bank loans (up to 1.5% concession)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Protection against delayed payments from corporate buyers (45-day rule)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>50% discount on Trademark and Patent registration government fees</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Concessions on electricity bills and government tender applications</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Micro, small, and medium businesses, retailers, wholesalers, manufacturers, service providers, and startups looking to avail concessions.</p></div>
                  <Link to="/contact?service=msme" className="btn btn-gold reveal">Register MSME / Udyam →</Link>
                </div>
                <div className="sd-visual reveal badge-orange">
                  <div className="sd-visual-icon">📜</div>
                  <div className="sd-visual-title">MSME Certification</div>
                  <div className="sd-visual-sub">Udyam Registration & Subsidies</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Udyam Certificate</div>
                    <div className="sd-chip">CGTMSE Loans</div>
                    <div className="sd-chip">Payment Protection</div>
                    <div className="sd-chip">Tender Concessions</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LICENSES & REGISTRATIONS */}
          <section className="service-detail-section" id="licenses">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Business Licenses</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🔑</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Secure Your Business Assets<br /><em style={{ color: 'var(--gold-dark)' }}>With Essential Licenses</em></h2>
                  <p className="reveal">Protect your brand name, comply with food safety standards, or start trading internationally. We handle all mandatory business registrations and intellectual property filings under one roof.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Trademark Registration: Protect your brand name & logo (™ logo)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>FSSAI Food License: Mandated safety registrations for food businesses</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Import Export Code (IEC): Required for global trading operations</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>ISO Certification: Establish international quality standards</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Shop & Establishment License (Gumasta registration)</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>TAN registration and Professional Tax (PT) enrollment</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Businesses looking to secure their brand identity, restaurants, food manufacturers, traders, exporters, and employers with 10+ workers.</p></div>
                  <Link to="/contact?service=licenses" className="btn btn-gold reveal">Apply for Business License →</Link>
                </div>
                <div className="sd-visual reveal badge-violet">
                  <div className="sd-visual-icon">🔑</div>
                  <div className="sd-visual-title">Business Licensing</div>
                  <div className="sd-visual-sub">Compliance & IP Protection</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Trademark Filing</div>
                    <div className="sd-chip">FSSAI License</div>
                    <div className="sd-chip">Import Export (IEC)</div>
                    <div className="sd-chip">ISO Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GEM & TENDERS */}
          <section className="service-detail-section bg-alt" id="gem">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">GEM & Tender Portal</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>💼</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Grow Your Business with<br /><em style={{ color: 'var(--gold-dark)' }}>Government Contracts</em></h2>
                  <p className="reveal">Sell your products and services directly to government departments. We handle your complete Government e-Marketplace (GEM) vendor profile setup, product catalog listing, and tender bidding compliance.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>GEM Seller & Service Provider Profile Registration</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Catalog Management: Product uploading & Brand approval</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Direct purchase, L1 bidding, and reverse auctions support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Daily tender searches mapped to your business code</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Bid preparation, document check, and online submission</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Post-bid representation and invoice compliance support</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Manufacturers, service providers, contractors, and traders looking to secure high-value government orders with transparent payments.</p></div>
                  <Link to="/contact?service=gem" className="btn btn-gold reveal">Apply for GEM / Tender Support →</Link>
                </div>
                <div className="sd-visual reveal badge-blue">
                  <div className="sd-visual-icon">💼</div>
                  <div className="sd-visual-title">GEM Bidding</div>
                  <div className="sd-visual-sub">Government e-Marketplace Services</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Vendor Registration</div>
                    <div className="sd-chip">Product Uploads</div>
                    <div className="sd-chip">Tender Bidding</div>
                    <div className="sd-chip">L1 Procurement</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OEM REGISTRATION */}
          <section className="service-detail-section" id="oem">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">OEM Registration</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>⚙️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Original Equipment Manufacturer<br /><em style={{ color: 'var(--gold-dark)' }}>GEM Verification</em></h2>
                  <p className="reveal">Unlock the power to list your manufactured products directly on the GEM portal without intermediaries. We manage your OEM dashboard approvals, vendor assessments by Quality Council of India (QCI), and brand listings.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>GEM OEM Panel registration & Quality Assessment filing</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Brand creation and approval on the GEM marketplace</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Complete QCI assessment documentation and preparation support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Linking secondary sellers (resellers) to your OEM catalog</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>OEM dashboard management for direct product pricing control</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Actual manufacturers, trademark owners, and exclusive brand distributors who want to control their brand listing on GEM.</p></div>
                  <Link to="/contact?service=licenses&message=I%20need%20GEM%20OEM%20registration%20and%20vendor%20assessment%20support." className="btn btn-gold reveal">Register OEM Now →</Link>
                </div>
                <div className="sd-visual reveal badge-orange">
                  <div className="sd-visual-icon">⚙️</div>
                  <div className="sd-visual-title">OEM Panel</div>
                  <div className="sd-visual-sub">Brand & QCI Verification</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">OEM Dashboard</div>
                    <div className="sd-chip">QCI Assessment</div>
                    <div className="sd-chip">Brand Approval</div>
                    <div className="sd-chip">Reseller Mapping</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STOCK AUDIT */}
          <section className="service-detail-section bg-alt" id="stock-audit">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Stock Audit</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)' }}>📋</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Secure Inventory Control<br /><em style={{ color: 'var(--gold-dark)' }}>With Reliable Stock Audits</em></h2>
                  <p className="reveal">Compliance and inventory validation are crucial for corporate credit and business health. We conduct professional stock audits, inventory valuations, and asset verification reports at highly reliable rates.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Physical verification of stock and matching with books of account</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Accurate inventory valuation using compliant accounting standards</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Verification of storage condition, slow-moving items, and damage checks</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Compliant audit reports for Bank CC/OD limits renewal</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Internal controls review to prevent stock leakages or theft</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Businesses availing bank cash-credit (CC) or overdraft (OD) facilities, wholesalers, large retailers, and manufacturing units.</p></div>
                  <Link to="/contact?service=itr&message=I%20need%20a%20Stock%20Audit%20and%20verification%20report%20for%20my%20business." className="btn btn-gold reveal">Request Stock Audit →</Link>
                </div>
                <div className="sd-visual reveal badge-teal">
                  <div className="sd-visual-icon">📋</div>
                  <div className="sd-visual-title">Stock Audit</div>
                  <div className="sd-visual-sub">Inventory Verification & Valuation</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Physical Check</div>
                    <div className="sd-chip">Valuation Report</div>
                    <div className="sd-chip">Bank CC Audit</div>
                    <div className="sd-chip">Internal Control</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* GOVERNMENT & STUDENT SERVICES (JANA SEVA KENDRA) TAB PANEL */}
      {activeTab === 'govt-services' && (
        <div id="govt-services" className="tab-panel active">
          {/* CSC CERTIFICATES */}
          <section className="service-detail-section" id="certificates">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">CSC Government Certificates</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e3f2fd,#bbdefb)' }}>📜</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Official Certificate Apply<br /><em style={{ color: 'var(--gold-dark)' }}>Hassle-Free Online</em></h2>
                  <p className="reveal">No need to visit government offices or wait in long lines. We handle the entire application process for Caste, Income, and Residence/Domicile certificates through verified CSC / Jana Seva Kendra channels.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="caste">Caste Certificate: SC, ST, OBC, and SEBC certificate apply</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="residence">Resident/Domicile Certificate: Online proof of address verification</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="income">Income Certificate: Government verified annual income certificates</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Birth and Death Certificate online application support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Proper documentation checking before submission to prevent rejection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Real-time status tracking and certificate downloading assistance</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Students applying for scholarships, job seekers, and citizens looking to avail government scheme benefits.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20help%20applying%20for%20a%20Government%20Certificate%20(Caste%2FIncome%2FResidence)." className="btn btn-gold reveal">Apply for Certificates →</Link>
                </div>
                <div className="sd-visual reveal badge-blue">
                  <div className="sd-visual-icon">📜</div>
                  <div className="sd-visual-title">CSC Services</div>
                  <div className="sd-visual-sub">Official Govt Certificates</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Caste Certificate</div>
                    <div className="sd-chip">Income Proof</div>
                    <div className="sd-chip">Residence / Domicile</div>
                    <div className="sd-chip">Birth & Death</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ID CARD CORRECTIONS */}
          <section className="service-detail-section bg-alt" id="id-corrections">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Identity Corrections</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)' }}>🆔</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Correct Name, Date of Birth<br /><em style={{ color: 'var(--gold-dark)' }}>& Address On Your IDs</em></h2>
                  <p className="reveal">Errors on identity cards cause major banking and travel problems. We provide comprehensive consultancy and form-filling support for correcting PAN, Voter ID, and Aadhaar cards.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="pan-change">PAN Card corrections: Name, Date of Birth, Father's Name change</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="aadhaar-change">Aadhaar Card update consultancy: Address, Name, Phone linking guide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="voter-change">Voter ID Card correction and digital EPIC card download support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Name correction in Educational marksheets/certificates guide</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Official Gazette notification advisory for legal name changes</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Individuals facing mismatch errors in bank accounts, passport applications, job verification, or tax filings.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20help%20correcting%20my%20details%20on%20my%20ID%20cards%20(PAN%2FAadhaar%2FVoter)." className="btn btn-gold reveal">Start ID Correction →</Link>
                </div>
                <div className="sd-visual reveal badge-teal">
                  <div className="sd-visual-icon">🆔</div>
                  <div className="sd-visual-title">ID Updates</div>
                  <div className="sd-visual-sub">Profile Corrections & Linking</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">PAN Card Changes</div>
                    <div className="sd-chip">Aadhaar Correction</div>
                    <div className="sd-chip">Voter Card Update</div>
                    <div className="sd-chip">Gazette Advisory</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RTO SERVICES */}
          <section className="service-detail-section" id="rto">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">RTO Services</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fff8e1,#ffecb3)' }}>🚗</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>RTO Licensing & Vehicle<br /><em style={{ color: 'var(--gold-dark)' }}>Registration Services</em></h2>
                  <p className="reveal">Skip the confusion of RTO rules. We provide professional consultancy for driving licenses, vehicle registrations, tax payments, and RC transfers through official online portals.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Fresh Driving License: Learner's & Permanent License apply</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Driving License Renewals and Address changes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Vehicle RC Transfer (Transfer of Ownership) support</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Duplicate RC issue and High Security Registration Plate (HSRP) booking</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>State-tax payments, NOC applications, and fitness certificate guide</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Car & bike owners, buyers of second-hand vehicles, and people relocating to different states requiring state transfer.</p></div>
                  <Link to="/contact?service=motor&message=I%20need%20RTO%20License%20or%20RC%20transfer%20consultancy." className="btn btn-gold reveal">Apply for RTO Service →</Link>
                </div>
                <div className="sd-visual reveal badge-orange">
                  <div className="sd-visual-icon">🚗</div>
                  <div className="sd-visual-title">RTO Desk</div>
                  <div className="sd-visual-sub">Licensing & Registration Support</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Driving License</div>
                    <div className="sd-chip">RC Transfer</div>
                    <div className="sd-chip">Tax Payments</div>
                    <div className="sd-chip">Duplicate RC</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PASSPORT & VISA */}
          <section className="service-detail-section bg-alt" id="passport-visa">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Passport & VISA</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' }}>✈️</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Global Travel Made Easy<br /><em style={{ color: 'var(--gold-dark)' }}>Passport & VISA Services</em></h2>
                  <p className="reveal">Planning an international vacation, study abroad, or global business expansion? We handle the entire application process for Indian Passports and assist in VISA documentation.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Apply for Fresh Passport and Re-issue of expired Passport</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Tatkaal Passport applications for urgent travel needs</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Documents checklist verification to prevent PSK rejection</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>VISA Consultancy: Tourist, Business, and Student VISA documents review</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Online form filling, appointment booking, and fee payment management</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Individuals planning overseas travel, corporate teams going abroad, and students heading to international colleges.</p></div>
                  <Link to="/contact?service=travel&message=I%20want%20to%20apply%20for%20Passport%2FVISA%20consultancy." className="btn btn-gold reveal">Get Passport / VISA Help →</Link>
                </div>
                <div className="sd-visual reveal badge-violet">
                  <div className="sd-visual-icon">✈️</div>
                  <div className="sd-visual-title">Global Travel</div>
                  <div className="sd-visual-sub">Application & Scheduling Desk</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Fresh Passport</div>
                    <div className="sd-chip">Renewals</div>
                    <div className="sd-chip">VISA Check</div>
                    <div className="sd-chip">Appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STUDENT DESK */}
          <section className="service-detail-section" id="student-desk">
            <div className="container">
              <div className="sdg">
                <div className="sd-content">
                  <div className="sd-eyebrow reveal">Student Desk</div>
                  <div className="sd-icon reveal" style={{ background: 'linear-gradient(135deg,#f3e5f5,#e1bee7)' }}>🎓</div>
                  <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--green-deeper)', marginBottom: '1rem' }}>Scholarships, Admissions<br /><em style={{ color: 'var(--gold-dark)' }}>& Competitive Exam Forms</em></h2>
                  <p className="reveal">Never miss an academic deadline. We provide dedicated application support for state/national scholarships, competitive examinations registration, and college applications.</p>
                  <div className="sd-benefits reveal">
                    <div className="sd-benefit"><div className="sd-check">✓</div><span id="scholarships">Scholarship Applications: NSP, State Scholarships, and merit schemes</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Competitive Exams form-filling: JEE, NEET, CUET, Banking, SSC, and state exams</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>College/University admission form submissions</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Document scanning, resizing, and uploading in required pixel/size formats</span></div>
                    <div className="sd-benefit"><div className="sd-check">✓</div><span>Alert notifications for last dates, correction windows, and admit card release</span></div>
                  </div>
                  <div className="sd-who reveal"><h4>💡 Who Should Buy?</h4><p>Students, parents, and job aspirants looking for error-free forms submission to prevent registration rejection.</p></div>
                  <Link to="/contact?service=other&message=I%20need%20assistance%20for%20Scholarship%2FExam%2FCollege%20applications." className="btn btn-gold reveal">Apply Now →</Link>
                </div>
                <div className="sd-visual reveal badge-purple">
                  <div className="sd-visual-icon">🎓</div>
                  <div className="sd-visual-title">Student Desk</div>
                  <div className="sd-visual-sub">Academic Forms & Scholarships</div>
                  <div className="sd-visual-chips">
                    <div className="sd-chip">Scholarships</div>
                    <div className="sd-chip">Exam Forms</div>
                    <div className="sd-chip">Admissions</div>
                    <div className="sd-chip">Format Resize</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-orb" aria-hidden="true"></div><div className="cta-orb2" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-content reveal">
            <div className="cta-eyebrow"><div className="cta-eyebrow-line"></div><div className="cta-eyebrow-text">Free Advisory</div><div className="cta-eyebrow-line"></div></div>
            <h2>Not Sure Which Plan<br /><em>Is Right for You?</em></h2>
            <p>Our advisors will listen, understand your situation, and recommend the perfect coverage — at no cost to you, with zero pressure.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">Talk to an Advisor</Link>
              <a href="https://wa.me/919583425025?text=Hello!%20I%20need%20help%20choosing%20the%20right%20insurance%20plan." className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
