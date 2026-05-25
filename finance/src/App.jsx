import { useState, useEffect } from "react";
import {
  Menu, X, ChevronLeft, ChevronRight, ChevronDown,
  Bell, Briefcase, BookOpen, Link2, FileText,
  BarChart2, TrendingUp, ShoppingBag, Server, Landmark,
  FileCheck, Building, Shield, Home, Leaf, Zap, Globe,
  Search, Phone, Mail, Printer, ExternalLink,
} from "lucide-react";
import "./App.css";

import slide1 from "./assets/g20.jpg";
import slide2 from "./assets/photo1.png";
import governor from "./assets/LG1.jpg";
import cm from "./assets/cm1.jpg";
import secretary from "./assets/Secretary.jpg";
import logo from "./assets/header_logo.png";
import emblem from "./assets/emblem.png";


/* ════════════════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════════════════ */

const notices = [
  {
    id: 1,
    date: "13-05-2026",
    text: "Grant of enhanced rate of DA to the employees who are continuing to draw their Pay scale/Grade Pay as per 6th CPC - Reg.",
    isNew: true,
  },
  {
    id: 2,
    date: "13-05-2026",
    text: "Grant of Dearness Relief to the UT Government Pensioners/Family Pensioners - Revised rate effective from 01.01.2026",
    isNew: true,
  },
  {
    id: 3,
    date: "03-05-2026",
    text: "Payment of Dearness Allowance to the UT Government Employees - Revised rate effective from 01.01.2026 - Orders - Communicated.",
    isNew: true,
  },
  {
    id: 4,
    date: "27-03-2026",
    text: "Functioning of Finance Department and DAT during the weekly holidays in view of the closure of the Current Financial Year 2025-26 - Reg.",
    isNew: true,
  },
  {
    id: 5,
    date: "25-03-2026",
    text: "Memorandum/Representations on Terms of Reference of 8th Central Pay Commission called for by MHA - Reg.",
    isNew: true,
  },
  {
    id: 6,
    date: "24-03-2026",
    text: "Streamlining of file referrals - Avoidance of submission of multiple/new files on ongoing or continuing proposals - Instructions - Issued.",
    isNew: true,
  },
  {
    id: 7,
    date: "19-03-2026",
    text: "Submission of expenditure proposals requiring concurrence of Finance Department well in advance in view of the closure of Financial Year 2025-26 - Instructions - Issued.",
    isNew: false,
  },
  {
    id: 8,
    date: "11-03-2026",
    text: "Promotion of Superintendents to the post of Junior Accounts Officer on Regular basis - Orders - Issued.",
    isNew: false,
  },
  {
    id: 9,
    date: "23-02-2026",
    text: "Transfer and posting / additional charges of Senior Accounts Officers and Junior Accounts Officers - Orders - Issued.",
    isNew: false,
  },
  {
    id: 10,
    date: "23-02-2026",
    text: "Transfer and Posting of Junior Accounts Officer - Orders - Issued.",
    isNew: false,
  },
  {
    id: 11,
    date: "03-02-2026",
    text: "Promotion to the post of Deputy Director of Accounts & Treasuries/Senior Accounts Officer on regular basis - Posting Orders - Issued.",
    isNew: false,
  },
  {
    id: 12,
    date: "27-01-2026",
    text: "Filling up of the vacant posts of Junior Accounts Officers on regular basis - Service Particulars and APARs called for.",
    isNew: false,
  },
  {
    id: 13,
    date: "22-01-2026",
    text: "Payment of arrears of 'Special Allowance for Child Care for Women with Disabilities' as per Seventh CPC recommendations.",
    isNew: false,
  },
  {
    id: 14,
    date: "05-01-2026",
    text: "Procurement of Goods and Services through GeM Portal - Advisories received from Chief Buyer Officer, GEM emphasizing the avoidance of restrictive clauses in the Bids.",
    isNew: false,
  },
  {
    id: 15,
    date: "30-12-2025",
    text: "Service particulars / APARs in r/o JAOs - Called for.",
    isNew: false,
  },
  {
    id: 16,
    date: "12-12-2025",
    text: "Transfer and Posting of Junior Accounts Officer - Orders - Issued.",
    isNew: false,
  },
  {
    id: 17,
    date: "11-12-2025",
    text: "Examining the feasibility of extending the revised pay scales as per 7th CPC recommendations to the PSUs / Autonomous Bodies / Corporations / Societies.",
    isNew: false,
  },
  {
    id: 18,
    date: "01-12-2025",
    text: "Engagement of Thiru. U. Ilango, DDAT (Retired) as Consultant designated as OSD (Budget) in Finance Department (Budget), Puducherry.",
    isNew: false,
  },
  {
    id: 19,
    date: "25-11-2025",
    text: "Additional charge of Budget Officer duties to the DDAT/SAO - Orders - Issued.",
    isNew: false,
  },
  {
    id: 20,
    date: "19-11-2025",
    text: "Regularization of upgraded pay scales implemented by Govt. of Puducherry based on the recommendation of Single Member Committee.",
    isNew: false,
  },
  {
    id: 21,
    date: "19-11-2025",
    text: "Grant of enhanced rate of DA to the employees drawing their pay as per 6th CPC recommendations - Orders - Communicated.",
    isNew: false,
  },
  {
    id: 22,
    date: "28-10-2025",
    text: "FD - Revision of wages w.e.f.1.7.2025 for FTCLRs drawing wages as per 7CPC recommendations - Orders - Issued.",
    isNew: false,
  },
  {
    id: 23,
    date: "28-10-2025",
    text: "FD - Revision of wages w.e.f.1.7.2025 for PTCLRs drawing wages as per 7CPC recommendations - Orders - Issued.",
    isNew: false,
  },
  {
    id: 24,
    date: "27-10-2025",
    text: "Final Seniority List of Stores Superintendents.",
    isNew: false,
  },
  {
    id: 25,
    date: "22-10-2025",
    text: "GoI's order on refund of employees contribution in the event of death/disablement/invalidation of NPS subscribers prior to NPS Rules 2021 - Communicated.",
    isNew: false,
  },
];

const officers = [
  {
    id: 1,
    name: "Hon'ble Lt. Governor",
    image: governor,
  },
  {
    id: 2,
    name: "Hon'ble Chief Minister",
    image: cm,
  },
  {
    id: 3,
    name: "Secretary (Finance)",
    image: secretary,
  },
];

const adminOrders = [
  { text: "Secretary"},
  { text: "Sections of Finance Department" },
  { text: "Deputy Secretary" },
  { text: "Under Secretary" },
  { text: "Budget Officer" },
  { text: "Dy. Director(Ways & Means)" },
  { text: "Hon'ble Lt. Governor"},
  { text: "Hon'ble Chief Minister"},
];

const budgetDocs = [
  "Hon'ble LG Speech 2025-26", "Hon'ble CM Budget Speech", "Budget Estimate 2025-26",
  "Revised Estimate 2024-25", "Vote on Account 2024-25", "Demand for Grants 2023-24",
  "Hon'ble LG Speech 2021-22", "Demand for Grants 2021-22",
];



const partnerPortals = [
  { label: "IFMS Portal",       Icon: BarChart2  },
  { label: "PFMS",              Icon: TrendingUp  },
  { label: "GeM Portal",        Icon: ShoppingBag },
  { label: "NIC",               Icon: Server      },
  { label: "RBI",               Icon: Landmark    },
  { label: "CAG India",         Icon: FileCheck   },
  { label: "Min. of Finance",   Icon: Building    },
  { label: "MHA",               Icon: Shield      },
  { label: "HUDCO",             Icon: Home        },
  { label: "NABARD",            Icon: Leaf        },
  { label: "REC Limited",       Icon: Zap         },
  { label: "Puducherry Govt",   Icon: Globe       },
];

const slides = [
  {
    image: slide1,
    title: "Finance Department",
    sub: "Government of Puducherry",
  },
  {
    image: slide2,
    title: "Governance",
    sub: "Serving the people with integrity",
  },
];

const navItems = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Notice Board" },
  { label: "RTI" },
  { label: "Download Forms" },
  { label: "FAQ" },
  { label: "Contact Us" },
];



const infoCards = [
  {
    Icon: Bell,     color: "var(--primary)",   borderTop: "4px solid var(--primary)",
    title: "BEAMS User Manual",
    items: [
      "Admin Module",
      "Controlling Officer(CO) to Drawing and Disbursing Officer(DDO) Module",
      "Drawing and Disbursing Officer(DDO) Module",
      "BEAMS Standard Operating Procedure",
    ],
  },
  {
    Icon: Briefcase, color: "var(--secondary)", borderTop: "4px solid var(--secondary)",
    title: "Employees Corner",
    items: [
      "Recruitment Rules",
      "Final Seniority List",
    ],
  },
  {
    Icon: BookOpen, color: "var(--accent)",    borderTop: "4px solid var(--accent)",
    title: "Documents",
    items: [
      "FD Compendium",
      "GFR",
      "Manual for Procurement of Goods 2024",
      "Manual for Procurement of Consultancy and Other Services",
      "Manual for Procurement of Works",
    ],
  },
  {
    Icon: Link2,    color: "var(--highlight)", borderTop: "4px solid var(--highlight)",
    title: "Useful Links",
    items: [
      "State Portal(py.gov.in)",
      "DAT",
      "Economics & Statistics",
      "e-Salary",
      "BEAMS",
    ],
  },
];

const quickLinks = [
  "Home", "About Us", "Organization Chart", "Sections", "Who's Who",
  "Notice Board", "Budget Documents", "Downloads", "RTI", "Contact Us",
  "Sitemap", "Accessibility Statement", "Privacy Policy", "Disclaimer",
];

const relatedSites = [
  { n: "Government of Puducherry",               u: "py.gov.in"       },
  { n: "Directorate of Accounts & Treasuries",   u: "dat.py.gov.in"   },
  { n: "National Portal of India",               u: "india.gov.in"    },
  { n: "Ministry of Finance, GoI",               u: "finmin.gov.in"   },
  { n: "PFMS Portal",                            u: "pfms.nic.in"     },
  { n: "GeM Portal",                             u: "gem.gov.in"      },
  { n: "RBI Official Website",                   u: "rbi.org.in"      },
  { n: "CAG India",                              u: "cag.gov.in"      },
  { n: "NIC",                                    u: "nic.in"          },
  { n: "Digital India",                          u: "digitalindia.gov.in" },
];



/* ════════════════════════════════════════════════════════════
   COMPONENTS
   ════════════════════════════════════════════════════════════ */



/* ── HEADER ──────────────────────────────────────────────── */
function Header() {
  return (
    <>
      <div className="site-header">
        <div className="site-header__left">
          <img
            src={emblem}
            alt="Emblem of India"
            className="site-header__emblem"
          />

          <div>
            <div className="site-header__gov-label">
              GOVERNMENT OF INDIA
            </div>

            <div className="site-header__dept-name">
              Finance Department
            </div>

            <div className="site-header__state-name">
              Government of Puducherry
            </div>

            <div className="site-header__multilang">
              நிதித்துறை — புதுச்சேரி அரசு
            </div>
          </div>

          <img
            src={logo}
            alt="Puducherry Logo"
            className="site-logo"
          />
        </div>
      </div>

      <div className="grad-divider" />
    </>
  );
}

/* ── NAVBAR ──────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen]     = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Desktop list */}
        <ul className="navbar__list desktop-only" role="menubar">
          {navItems.map((item) => (
            <li key={item.label} className="nav-item" role="none">
              <button
                className={`nav-item__btn${active === item.label ? " active" : ""}`}
                onClick={() => setActive(item.label)}
                role="menuitem"
                aria-haspopup={!!item.children}
              >
                {item.label}
                {item.children && <ChevronDown size={13} aria-hidden="true" />}
              </button>
              {item.children && (
                <div className="dropdown" role="menu">
                  {item.children.map((c) => (
                    <a href="#" key={c} className="dropdown__link" role="menuitem">{c}</a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="navbar__hamburger mobile-only"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Search */}
        <div className="navbar__search desktop-only" role="search">
          <input
            className="navbar__search-input"
            type="search"
            placeholder="Search..."
            aria-label="Site search"
          />
          <button className="navbar__search-btn" aria-label="Submit search">
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="navbar__mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-item">{item.label}</div>
          ))}
        </nav>
      )}
    </nav>
  );
}

/* ── HERO SLIDER ─────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(iv);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  const s = slides[current];

  return (
    <div className="hero-slider" aria-label="Image slider" aria-roledescription="carousel">
      <div
        className="hero-slide slide-active"
        key={current}
        style={{
          backgroundImage: `url(${s.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}
        aria-label={`Slide ${current + 1} of ${slides.length}: ${s.title}`}
        role="group"
        aria-roledescription="slide"
      >
        <div className="hero-slide__dot-pattern" aria-hidden="true" />
        <div className="hero-slide__overlay"     aria-hidden="true" />
        <div className="hero-slide__content">
          
          <h1 className="hero-slide__title">{s.title}</h1>
          <p  className="hero-slide__subtitle">{s.sub}</p>
        </div>
        <div className="hero-slide__bottom-bar" aria-hidden="true" />
      </div>

      <button className="hero-slider__arrow hero-slider__arrow--left"  onClick={prev} aria-label="Previous slide"><ChevronLeft  size={20} /></button>
      <button className="hero-slider__arrow hero-slider__arrow--right" onClick={next} aria-label="Next slide"><ChevronRight size={20} /></button>

      <div className="hero-slider__dots" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`hero-slider__dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── WHAT'S NEW ──────────────────────────────────────────── */
function WhatsNew() {
  const doubled = [...notices, ...notices];
  return (
    <div className="whats-new">
      <div className="sec-header">
        <h2>📢 What's New</h2>
        <div
          className="accent-bar"
          style={{ background: "linear-gradient(90deg,var(--primary),var(--secondary))" }}
        />
      </div>

      <div className="news-scroll-wrap" aria-label="Scrolling notice board" aria-live="polite">
        <div className="news-track">
          {doubled.map((n, i) => (
            <div key={i} className="news-card">
              <div className="news-card__meta">
                <div className="news-card__date">{n.date}</div>
                {n.isNew && <div className="news-card__new-badge">NEW</div>}
              </div>
              <div className="news-card__text">{n.text}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="whats-new__view-all">View All Notices →</button>
    </div>
  );
}

/* ── DIGNITARIES ─────────────────────────────────────────── */
function Dignitaries() {
  return (
    <div className="dignitaries">
      <div className="sec-header">
        <h2>👤 Dignitaries &amp; Officers</h2>
        <div
          className="accent-bar"
          style={{ background: "linear-gradient(90deg,var(--secondary),var(--accent))" }}
        />
      </div>
      <div className="dignitaries__list">
        {officers.map((o) => (
          <div key={o.id} className="officer-card" tabIndex={0}>
            <img
              src={o.image}
              alt={o.name}
             className="officer-card__image"
            />
            <div>
              <div className="officer-card__name">{o.name}</div>
              <div className="officer-card__designation">{o.designation}</div>
              <div className="officer-card__dept">{o.dept}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── ADMINISTRATION ──────────────────────────────────────── */
function Administration() {
  return (
    <div className="administration">
      <div className="sec-header">
        <h2>⚙️ Administration</h2>
        <div
          className="accent-bar"
          style={{ background: "linear-gradient(90deg,var(--primary),var(--accent))" }}
        />
      </div>
      <div className="admin-orders-list">
        {adminOrders.map((o, i) => (
          <div key={i} className="admin-order" tabIndex={0}>
            <span className="admin-order__arrow" aria-hidden="true">›</span>
            <div>
              <div className="admin-order__text">{o.text}</div>
              {o.date && <div className="admin-order__date">[{o.date}]</div>}
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="admin__view-all">View All Administration Orders →</a>
    </div>
  );
}

/* ── BUDGET ──────────────────────────────────────────────── */
function Budget() {
  return (
    <div className="budget">
      <div className="sec-header">
        <h2>📊 Budget</h2>
        <div
          className="accent-bar"
          style={{ background: "linear-gradient(90deg,var(--secondary),var(--highlight))" }}
        />
      </div>

    

      {/* Doc list */}
      <div className="budget-docs-list">
        {budgetDocs.map((doc) => (
          <div key={doc} className="budget-doc-card info-card" tabIndex={0}>
            <div className="budget-doc-card__left">
              <FileText size={16} color="var(--accent)" aria-hidden="true" />
              <span className="budget-doc-card__name">{doc}</span>
            </div>
            <span className="budget-doc-card__badge">PDF</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── INFO GRID ───────────────────────────────────────────── */
function InfoGrid() {
  return (
    <section className="info-grid-section fade-section">
      <div className="info-grid__header">
        <h2 className="info-grid__title">Key Services &amp; Information</h2>
        <div className="info-grid__underline" />
      </div>
      <div className="info-grid__grid">
        {infoCards.map((c, i) => (
          <div
            key={i}
            className="info-grid-card"
            style={{ borderTop: c.borderTop }}
          >
            <div className="info-grid-card__header" style={{ background: c.color }}>
              <c.Icon size={20} color="#fff" aria-hidden="true" />
              <span className="info-grid-card__header-title">{c.title}</span>
            </div>
            <div className="info-grid-card__body">
              {c.items.map((item, j) => (
                <div key={j} className="info-grid-card__item" tabIndex={0}>
                  <span className="info-grid-card__bullet" aria-hidden="true">•</span>
                  <span className="info-grid-card__item-text">{item}</span>
                </div>
              ))}
              <a href="#" className="info-grid-card__view-all">View All →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PARTNER LOGOS ───────────────────────────────────────── */
function PartnerLogos() {
  const doubled = [...partnerPortals, ...partnerPortals];
  return (
    <section className="partner-section" aria-label="Partner portals">
      <div className="logo-wrap">
        <div className="logo-track">
          {doubled.map(({ label, Icon }, i) => (
            <div key={i} className="logo-card" tabIndex={0} aria-label={label}>
              <Icon size={28} className="logo-card__icon" aria-hidden="true" />
              <span className="logo-card__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ── FOOTER ──────────────────────────────────────────────── */


function Footer() {
  return (
    <footer className="bg-[#0b1f3a] text-white pt-8 pb-5 mt-10">
  <div className="max-w-7xl mx-auto px-4 text-center">

    {/* Policy Links */}
    <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base mb-6">
      <a href="#" className="hover:text-emerald-400">Accessibility Statement</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Copyright Policy</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Disclaimer</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Site Map</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Feedback</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Hyperlink Policy</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Terms & Conditions</a>
      <span>|</span>

      <a href="#" className="hover:text-emerald-400">Terms of Use</a>
      <span>|</span>
      

      <a href="#" className="hover:text-emerald-400">Help</a>
    </div>

    <br>
    </br>

    {/* Copyright */}
    <p className="text-sm md:text-base mb-3">
      Copyright © 2018 - All Rights Reserved - Official Website of
      Finance Department, Government of Puducherry, India.
    </p>

    {/* Note */}
    <p className="text-sm text-gray-300 mb-2">
      Note: Content on this website is published and managed by
      Finance Department, Government of Puducherry.
    </p>

    {/* Contact */}
    <p className="text-sm text-gray-300 mb-1">
      For any query regarding this website, please contact the web
      information manager SHRI. Arjun Ramakrishnan,
      Under Secretary(Finance), Finance Department, Puducherry.
    </p>

    <p className="text-sm text-gray-300 mb-5">
      E-mail ID: usfin[at]py[dot]gov[dot]in |
      Contact No: 0413 2233270
    </p>

    {/* Bottom Row */}
    <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Visitors */}
      <p className="text-sm">
        Site Visitors: <span className="font-semibold">431093</span>
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
        >
          <i className="fab fa-facebook-f text-white"></i>
        </a>{" "}
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center hover:scale-110 transition"
        >
        <i className="fab fa-twitter text-white"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

  );
}

/* ════════════════════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════════════════════ */
export default function App() {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <div className="app-root">
  
      <Header />
      <Navbar />

      <main id="main-content">
        <HeroSlider />

        {/* What's New + Dignitaries */}
        <div className="two-col-section fade-section">
          <WhatsNew />
          <Dignitaries />
        </div>

        {/* Administration + Budget */}
        <div className="admin-budget-section fade-section">
          <Administration />
          <Budget />
        </div>

        <InfoGrid />
        <PartnerLogos />
      </main>

      <Footer />
    </div>
  );
}