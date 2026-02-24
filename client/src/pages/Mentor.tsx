/*
 * Mentor Page — ISM Digital Portfolio
 * Sections: Mentor photo, professional bio, personal note of gratitude
 */
import { Briefcase, MapPin } from "lucide-react";

export default function Mentor() {
  return (
    <div className="pt-16">
      {/* ─── Page Header ─── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.02 240)" }}>
        <div className="container">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.75 0.08 75)" }}>
            Portfolio
          </p>
          <h1
            className="display-font font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.97 0.005 80)", lineHeight: 1.1 }}
          >
            My Mentor
          </h1>
          <div className="gold-line" />
        </div>
      </section>

      {/* ─── Mentor Content ─── */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Left: Photo + Quick Info */}
            <div className="lg:col-span-1 fade-up">
              {/* Mentor Photo */}
              <img
                src="/mentor-photo.png"
                alt="Dr. Leilani H. Gilpin"
                className="rounded-sm overflow-hidden mb-6 shadow-lg w-full"
                style={{ aspectRatio: "3/4", objectFit: "cover" }}
              />

              {/* Quick Info Card */}
              <div
                className="rounded-sm p-5 border"
                style={{ background: "oklch(0.995 0.003 85)", borderColor: "oklch(0.88 0.01 80)" }}
              >
                <h3 className="section-heading text-sm mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Briefcase size={15} style={{ color: "oklch(0.62 0.12 75)", marginTop: "0.15rem", flexShrink: 0 }} />
                    <div>
                      <p className="text-xs tracking-wide uppercase font-semibold mb-0.5" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.52 0.015 240)" }}>Title</p>
                      <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)" }}>Assistant Professor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} style={{ color: "oklch(0.62 0.12 75)", marginTop: "0.15rem", flexShrink: 0 }} />
                    <div>
                      <p className="text-xs tracking-wide uppercase font-semibold mb-0.5" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.52 0.015 240)" }}>Organization</p>
                      <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)" }}>UC Santa Cruz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio + Gratitude */}
            <div className="lg:col-span-2 fade-up" style={{ animationDelay: "0.1s" }}>
              {/* Mentor Name */}
              <h2
                className="display-font font-bold text-3xl mb-2"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.02 240)" }}
              >
                Leilani H. Gilpin
              </h2>
              <p
                className="text-sm font-semibold tracking-wide mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)", letterSpacing: "0.08em" }}
              >
                Assistant Professor — UC Santa Cruz
              </p>
              <div className="gold-line mb-8" />

              {/* Professional Bio */}
              <div className="mb-10">
                <h3 className="section-heading text-sm mb-5">Professional Biography</h3>
                <div className="space-y-4" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)", lineHeight: 1.8 }}>
                  <p>
                    Dr. Leilani H. Gilpin is an Assistant Professor in the Department of Computer Science and Engineering at UC Santa Cruz. She holds a PhD in Computer Science from MIT, an M.S. in Computational and Mathematical Engineering from Stanford University, and a B.S. in Mathematics (with honors), B.S. in Computer Science (with highest honors), and a music minor from UC San Diego. Her educational journey demonstrates a deep commitment to rigorous technical training and interdisciplinary thinking.
                  </p>
                  <p>
                    Dr. Gilpin's research focuses on advancing the field of computer science and engineering through innovative approaches to complex problems. Her work at UC Santa Cruz positions her as a leader in her field, contributing to both academic knowledge and practical applications. She is recognized for her expertise and dedication to pushing the boundaries of what is possible in computer science.
                  </p>
                  <p>
                    In her current role at UC Santa Cruz, Dr. Gilpin is actively engaged in mentoring the next generation of computer scientists and engineers. Beyond her research and teaching responsibilities, she enjoys swimming, cooking, and hiking—activities that reflect her well-rounded approach to life and her commitment to maintaining balance between professional excellence and personal well-being.
                  </p>
                </div>
              </div>

              {/* Personal Note of Gratitude */}
              <div
                className="rounded-sm p-8"
                style={{
                  background: "linear-gradient(135deg, oklch(0.22 0.02 240) 0%, oklch(0.28 0.025 240) 100%)",
                }}
              >
                <h3
                  className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)" }}
                >
                  A Personal Note of Gratitude
                </h3>
                <blockquote
                  className="italic text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.90 0.005 80)" }}
                >
                  "Dr. Gilpin has been an invaluable mentor throughout my ISM journey. Her guidance has helped me develop a deeper understanding of mechanical engineering and the importance of rigorous problem-solving. Through her mentorship, I have learned not only technical skills but also the value of perseverance, creativity, and continuous learning. I am grateful for her time, insights, and encouragement as I pursue my passion for engineering."
                </blockquote>
                <footer
                  className="mt-4 text-sm not-italic font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)", letterSpacing: "0.06em" }}
                >
                  — Arjun Sharma
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
