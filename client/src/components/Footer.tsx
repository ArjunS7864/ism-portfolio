/*
 * Footer — ISM Digital Portfolio
 * Design: warm slate footer, gold accent, Raleway font
 */
export default function Footer() {
  return (
    <footer
      className="py-10 mt-16"
      style={{
        background: "oklch(0.22 0.02 240)",
        color: "oklch(0.75 0.01 80)",
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="display-font text-lg font-semibold"
            style={{ color: "oklch(0.95 0.005 80)", fontFamily: "var(--font-display)" }}
          >
            Arjun Sharma
          </p>
          <p className="text-sm mt-1" style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.01 80)" }}>
            ISM Digital Portfolio
          </p>
        </div>
        <div className="text-center">
          <div className="gold-line mx-auto mb-3" />
          <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.55 0.01 80)" }}>
            Independent Study &amp; Mentorship
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.01 80)" }}>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
