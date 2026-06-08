import React from 'react';

export default function PartnerMarquee() {
  const partners = [
    {
      title: "LIC of India",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" fill="#0c4a94"/>
          <path d="M12 22c4 4 12 4 16 0M10 20c2-1 4-3 4-5 0 4 3 6 6 6s6-2 6-6c0 2 2 4 4 5" stroke="#ffcc00" stroke-width="2" stroke-linecap="round"/>
          <circle cx="20" cy="13" r="3" fill="#ffcc00"/>
          <text x="44" y="26" fill="#0c4a94" font-weight="800" font-family="sans-serif" font-size="18" letter-spacing="1">LIC</text>
        </svg>
      )
    },
    {
      title: "HDFC Ergo",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="30" height="30" rx="4" fill="#003366"/>
          <path d="M9 13h4v14H9V13zm8 0h4v14h-4V13z" fill="#ffffff"/>
          <path d="M2 20h30" stroke="#da251c" stroke-width="3"/>
          <text x="40" y="21" fill="#003366" font-weight="800" font-family="sans-serif" font-size="12">HDFC</text>
          <text x="40" y="32" fill="#da251c" font-weight="800" font-family="sans-serif" font-size="10" letter-spacing="1">ERGO</text>
        </svg>
      )
    },
    {
      title: "ICICI Lombard",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="#8c1d40"/>
          <rect x="15" y="15" width="10" height="10" fill="#ff9933"/>
          <text x="42" y="20" fill="#8c1d40" font-weight="800" font-family="sans-serif" font-size="11">ICICI</text>
          <text x="42" y="31" fill="#ff9933" font-weight="700" font-family="sans-serif" font-size="9" letter-spacing="0.5">LOMBARD</text>
        </svg>
      )
    },
    {
      title: "Star Health",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" fill="#00529b"/>
          <path d="M20 9l3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" fill="#dd2a1b"/>
          <text x="44" y="20" fill="#00529b" font-weight="800" font-family="sans-serif" font-size="13">STAR</text>
          <text x="44" y="31" fill="#dd2a1b" font-weight="700" font-family="sans-serif" font-size="9">HEALTH</text>
        </svg>
      )
    },
    {
      title: "Care Health",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" fill="#0096ba"/>
          <path d="M20 10v20M10 20h20" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
          <text x="44" y="25" fill="#0096ba" font-weight="800" font-family="sans-serif" font-size="18" letter-spacing="0.5">care</text>
        </svg>
      )
    },
    {
      title: "Niva Bupa",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20c0-6 8-10 8-10s8 4 8 10c0 5-4 8-8 8s-8-3-8-8z" fill="#009688"/>
          <circle cx="20" cy="18" r="4" fill="#ff5722"/>
          <text x="44" y="20" fill="#009688" font-weight="800" font-family="sans-serif" font-size="12">niva</text>
          <text x="44" y="31" fill="#ff5722" font-weight="800" font-family="sans-serif" font-size="12">bupa</text>
        </svg>
      )
    },
    {
      title: "Tata AIG",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10h12M12 10v18" stroke="#1d70b8" stroke-width="3" stroke-linecap="round"/>
          <text x="40" y="21" fill="#1d70b8" font-weight="800" font-family="sans-serif" font-size="15" letter-spacing="1">TATA</text>
          <text x="40" y="32" fill="#00a896" font-weight="800" font-family="sans-serif" font-size="10" letter-spacing="2">AIG</text>
        </svg>
      )
    },
    {
      title: "Bajaj Allianz",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" fill="#003366"/>
          <path d="M14 20h12M20 14v12" stroke="#ffffff" stroke-width="2"/>
          <text x="42" y="20" fill="#003366" font-weight="800" font-family="sans-serif" font-size="11">BAJAJ</text>
          <text x="42" y="31" fill="#003366" font-weight="600" font-family="sans-serif" font-size="10" letter-spacing="1">Allianz</text>
        </svg>
      )
    },
    {
      title: "Go Digit",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="#ffcc00"/>
          <text x="14" y="26" fill="#2d3748" font-weight="900" font-family="sans-serif" font-size="18">d</text>
          <text x="44" y="26" fill="#2d3748" font-weight="800" font-family="sans-serif" font-size="18" letter-spacing="1">digit</text>
        </svg>
      )
    },
    {
      title: "SBI Life",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="#00a3e0"/>
          <circle cx="20" cy="20" r="6" fill="#ffffff"/>
          <rect x="18" y="20" width="4" height="12" fill="#ffffff"/>
          <text x="42" y="21" fill="#00a3e0" font-weight="800" font-family="sans-serif" font-size="14">SBI</text>
          <text x="42" y="32" fill="#2d3748" font-weight="700" font-family="sans-serif" font-size="10">Life</text>
        </svg>
      )
    },
    {
      title: "Reliance General",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="24" height="24" rx="12" fill="#005ea6"/>
          <path d="M10 20l3-5 5 8h4" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <text x="36" y="21" fill="#005ea6" font-weight="800" font-family="sans-serif" font-size="11">RELIANCE</text>
          <text x="36" y="31" fill="#2d3748" font-weight="600" font-family="sans-serif" font-size="9">General Insurance</text>
        </svg>
      )
    },
    {
      title: "National Insurance",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" fill="#0f766e"/>
          <path d="M12 20h16M20 12v16" stroke="#ffffff" stroke-width="2"/>
          <text x="40" y="20" fill="#0f766e" font-weight="800" font-family="sans-serif" font-size="13">NATIONAL</text>
          <text x="40" y="31" fill="#2d3748" font-weight="600" font-family="sans-serif" font-size="9">Insurance</text>
        </svg>
      )
    },
    {
      title: "New India Assurance",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" fill="#1e3a8a"/>
          <path d="M12 20s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#ffffff" stroke-width="2"/>
          <circle cx="20" cy="20" r="3" fill="#ffcc00"/>
          <text x="40" y="20" fill="#1e3a8a" font-weight="800" font-family="sans-serif" font-size="12">NEW INDIA</text>
          <text x="40" y="31" fill="#2d3748" font-weight="600" font-family="sans-serif" font-size="9">Assurance</text>
        </svg>
      )
    },
    {
      title: "Max Life",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="8" width="24" height="24" rx="4" fill="#111827"/>
          <path d="M12 14l4 6 4-6M12 26h8" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
          <text x="38" y="21" fill="#111827" font-weight="800" font-family="sans-serif" font-size="14">MAX</text>
          <text x="38" y="32" fill="#ef4444" font-weight="800" font-family="sans-serif" font-size="11">LIFE</text>
        </svg>
      )
    },
    {
      title: "Aditya Birla",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6l12 20H8L20 6z" fill="#991b1b"/>
          <circle cx="20" cy="18" r="4" fill="#ffcc00"/>
          <text x="38" y="20" fill="#991b1b" font-weight="800" font-family="sans-serif" font-size="12">ADITYA BIRLA</text>
          <text x="38" y="31" fill="#2d3748" font-weight="600" font-family="sans-serif" font-size="9" letter-spacing="1">CAPITAL</text>
        </svg>
      )
    },
    {
      title: "Kotak Life",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="24" height="24" rx="4" fill="#dd2c00"/>
          <text x="8" y="25" fill="#ffffff" font-weight="900" font-family="sans-serif" font-size="14">k</text>
          <text x="36" y="21" fill="#dd2c00" font-weight="800" font-family="sans-serif" font-size="14">KOTAK</text>
          <text x="36" y="32" fill="#2d3748" font-weight="600" font-family="sans-serif" font-size="10">Life Insurance</text>
        </svg>
      )
    }
  ];

  // Double list for infinite loop
  const listItems = [...partners, ...partners];

  return (
    <section className="partners-section" aria-label="Our Trusted Insurer Partners">
      <div className="container">
        <span className="section-tag">Our Trusted Insurance Partners</span>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {listItems.map((partner, index) => (
              <div className="partner-logo" title={partner.title} key={index}>
                {partner.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
