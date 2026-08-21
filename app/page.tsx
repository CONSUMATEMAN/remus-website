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
        "$REMUS is the FOMO Mascot — a community-driven BNB Chain meme project built around one simple idea: when the FOMO hits, REMUS is already there.",
    },
    {
      question: "Where can I buy $REMUS?",
      answer:
        "You can buy $REMUS through PancakeSwap using the official contract address shown on this website.",
    },
    {
      question: "What is the official contract?",
      answer: CONTRACT_ADDRESS,
    },
    {
      question: "Where can I join the community?",
      answer:
        "Join the official REMUS Telegram community and follow @RemusBSC on X for announcements, memes, updates and community activity.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

        <div className="absolute left-[-250px] top-[35%] h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[130px]" />

        <div className="absolute right-[-250px] top-[65%] h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-yellow-400/30 bg-white">
              <Image
                src="/remus-logo.jpg"
                alt="REMUS logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <div className="text-left">
              <div className="text-lg font-black tracking-tight">
                <span className="text-yellow-400">$</span>REMUS
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                The FOMO Mascot
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("about")}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("tokenomics")}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              Tokenomics
            </button>

            <button
              onClick={() => scrollTo("roadmap")}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              Roadmap
            </button>

            <button
              onClick={() => scrollTo("faq")}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="REMUS on X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-yellow-400/40 hover:bg-yellow-400/10"
            >
              <X size={17} />
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-black text-black transition hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,.25)]"
            >
              JOIN COMMUNITY
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/[0.06] bg-black/95 px-5 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {[
                ["about", "About"],
                ["tokenomics", "Tokenomics"],
                ["roadmap", "Roadmap"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="py-2 text-left text-sm font-bold text-zinc-300"
                >
                  {label}
                </button>
              ))}

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-yellow-400 px-5 py-3 text-center text-sm font-black text-black"
              >
                JOIN COMMUNITY
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24"
      >
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-30"
          >
            <source src="/remus-video.mp4" type="video/mp4" />
          </video>

          {/* DARK CINEMATIC OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* YELLOW ATMOSPHERIC GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(250,204,21,0.16),transparent_38%)]" />

          {/* BOTTOM FADE */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          {/* HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-yellow-300">
                The FOMO Mascot
              </span>
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[92px]">
              FOMO
              <br />

              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                HAS A FACE.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              Meet <span className="font-bold text-white">$REMUS</span> —
              the FOMO Mascot on BNB Chain. When the market starts moving,
              REMUS doesn't ask questions.
              <span className="font-bold text-yellow-300">
                {" "}
                He runs.
              </span>
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(250,204,21,.12)] transition hover:bg-yellow-300 hover:shadow-[0_0_50px_rgba(250,204,21,.25)]"
              >
                BUY $REMUS

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/40 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition hover:border-yellow-400/30 hover:bg-white/[0.08]"
              >
                JOIN TELEGRAM
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-8 max-w-xl">
              <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                <span>Official Contract</span>
                <span className="text-yellow-400">BNB CHAIN</span>
              </div>

              <button
                onClick={copyContract}
                className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-left backdrop-blur-md transition hover:border-yellow-400/30"
              >
                <span className="truncate font-mono text-xs text-zinc-300 sm:text-sm">
                  {CONTRACT_ADDRESS}
                </span>

                {copied ? (
                  <Check
                    className="shrink-0 text-green-400"
                    size={17}
                  />
                ) : (
                  <Copy
                    className="shrink-0 text-zinc-500 transition group-hover:text-yellow-400"
                    size={17}
                  />
                )}
              </button>

              {copied && (
                <div className="mt-2 text-xs font-bold text-green-400">
                  Contract copied!
                </div>
              )}
            </div>
          </motion.div>

          {/* HERO MASCOT + VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[570px]"
          >
            {/* GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

            {/* VIDEO FRAME */}
            <div className="absolute left-1/2 top-1/2 z-0 h-[500px] w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3rem] border border-yellow-400/10 bg-black/40 shadow-[0_0_100px_rgba(250,204,21,0.12)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover opacity-40"
              >
                <source src="/remus-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-transparent to-black/70" />
            </div>

            {/* FLOATING MASCOT */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/remus-mascot.png"
                alt="REMUS mascot"
                width={900}
                height={1100}
                priority
                className="relative z-10 mx-auto h-auto max-h-[680px] w-auto object-contain drop-shadow-[0_25px_70px_rgba(250,204,21,.22)]"
              />
            </motion.div>

            {/* STATUS BADGE */}
            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-yellow-400/20 bg-black/80 px-5 py-2.5 backdrop-blur-xl">
              <Sparkles size={14} className="text-yellow-400" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                FOMO ACTIVATED
              </span>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition hover:text-yellow-400 sm:flex"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
            Explore
          </span>

          <ArrowDown size={15} className="animate-bounce" />
        </button>
      </section>

      {/* TICKER */}
      <div className="border-y border-white/[0.06] bg-yellow-400 py-3 text-black">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex min-w-max items-center gap-8"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-8 text-xs font-black uppercase tracking-[0.18em]"
              >
                <span>$REMUS</span>
                <span>THE FOMO MASCOT</span>
                <span>BNB CHAIN</span>
                <span>🚀</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                01 / THE STORY
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                EVERY MARKET
                <br />

                <span className="text-zinc-600">HAS THAT MOMENT.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
                You see the chart moving. Someone posts the green candle.
                Your friends are already in. Suddenly that little voice in
                your head says:
              </p>

              <div className="my-7 rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.05] p-6">
                <div className="text-2xl font-black text-yellow-300 sm:text-3xl">
                  &ldquo;BRO... AM I TOO LATE?&rdquo;
                </div>
              </div>

              <p className="max-w-xl text-base leading-8 text-zinc-400">
                That's FOMO. And now it has a face. REMUS is the mascot for
                that exact moment — the rush, the chaos, the excitement and
                the legendary decision to ape in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-yellow-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.08] via-transparent to-transparent" />

                <Image
                  src="/remus-hero.jpg"
                  alt="REMUS hero"
                  width={1200}
                  height={900}
                  className="relative h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-7 pt-24">
                  <div className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
                    $REMUS
                  </div>

                  <div className="mt-1 text-2xl font-black">
                    The FOMO Mascot
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section
        id="tokenomics"
        className="border-y border-white/[0.06] bg-[#080808]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-14">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
              02 / TOKENOMICS
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              SIMPLE.
              <br />

              <span className="text-zinc-600">CLEAR. REMUS.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "TOTAL SUPPLY",
                value: "100,000",
                suffix: "$REMUS",
              },
              {
                title: "BUY TAX",
                value: "7%",
                suffix: "TOTAL",
              },
              {
                title: "SELL TAX",
                value: "7%",
                suffix: "TOTAL",
              },
              {
                title: "CHAIN",
                value: "BNB",
                suffix: "CHAIN",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-yellow-400/20 hover:bg-white/[0.04]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-600">
                  {item.title}
                </div>

                <div className="mt-5 text-3xl font-black tracking-tight text-white">
                  {item.value}
                </div>

                <div className="mt-1 text-xs font-bold text-yellow-400">
                  {item.suffix}
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
                className="rounded-3xl border border-yellow-400/10 bg-yellow-400/[0.035] p-7"
              >
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-black text-yellow-400">
                    {value}
                  </span>

                  <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black p-6 sm:p-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Contract Address
              </span>

              <button
                onClick={copyContract}
                className="flex items-center gap-2 text-xs font-bold text-yellow-400"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}

                {copied ? "COPIED" : "COPY"}
              </button>
            </div>

            <div className="break-all font-mono text-sm text-zinc-300">
              {CONTRACT_ADDRESS}
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-16">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
              03 / ROADMAP
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              THE FOMO
              <br />

              <span className="text-zinc-600">DOESN'T STOP.</span>
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
                  "Website goes live",
                  "Community activation",
                  "Social media takeover",
                ],
              },
              {
                phase: "PHASE 02",
                title: "FOMO MODE",
                icon: Rocket,
                items: [
                  "Grow the REMUS community",
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
                  "The FOMO becomes legendary",
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
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-yellow-400/25"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-400/5 blur-3xl transition group-hover:bg-yellow-400/10" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-[0.2em] text-yellow-400">
                        {phase.phase}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon size={19} className="text-yellow-400" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-2xl font-black">
                      {phase.title}
                    </h3>

                    <div className="mt-6 space-y-3">
                      {phase.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm text-zinc-400"
                        >
                          <Check
                            size={15}
                            className="shrink-0 text-yellow-400"
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

      {/* COMMUNITY */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-yellow-400 text-black">
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
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-yellow-400">
              <Sparkles size={24} />
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              FEELING THE FOMO?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-7 text-black/70 sm:text-base">
              Don't watch from the sidelines. Join the REMUS community and
              become part of the movement.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-zinc-800"
              >
                TELEGRAM
                <ArrowUpRight size={17} />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-black px-7 py-4 text-sm font-black text-black transition hover:bg-black hover:text-yellow-400"
              >
                FOLLOW ON X
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
              04 / FAQ
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              QUESTIONS?
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left"
                  >
                    <span className="font-bold text-zinc-200">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-yellow-400 transition-transform ${
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
                      <p className="text-sm leading-7 text-zinc-500">
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

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-yellow-400/20 bg-white">
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
                <span className="text-yellow-400">$</span>REMUS
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                The FOMO Mascot
              </div>
            </div>
          </div>

          <div className="max-w-xl text-xs leading-6 text-zinc-600">
            $REMUS is a community-driven meme project on BNB Chain. Always
            verify the official contract address before trading.
          </div>

          <div className="flex items-center gap-2">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-yellow-400/30 hover:text-white"
            >
              <X size={16} />
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-yellow-400/30 hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.05] px-5 py-5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">
          © 2026 $REMUS — THE FOMO MASCOT
        </div>
      </footer>
    </main>
  );
}