"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const MARQUEE = [
  "React", "Next.js", "TypeScript", "any UI you want",
  "Tailwind", "3D & motion", "EN / AR", "AI platforms",
];

const ROTATOR_WORDS = ["imagine.", "describe.", "dream of.", "sketch."];

/* ---------- decorative SVGs ---------- */

function CheetahBlobCircle() {
  return (
    <svg viewBox="0 0 200 200">
      <defs>
        <clipPath id={undefined}>
          <circle cx="100" cy="100" r="96" />
        </clipPath>
      </defs>
      <g style={{ clipPath: "circle(96px at 100px 100px)" }}>
        <rect width="200" height="200" fill="#D9A441" />
        <g fill="#2A1C0E">
          <path d="M20 30 q10 -12 24 -6 l-5 8 q-10 -5 -14 3z" />
          <path d="M120 24 q10 10 -4 16 l-6 -7 q9 -3 6 -10z" />
          <path d="M40 70 q10 -10 22 -3 l-5 7 q-9 -4 -13 2z" />
          <path d="M140 92 q11 -9 21 -1 l-5 7 q-8 -5 -12 0z" />
          <path d="M30 120 q9 -10 21 -4 l-4 8 q-9 -4 -13 2z" />
          <path d="M80 130 q4 10 -8 13 l-4 -8 q8 -2 8 -7z" />
          <path d="M60 170 q9 -9 20 -4 l-4 7 q-8 -3 -12 3z" />
          <circle cx="84" cy="34" r="4" />
          <circle cx="24" cy="96" r="4" />
          <circle cx="116" cy="104" r="4" />
          <circle cx="104" cy="168" r="4" />
        </g>
      </g>
      <circle cx="100" cy="100" r="96" fill="none" stroke="#1C1510" strokeWidth="2.5" />
    </svg>
  );
}

function ZebraBlobCircle() {
  return (
    <svg viewBox="0 0 200 200">
      <g style={{ clipPath: "circle(96px at 100px 100px)" }}>
        <rect width="200" height="200" fill="#F2E7D0" />
        <g stroke="#1C1510" strokeWidth="15" fill="none" strokeLinecap="round">
          <path d="M-10 30 q50 -20 100 0 t110 -4" />
          <path d="M-10 85 q55 22 105 2 t105 6" />
          <path d="M-10 140 q50 -20 100 0 t110 -4" />
          <path d="M-10 192 q55 18 105 0 t105 4" />
        </g>
      </g>
      <circle cx="100" cy="100" r="96" fill="none" stroke="#1C1510" strokeWidth="2.5" />
    </svg>
  );
}

function Stickers() {
  return (
    <>
      <span className="sticker st-sun" title="golden hour, always">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#D9A441" />
          <g stroke="#D9A441" strokeWidth="4" strokeLinecap="round">
            <line x1="50" y1="6" x2="50" y2="20" /><line x1="50" y1="80" x2="50" y2="94" />
            <line x1="6" y1="50" x2="20" y2="50" /><line x1="80" y1="50" x2="94" y2="50" />
            <line x1="19" y1="19" x2="29" y2="29" /><line x1="71" y1="71" x2="81" y2="81" />
            <line x1="19" y1="81" x2="29" y2="71" /><line x1="71" y1="29" x2="81" y2="19" />
          </g>
        </svg>
      </span>
      <span className="sticker st-eye" title="no bad vibes allowed">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="#1C1510" />
          <circle cx="50" cy="50" r="34" fill="#F2E7D0" />
          <circle cx="50" cy="50" r="22" fill="#D6336C" />
          <circle cx="50" cy="50" r="11" fill="#1C1510" />
          <circle cx="45" cy="45" r="4" fill="#F2E7D0" />
        </svg>
      </span>
      <span className="sticker st-pendant" title="the necklace">
        <svg viewBox="0 0 100 120">
          <line x1="20" y1="4" x2="50" y2="30" stroke="#D9A441" strokeWidth="4" />
          <line x1="80" y1="4" x2="50" y2="30" stroke="#D9A441" strokeWidth="4" />
          <path d="M50 30 L78 78 H22 Z" fill="#D9A441" stroke="#1C1510" strokeWidth="2" />
          <path d="M50 44 L66 72 H34 Z" fill="#F2E7D0" />
          <g stroke="#D9A441" strokeWidth="3.5" strokeLinecap="round">
            <line x1="34" y1="82" x2="34" y2="102" /><line x1="45" y1="82" x2="45" y2="108" />
            <line x1="56" y1="82" x2="56" y2="108" /><line x1="67" y1="82" x2="67" y2="102" />
          </g>
        </svg>
      </span>
      <span className="sticker st-heart" title="with love">
        <svg viewBox="0 0 100 100">
          <path
            d="M50 88 C20 66 8 46 12 30 C16 16 32 10 42 18 C46 21 49 25 50 28 C51 25 54 21 58 18 C68 10 84 16 88 30 C92 46 80 66 50 88 Z"
            fill="#D6336C" stroke="#1C1510" strokeWidth="3"
          />
        </svg>
      </span>
      <span className="sticker st-note" title="on rotation">
        <svg viewBox="0 0 100 100">
          <path d="M38 78 V26 l34 -8 v46" fill="none" stroke="#1C1510" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="30" cy="79" rx="12" ry="9" fill="#1C1510" />
          <ellipse cx="64" cy="66" rx="12" ry="9" fill="#1C1510" />
        </svg>
      </span>
      <span className="sticker st-spark1">
        <svg viewBox="0 0 40 40"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="#D6336C" /></svg>
      </span>
      <span className="sticker st-spark2">
        <svg viewBox="0 0 40 40"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="#D9A441" /></svg>
      </span>
    </>
  );
}

/* ---------- page ---------- */

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef<HTMLSpanElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLParagraphElement>(null);
  const [pixels, setPixels] = useState<number[]>([]);
  const [pixelsGone, setPixelsGone] = useState(false);
  const [active, setActive] = useState(0);
  const [isDeck, setIsDeck] = useState(false);

  /* deck / row mode */
  useEffect(() => {
    const mq = window.matchMedia("(min-width:861px)");
    const apply = () => setIsDeck(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  /* pixel mosaic delays (client-only for random) */
  useEffect(() => {
    setPixels(Array.from({ length: 63 }, () => Math.random() * 1.1));
  }, []);

  /* all the global page effects */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    // slide activation + dots
    const slides = document.querySelectorAll<HTMLElement>(".slide");
    const dots = document.querySelectorAll<HTMLElement>(".dots a");
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("on", e.isIntersecting);
          if (e.isIntersecting) {
            dots.forEach((d) =>
              d.classList.toggle("on", d.dataset.t === (e.target as HTMLElement).id)
            );
          }
        });
      },
      { threshold: 0.45 }
    );
    slides.forEach((s) => so.observe(s));
    cleanups.push(() => so.disconnect());

    // sparkle cursor trail
    if (!reduced && window.matchMedia("(pointer:fine)").matches) {
      let last = 0;
      const onMove = (e: PointerEvent) => {
        const now = performance.now();
        if (now - last < 60) return;
        last = now;
        const s = document.createElement("span");
        s.className = "spark";
        s.textContent = "✦";
        s.style.left = e.clientX + "px";
        s.style.top = e.clientY + "px";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 700);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", onMove));
    }

    // rotating word
    if (rotRef.current && !reduced) {
      const rot = rotRef.current;
      let ri = 0;
      const words = ROTATOR_WORDS.length;
      const iv = setInterval(() => {
        ri++;
        rot.style.transform = `translateY(${-ri * 1.32}em)`;
        if (ri === words) {
          setTimeout(() => {
            rot.style.transition = "none";
            rot.style.transform = "translateY(0)";
            ri = 0;
            requestAnimationFrame(() => {
              rot.style.transition = "";
            });
          }, 580);
        }
      }, 2300);
      cleanups.push(() => clearInterval(iv));
    }

    // pixel mosaic reveal
    if (archRef.current) {
      const pio = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              setPixelsGone(true);
              pio.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      pio.observe(archRef.current);
      cleanups.push(() => pio.disconnect());
    }

    // one rAF loop: progress, hero parallax, marquee scrub, photo parallax, statement fill
    let raf = 0;
    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const tick = (now: number) => {
      const y = window.scrollY || 0;
      const vh = window.innerHeight;
      const t = now / 1000;
      root.style.setProperty("--scy", y.toFixed(1));
      const max = document.documentElement.scrollHeight - vh;
      root.style.setProperty("--prog", max > 0 ? (y / max).toFixed(4) : "0");

      if (!reduced) {
        const band = trackRef.current;
        if (band) {
          const half = band.scrollWidth / 3;
          if (half > 0) {
            const o = (-(t * 36) - y * 0.45) % half;
            band.style.transform = `translateX(${o.toFixed(1)}px)`;
          }
        }
        if (archRef.current) {
          const r = archRef.current.getBoundingClientRect();
          root.style.setProperty(
            "--ap",
            clamp01(1 - (r.top + r.height * 0.5) / vh).toFixed(3)
          );
        }
        if (fillRef.current) {
          const fr = fillRef.current.getBoundingClientRect();
          root.style.setProperty(
            "--fill",
            clamp01((vh * 0.9 - fr.top) / (vh * 0.45)).toFixed(3)
          );
        }
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduced) raf = requestAnimationFrame(tick);
    else root.style.setProperty("--fill", "1");
    cleanups.push(() => cancelAnimationFrame(raf));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const deckStyle = (i: number): React.CSSProperties => {
    if (!isDeck) return {};
    const d = i - active;
    const ad = Math.abs(d);
    return {
      zIndex: 100 - ad,
      opacity: ad > 3 ? 0 : 1,
      pointerEvents: ad > 3 ? "none" : "auto",
      transform: `translateX(${d * 108}px) translateY(${ad * 14}px) rotate(${d * 4.5}deg) scale(${Math.max(0.7, 1 - ad * 0.085)})`,
    };
  };

  const prev = () => setActive((a) => (a - 1 + projects.length) % projects.length);
  const next = () => setActive((a) => (a + 1) % projects.length);

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const n = String(fd.get("name") || "").trim();
    const em = String(fd.get("email") || "").trim();
    const m = String(fd.get("message") || "").trim();
    const subject = encodeURIComponent("Portfolio hello from " + n);
    const body = encodeURIComponent(`${m}\n\n— ${n} (${em})`);
    window.location.href = `mailto:amnayahia26@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />

      <header className="bar">
        <div className="wordmark">
          amna<span className="dot">.</span>yahia
        </div>
        <div className="open-tag">
          <span className="pulse" /> Open to opportunities
        </div>
      </header>

      {/* SLIDE 1 · HERO */}
      <section className="slide hero" id="hero">
        <span className="blob b1" aria-hidden="true"><ZebraBlobCircle /></span>
        <span className="blob b2" aria-hidden="true"><CheetahBlobCircle /></span>
        <span className="blob b3" aria-hidden="true"><ZebraBlobCircle /></span>

        <Stickers />

        <div className="hero-inner wrap">
          <span className="hello-script">hello, I&apos;m ✦</span>
          <h1 className="giant">
            <span className="row first">
              {"AMNA".split("").map((c, i) => (
                <span key={i} className="ltr" style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
                  {c}
                </span>
              ))}
            </span>
            <span className="row second">
              {"YAHIA".split("").map((c, i) => (
                <span key={i} className="ltr o" style={{ animationDelay: `${0.36 + i * 0.06}s` }}>
                  {c}
                </span>
              ))}
            </span>
          </h1>
          <svg className="scribble" viewBox="0 0 420 24" aria-hidden="true">
            <path d="M6 14 q40 -16 90 -4 t100 2 t100 -6 t118 4" fill="none" stroke="#D6336C" strokeWidth="5" strokeLinecap="round" />
            <path d="M30 20 q60 -10 130 -2 t180 -4" fill="none" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" opacity=".8" />
          </svg>
          <p className="tagline">
            just a girl who builds <span className="hl">ANY UI</span> you can{" "}
            <span className="rotator">
              <span className="rot-inner" ref={rotRef}>
                {[...ROTATOR_WORDS, ROTATOR_WORDS[0]].map((w, i) => (
                  <b key={i}>{w}</b>
                ))}
              </span>
            </span>
          </p>
          <div className="certified">
            <span className="lead">certified ✦</span>
            <span className="fact">pixel-perfect or nothing</span>
            <span className="fact">Rihanna scholar</span>
            <span className="fact">pool-day enthusiast</span>
            <span className="fact">Cairo-made</span>
            <span className="fact">frontend engineer, AI platforms</span>
          </div>
          <div className="cta-row">
            <a className="btn solid" href="#work">See the work ↓</a>
            <a className="btn ghost" href="#contact">Say hello</a>
            <span className="cta-note">← press this, trust me</span>
          </div>
          <div className="scroll-cue">
            keep scrolling babe <span className="arrow">↓</span>
          </div>
        </div>

        <div className="marquee2" aria-hidden="true" />
        <div className="marquee" aria-hidden="true">
          <div className="track" ref={trackRef}>
            {[0, 1, 2].map((copy) => (
              <span key={copy}>
                {MARQUEE.map((w, i) => (
                  <span key={i}>
                    <span>{w}</span>
                    <span className="star">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 2 · STORY */}
      <section className="slide" id="about">
        <div className="wrap me-row">
          <div className="me-copy from-l">
            <h2>
              Main character. <em>Also your</em> <span className="loud">frontend engineer.</span>
            </h2>
            <p>
              By day I ship frontends for <strong>AI platforms</strong> at Youxel — clean
              architecture, scalable UI systems, React and Next.js. Modular, maintainable, fast.
            </p>
            <p>
              The rest of me: cheetah print over minimalism, golden hour over ring lights, a pool
              within reach, and the playlist doing exactly what it should. This site is built the
              way I build — <strong>scroll it, hover it, that&apos;s the demo.</strong>
            </p>
            <ul className="timeline">
              <li>
                <span className="when">Feb 2026 — now</span>
                <span className="what">Software Engineer · YOUXEL Technology</span>
                <span className="where">TORUK AI platform — Core, Connect &amp; SDK</span>
              </li>
              <li>
                <span className="when">Jul 2025 — Feb 2026</span>
                <span className="what">Frontend Developer · Cultiv Bureau</span>
                <span className="where">Rwafi, WorkHole, TrueChat, RECLIX &amp; more</span>
              </li>
              <li>
                <span className="when">2021 — 2025</span>
                <span className="what">BSc Information Systems · Cairo University</span>
                <span className="where">Faculty of Computers &amp; Artificial Intelligence</span>
              </li>
            </ul>
          </div>
          <div className="me-visual from-r d1">
            <div className="photo-cheetah" aria-hidden="true" />
            <div className={"arch"} ref={archRef}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/amna.webp" alt="Amna in golden hour light" />
              <div className={"pixels" + (pixelsGone ? " gone" : "")} aria-hidden="true">
                {pixels.map((d, i) => (
                  <i key={i} style={{ transitionDelay: `${d.toFixed(2)}s` }} />
                ))}
              </div>
            </div>
            <span className="tape t1" aria-hidden="true" />
            <span className="tape t2" aria-hidden="true" />
            <span className="photo-caption">
              that&apos;s me — amona <span className="ar">أمونة</span> ✦
            </span>
          </div>
        </div>
      </section>

      {/* SLIDE 3 · WORK */}
      <section className="slide" id="work">
        <div className="wrap">
          <div className="work-top">
            <div className="from-l">
              <div className="sec-head">
                <h2>
                  The work<span className="p">.</span>
                </h2>
                <span className="count">flip through →</span>
              </div>
              <p className="sec-sub">From AI platforms to bilingual products — shipped, not imagined.</p>
            </div>
            <div className="slider-btns from-r">
              <button className="sbtn" onClick={prev} aria-label="Previous project">←</button>
              <button className="sbtn" onClick={next} aria-label="Next project">→</button>
            </div>
          </div>
          <div className="slider from-b d2">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={"card" + (p.variant ? " " + p.variant : "") + (isDeck && i === active ? " center" : "")}
                style={deckStyle(i)}
                onClick={() => {
                  if (isDeck && i !== active) setActive(i);
                }}
              >
                {p.variant !== "tease" && <span className="num">{p.num}</span>}
                {p.variant !== "tease" && <span className="role">{p.role}</span>}
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                {p.chips.length > 0 && (
                  <div className="chip-row">
                    {p.chips.map((c) => (
                      <span key={c.label} className={"chip" + (c.hot ? " hot" : "")}>
                        {c.label}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4 · VIBE */}
      <section className="slide vibe" id="vibe">
        <span className="blob b4" aria-hidden="true"><CheetahBlobCircle /></span>
        <span className="blob b5" aria-hidden="true"><ZebraBlobCircle /></span>
        <div className="wrap">
          <p className="fill-text from-b" ref={fillRef}>
            I don&apos;t do basic.
            <br />
            I build interfaces people remember.
          </p>
          <p className="sub from-b d1">— every scroll, hover and pixel on this page included ✦</p>
          <div className="rotation from-b d2">
            <div className="vinyl-zone">
              <div className="vinyl" />
            </div>
            <div>
              <h2>On rotation while I code</h2>
              <p className="rsub">The commits hit different with the right soundtrack.</p>
              <ul className="artists">
                <li>Rihanna</li>
                <li>Drake</li>
                <li>Don Toliver</li>
                <li>Ariana Grande</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 · CONTACT */}
      <section className="slide contact" id="contact">
        <span className="blob b6" aria-hidden="true"><CheetahBlobCircle /></span>
        <div className="wrap contact-grid">
          <div className="from-l">
            <h2>
              Got a UI in mind?
              <br />
              <em>I already want to build it.</em>
            </h2>
            <p className="csub">Cairo, Egypt — working with teams anywhere ✦</p>
            <div className="foot-links">
              <a className="btn solid" href="mailto:amnayahia26@gmail.com">amnayahia26@gmail.com</a>
              <a className="btn ghost" href="https://github.com/amna-yahia" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/amna-yahia-a3ab85234/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p className="credit">designed &amp; built by amona — no templates were harmed ✦</p>
          </div>
          <form className="cform from-r d1" onSubmit={onSubmit}>
            <span className="tape" aria-hidden="true" />
            <p className="ftitle">send it straight to my inbox ✦</p>
            <label>
              Your name
              <input id="cf-name" name="name" type="text" placeholder="Sara from that cool startup" required />
            </label>
            <label>
              Your email
              <input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
            </label>
            <label>
              The idea
              <textarea id="cf-msg" name="message" rows={4} placeholder="We need a frontend that doesn't look like everyone else's…" required />
            </label>
            <button className="btn solid" type="submit">Send the message →</button>
          </form>
        </div>
      </section>

      <nav className="pill" aria-label="Sections">
        <div className="inner">
          <a href="#about">story</a>
          <a href="#work">work</a>
          <a href="#vibe">vibe</a>
          <a className="hot" href="#contact">say hello</a>
        </div>
      </nav>

      <div className="dots" aria-hidden="true">
        <a href="#hero" data-t="hero" />
        <a href="#about" data-t="about" />
        <a href="#work" data-t="work" />
        <a href="#vibe" data-t="vibe" />
        <a href="#contact" data-t="contact" />
      </div>
    </>
  );
}
