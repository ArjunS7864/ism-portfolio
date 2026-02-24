/*
 * Navbar — ISM Digital Portfolio
 * Design: sticky top nav, glass-morphism on scroll, gold underline hover
 * Fonts: Raleway (nav labels), Cormorant Garamond (logo/name)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Résumé", href: "/resume" },
  { label: "About ISM", href: "/ism" },
  { label: "Blog", href: "/blog" },
  { label: "Research", href: "/research" },
  { label: "Mentor", href: "/mentor" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(250, 250, 247, 0.92)"
          : "rgba(250, 250, 247, 0.75)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(30,42,58,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,115,85,0.15)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link href="/">
          <span
            className="display-font text-xl font-semibold tracking-wide"
            style={{ color: "oklch(0.22 0.02 240)", fontFamily: "var(--font-display)" }}
          >
            Arjun Sharma
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`nav-link ${location === link.href ? "active" : ""}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md"
          style={{ color: "oklch(0.35 0.02 240)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "rgba(250,250,247,0.97)",
            borderColor: "rgba(139,115,85,0.15)",
          }}
        >
          <nav className="container flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link block py-2 ${location === link.href ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
