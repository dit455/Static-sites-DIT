import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronLeft, ChevronRight,
  Bell, Briefcase, BookOpen, Link2, FileText,
  BarChart2, TrendingUp, ShoppingBag, Server, Landmark,
  FileCheck, Building, Shield, Home, Leaf, Zap, Globe,
  Search, Phone, Mail, MapPin, Users, Settings,
  CreditCard, PieChart, TrendingDown, Award,
  MessageSquare, Mic, Eye, ChevronDown,
} from "lucide-react";
import "./App.css";

import slide1 from "./assets/g20.png";
import slide2 from "./assets/photo1.png";
import governor from "./assets/LG1.jpg";
import cm from "./assets/cm1.jpg";
import secretary from "./assets/Secretary.jpg";
import logo from "./assets/header_logo.png";
import emblem from "./assets/emblem.png";

import PayGov from "./assets/pay-gov-n.png";
import PMIndia from "./assets/pm-india-n.png";
import DigitalIndia from "./assets/digitalindia-n.png";
import DataGov from "./assets/data-gov.png";
import MyGov from "./assets/my-gov.png";
import Lion from "./assets/lion.png";
import India from "./assets/india.png";
import NVSP from "./assets/n-nvsp.png";
import Tenders from "./assets/tenders-n.png";
import UPSC from "./assets/upsc-n.png";
import Jeevan from "./assets/17-sep-jeevan.png";
import Niti from "./assets/n-niti.png";
import IndiaGov from "./assets/india.gov.png";
import FinMin from "./assets/n-finmin-nic.png";
import PersMin from "./assets/n-persmin.png";
import Maha from "./assets/n-17-sep-maha.png";
import Gem from "./assets/n-gem.png";
import NicMail from "./assets/n-nic-mail-17-sep.png";


/* ══════════════════════════════════════════
   PARTNER IMAGES — place these in src/assets/partners/
   If images not found, fallback to initials badge
══════════════════════════════════════════ */
const partnerImages = [
  { name: "PayGov", file: PayGov },
  { name: "PM India", file: PMIndia },
  { name: "Digital India", file: DigitalIndia },
  { name: "Data.gov", file: DataGov },
  { name: "MyGov", file: MyGov },
  { name: "Jai Jawan", file: Lion },
  { name: "India", file: India },
  { name: "NVSP", file: NVSP },
  { name: "Tenders", file: Tenders },
  { name: "UPSC", file: UPSC },
  { name: "Jeevan", file: Jeevan },
  { name: "NITI Aayog", file: Niti },
  { name: "India.gov", file: IndiaGov },
  { name: "Fin Ministry", file: FinMin },
  { name: "Pers Ministry", file: PersMin },
  { name: "Maha", file: Maha },
  { name: "GeM", file: Gem },
  { name: "NIC Mail", file: NicMail },
];

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const notices = [
  { id: 1,  date: "13-05-2026", text: "Grant of enhanced rate of DA to employees drawing Pay scale/Grade Pay as per 6th CPC - Reg.", isNew: true },
  { id: 2,  date: "13-05-2026", text: "Grant of Dearness Relief to UT Government Pensioners/Family Pensioners - Revised rate effective from 01.01.2026", isNew: true },
  { id: 3,  date: "03-05-2026", text: "Payment of Dearness Allowance to UT Government Employees - Revised rate effective from 01.01.2026 - Orders - Communicated.", isNew: true },
  { id: 4,  date: "27-03-2026", text: "Functioning of Finance Department and DAT during weekly holidays in view of closure of Financial Year 2025-26 - Reg.", isNew: true },
  { id: 5,  date: "25-03-2026", text: "Memorandum/Representations on Terms of Reference of 8th Central Pay Commission called for by MHA - Reg.", isNew: true },
  { id: 6,  date: "24-03-2026", text: "Streamlining of file referrals - Avoidance of multiple/new files on ongoing proposals - Instructions - Issued.", isNew: false },
  { id: 7,  date: "19-03-2026", text: "Submission of expenditure proposals requiring concurrence of Finance Department well in advance - Instructions - Issued.", isNew: false },
  { id: 8,  date: "11-03-2026", text: "Promotion of Superintendents to the post of Junior Accounts Officer on Regular basis - Orders - Issued.", isNew: false },
];

const officers = [
  { id: 1, name: "Hon'ble Lt. Governor",  role: "LIEUTENANT GOVERNOR",    initials: "LG",  image: governor },
  { id: 2, name: "Hon'ble Chief Minister", role: "HON'BLE CHIEF MINISTER", initials: "CM",  image: cm       },
  { id: 3, name: "Secretary (Finance)",    role: "SECRETARY (FINANCE)",    initials: "SF",  image: secretary},
];

const navItems = [
  { label: "Home",           hasDropdown: false },
  { label: "About Us",       hasDropdown: true  },
  { label: "Notice Board",   hasDropdown: false },
  { label: "RTI",            hasDropdown: false },
  { label: "Download Forms", hasDropdown: false },
  { label: "FAQ",            hasDropdown: false },
  { label: "Contact Us",     hasDropdown: false },
];

const govServices = [
  {
    Icon: CreditCard,
    title: "Budget & Expenditure",
    desc: "Annual budget planning, expenditure monitoring, and financial oversight across all departments.",
    color: "#4f46e5",
    bg: "#eef2ff",
  },
  {
    Icon: FileCheck,
    title: "Circulars / Orders",
    desc: "Official financial guidelines, orders, templates, and policy documents from Finance Department.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    Icon: BarChart2,
    title: "BEAMS / IFMS",
    desc: "Budget Estimation, Allocation & Monitoring System and Integrated Financial Management System.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    Icon: TrendingUp,
    title: "Revenue Management",
    desc: "Tax administration, revenue collection, and financial planning for the Union Territory.",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    Icon: Award,
    title: "Pay & Accounts",
    desc: "Salary processing, GPF, pension management and accounts for UT Government employees.",
    color: "#dc2626",
    bg: "#fef2f2",
  },
  {
    Icon: Shield,
    title: "Audit & Compliance",
    desc: "Internal audit, compliance monitoring, and financial governance across all departments.",
    color: "#d97706",
    bg: "#fffbeb",
  },
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
  },
  {
    title:   "Transparency",
    subtitle:"Building trust through accountability",
    para:    "We ensure transparent utilization of public funds through robust monitoring systems, timely audits, and digital financial management solutions like BEAMS and IFMS for effective governance.",
    image:   slide2,
  },
];

const footerCols = [
  { heading: "Quick Links",   links: ["About Us","Services","Budget Documents","Projects","Downloads","Contact Us"] },
  { heading: "Citizen Services", links: ["Public Grievance Redressal","Track Complaint","Notifications & Alerts","Circulars & Orders","Tenders","Helpdesk Support"] },
  { heading: "Contact Information", isContact: true },
];

/* ══════════════════════════════════════════
   ACCESSIBILITY BAR
══════════════════════════════════════════ */
function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(false);

  const increase = () => {
    const next = Math.min(fontSize + 10, 130);
    setFontSize(next);
    document.documentElement.style.fontSize = next + "%";
  };
  const decrease = () => {
    const next = Math.max(fontSize - 10, 80);
    setFontSize(next);
    document.documentElement.style.fontSize = next + "%";
  };
  const reset = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = "100%";
  };
  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle("high-contrast");
  };

  return (
    <div className="access-bar" role="toolbar" aria-label="Accessibility options">
      <div className="access-bar__left">
        <a href="#" className="access-bar__link">
          <span className="access-bar__icon">👤</span> LOGIN PUDUCHERRY
        </a>
        <span className="access-bar__sep">|</span>
        <a href="#" className="access-bar__link">
          <Eye size={12} /> SCREEN READER
        </a>
      </div>
      <div className="access-bar__right">
        <span className="access-bar__label">
          <span className="access-bar__icon-wrap"><Settings size={11} /></span>
          ACCESSIBILITY
        </span>
        <button className="access-bar__btn" onClick={decrease} aria-label="Decrease font size" title="Decrease Font">A-</button>
        <button className="access-bar__btn access-bar__btn--normal" onClick={reset} aria-label="Normal font size" title="Normal Font">A</button>
        <button className="access-bar__btn access-bar__btn--large" onClick={increase} aria-label="Increase font size" title="Increase Font">A+</button>
        <span className="access-bar__sep">|</span>
        <button
          className={`access-bar__contrast-btn${contrast ? " active" : ""}`}
          onClick={toggleContrast} aria-label="Toggle high contrast" title="High Contrast"
        >
          <span className="access-bar__contrast-icon">◑</span> Contrast
        </button>
        <span className="access-bar__sep">|</span>
        <div className="access-bar__lang-select">
          <span className="access-bar__lang-icon">🌐</span>
          <select className="access-bar__lang-dd" aria-label="Select language">
            <option>ENGLISH</option>
            <option>தமிழ்</option>
            <option>हिन्दी</option>
          </select>
          <ChevronDown size={10} />
        </div>
        <span className="access-bar__sep">|</span>
        <a href="#contact" className="access-bar__link">
          <Mail size={11} /> CONTACT
        </a>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   HEADER
══════════════════════════════════════════ */
function Header() {
  const [active, setActive]         = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AccessibilityBar />
      <header className="site-header">
        {/* ROW 1: Emblem — Titles — Logo (centred) */}
        <div className="site-header__brand-row">
          <img src={emblem} alt="Emblem of India" className="site-header__emblem" />
          <div className="site-header__titles">
            <div className="site-header__gov-label">OFFICIAL GOVERNMENT PORTAL</div>
            <div className="site-header__dept-name">Finance Department</div>
            <div className="site-header__dept-tamil">நிதித்துறை</div>
            <div className="site-header__state-name">Government of Puducherry</div>
            <div className="site-header__multilang">புதுச்சேரி அரசு</div>
          </div>
          <img src={logo} alt="Puducherry Logo" className="site-logo" />
        </div>

        {/* ROW 2: Search bar — centred, full-width feel */}
        <div className="site-header__search-row desktop-only" role="search">
          <div className="site-header__search-wrap">
            <input className="site-header__search-input" type="search" placeholder="Search portal" aria-label="Search portal" />
            <button className="site-header__search-mic" aria-label="Voice search"><Mic size={16} /></button>
            <button className="site-header__search-btn" aria-label="Submit search"><Search size={16} /></button>
          </div>
        </div>

        <button
          className="navbar__hamburger mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Navigation bar */}
      <nav className="main-nav" aria-label="Main navigation">
        <div className="main-nav__inner desktop-only">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`main-nav__btn${active === item.label ? " active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              {item.label === "Home" && <Home size={14} />}
              {item.label}
              {item.hasDropdown && <ChevronDown size={12} />}
            </button>
          ))}
        </div>

        {mobileOpen && (
          <div className="header-mobile-menu">
            {navItems.map((item) => (
              <div key={item.label} className="navbar__mobile-item"
                onClick={() => { setActive(item.label); setMobileOpen(false); }}>
                {item.label}
              </div>
            ))}
            <div className="mobile-search">
              <input className="mobile-search__input" type="search" placeholder="Search portal..." />
              <button className="mobile-search__btn"><Search size={14} /></button>
            </div>
          </div>
        )}
      </nav>

      <div className="grad-divider" />
    </>
  );
}

/* ══════════════════════════════════════════
   HERO SLIDER — Full image with text overlay
══════════════════════════════════════════ */
function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((p) => (p + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slideData.length) % slideData.length);
  const next = () => setCurrent((p) => (p + 1) % slideData.length);
  const s    = slideData[current];

  return (
    <section className="hero-slider" aria-label="Hero slider">
      {/* Full background image — bright, clear */}
      <div className="hero-slider__bg" key={current}>
        <img src={s.image} alt={s.title} className="hero-slider__bg-img" />
        <div className="hero-slider__overlay" />
      </div>

      

      {/* Arrows */}
      <button className="hero-slider__arrow hero-slider__arrow--left" onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-slider__arrow hero-slider__arrow--right" onClick={next} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="hero-slider__dots">
        {slideData.map((_, i) => (
          <button key={i}
            className={`hero-slider__dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-slider__bottom-bar" />
    </section>
  );
}

/* ══════════════════════════════════════════
   DEPARTMENT OVERVIEW — Digital Governance card
══════════════════════════════════════════ */
function DeptOverview() {
  return (
    <section className="dept-overview-section fade-section">
      <div className="dept-overview__card dept-overview__card--main">
        <span className="dept-overview__label">DEPARTMENT OVERVIEW</span>
        <h2 className="dept-overview__title">Financial governance services<br/>for Puducherry</h2>
        <p className="dept-overview__desc">
          Leading the fiscal management and financial accountability of the Union Territory of Puducherry.
        </p>
        <div className="dept-overview__actions">
          <a href="#" className="dept-overview__link-btn">Explore services →</a>
        
        </div>
        <div className="dept-overview__meta">
          <div>
            <div className="dept-meta__label">DEPARTMENT</div>
            <div className="dept-meta__value">Finance Department</div>
          </div>
          <div>
            <div className="dept-meta__label">GOVERNMENT</div>
            <div className="dept-meta__value">Government of Puducherry</div>
          </div>
          <div>
            <div className="dept-meta__label">HELPDESK</div>
            <div className="dept-meta__value dept-meta__value--link">usfin[at]py[dot]gov[dot]in</div>
          </div>
        </div>
      </div>

      <div className="dept-overview__cards-grid">
        {govServices.map((svc, i) => (
          <div key={i} className="dept-svc-card" style={{ "--svc-color": svc.color, "--svc-bg": svc.bg }}>
            <div className="dept-svc-card__icon-wrap">
              <svc.Icon size={20} color={svc.color} />
            </div>
            <div>
              <div className="dept-svc-card__title">{svc.title}</div>
              <div className="dept-svc-card__desc">{svc.desc}</div>
            </div>
            <div className="dept-svc-card__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   DIGNITARIES & OFFICERS — 3-card grid like screenshot
══════════════════════════════════════════ */
function Dignitaries() {
  return (
    <section className="leadership-section fade-section">
      <div className="leadership-header">
        <h2 className="leadership-title">Dignitaries &amp; Officers</h2>
        <div className="leadership-underline" />
        <p className="leadership-desc">
          Key officials guiding financial governance, fiscal management, and citizen service delivery.
        </p>
        <a href="#" className="leadership-detail-btn">Detailed About Us →</a>
      </div>

      <div className="leadership-grid">
        {officers.map((o) => (
          <div key={o.id} className="leader-card">
            <div className="leader-card__avatar-wrap">
              <img src={o.image} alt={o.name} className="leader-card__img" />
            </div>
            <div className="leader-card__name">{o.name}</div>
            <div className="leader-card__role">{o.role}</div>
            <div className="leader-card__divider" />
            <a href="#" className="leader-card__mail-btn" aria-label={`Email ${o.name}`}>
              <Mail size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   KEY SERVICES
══════════════════════════════════════════ */
function KeyServices() {
  const services = [
    {
      Icon: BarChart2, title: "BEAMS Portal",
      desc: "Budget Estimation, Allocation & Monitoring System for digital financial management across departments.",
      tags: ["Learn more", "Apply"],
      iconBg: "#eef2ff", iconColor: "#4f46e5",
    },
    {
      Icon: PieChart, title: "State Budget",
      desc: "Centralized budget documents, revised estimates, and demand for grants for the Union Territory.",
      tags: ["View Budget", "Guidelines"],
      iconBg: "#ecfeff", iconColor: "#0891b2",
    },
    {
      Icon: Users, title: "Pay & Accounts",
      desc: "One-stop portal for employee salary, GPF, pension, and accounts management services.",
      tags: ["Employee Portal", "Register"],
      iconBg: "#ecfdf5", iconColor: "#059669",
    },
    {
      Icon: FileText, title: "Government Portals & Applications",
      desc: "Design, development, and maintenance support for official portals, applications, and online workflows.",
      tags: ["Portal support", "Request help"],
      iconBg: "#fef2f2", iconColor: "#dc2626",
    },
    {
      Icon: Shield, title: "Audit & Data Governance",
      desc: "Policy, advisory, and implementation support for secure government financial systems and data management.",
      tags: ["Audit services", "Guidelines"],
      iconBg: "#fffbeb", iconColor: "#d97706",
    },
    {
      Icon: Settings, title: "Capacity Building & IT",
      desc: "Technical consultancy, digital skill development, and project support for departmental digitization.",
      tags: ["Training support", "Contact FD"],
      iconBg: "#f5f3ff", iconColor: "#7c3aed",
    },
  ];

  return (
    <section className="key-services-section fade-section">
      <div className="key-services-header">
        
        <div className="key-services-title-row">
          <div>
            <h2 className="key-services-title">Our Key Services</h2>
            <p className="key-services-desc">A focused view of the financial infrastructure and citizen access platforms managed by the Finance Department.</p>
          </div>
          
        </div>
      </div>

      <div className="key-services-grid">
        {services.map((svc, i) => (
          <div key={i} className="key-svc-card">
            <div className="key-svc-card__icon" style={{ background: svc.iconBg }}>
              <svc.Icon size={22} color={svc.iconColor} />
            </div>
            <h3 className="key-svc-card__title">{svc.title}</h3>
            <p className="key-svc-card__desc">{svc.desc}</p>
            <div className="key-svc-card__tags">
              <button className="key-svc-tag key-svc-tag--primary">{svc.tags[0]}</button>
              <button className="key-svc-tag">{svc.tags[1]}</button>
            </div>
            
          </div>
        ))}
      </div>


      <div className="key-services-footer">
      <a href="#" className="key-services-view-all">
        VIEW ALL SERVICES →
      </a>
     </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   INFO GRID (existing section, kept)
══════════════════════════════════════════ */
function InfoGrid() {
  return (
    <section className="info-grid-section fade-section">
      <div className="section-title-wrap">
        <h2 className="section-title">Key Information &amp; Resources</h2>
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
   CONNECT WITH US — with Google Map embed
══════════════════════════════════════════ */
function ConnectWithUs() {
  return (
    <section id="contact" className="connect-section fade-section">
      <div className="connect-header">
        <h2 className="connect-title">Connect With Us</h2>
        <div className="connect-underline" />
      </div>

      <div className="connect-cards">
        <div className="connect-card">
          <div className="connect-card__icon-wrap connect-card__icon-wrap--blue">
            <MapPin size={22} color="#4f46e5" />
          </div>
          <h3 className="connect-card__heading">Visit Us</h3>
          <p className="connect-card__text">
            Finance Department<br />
            Secretariat, Anna Nagar,<br />
            Puducherry – 605 001, India
          </p>
        </div>

        <div className="connect-card">
          <div className="connect-card__icon-wrap connect-card__icon-wrap--purple">
            <Mail size={22} color="#7c3aed" />
          </div>
          <h3 className="connect-card__heading">Email Us</h3>
          <p className="connect-card__text">For official queries:</p>
          <a href="mailto:usfin@py.gov.in" className="connect-card__link">usfin[at]py[dot]gov[dot]in</a>
        </div>

        <div className="connect-card">
          <div className="connect-card__icon-wrap connect-card__icon-wrap--green">
            <Phone size={22} color="#059669" />
          </div>
          <h3 className="connect-card__heading">Call Us</h3>
          <p className="connect-card__text">Helpdesk Support Line:</p>
          <span className="connect-card__phone">0413 2233270</span>
        </div>
      </div>

      {/* Google Map embed */}
      <div className="connect-map">
        <iframe
          title="Finance Department Location"
          src="https://maps.google.com/maps?q=Directorate%20Of%20Accounts%20%26%20Treasuries%20Puducherry&z=17&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CONNECTED GOVERNMENT PARTNERS — scrolling real images
══════════════════════════════════════════ */
function ConnectedPartners() {
  const doubled = [...partnerImages, ...partnerImages];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Connected Government Platforms</h2>
      <div className="partners-underline" />

      <div className="partners-track-wrap">
        <div className="partners-track">
          {doubled.map(({ name, file }, i) => (
            <div key={i} className="partner-logo-card" tabIndex={0} aria-label={name}>
              <div className="partner-logo-img-wrap">
                <img
                   src={file}
                   alt={name}
                   className="partner-logo-img"
                   onError={(e) => {
                     e.currentTarget.style.display = "none";
                   const fb =
                     e.currentTarget.parentElement.querySelector(
                     ".partner-logo-fallback"
                   );
                    if (fb) fb.style.display = "flex";
            }}
          />
                
                
              </div>
              <span className="partner-logo-label">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   LAST UPDATED META BAR
══════════════════════════════════════════ */
function LastUpdatedBar() {
  return (
    <div className="last-updated-bar">
      <div className="last-updated-grid">
        <div className="last-updated-item">
          <div className="lu-label">LAST UPDATED</div>
          <div className="lu-value">29 May 2026</div>
        </div>
        <div className="last-updated-item">
          <div className="lu-label">CONTENT OWNER</div>
          <div className="lu-value">Finance Department, Government of Puducherry</div>
        </div>
        <div className="last-updated-item">
          <div className="lu-label">DEPARTMENT</div>
          <div className="lu-value">Finance Department</div>
        </div>
        <div className="last-updated-item">
          <div className="lu-label">WEB INFORMATION MANAGER</div>
          <div className="lu-value">Secretary (Finance)</div>
        </div>
        <div className="last-updated-item">
          <div className="lu-label">DESIGNATION</div>
          <div className="lu-value">Finance Secretary</div>
        </div>
        <div className="last-updated-item">
          <div className="lu-label">CONTACT</div>
          <div className="lu-value lu-link">✉ usfin[at]py[dot]gov[dot]in</div>
        </div>
        <div className="last-updated-item">
          <div className="lu-label">HELPDESK</div>
          <div className="lu-value lu-phone">📞 0413-2233270</div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   FOOTER — matches screenshot exactly
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-brand__logos">
            <img src={logo} alt="Emblem" className="footer-brand__emblem" />
          </div>
          <div className="footer-brand__dept-label">GOVERNMENT OF PUDUCHERRY</div>
          <div className="footer-brand__name">Finance Department</div>
          <p className="footer-brand__desc">
            Driving fiscal management, financial accountability, and budget governance across the Government of Puducherry.
          </p>
          <a href="#" className="footer-brand__official-badge">✅ Official Government Website</a>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <div className="footer-col__heading">
            <Link2 size={13} /> Quick Links
          </div>
          <ul className="footer-col__list">
            {["About Us","Services","Budget Documents","Projects","Downloads","Contact Us"].map(lnk => (
              <li key={lnk}><a href="#" className="footer-col__link">{lnk}</a></li>
            ))}
          </ul>
        </div>

        {/* Citizen Services */}
        <div className="footer-col">
          <div className="footer-col__heading">
            <Users size={13} /> Citizen Services
          </div>
          <ul className="footer-col__list">
            {["Public Grievance Redressal","Track Complaint","Notifications & Alerts","Circulars & Orders","Tenders","Helpdesk Support"].map(lnk => (
              <li key={lnk}><a href="#" className="footer-col__link">{lnk}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-col footer-col--contact">
          <div className="footer-col__heading">
            <Building size={13} /> Contact Information
          </div>
          <div className="footer-contact-block">
            
            <div className="footer-contact-item">
              <Mail size={12} />
              <span>usfin[at]py[dot]gov[dot]in</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={12} />
              <span>0413 2233270</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={12} />
              <span>Secretariat, Anna Nagar, Puducherry – 605 001</span>
            </div>
            <div className="footer-contact-item">
              <Bell size={12} />
              <span>Monday – Friday, 09:00 AM – 05:45 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Policy links bar */}
      <div className="footer-policy-bar">
        {["Privacy Policy","Hyperlinking Policy","Accessibility Statement","Website Policies","Disclaimer","Sitemap"].map((p, i, arr) => (
          <span key={p}>
            <a href="#" className="footer-policy-link">{p}</a>
            {i < arr.length - 1 && <span className="footer-policy-sep" />}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 Finance Department, Government of Puducherry. All Rights Reserved.
          &nbsp;·&nbsp; Last Updated: 29 May 2026 &nbsp;·&nbsp; Visitor Counter: 1,27,840
        </div>
        <div className="footer-copyright footer-copyright--small">
          Content Owner: Finance Department, Government of Puducherry | Web Information Manager: Secretary (Finance) | Designation: Finance Secretary
        </div>
        <div className="footer-back-top">
          <a href="#" className="footer-back-top-btn">↑ Back to Top</a>
          <span className="footer-powered">POWERED BY <strong>PEGS</strong></span>
        </div>
      </div>

      {/* Floating Ask Button */}
      <a href="#contact" className="ask-float-btn" aria-label="Ask Finance Department">
        <MessageSquare size={16} /> Ask FD
      </a>
    </footer>
  );
}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
export default function App() {
  // Intersection Observer for fade-section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      <Header />
      <main id="main-content">
        <HeroSlider />
        <DeptOverview />
        <Dignitaries />
        <KeyServices />
        <InfoGrid />
        <ConnectWithUs />
        <ConnectedPartners />
        <LastUpdatedBar />
      </main>
      <Footer />
    </div>
  );
}
