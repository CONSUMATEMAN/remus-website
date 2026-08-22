"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Copy,
  FileText,
  Flame,
  Lock,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const CONTRACT_ADDRESS = "COMING SOON";

const TELEGRAM_URL = "https://t.me/thefomomascot";
const X_URL = "https://x.com/RemusBSC";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyContract = async () => {
    if (CONTRACT_ADDRESS === "COMING SOON") return;

    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="remus-site">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />
      <div className="site-glow site-glow-three" />
      <div className="site-grid" />
      <div className="noise-overlay" />

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <div className="brand-logo">
              <Image
                src="/remus-logo.png"
                alt="$REMUS Official Logo"
                fill
                priority
                sizes="64px"
              />
            </div>

            <div className="brand-text">
              <strong>$REMUS</strong>
              <span>THE OFFICIAL FOMO MASCOT</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#tokenomics">TOKENOMICS</a>
            <a href="#roadmap">ROADMAP</a>
            <a href="#whitepaper">WHITEPAPER</a>
            <a href="#community">COMMUNITY</a>
          </nav>

          <div className="nav-actions">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
              aria-label="Follow REMUS on X"
            >
              <X size={17} />
              <span>X</span>
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
              aria-label="Join REMUS Telegram"
            >
              <Users size={17} />
              <span>TG</span>
            </a>

            <a href="#buy" className="nav-buy">
              BUY $REMUS
              <ArrowRight size={15} />
            </a>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#home" onClick={closeMenu}>
              HOME
            </a>
            <a href="#about" onClick={closeMenu}>
              ABOUT
            </a>
            <a href="#tokenomics" onClick={closeMenu}>
              TOKENOMICS
            </a>
            <a href="#roadmap" onClick={closeMenu}>
              ROADMAP
            </a>
            <a href="#whitepaper" onClick={closeMenu}>
              WHITEPAPER
            </a>
            <a href="#community" onClick={closeMenu}>
              COMMUNITY
            </a>

            <div className="mobile-nav-socials">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <X size={18} />
                FOLLOW ON X
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Users size={18} />
                JOIN TELEGRAM
              </a>
            </div>

            <a href="#buy" onClick={closeMenu} className="mobile-buy">
              BUY $REMUS
              <ArrowRight size={17} />
            </a>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <Image
            src="/remus-banner.jpg"
            alt="$REMUS The Next Big Thing"
            fill
            priority
            className="hero-background-image"
            sizes="100vw"
          />

          <div className="hero-overlay" />
          <div className="hero-overlay-right" />
          <div className="hero-scanline" />
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-status">
              <span className="status-dot" />
              BINANCE SMART CHAIN
              <span className="status-divider" />
              THE FOMO MOVEMENT
            </div>

            <div className="eyebrow">
              <Sparkles size={15} />
              THE OFFICIAL FOMO MASCOT
            </div>

            <h1>
              <span>$REMUS</span>
              <strong>THE NEXT BIG THING</strong>
            </h1>

            <p>
              Meet the official FOMO Mascot of the Binance Smart Chain.
              Built for the community, powered by momentum, and ready to become
              part of the next major crypto movement.
            </p>

            <div className="hero-trust-row">
              <div>
                <Users size={20} />
                <span>COMMUNITY DRIVEN</span>
              </div>

              <div>
                <Rocket size={20} />
                <span>FAIR LAUNCH</span>
              </div>

              <div>
                <Lock size={20} />
                <span>LP LOCKED</span>
              </div>

              <div>
                <ShieldCheck size={20} />
                <span>RENOUNCED</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#buy" className="primary-button">
                BUY $REMUS
                <ArrowRight size={18} />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                JOIN TELEGRAM
                <Users size={18} />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
                aria-label="Follow REMUS on X"
              >
                <X size={19} />
              </a>
            </div>

            <div className="hero-contract">
              <div className="contract-label">
                <span>CONTRACT ADDRESS</span>
                <small>CA</small>
              </div>

              <strong>{CONTRACT_ADDRESS}</strong>

              <button
                onClick={copyContract}
                disabled={CONTRACT_ADDRESS === "COMING SOON"}
                aria-label="Copy contract address"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>
            </div>
          </div>

          <a href="#about" className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={17} />
          </a>
        </div>
      </section>

      {/* =========================================================
          PREMIUM PROJECT BAR
      ========================================================= */}
      <section className="container premium-banner-wrap">
        <div className="premium-banner">
          <div className="premium-banner-image">
            <Image
              src="/remus-logo.png"
              alt="$REMUS Mascot"
              fill
              sizes="220px"
            />
          </div>

          <div className="premium-banner-title">
            <span>THE OFFICIAL</span>
            <strong>$REMUS</strong>
            <small>THE NEXT BIG THING</small>
          </div>

          <div className="premium-banner-features">
            <div>
              <Users size={18} />
              <span>COMMUNITY</span>
            </div>

            <div>
              <Rocket size={18} />
              <span>FAIR LAUNCH</span>
            </div>

            <div>
              <Lock size={18} />
              <span>LIQUIDITY</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>RENOUNCED</span>
            </div>
          </div>

          <div className="banner-social-actions">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="banner-buy"
            >
              JOIN TELEGRAM
              <Users size={16} />
            </a>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="banner-social"
            >
              FOLLOW X
              <X size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="container stats-section">
        <div className="stats-header">
          <span>PROJECT OVERVIEW</span>
          <div />
          <small>REMUS / 2026</small>
        </div>

        <div className="stats-panel">
          <div className="stat-item">
            <span>TOTAL SUPPLY</span>
            <strong>100,000</strong>
            <small>$REMUS</small>
          </div>

          <div className="stat-item">
            <span>TAX</span>
            <strong>7%</strong>
            <small>TOTAL TAX</small>
          </div>

          <div className="stat-item">
            <span>NETWORK</span>
            <strong>BSC</strong>
            <small>BINANCE SMART CHAIN</small>
          </div>

          <div className="stat-item">
            <span>LIQUIDITY</span>
            <strong>LOCKED</strong>
            <small>
              <Lock size={13} />
            </small>
          </div>

          <div className="stat-item">
            <span>CONTRACT</span>
            <strong>RENOUNCED</strong>
            <small>
              <ShieldCheck size={14} />
            </small>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about" className="section container">
        <div className="section-topline">
          <span>01</span>
          <span>ABOUT THE MOVEMENT</span>
        </div>

        <div className="about-grid">
          <div className="about-logo-card">
            <div className="about-logo-grid" />
            <div className="about-logo-glow" />

            <div className="logo-orbit orbit-one" />
            <div className="logo-orbit orbit-two" />

            <Image
              src="/remus-logo.png"
              alt="$REMUS Official FOMO Mascot"
              width={520}
              height={520}
              className="about-logo-image"
            />

            <div className="logo-card-label">
              <span>IDENTITY</span>
              <strong>REMUS</strong>
            </div>
          </div>

          <div className="about-content">
            <div className="section-kicker">
              <Sparkles size={16} />
              THE FOMO MOVEMENT
            </div>

            <h2>
              ABOUT <span>$REMUS</span>
            </h2>

            <p className="lead">
              $REMUS is the official FOMO Mascot built around the energy,
              excitement and unstoppable momentum of the crypto community.
            </p>

            <p>
              This is more than another token. REMUS represents the feeling of
              seeing something move before everyone else realizes what is
              happening.
            </p>

            <div className="about-pills">
              <span>100% COMMUNITY</span>
              <span>TRANSPARENT</span>
              <span>LONG TERM VISION</span>
              <span>NO TEAM TOKENS</span>
            </div>

            <div className="about-socials">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                JOIN TELEGRAM
                <Users size={18} />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                FOLLOW ON X
                <X size={17} />
              </a>
            </div>
          </div>

          <div className="video-card">
            <div className="video-frame">
              <video
                src="/remus-video.mp4"
                controls
                playsInline
                poster="/remus-banner.jpg"
              />

              <div className="video-corner top-left" />
              <div className="video-corner top-right" />
              <div className="video-corner bottom-left" />
              <div className="video-corner bottom-right" />
            </div>

            <div className="video-label">
              <Zap size={16} />
              WATCH REMUS VIDEO
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOKENOMICS
      ========================================================= */}
      <section id="tokenomics" className="section container">
        <div className="section-topline">
          <span>02</span>
          <span>TOKEN STRUCTURE</span>
        </div>

        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <Wallet size={16} />
              TOKEN ECONOMICS
            </div>

            <h2>
              TOKEN<span>OMICS</span>
            </h2>
          </div>

          <p>
            A simple and transparent structure designed to support the REMUS
            ecosystem and community movement.
          </p>
        </div>

        <div className="tokenomics-grid">
          <div className="tax-card">
            <div className="tax-card-top">
              <span>TOTAL TAX</span>
              <span>01 / 03</span>
            </div>

            <div className="tax-ring">
              <div>
                <strong>7%</strong>
                <span>TOTAL TAX</span>
              </div>
            </div>

            <div className="tax-card-bottom">
              <span>BUY / SELL</span>
              <strong>7%</strong>
            </div>
          </div>

          <div className="tax-breakdown">
            <div className="tax-row">
              <div className="tax-row-icon">
                <Rocket size={20} />
              </div>

              <div className="tax-row-info">
                <span>LIQUIDITY</span>
                <small>Supporting the trading ecosystem</small>
              </div>

              <strong>3%</strong>
            </div>

            <div className="tax-row">
              <div className="tax-row-icon">
                <Flame size={20} />
              </div>

              <div className="tax-row-info">
                <span>MARKETING</span>
                <small>Fueling awareness and growth</small>
              </div>

              <strong>2%</strong>
            </div>

            <div className="tax-row">
              <div className="tax-row-icon">
                <Sparkles size={20} />
              </div>

              <div className="tax-row-info">
                <span>BNB REWARDS</span>
                <small>Automatic community rewards</small>
              </div>

              <strong>2%</strong>
            </div>

            <div className="tokenomics-note">
              <ShieldCheck size={18} />
              <span>
                Simple structure. Clear allocation. Community-focused
                mechanics.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROADMAP
      ========================================================= */}
      <section id="roadmap" className="section container">
        <div className="section-topline">
          <span>03</span>
          <span>THE JOURNEY</span>
        </div>

        <div className="section-heading centered">
          <div>
            <div className="section-kicker">
              <Rocket size={16} />
              THE JOURNEY
            </div>

            <h2>
              ROAD<span>MAP</span>
            </h2>
          </div>
        </div>

        <div className="roadmap">
          <div className="roadmap-line" />

          <article className="roadmap-card active-phase">
            <div className="roadmap-icon">
              <Rocket size={27} />
            </div>

            <span>PHASE 01</span>
            <h3>LAUNCH</h3>

            <p>
              Token launch, PancakeSwap, website and community building.
            </p>

            <div className="roadmap-status">
              <span />
              FOUNDATION
            </div>
          </article>

          <article className="roadmap-card">
            <div className="roadmap-icon">
              <BarChart3 size={27} />
            </div>

            <span>PHASE 02</span>
            <h3>GROWTH</h3>

            <p>
              Marketing campaigns, partnerships and exchange expansion.
            </p>

            <div className="roadmap-status">
              <span />
              MOMENTUM
            </div>
          </article>

          <article className="roadmap-card">
            <div className="roadmap-icon">
              <Users size={27} />
            </div>

            <span>PHASE 03</span>
            <h3>EXPANSION</h3>

            <p>
              More utilities, global community development and stronger reach.
            </p>

            <div className="roadmap-status">
              <span />
              EXPANSION
            </div>
          </article>

          <article className="roadmap-card">
            <div className="roadmap-icon">
              <Zap size={27} />
            </div>

            <span>PHASE 04</span>
            <h3>DOMINATION</h3>

            <p>
              Building REMUS into a globally recognized FOMO mascot.
            </p>

            <div className="roadmap-status">
              <span />
              THE MISSION
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          WHITEPAPER
      ========================================================= */}
      <section id="whitepaper" className="section container">
        <div className="whitepaper-card">
          <div className="whitepaper-content">
            <div className="section-kicker">
              <FileText size={16} />
              OFFICIAL DOCUMENT
            </div>

            <h2>
              THE <span>REMUS</span> WHITEPAPER
            </h2>

            <p>
              Explore the complete vision, community philosophy, tokenomics,
              security principles, roadmap and long-term ambition behind the
              Official FOMO Mascot.
            </p>

            <a href="#community" className="primary-button">
              EXPLORE THE VISION
              <ChevronRight size={18} />
            </a>
          </div>

          <div className="whitepaper-symbol">
            <div className="whitepaper-ring" />

            <Image
              src="/remus-logo.png"
              alt="$REMUS"
              width={300}
              height={300}
            />
          </div>

          <div className="whitepaper-meta">
            <span>REMUS / DOCUMENT</span>
            <strong>2026</strong>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUY / COMMUNITY CTA
      ========================================================= */}
      <section id="buy" className="section container">
        <div className="buy-panel">
          <div className="buy-panel-glow" />

          <div className="buy-copy">
            <div className="section-kicker">
              <Zap size={16} />
              DON&apos;T GET LEFT BEHIND
            </div>

            <h2>
              JOIN THE <span>REMUS ARMY</span>
            </h2>

            <p>
              Be part of the official FOMO movement on the Binance Smart Chain.
            </p>
          </div>

          <div className="buy-actions">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              JOIN TELEGRAM
              <Users size={18} />
            </a>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              FOLLOW ON X
              <X size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY
      ========================================================= */}
      <section id="community" className="section container">
        <div className="section-topline">
          <span>04</span>
          <span>COMMUNITY NETWORK</span>
        </div>

        <div className="community-intro">
          <div>
            <div className="section-kicker">
              <Users size={16} />
              THE REMUS ARMY
            </div>

            <h2>
              BUILT BY THE <span>COMMUNITY</span>
            </h2>
          </div>

          <p>
            The movement grows through its holders, believers and the people
            who understand FOMO before everyone else does.
          </p>
        </div>

        <div className="community-grid">
          <div className="community-card">
            <div className="community-card-number">01</div>

            <div className="community-icon">
              <Users />
            </div>

            <h3>COMMUNITY POWERED</h3>

            <p>
              REMUS grows through its holders, believers and the strength of
              the community behind it.
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="community-link"
            >
              JOIN TELEGRAM
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="community-card">
            <div className="community-card-number">02</div>

            <div className="community-icon">
              <Rocket />
            </div>

            <h3>BUILT FOR MOMENTUM</h3>

            <p>
              Designed around the power of attention, momentum and the
              unstoppable energy of FOMO.
            </p>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="community-link"
            >
              FOLLOW ON X
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="community-card">
            <div className="community-card-number">03</div>

            <div className="community-icon">
              <ShieldCheck />
            </div>

            <h3>TRANSPARENT VISION</h3>

            <p>
              A simple structure, clear direction and a community-focused
              approach to long-term growth.
            </p>

            <div className="community-social-row">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Telegram"
              >
                <Users size={18} />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on X"
              >
                <X size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL SOCIAL CTA
      ========================================================= */}
      <section className="container final-cta">
        <div className="final-cta-inner">
          <div className="final-cta-logo">
            <Image
              src="/remus-logo.png"
              alt="$REMUS"
              fill
              sizes="100px"
            />
          </div>

          <div>
            <span>THE FOMO HAS A FACE.</span>
            <strong>$REMUS</strong>
          </div>

          <div className="final-cta-actions">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              TELEGRAM
              <Users size={17} />
            </a>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              X / TWITTER
              <X size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer>
        <div className="container footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/remus-logo.png"
                alt="$REMUS Logo"
                fill
                sizes="72px"
              />
            </div>

            <div>
              <strong>$REMUS</strong>
              <span>THE OFFICIAL FOMO MASCOT</span>

              <div className="footer-socials">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users size={16} />
                  Telegram
                </a>

                <a
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X size={16} />
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <strong>QUICK LINKS</strong>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#tokenomics">Tokenomics</a>
            </div>

            <div>
              <strong>PROJECT</strong>
              <a href="#roadmap">Roadmap</a>
              <a href="#whitepaper">Whitepaper</a>
              <a href="#community">Community</a>
            </div>

            <div>
              <strong>COMMUNITY</strong>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter
              </a>
            </div>

            <div>
              <strong>DISCLAIMER</strong>

              <p>
                Cryptocurrency involves risk. Always do your own research
                before making financial decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 $REMUS. All Rights Reserved.</span>
          <span>BUILT FOR THE FOMO MOVEMENT</span>
        </div>
      </footer>
    </main>
  );
}