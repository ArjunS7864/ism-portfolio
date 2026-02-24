/*
 * Resume Page — ISM Digital Portfolio
 * Sections: Embedded resume view + PDF download button
 */
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="pt-16">
      {/* ─── Page Header ─── */}
      <section
        className="py-20"
        style={{ background: "oklch(0.22 0.02 240)" }}
      >
        <div className="container">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.75 0.08 75)" }}>
            Portfolio
          </p>
          <h1
            className="display-font font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.97 0.005 80)", lineHeight: 1.1 }}
          >
            Résumé
          </h1>
          <div className="gold-line" />
        </div>
      </section>

      {/* ─── Resume Content ─── */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          {/* Download Button */}
          <div className="flex justify-end mb-6">
            <a
              href="/ArjunSharma-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-heading)",
                background: "oklch(0.62 0.12 75)",
                color: "oklch(0.99 0 0)",
              }}
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>

          {/* Resume Display Area */}
          <div
            className="rounded-sm border shadow-sm overflow-hidden"
            style={{ borderColor: "oklch(0.88 0.01 80)", background: "oklch(0.995 0.003 85)" }}
          >
            {/* Resume Content */}
            <div className="p-10">
              {/* Header */}
              <div className="text-center mb-8 pb-6" style={{ borderBottom: "2px solid oklch(0.62 0.12 75)" }}>
                <h2
                  className="display-font font-bold text-3xl mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.02 240)" }}
                >
                  Arjun Sharma
                </h2>
                <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>
                  14743 Starry Night Lane, Frisco, Texas 75035
                </p>
                <p className="text-sm mt-1" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>
                  arjun.sharma.332@k12.friscoisd.org | <a href="https://www.linkedin.com/in/arjun-sharma-382987320/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/arjun-sharma-382987320</a>
                </p>
              </div>

              {/* Education */}
              <ResumeSection title="Education">
                <ResumeEntry
                  title="Independence High School"
                  subtitle="Distinguished Level of Achievement"
                  details={[]}
                />
              </ResumeSection>

              {/* Experience */}
              <ResumeSection title="Experience">
                <ResumeEntry
                  title="Engineering and Robotics Intern"
                  subtitle="Flomad Labs R&D | 5/2025 - 7/2025"
                  details={[
                    "Engineered a dedicated assembly process for humanoid robot development, robotic arm, and self-developed wearables, and designed 2+ beta models, preparing for market readiness.",
                    "Iteratively simulated over 5 Arduino/ESP audio systems for potential usability in wearable products.",
                    "Worked simultaneously with the Robotics and the Developers team to develop the frontend and backend for the humanoid robot audio and vision systems.",
                    "Collaboratively worked with Finance, Development, and Robotics teams to pitch robot shows to clients, including the Dean of Texas A&M Corpus Christi."
                  ]}
                />
                <ResumeEntry
                  title="Engineering and Operations Intern"
                  subtitle="UN2 Corporation (Valero Operating Oil and Gas Corporation) | 5/2025 - 7/2025"
                  details={[
                    "Analyzed data from 5 different Valero gas stations in the North Texas (Lubbock) region to optimize fuel pumps and mechanical systems.",
                    "Conducted diagnostics to measure HVAC & pump efficiency, used that to accordingly make a development scheme to optimize production with given resources.",
                    "Built a robust maintenance plan, reducing utility costs, saving over $150 per month in unnecessary expenses.",
                    "Optimized pump flow & uptime by over 15% by engineering a decisive plan based on reliably forecasted projection models to improve energy usage across different sites."
                  ]}
                />
                <ResumeEntry
                  title="Informatics Research Intern"
                  subtitle="Pennsylvania State University | 11th-12th"
                  details={[
                    "Led a FinTech Machine Learning research project under the mentorship of Professor Kaamran Raahemifar, predicting and detecting pump-and-dump events within the cryptocurrency market.",
                    "Trained a Random Forest Machine Learning model on over 70,000 data points and 8 different parameterized scenarios, tracking and combining historic price volatility, trading volume, and news sentiment; discovered 9,000 pump-and-dump events with ~96% real-time accuracy.",
                    "Integrated various social-media news outputs and finance APIs to understand and mock a novice investing strategy; the model returned outputs of over 20% the baseline approach, providing unseen results regarding ROI and ROC curves.",
                    "First authored and documented findings in an 11-page research paper, published in IEEE TechRxiv and ResearchGate and in review at MDPI International Journal of FinTech; the paper has over 250 views/downloads."
                  ]}
                />
                <ResumeEntry
                  title="Co-Founder"
                  subtitle="Quantro LLC | 11th-12th"
                  details={[
                    "Co-founded a startup focused on financial technology and machine learning applications.",
                    "Developed business strategy and technical implementation for cryptocurrency market analysis tools."
                  ]}
                />
              </ResumeSection>

              {/* Activities & Leadership */}
              <ResumeSection title="Activities &amp; Leadership">
                <ResumeEntry
                  title="Student"
                  subtitle="Independent Study and Mentorship Program | 12th"
                  details={[
                    "Accepted into Independence High School's selective ISM program, currently researching mechanical engineering workspaces. Passed multiple stages such as preliminary essay, interview, etc.",
                    "Working year-round to develop a topic and create a final project to present at the end-of-year expedition using highly developed research.",
                    "Developing understanding of the mechanical engineering career field through research, in the process of searching for a mentor to supplement findings and provide real-time experience."
                  ]}
                />
                <ResumeEntry
                  title="Digital Media Operations Officer"
                  subtitle="Financial Freedom Club (NPO) | 10th"
                  details={[
                    "Served as one of 6 officers for the Independence High School chapter of Financial Freedom Club.",
                    "Developed online media aimed at informing audiences about financial freedom, expanding their knowledge on how to spend.",
                    "Assisted in coordinating meetings and maintained control of online social-media presence, creating posts for upcoming events, meetings, etc."
                  ]}
                />
                <ResumeEntry
                  title="Junior Varsity"
                  subtitle="High School Tennis Team | 9th"
                  details={[
                    "Selectively chosen via a rigorous tryout process, was ranked amongst the top 4 in JV, giving eligibility to play in fall district matches and spring tournaments as part of the team lineup.",
                    "Placed top 8 in district singles JV competition and reached multiple quarter-final positions in spring tournaments."
                  ]}
                />
              </ResumeSection>

              {/* Skills */}
              <ResumeSection title="Skills &amp; Languages">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold mb-2" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)" }}>Programming</p>
                    <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)" }}>Python, Java, JavaScript, Full-Stack Development, HTML, Figma</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)" }}>Languages</p>
                    <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)" }}>Fluent in English and Hindi, medium working Spanish</p>
                  </div>
                </div>
              </ResumeSection>

              {/* Awards */}
              <ResumeSection title="Awards &amp; Honors">
                <ResumeEntry
                  title="First Author of FinTech Research Paper"
                  subtitle="11-12th"
                  details={["Research Paper in MDPI International Journal of FinTech under review."]}
                />
                <ResumeEntry
                  title="First Author of Market Manipulation Research Publication"
                  subtitle="11-12th"
                  details={["Published Research Paper at IEEE TechRxiv and Research Gate."]}
                />
                <ResumeEntry
                  title="PeddieHacks Innovation Prize (Hackathon Winner)"
                  subtitle="12th"
                  details={["Received $100 and the innovation prize amongst 300+ high-school and collegiate contestants across the globe."]}
                />
                <ResumeEntry
                  title="TechLit Bridging The Gap Hackathon (1st Place Winner)"
                  subtitle="12th"
                  details={["Received $150 and placed 1st amongst over 120 high-schoolers and collegiate students from around the world."]}
                />
                <ResumeEntry
                  title="Hack4Humanity Hackathon (3rd Place Winner)"
                  subtitle="12th"
                  details={["Placed 3rd amongst over 500 high-schoolers, collegiate students, and adults from around the world."]}
                />
                <ResumeEntry
                  title="AsterHacks Hackathon (Aster's Achievement Award)"
                  subtitle="12th"
                  details={["Received achievement award amongst over 180 high-schoolers, collegiate students, and adults from around the world."]}
                />
                <ResumeEntry
                  title="Johns Hopkins Global Health Leadership Conference"
                  subtitle="11th"
                  details={["Selected to participate in Johns Hopkins' GHLC summer program from a very competitive applicant pool (~9.9% acceptance rate)."]}
                />
                <ResumeEntry
                  title="District 5A Tennis Competitor and Quarter-Finalist"
                  subtitle="9th"
                  details={["Placed amongst the top 8 boys out of 64 competitors for singles in the 5A Districts tennis competition."]}
                />
                <ResumeEntry
                  title="AP Scholar with Distinction"
                  subtitle="11-12th"
                  details={["Awarded twice for exceptional AP exam performance."]}
                />
                <ResumeEntry
                  title="National Honor Society"
                  subtitle="11-12th"
                  details={["Inducted for academic excellence and leadership."]}
                />
              </ResumeSection>

              {/* Volunteer Work */}
              <ResumeSection title="Volunteer Work">
                <ResumeEntry
                  title="Instructing Volunteer Tennis Court Lead"
                  subtitle="ACEing Autism | 11th"
                  details={[
                    "Headed tennis sessions for 100+ children ages 6-18 with disabilities, providing thorough instruction.",
                    "Led sessions with over 30 volunteers and over 12 per court, trained and guided lessons for flawless learning and seamless execution.",
                    "Designed and demonstrated over 10 unique drills on court for students to engage in, even beyond tennis, with the primary focus being to bolster motor skills and friendly engagement.",
                    "Tracked student progress each session and tracked in an orderly manner to measure growth and report results to parents."
                  ]}
                />
                <ResumeEntry
                  title="Social Activism Intern"
                  subtitle="TurnUp Activism | 11th"
                  details={[
                    "Joined weekly meetings, contributed to active conversation in weekly discussions, shared progress updates, and presented completed weekly tasks.",
                    "Engaged and collaborated with over 5 different organizations (MassDems, BlueVote, Sister District, etc.) with 50+ people weekly to spread awareness and gain support for social matters, encouraging action.",
                    "Spent over 20 hours partaking in grassroots activism with activities such as phonebanking, textbanking, and emailing to increase support for necessary social issues and causes that prompt widespread support."
                  ]}
                />
              </ResumeSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h3
        className="text-xs tracking-[0.18em] uppercase font-bold mb-3 pb-1"
        style={{
          fontFamily: "var(--font-heading)",
          color: "oklch(0.22 0.02 240)",
          borderBottom: "1px solid oklch(0.88 0.01 80)",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ResumeEntry({ title, subtitle, details }: { title: string; subtitle: string; details: string[] }) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
        <span className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)" }}>{title}</span>
        <span className="text-xs" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>{subtitle}</span>
      </div>
      {details.length > 0 && (
        <ul className="space-y-0.5 ml-3">
          {details.map((d, i) => (
            <li key={i} className="text-sm flex items-start gap-2" style={{ fontFamily: "var(--font-body)", color: "oklch(0.42 0.015 240)" }}>
              <span style={{ color: "oklch(0.62 0.12 75)", marginTop: "0.35em", flexShrink: 0 }}>•</span>
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
