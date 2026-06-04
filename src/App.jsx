import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronLeft, ChevronRight,
  Bell, Briefcase, BookOpen, Link2, FileText,
  BarChart2, TrendingUp, ShoppingBag, Server, Landmark,
  FileCheck, Building, Shield, Home, Leaf, Zap, Globe,
  Search, Phone, Mail, MapPin,
} from "lucide-react";
import "./App.css";

import slide1 from "./assets/g20.jpg";
import slide2 from "./assets/photo1.png";
import governor from "./assets/LG1.jpg";
import cm from "./assets/cm1.jpg";
import secretary from "./assets/Secretary.jpg";
import logo from "./assets/header_logo.png";
import emblem from "./assets/emblem.png";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const notices = [
  { id: 1,  date: "13-05-2026", text: "Grant of enhanced rate of DA to employees drawing Pay scale/Grade Pay as per 6th CPC - Reg.", isNew: true },
  { id: 2,  date: "13-05-2026", text: "Grant of Dearness Relief to UT Government Pensioners/Family Pensioners - Revised rate effective from 01.01.2026", isNew: true },
  { id: 3,  date: "03-05-2026", text: "Payment of Dearness Allowance to UT Government Employees - Revised rate effective from 01.01.2026 - Orders - Communicated.", isNew: true },
  { id: 4,  date: "27-03-2026", text: "Functioning of Finance Department and DAT during weekly holidays in view of closure of Financial Year 2025-26 - Reg.", isNew: true },
  { id: 5,  date: "25-03-2026", text: "Memorandum/Representations on Terms of Reference of 8th Central Pay Commission called for by MHA - Reg.", isNew: true },
  { id: 6,  date: "24-03-2026", text: "Streamlining of file referrals - Avoidance of multiple/new files on ongoing proposals - Instructions - Issued.", isNew: true },
  { id: 7,  date: "19-03-2026", text: "Submission of expenditure proposals requiring concurrence of Finance Department well in advance - Instructions - Issued.", isNew: false },
  { id: 8,  date: "11-03-2026", text: "Promotion of Superintendents to the post of Junior Accounts Officer on Regular basis - Orders - Issued.", isNew: false },
  { id: 9,  date: "23-02-2026", text: "Transfer and posting / additional charges of Senior Accounts Officers and Junior Accounts Officers - Orders - Issued.", isNew: false },
  { id: 10, date: "23-02-2026", text: "Transfer and Posting of Junior Accounts Officer - Orders - Issued.", isNew: false },
  { id: 11, date: "03-02-2026", text: "Promotion to Deputy Director of Accounts & Treasuries/Senior Accounts Officer on regular basis - Orders - Issued.", isNew: false },
  { id: 12, date: "27-01-2026", text: "Filling up of vacant posts of Junior Accounts Officers on regular basis - Service Particulars and APARs called for.", isNew: false },
  { id: 13, date: "22-01-2026", text: "Payment of arrears of Special Allowance for Child Care for Women with Disabilities as per Seventh CPC recommendations.", isNew: false },
  { id: 14, date: "05-01-2026", text: "Procurement of Goods and Services through GeM Portal - Advisories from Chief Buyer Officer.", isNew: false },
  { id: 15, date: "30-12-2025", text: "Service particulars / APARs in r/o JAOs - Called for.", isNew: false },
];

const officers = [
  { id: 1, name: "Hon'ble Lt. Governor",   image: governor },
  { id: 2, name: "Hon'ble Chief Minister",  image: cm },
  { id: 3, name: "Secretary (Finance)",     image: secretary },
];

const adminOrders = [
  { text: "Secretary" },
  { text: "Sections of Finance Department" },
  { text: "Deputy Secretary" },
  { text: "Under Secretary" },
  { text: "Budget Officer" },
  { text: "Dy. Director (Ways & Means)" },
  { text: "Hon'ble Lt. Governor" },
  { text: "Hon'ble Chief Minister" },
];

const budgetDocs = [
  "Hon'ble LG Speech 2025-26",
  "Hon'ble CM Budget Speech",
  "Budget Estimate 2025-26",
  "Revised Estimate 2024-25",
  "Vote on Account 2024-25",
  "Demand for Grants 2023-24",
  "Hon'ble LG Speech 2021-22",
  "Demand for Grants 2021-22",
];

const partnerPortals = [
  { label: "IFMS Portal",     Icon: BarChart2  },
  { label: "PFMS",            Icon: TrendingUp  },
  { label: "GeM Portal",      Icon: ShoppingBag },
  { label: "NIC",             Icon: Server      },
  { label: "RBI",             Icon: Landmark    },
  { label: "CAG India",       Icon: FileCheck   },
  { label: "Min. of Finance", Icon: Building    },
  { label: "MHA",             Icon: Shield      },
  { label: "HUDCO",           Icon: Home        },
  { label: "NABARD",          Icon: Leaf        },
  { label: "REC Limited",     Icon: Zap         },
  { label: "Puducherry Govt", Icon: Globe       },
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
    Icon: Bell, color: "var(--primary)", borderTop: "4px solid var(--primary)",
    title: "BEAMS User Manual",
    items: ["Admin Module","Controlling Officer (CO) to DDO Module","Drawing and Disbursing Officer (DDO) Module","BEAMS Standard Operating Procedure"],
  },
  {
    Icon: Briefcase, color: "var(--secondary)", borderTop: "4px solid var(--secondary)",
    title: "Employees Corner",
    items: ["Recruitment Rules","Final Seniority List"],
  },
  {
    Icon: BookOpen, color: "var(--accent)", borderTop: "4px solid var(--accent)",
    title: "Documents",
    items: ["FD Compendium","GFR","Manual for Procurement of Goods 2024","Manual for Procurement of Consultancy and Other Services","Manual for Procurement of Works"],
  },
  {
    Icon: Link2, color: "var(--highlight)", borderTop: "4px solid var(--highlight)",
    title: "Useful Links",
    items: ["State Portal (py.gov.in)","DAT","Economics & Statistics","e-Salary","BEAMS"],
  },
];

const slideData = [
  {
    title:   "Governance",
    subtitle:"Serving the people with integrity",
    para:    "The Finance Department of the Government of Puducherry is responsible for sound fiscal management, budget preparation, financial oversight, and policy implementation across all departments of the Union Territory.",
    image:   slide1,
    bullets: ["Budget Planning & Execution","Revenue Management","Expenditure Control","Pay & Accounts Administration","Financial Oversight & Audit"],
  },
  {
    title:   "Transparency",
    subtitle:"Building trust through accountability",
    para:    "We ensure transparent utilization of public funds through robust monitoring systems, timely audits, and digital financial management solutions like BEAMS and IFMS for effective governance.",
    image:   slide2,
    bullets: ["BEAMS Digital Platform","IFMS Integration","Real-time Audit Trails","Timely Financial Reporting","Public Fund Accountability"],
  },
];

const footerCols = [
  { heading: "About Us",   links: ["Introduction","Vision & Mission","Organisation Chart","Who's Who","Sections","Finance Secretary"] },
  { heading: "Services",   links: ["Budget Documents","BEAMS Portal","e-Salary","DAT Portal","GeM Portal","PFMS"] },
  { heading: "Resources",  links: ["Download Forms","GFR Manual","Procurement Manual","FD Compendium","RTI","FAQ"] },
  { heading: "Help",       links: ["Contact Us","Feedback","Accessibility Statement","Privacy Policy","Disclaimer","Site Map"] },
];

/* ══════════════════════════════════════════
   HEADER  — centred layout, nav + search on same line on right
══════════════════════════════════════════ */
function Header() {
  const [active, setActive]         = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        {/* LEFT: emblem + titles + logo — centred block */}
        <div className="site-header__left">
          <img src={emblem} alt="Emblem of India" className="site-header__emblem" />
          <div className="site-header__titles">
            <div className="site-header__gov-label">GOVERNMENT OF INDIA</div>
            <div className="site-header__dept-name">Finance Department</div>
            <div className="site-header__state-name">Government of Puducherry</div>
            <div className="site-header__multilang">நிதித்துறை — புதுச்சேரி அரசு</div>
          </div>
          <img src={logo} alt="Puducherry Logo" className="site-logo" />
        </div>

        {/* RIGHT: nav links ROW 1 — search bar ROW 2 */}
        <div className="site-header__right">
          {/* Row 1: nav links */}
          <nav aria-label="Main navigation">
            <ul className="header-nav__list desktop-only">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    className={`header-nav__btn${active === item.label ? " active" : ""}`}
                    onClick={() => setActive(item.label)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Row 2: search bar */}
          <div className="header-search desktop-only" role="search">
            <input className="header-search__input" type="search" placeholder="Search..." aria-label="Site search" />
            <button className="header-search__btn" aria-label="Submit search"><Search size={14} /></button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="header-mobile-menu">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-item"
              onClick={() => { setActive(item.label); setMobileOpen(false); }}>
              {item.label}
            </div>
          ))}
          <div className="mobile-search">
            <input className="mobile-search__input" type="search" placeholder="Search..." />
            <button className="mobile-search__btn"><Search size={14} /></button>
          </div>
        </div>
      )}

      <div className="grad-divider" />
    </>
  );
}

/* ══════════════════════════════════════════
   HERO SLIDER  — dark violet / purple background
══════════════════════════════════════════ */
function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [expanded, setExpanded] = useState(false);
  const expandRef               = useRef(null);

  useEffect(() => {
    setExpanded(false);
    const iv = setInterval(() => {
      setCurrent((p) => (p + 1) % slideData.length);
      setExpanded(false);
    }, 5000);
    return () => clearInterval(iv);
  }, [current]);

  const prev = () => { setCurrent((p) => (p - 1 + slideData.length) % slideData.length); setExpanded(false); };
  const next = () => { setCurrent((p) => (p + 1) % slideData.length); setExpanded(false); };
  const s    = slideData[current];

  const handleLearnMore = () => {
    setExpanded(true);
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  return (
    <>
      <section className="hero-slider" aria-label="Hero slider">
        <button className="hero-slider__arrow hero-slider__arrow--left" onClick={prev} aria-label="Previous"><ChevronLeft size={22} /></button>

        <div className="hero-slider__inner slide-active" key={current}>
          {/* LEFT text */}
          <div className="hero-slider__text">
            
            <h1 className="hero-slider__title">{s.title}</h1>
            <p className="hero-slider__subtitle">{s.subtitle}</p>
            <p className="hero-slider__para">{s.para}</p>
            <button className="hero-slider__btn" onClick={handleLearnMore}>Learn More</button>
          </div>
          {/* RIGHT image */}
          <div className="hero-slider__img-wrap">
            <img src={s.image} alt={s.title} className="hero-slider__img" />
          </div>
        </div>

        <button className="hero-slider__arrow hero-slider__arrow--right" onClick={next} aria-label="Next"><ChevronRight size={22} /></button>

        {/* Dots */}
        <div className="hero-slider__dots">
          {slideData.map((_, i) => (
            <button key={i}
              className={`hero-slider__dot${i === current ? " active" : ""}`}
              onClick={() => { setCurrent(i); setExpanded(false); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-slider__bottom-bar" />
      </section>

      {/* Inline expanded panel */}
      {expanded && (
        <section ref={expandRef} className="hero-expand fade-section" aria-live="polite">
          <div className="hero-expand__inner">
            <div className="hero-expand__text">
              <span className="hero-expand__badge">About — {s.title}</span>
              <h2 className="hero-expand__title">{s.title}</h2>
              <p className="hero-expand__para">{s.para}</p>
              <ul className="hero-expand__list">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <button className="hero-expand__close" onClick={() => setExpanded(false)}>✕ Close</button>
            </div>
            <div className="hero-expand__img-wrap">
              <img src={s.image} alt={s.title} className="hero-expand__img" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ══════════════════════════════════════════
   WHAT'S NEW
══════════════════════════════════════════ */
function WhatsNew() {
  const doubled = [...notices, ...notices];
  return (
    <div className="whats-new">
      <div className="sec-header">
        <h2>📢 What's New</h2>
        <div className="accent-bar" style={{ background: "linear-gradient(90deg,var(--primary),var(--secondary))" }} />
      </div>
      <div className="news-scroll-wrap">
        <div className="news-track">
          {doubled.map((n, i) => (
            <div key={i} className="news-card">
              <div className="news-card__meta">
                <div className="news-card__date">{n.date}</div>
                {n.isNew && <div className="news-card__badge">NEW</div>}
              </div>
              <div className="news-card__text">{n.text}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="view-all-btn">View All Notices →</button>
    </div>
  );
}

/* ══════════════════════════════════════════
   DIGNITARIES
══════════════════════════════════════════ */
function Dignitaries() {
  return (
    <div className="dignitaries">
      <div className="sec-header">
        <h2>👤 Dignitaries &amp; Officers</h2>
        <div className="accent-bar" style={{ background: "linear-gradient(90deg,var(--secondary),var(--accent))" }} />
      </div>
      <div className="dignitaries__list">
        {officers.map((o) => (
          <div key={o.id} className="officer-card" tabIndex={0}>
            <img src={o.image} alt={o.name} className="officer-card__img" />
            <div className="officer-card__name">{o.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   ADMINISTRATION
══════════════════════════════════════════ */
function Administration() {
  return (
    <div className="administration">
      <div className="sec-header">
        <h2>⚙️ Administration</h2>
        <div className="accent-bar" style={{ background: "linear-gradient(90deg,var(--primary),var(--accent))" }} />
      </div>
      <div className="admin-list">
        {adminOrders.map((o, i) => (
          <div key={i} className="admin-item" tabIndex={0}>
            <span className="admin-item__arrow">›</span>
            <span className="admin-item__text">{o.text}</span>
          </div>
        ))}
      </div>
      <a href="#" className="view-all-link">View All Administration Orders →</a>
    </div>
  );
}

/* ══════════════════════════════════════════
   BUDGET
══════════════════════════════════════════ */
function Budget() {
  return (
    <div className="budget">
      <div className="sec-header">
        <h2>📊 Budget</h2>
        <div className="accent-bar" style={{ background: "linear-gradient(90deg,var(--secondary),var(--highlight))" }} />
      </div>
      <div className="budget-list">
        {budgetDocs.map((doc) => (
          <div key={doc} className="budget-item" tabIndex={0}>
            <div className="budget-item__left">
              <FileText size={15} color="var(--accent)" />
              <span className="budget-item__name">{doc}</span>
            </div>
            <span className="budget-item__badge">PDF</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   INFO GRID
══════════════════════════════════════════ */
function InfoGrid() {
  return (
    <section className="info-grid-section fade-section">
      <div className="section-title-wrap">
        <h2 className="section-title">Key Services &amp; Information</h2>
        <div className="section-underline" />
      </div>
      <div className="info-grid">
        {infoCards.map((c, i) => (
          <div key={i} className="info-card" style={{ borderTop: c.borderTop }}>
            <div className="info-card__head" style={{ background: c.color }}>
              <c.Icon size={20} color="#fff" />
              <span className="info-card__head-title">{c.title}</span>
            </div>
            <div className="info-card__body">
              {c.items.map((item, j) => (
                <div key={j} className="info-card__item" tabIndex={0}>
                  <span className="info-card__bullet">•</span>
                  <span className="info-card__item-text">{item}</span>
                </div>
              ))}
              <a href="#" className="info-card__view-all">View All →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PARTNER LOGOS
══════════════════════════════════════════ */
function PartnerLogos() {
  const doubled = [...partnerPortals, ...partnerPortals];
  return (
    <section className="partner-section">
      <div className="logo-wrap">
        <div className="logo-track">
          {doubled.map(({ label, Icon }, i) => (
            <div key={i} className="logo-card" tabIndex={0} aria-label={label}>
              <Icon size={26} className="logo-card__icon" />
              <span className="logo-card__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER  — professional multi-column
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="site-footer">
      {/* TOP: 5-column grid */}
      <div className="footer-top">
        {/* Brand col */}
        <div className="footer-brand">
          <div className="footer-brand__logos">
            
          </div>
          <div className="footer-brand__name">Finance Department</div>
          <div className="footer-brand__sub">Government of Puducherry</div>
          <div className="footer-brand__tamil">நிதித்துறை — புதுச்சேரி அரசு</div>
          <div className="footer-contact">
            <div className="footer-contact__item"><Phone size={12} /><span>0413 2233270</span></div>
            <div className="footer-contact__item"><Mail size={12} /><span>usfin[at]py[dot]gov[dot]in</span></div>
            <div className="footer-contact__item"><MapPin size={12} /><span>Puducherry – 605 001</span></div>
          </div>
        </div>

        {/* Link cols */}
        {footerCols.map((col) => (
          <div key={col.heading} className="footer-col">
            <div className="footer-col__heading">{col.heading}</div>
            <ul className="footer-col__list">
              {col.links.map((lnk) => (
                <li key={lnk}><a href="#" className="footer-col__link">{lnk}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* MIDDLE: dept name left, social right */}
      <div className="footer-mid">
        <div className="footer-mid__left">
          
        </div>
        <div className="footer-mid__social">
          {[
            { label: "Facebook",  letter: "f",  cls: "fb" },
            { label: "Twitter",   letter: "𝕏", cls: "tw" },
            { label: "YouTube",   letter: "▶", cls: "yt" },
            { label: "LinkedIn",  letter: "in", cls: "li" },
          ].map(({ label, letter, cls }) => (
            <a key={label} href="#" className={`footer-social-btn footer-social-btn--${cls}`} aria-label={label}>{letter}</a>
          ))}
        </div>
      </div>

      {/* BOTTOM: policy links + copyright */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2018 – All Rights Reserved. Finance Department, Government of Puducherry, India.
          &nbsp;|&nbsp; Content managed by Finance Department, Puducherry.
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main id="main-content">
        <HeroSlider />
        <div className="two-col-section fade-section">
          <WhatsNew />
          <Dignitaries />
        </div>
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