"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Menu,
  Rocket,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CONTRACT_ADDRESS =
  "0xE8f64a0F60102506da87651c2a6e4e667eA4e93f";

const TELEGRAM_URL = "https://t.me/thefomomascot";
const X_URL = "https://x.com/RemusBSC";

const PANCAKESWAP_URL =
  `https://pancakeswap.finance/swap?outputCurrency=${CONTRACT_ADDRESS}`;

const shortenAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-6)}`;

const coins = Array.from({ length: 18 });

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const copyContract = async () => {
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const faqs = [
    {
      question: "What is $REMUS?",
      answer:
        "$REMUS is The FOMO Mascot — a community-driven BNB Chain meme project built around the most recognizable feeling in crypto: FOMO.",
    },
    {
      question: "Where can I buy $REMUS?",
      answer:
        "You can buy $REMUS through PancakeSwap using the official contract address displayed throughout this website.",
    },
    {
      question: "What is the official contract?",
      answer: CONTRACT_ADDRESS,
    },
    {
      question: "Where can I join the community?",
      answer:
        "Join the official REMUS Telegram community and follow @RemusBSC on X for announcements, memes, campaigns and ecosystem updates.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#05030a] text-white selection:bg-amber-400 selection:text-black">

      {/* =========================================================
          GLOBAL PREMIUM BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#05030a]">

        <div className="absolute left-[8%] top-[5%] h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[150px]" />

        <div className="absolute right-[3%] top-[15%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[160px]" />

        <div className="absolute left-[35%] top-[42%] h-[500px] w-[500px] rounded-full bg-amber-300/[0.07] blur-[170px]" />

        <div className="absolute right-[15%] top-[72%] h-[420px] w-[420px] rounded-full bg-emerald-400/[0.045] blur-[150px]" />

        <div className="absolute left-[-200px] top-[75%] h-[500px] w-[500px] rounded-full bg-yellow-600/[0.06] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,200,40,.8) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =========================================================
          FLOATING COINS / PARTICLES
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {coins.map((_, index) => {
          const left = (index * 17 + 5) % 100;
          const delay = (index % 6) * 0.8;
          const duration = 7 + (index % 5);

          return (
            <motion.div
              key={index}
              className="absolute h-3 w-3 rounded-full border border-yellow-300/30 bg-gradient-to-br from-yellow-200 via-amber-400 to-orange-600 shadow-[0_0_18px_rgba(251,191,36,.18)]"
              style={{
                left: `${left}%`,
                top: `${10 + ((index * 13) % 80)}%`,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, index % 2 === 0 ? 12 : -12, 0],
                rotate: [0, 180, 360],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#05030a]/75 backdrop-blur-2xl">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-yellow-300/40 bg-white shadow-[0_0_25px_rgba(251,191,36,.12)]">
              <Image
                src="/remus-logo.jpg"
                alt="REMUS logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <div className="text-left">
              <div className="text-[19px] font-black tracking-[-0.04em]">
                <span className="text-yellow-300">$</span>REMUS
              </div>

              <div className="text-[8px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                The FOMO Mascot
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">

            {[
              ["about", "About"],
              ["tokenomics", "Tokenomics"],
              ["roadmap", "Roadmap"],
              ["whitepaper", "Whitepaper"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[13px] font-medium text-zinc-400 transition hover:text-yellow-300"
              >
                {label}
              </button>
            ))}

          </nav>

          <div className="hidden items-center gap-3 md:flex">

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="REMUS on X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition hover:border-yellow-300/40 hover:bg-yellow-300/10"
            >
              <X size={16} />
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 px-5 py-2.5 text-[12px] font-black text-black shadow-[0_0_30px_rgba(251,191,36,.16)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(251,191,36,.3)]"
            >
              JOIN COMMUNITY
            </a>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>

        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/[0.06] bg-[#07050b]/98 px-5 py-5 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">

              {[
                ["about", "About"],
                ["tokenomics", "Tokenomics"],
                ["roadmap", "Roadmap"],
                ["whitepaper", "Whitepaper"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-zinc-300 hover:bg-white/[0.04] hover:text-yellow-300"
                >
                  {label}
                </button>
              ))}

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-5 py-3 text-center text-sm font-black text-black"
              >
                JOIN COMMUNITY
              </a>

            </div>
          </motion.div>
        )}

      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center pt-20"
      >

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-gradient-to-r from-yellow-300/[0.1] to-orange-400/[0.06] px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 shadow-[0_0_12px_rgba(251,191,36,.8)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-200">
                BNB Chain • FOMO Activated
              </span>

            </div>

            <h1 className="max-w-3xl text-[52px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[66px] lg:text-[76px]">

              THE FOMO

              <br />

              <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                HAS A FACE.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-zinc-400 sm:text-[16px]">
              Meet{" "}
              <span className="font-semibold text-white">$REMUS</span> —
              the FOMO Mascot built for the BNB Chain community. When the
              chart starts moving, REMUS doesn't hesitate.
              <span className="font-semibold text-yellow-300">
                {" "}He runs.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 px-7 py-3.5 text-[12px] font-black text-black shadow-[0_0_40px_rgba(251,191,36,.14)] transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(251,191,36,.28)]"
              >
                BUY $REMUS
                <ArrowUpRight size={16} />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-[12px] font-black text-white transition hover:border-yellow-300/30 hover:bg-white/[0.07]"
              >
                JOIN TELEGRAM
                <ArrowUpRight size={16} />
              </a>

            </div>

            {/* CONTRACT */}

            <div className="mt-7 max-w-xl">

              <div className="mb-2 flex items-center justify-between px-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">

                <span>Official Contract</span>

                <span className="text-yellow-300">
                  BNB SMART CHAIN
                </span>

              </div>

              <button
                onClick={copyContract}
                className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.035] to-yellow-300/[0.025] px-4 py-3.5 text-left transition hover:border-yellow-300/30"
              >

                <span className="truncate font-mono text-[11px] text-zinc-400 sm:text-xs">
                  {CONTRACT_ADDRESS}
                </span>

                {copied ? (
                  <Check
                    className="shrink-0 text-emerald-400"
                    size={16}
                  />
                ) : (
                  <Copy
                    className="shrink-0 text-zinc-500 transition group-hover:text-yellow-300"
                    size={16}
                  />
                )}

              </button>

              {copied && (
                <div className="mt-2 text-[11px] font-semibold text-emerald-400">
                  Contract copied successfully.
                </div>
              )}

            </div>

          </motion.div>

          {/* MASCOT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[540px]"
          >

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-transparent blur-[110px]" />

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <Image
                src="/remus-mascot.png"
                alt="REMUS mascot"
                width={900}
                height={1100}
                priority
                className="relative z-10 mx-auto h-auto max-h-[650px] w-auto object-contain drop-shadow-[0_30px_80px_rgba(251,191,36,.2)]"
              />

            </motion.div>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-yellow-300/20 bg-[#05030a]/80 px-5 py-2.5 shadow-[0_0_30px_rgba(251,191,36,.08)] backdrop-blur-xl">

              <Sparkles
                size={13}
                className="text-yellow-300"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                FOMO ACTIVATED
              </span>

            </div>

          </motion.div>

        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition hover:text-yellow-300 sm:flex"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.3em]">
            Explore
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>

      </section>

      {/* =========================================================
          PREMIUM TICKER
      ========================================================= */}

      <div className="relative overflow-hidden border-y border-yellow-500/20 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 py-3 text-black">

        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,0,0,.8) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative flex overflow-hidden whitespace-nowrap">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex min-w-max items-center gap-10"
          >

            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <span>$REMUS</span>
                <span>THE FOMO MASCOT</span>
                <span>BNB CHAIN</span>
                <span>FOMO ACTIVATED</span>
                <span>✦</span>
              </div>
            ))}

          </motion.div>

        </div>

      </div>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section id="about" className="relative">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
                01 / THE STORY
              </p>

              <h2 className="text-[40px] font-black leading-[1] tracking-[-0.045em] sm:text-[52px]">

                EVERY MARKET

                <br />

                <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                  HAS THAT MOMENT.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-8 text-zinc-400">
                You see the chart moving. Someone posts the green candle.
                Your friends are already in. Suddenly that little voice in
                your head says:
              </p>

              <div className="my-7 rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/[0.08] via-orange-400/[0.05] to-transparent p-6 shadow-[0_0_50px_rgba(251,191,36,.04)]">

                <div className="text-[22px] font-black text-yellow-200 sm:text-[26px]">
                  &ldquo;BRO... AM I TOO LATE?&rdquo;
                </div>

              </div>

              <p className="max-w-xl text-[15px] leading-8 text-zinc-400">
                That's FOMO. And now it has a face. REMUS represents that
                exact moment — the rush, the chaos, the excitement and the
                legendary decision to ape in.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-yellow-400/10 via-orange-400/10 to-emerald-400/5 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b080f] shadow-[0_30px_100px_rgba(0,0,0,.4)]">

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.08] via-transparent to-orange-500/[0.06]" />

                <Image
                  src="/remus-hero.jpg"
                  alt="REMUS hero"
                  width={1200}
                  height={900}
                  className="relative h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/75 to-transparent p-7 pt-24">

                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                    $REMUS
                  </div>

                  <div className="mt-1 text-[23px] font-black">
                    The FOMO Mascot
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================
          VIDEO / PREMIUM BANNER
      ========================================================= */}

      <section className="border-y border-white/[0.06] bg-[#08050d]">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

          <div className="mb-10 text-center">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
              THE REMUS EXPERIENCE
            </p>

            <h2 className="text-[36px] font-black tracking-[-0.04em] sm:text-[48px]">
              WHEN FOMO
              <span className="ml-2 bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent">
                ARRIVES.
              </span>
            </h2>

          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-300/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,.45)]">

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            <video
              src="/remus-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-auto max-h-[650px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 z-20 rounded-full border border-yellow-300/20 bg-black/60 px-4 py-2 backdrop-blur-xl">

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-200">
                $REMUS • FOMO ACTIVATED
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          TOKENOMICS
      ========================================================= */}

      <section
        id="tokenomics"
        className="border-y border-white/[0.06] bg-[#07040b]"
      >

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="mb-12">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
              02 / TOKENOMICS
            </p>

            <h2 className="text-[40px] font-black leading-none tracking-[-0.045em] sm:text-[52px]">

              SIMPLE.

              <br />

              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                CLEAR. REMUS.
              </span>

            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["TOTAL SUPPLY", "100,000", "$REMUS"],
              ["BUY TAX", "7%", "TOTAL"],
              ["SELL TAX", "7%", "TOTAL"],
              ["CHAIN", "BNB", "CHAIN"],
            ].map(([title, value, suffix], index) => (

              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-yellow-400/[0.015] p-7 transition hover:-translate-y-1 hover:border-yellow-300/25"
              >

                <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-yellow-400/5 blur-2xl transition group-hover:bg-yellow-400/10" />

                <div className="relative">

                  <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                    {title}
                  </div>

                  <div className="mt-5 text-[29px] font-black tracking-tight text-white">
                    {value}
                  </div>

                  <div className="mt-1 text-[10px] font-bold text-yellow-300">
                    {suffix}
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">

            {[
              ["3%", "AUTO LP"],
              ["2%", "MARKETING"],
              ["2%", "BNB REWARDS"],
            ].map(([value, label], index) => (

              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-yellow-400/15 bg-gradient-to-br from-yellow-400/[0.08] via-orange-400/[0.035] to-transparent p-7"
              >

                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-400/10 blur-3xl" />

                <div className="relative flex items-end justify-between">

                  <span className="text-[35px] font-black text-yellow-300">
                    {value}
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/50 p-6 shadow-[0_20px_70px_rgba(0,0,0,.25)] sm:p-8">

            <div className="mb-3 flex items-center justify-between">

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                Official Contract Address
              </span>

              <button
                onClick={copyContract}
                className="flex items-center gap-2 text-[10px] font-bold text-yellow-300"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? "COPIED" : "COPY"}
              </button>

            </div>

            <div className="break-all font-mono text-xs text-zinc-400">
              {CONTRACT_ADDRESS}
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ROADMAP
      ========================================================= */}

      <section id="roadmap">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="mb-14">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
              03 / ROADMAP
            </p>

            <h2 className="text-[40px] font-black leading-none tracking-[-0.045em] sm:text-[52px]">

              THE FOMO

              <br />

              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                DOESN'T STOP.
              </span>

            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                phase: "PHASE 01",
                title: "IGNITION",
                icon: Zap,
                items: [
                  "Launch $REMUS",
                  "Premium website",
                  "Community activation",
                  "Social media takeover",
                ],
              },
              {
                phase: "PHASE 02",
                title: "FOMO MODE",
                icon: Rocket,
                items: [
                  "Grow REMUS community",
                  "Memes everywhere",
                  "Influencer expansion",
                  "Holder growth",
                ],
              },
              {
                phase: "PHASE 03",
                title: "FULL SEND",
                icon: Sparkles,
                items: [
                  "Major marketing push",
                  "More REMUS content",
                  "Community utilities",
                  "Make FOMO legendary",
                ],
              },
            ].map((phase, index) => {

              const Icon = phase.icon;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-yellow-400/[0.015] p-7 transition hover:-translate-y-1 hover:border-yellow-300/25"
                >

                  <div className="absolute right-[-20px] top-[-20px] h-36 w-36 rounded-full bg-yellow-400/5 blur-3xl transition group-hover:bg-orange-400/10" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-bold tracking-[0.2em] text-yellow-300">
                        {phase.phase}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-300/10 bg-yellow-300/[0.05]">
                        <Icon size={18} className="text-yellow-300" />
                      </div>

                    </div>

                    <h3 className="mt-8 text-[22px] font-black">
                      {phase.title}
                    </h3>

                    <div className="mt-6 space-y-3">

                      {phase.items.map((item) => (

                        <div
                          key={item}
                          className="flex items-center gap-3 text-[13px] text-zinc-400"
                        >
                          <Check
                            size={14}
                            className="shrink-0 text-yellow-300"
                          />

                          {item}

                        </div>

                      ))}

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHITEPAPER
      ========================================================= */}

      <section
        id="whitepaper"
        className="border-y border-white/[0.06] bg-gradient-to-br from-[#08050d] via-[#0b0710] to-[#070b09]"
      >

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">

            <div>

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
                04 / THE WHITEPAPER
              </p>

              <h2 className="text-[40px] font-black leading-[1] tracking-[-0.045em] sm:text-[52px]">

                THE FOMO

                <br />

                <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  MANIFESTO.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-zinc-400">
                Discover the vision, culture, tokenomics, roadmap and
                long-term direction behind The Official FOMO Mascot.
              </p>

              <button
                onClick={() => alert("The REMUS Whitepaper is coming soon.")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 px-7 py-3.5 text-[12px] font-black text-black shadow-[0_0_35px_rgba(251,191,36,.12)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(251,191,36,.25)]"
              >
                READ WHITEPAPER
                <ArrowUpRight size={16} />
              </button>

            </div>

            <div className="relative">

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-emerald-400/5 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9">

                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

                  <div>

                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300">
                      $REMUS
                    </div>

                    <div className="mt-1 text-lg font-black">
                      FOMO MANIFESTO
                    </div>

                  </div>

                  <Sparkles
                    size={23}
                    className="text-yellow-300"
                  />

                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {[
                    "The Vision",
                    "The Culture",
                    "Tokenomics",
                    "Community",
                    "Roadmap",
                    "Future",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.07] bg-black/30 p-4 transition hover:border-yellow-300/20"
                    >

                      <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                        0{index + 1}
                      </div>

                      <div className="mt-2 text-[13px] font-semibold text-zinc-300">
                        {item}
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          COMMUNITY CTA
      ========================================================= */}

      <section className="relative overflow-hidden border-y border-yellow-500/20 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 text-black">

        <div className="absolute inset-0 opacity-20">

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, black 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black shadow-[0_10px_40px_rgba(0,0,0,.2)]">
              <Sparkles size={23} className="text-yellow-300" />
            </div>

            <h2 className="text-[38px] font-black tracking-[-0.04em] sm:text-[52px]">
              FEELING THE FOMO?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[14px] font-medium leading-7 text-black/70">
              Don't watch from the sidelines. Join the REMUS community and
              become part of the movement.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-[12px] font-black text-white transition hover:bg-zinc-800"
              >
                TELEGRAM
                <ArrowUpRight size={16} />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-black px-7 py-3.5 text-[12px] font-black text-black transition hover:bg-black hover:text-yellow-300"
              >
                FOLLOW ON X
                <ArrowUpRight size={16} />
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section id="faq">

        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="mb-12 text-center">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
              05 / FAQ
            </p>

            <h2 className="text-[38px] font-black tracking-[-0.04em] sm:text-[48px]">
              QUESTIONS?
            </h2>

          </div>

          <div className="space-y-3">

            {faqs.map((faq, index) => {

              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition hover:border-yellow-300/15"
                >

                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left"
                  >

                    <span className="text-[14px] font-semibold text-zinc-200">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`shrink-0 text-yellow-300 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-5 pb-5"
                    >

                      <p className="text-[13px] leading-7 text-zinc-500">
                        {faq.answer}
                      </p>

                    </motion.div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.06]">

        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-3">

            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-yellow-300/25 bg-white">
              <Image
                src="/remus-logo.jpg"
                alt="REMUS logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>

            <div>

              <div className="font-black">
                <span className="text-yellow-300">$</span>REMUS
              </div>

              <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                The FOMO Mascot
              </div>

            </div>

          </div>

          <div className="max-w-xl text-[11px] leading-6 text-zinc-600">
            $REMUS is a community-driven meme project on BNB Chain. Always
            verify the official contract address before trading.
          </div>

          <div className="flex items-center gap-2">

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-yellow-300/30 hover:text-white"
            >
              <X size={15} />
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-yellow-300/30 hover:text-white"
            >
              <ExternalLink size={15} />
            </a>

          </div>

        </div>

        <div className="border-t border-white/[0.05] px-5 py-5 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
          © 2026 $REMUS — THE FOMO MASCOT
        </div>

      </footer>

    </main>
  );
}