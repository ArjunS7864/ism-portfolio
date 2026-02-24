/*
 * Home Page — ISM Digital Portfolio
 * Design: Full-width hero with warm bg image, name large on left, cover photo right
 * Sections: Hero (name, topic, quote), quick-links to all pages
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/ivkqiNDYPPXSyzHOt4C5d2/sandbox/uQDUnILwMOMu7A9ukSr2qT-img-1_1771817465000_na1fn_aXNtLWhlcm8tYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXZrcWlORFlQUFhTeXpIT3Q0QzVkMi9zYW5kYm94L3VRRFVuSUx3TU9NdTdBOXVrU3IycVQtaW1nLTFfMTc3MTgxNzQ2NTAwMF9uYTFmbl9hWE50TFdobGNtOHRZbWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ggh9q8sto6iqQZfQRcLvmW8JyVBdr2t8NPYbHsnHuCIxqBGajHlQN9BGL-q6tzy9GUViJCOG-ove4exAopE89yi05ZwaxFyDYzVKQRm3fTodCnBwobLtY98Q06bGznRZw7p8BWCvGUji-n4MPmIAWAiA5QqEIjZz7mTNfJLfgwesvV7c4oN5TNZgX1ExuMwNHNSEa3~bSUylpdG8sbW7w~ek1EGeNWO0rkl2vsO2cM5WgLVvoK-8WHqbVKRMDs7f2e6iFjFFYGCNgDH4hpDf8P2uhPeLKmGrNa~2kH8k5l4DBh45nYe-b0edUIYOqXDD8gRAV~wuZdZ9~Y7Nny9U8g__";

const QUICK_LINKS = [
  { label: "About Me", href: "/about", desc: "Bio, mission statement & contact" },
  { label: "Résumé", href: "/resume", desc: "Professional experience & skills" },
  { label: "About ISM", href: "/ism", desc: "The Independent Study & Mentorship program" },
  { label: "Blog", href: "/blog", desc: "Reflections & field experiences" },
  { label: "Research", href: "/research", desc: "Primary & secondary sources" },
  { label: "Mentor", href: "/mentor", desc: "My professional mentor" },
  { label: "Projects", href: "/projects", desc: "Original work & final product" },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* ─── Hero Section ─── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, rgba(250,250,247,0.92) 45%, rgba(250,250,247,0.4) 100%)" }}
        />

        <div className="container relative z-10">
          <div className="max-w-2xl fade-up">
            {/* Eyebrow label */}
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)" }}
            >
              ISM Digital Portfolio
            </p>

            {/* Name */}
            <h1
              className="display-font font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "oklch(0.18 0.02 240)",
                lineHeight: 1.05,
              }}
            >
              Arjun Sharma
            </h1>

            {/* Gold divider */}
            <div className="gold-line mb-6" />

            {/* Topic of Study */}
            <p
              className="text-xl font-medium mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "oklch(0.35 0.02 240)", letterSpacing: "0.04em" }}
            >
              Topic of Study: <span style={{ color: "oklch(0.22 0.02 240)", fontWeight: 700 }}>Mechanical Engineering</span>
            </p>

            {/* Quote */}
            <blockquote
              className="italic text-lg leading-relaxed mb-8 pl-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "oklch(0.42 0.02 240)",
                borderLeft: "2px solid oklch(0.62 0.12 75)",
              }}
            >
              "If you want something you've never had, you must be willing to do something you've never done."
              <footer className="mt-2 text-sm not-italic" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.55 0.015 240)", letterSpacing: "0.05em" }}>
                — Thomas Jefferson
              </footer>
            </blockquote>

            {/* CTA */}
            <Link href="/about">
              <span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold text-sm tracking-widest uppercase transition-all duration-200 hover:gap-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "oklch(0.22 0.02 240)",
                  color: "oklch(0.95 0.005 80)",
                }}
              >
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "oklch(0.985 0.006 85)",
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </section>

      {/* ─── Quick Navigation Cards ─── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-heading mx-auto" style={{ display: "block", textAlign: "center" }}>
              Explore the Portfolio
            </h2>
            <div className="gold-line mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {QUICK_LINKS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className="card-lift rounded-md p-6 h-full border"
                  style={{
                    background: "oklch(0.995 0.003 85)",
                    borderColor: "oklch(0.88 0.01 80)",
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)", letterSpacing: "0.04em" }}
                  >
                    {item.label}
                  </h3>
                  <div className="gold-line mb-3" style={{ width: "2rem" }} />
                  <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)" }}>
                    View <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
