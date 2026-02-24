/*
 * About ISM Page — ISM Digital Portfolio
 * Sections: ISM logo, program description, key pillars
 */

export default function AboutISM() {
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
            About ISM
          </h1>
          <div className="gold-line" />
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          {/* School Header */}
          <div className="mb-14 fade-up">
            <h2 className="section-heading text-lg mb-3">Independent Study &amp; Mentorship</h2>
            <p className="text-base font-medium" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.35 0.02 240)" }}>
              Independence High School — Frisco, Texas
            </p>
          </div>

          {/* Program Description */}
          <div className="mb-12 fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="section-heading text-base mb-6">What is ISM?</h2>
            <div className="space-y-4" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)", lineHeight: 1.8 }}>
              <p>
                Independent Study and Mentorship (ISM) is a rigorous, advanced academic program offered to high school students who demonstrate exceptional motivation and a desire to explore a professional field in depth. Students work independently under the guidance of a professional mentor in their chosen field of study.
              </p>
              <p>
                The program is designed to bridge the gap between high school academics and the professional world. Through real-world research, mentorship, and hands-on project work, ISM students develop critical thinking, communication, and professional skills that prepare them for college and careers.
              </p>
              <p>
                The ISM program at Independence High School is a selective, rigorous program that challenges students to think critically, conduct meaningful research, and develop professional skills. With support from experienced mentors and dedicated faculty, students gain real-world experience in their chosen fields while building a comprehensive digital portfolio that showcases their growth and achievements throughout the year.
              </p>
            </div>
          </div>

          {/* Key Pillars */}
          <div className="fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-heading text-base mb-8">Program Pillars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Research",
                  desc: "Students conduct both primary and secondary research, interviewing professionals and reviewing academic literature in their field.",
                },
                {
                  title: "Mentorship",
                  desc: "Each student is paired with a professional mentor who provides guidance, real-world insight, and industry connections.",
                },
                {
                  title: "Original Work",
                  desc: "Students develop and complete an original project or product that demonstrates mastery of their chosen field.",
                },
                {
                  title: "Professional Skills",
                  desc: "Students build résumés, practice professional communication, and develop a digital portfolio to showcase their work.",
                },
                {
                  title: "Reflection",
                  desc: "Regular blog posts and journal entries encourage students to reflect on their growth, challenges, and discoveries.",
                },
                {
                  title: "Final Product",
                  desc: "The culmination of the year is a polished final product or presentation that is shared with professionals and the community.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="card-lift rounded-sm p-6 border"
                  style={{ background: "oklch(0.995 0.003 85)", borderColor: "oklch(0.88 0.01 80)" }}
                >
                  <div className="gold-line mb-3" style={{ width: "2rem" }} />
                  <h3
                    className="font-semibold text-sm mb-2 tracking-wide uppercase"
                    style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.015 240)" }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
