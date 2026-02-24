/*
 * Projects Page — ISM Digital Portfolio
 * Sections: Original Work (Proposal, Setup, Assessment, Final Product)
 *           Final Product (Coming Soon)
 */
import { useState } from "react";
import { FileText, ClipboardCheck, Package, ChevronDown, ChevronUp } from "lucide-react";

type ProjectSection = "original" | "final";

export default function Projects() {
  const [activeSection, setActiveSection] = useState<ProjectSection>("original");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));

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
            Projects
          </h1>
          <div className="gold-line mb-4" />
          <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.01 80)" }}>
            Original Work and Final Product — the culmination of the ISM year.
          </p>
        </div>
      </section>

      {/* ─── Section Toggle ─── */}
      <section className="py-16">
        <div className="container">
          {/* Toggle Buttons */}
          <div className="flex gap-3 mb-12">
            {[
              { id: "original" as const, label: "Original Work" },
              { id: "final" as const, label: "Final Product" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveSection(btn.id)}
                className="px-6 py-3 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: activeSection === btn.id ? "oklch(0.22 0.02 240)" : "oklch(0.995 0.003 85)",
                  color: activeSection === btn.id ? "oklch(0.95 0.005 80)" : "oklch(0.42 0.015 240)",
                  border: "1px solid",
                  borderColor: activeSection === btn.id ? "oklch(0.22 0.02 240)" : "oklch(0.88 0.01 80)",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* ─── Original Work ─── */}
          {activeSection === "original" && (
            <div className="max-w-3xl fade-up">
              <div className="mb-8">
                <h2 className="section-heading text-base mb-3">Original Work</h2>
                <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>
                  My original work explores mechanical engineering systems and design principles through hands-on research and experimentation.
                </p>
              </div>

              <div className="space-y-4">
                <ProjectAccordion
                  icon={<FileText size={18} />}
                  title="Proposal"
                  isOpen={!!expandedItems["ow-proposal"]}
                  onToggle={() => toggle("ow-proposal")}
                >
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", color: "oklch(0.42 0.015 240)" }}>
                    My Original Work proposal outlines my approach to exploring mechanical engineering systems and design principles. The proposal details my research methodology, project scope, timeline, and expected deliverables.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1XZXWFrXis4sMUXrNZzWseqKVwMOF3aEdVet6JrWT90k/edit?tab=t.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: "oklch(0.62 0.12 75)",
                      color: "oklch(0.97 0.005 80)",
                    }}
                  >
                    View OW Proposal
                  </a>
                </ProjectAccordion>

                <ProjectAccordion
                  icon={<ClipboardCheck size={18} />}
                  title="Assessment"
                  isOpen={!!expandedItems["ow-assessment"]}
                  onToggle={() => toggle("ow-assessment")}
                >
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", color: "oklch(0.42 0.015 240)" }}>
                    My original work was evaluated based on technical accuracy, creativity, and alignment with my research goals. Feedback from my mentor and teacher helped me understand the strengths of my approach and areas for improvement. This experience has deepened my understanding of mechanical engineering principles and professional project management.
                  </p>
                </ProjectAccordion>

                <ProjectAccordion
                  icon={<Package size={18} />}
                  title="Final Product"
                  isOpen={!!expandedItems["ow-product"]}
                  onToggle={() => toggle("ow-product")}
                >
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", color: "oklch(0.42 0.015 240)" }}>
                    Below is the class structure for my Original Work, outlining the semester plan, assignments, and grading categories for my Mechanical Engineering course.
                  </p>
                  <img
                    src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663375877597/sWDclNfEKsGYOWfR.png?Expires=1803364196&Signature=OQgxRpY-SSNCqUvz7RKwAaJTSQuVWW9Otls5~JEV664kQtBrQjbvOYGZD5aguPJIYJSHetYBYSv0H0Lf0Bo9jkJxiiuAzN7laF6-gXCl4QDva7mD5FNLmZ~x0Z-G46mAc2Prqv8OsZmVYij4EXR4vQ43olRq7uF~ZjgPJ-fUaL40-v1iHKlRXyZH1kJPKruqm1lfCfDSzlkslEkWnYmOaUW1in-ZtCAGWZAnHlyFpjm7RRxvMNgRbYVgysNhlHRQRqMKeOD9BxN38UogUT5iSa57e1ny1PRB3iWyaiOQ7T2Dyl3Jn0gcWJguX2YXNCXtDbxJyU1csyzJSn7VAlUZxA__&Key-Pair-Id=K2HSFNDJXOU9YS"
                    alt="Semester 1 Class Structure - Original Work"
                    className="w-full rounded-sm border"
                    style={{ borderColor: "oklch(0.88 0.01 80)" }}
                  />
                </ProjectAccordion>
              </div>
            </div>
          )}

          {/* ─── Final Product ─── */}
          {activeSection === "final" && (
            <div className="max-w-3xl fade-up">
              <div className="rounded-sm border-2 p-12 text-center"
                style={{ borderColor: "oklch(0.62 0.12 75)", background: "oklch(0.994 0.006 82)" }}
              >
                <Package size={48} style={{ color: "oklch(0.62 0.12 75)", margin: "0 auto 1.5rem" }} />
                <h3
                  className="font-semibold text-xl mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)" }}
                >
                  Coming Soon
                </h3>
                <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "oklch(0.52 0.015 240)" }}>
                  My final product is in development. This will be the culminating project of my ISM year, showcasing the full scope of my research and learning. Check back soon for the completed project!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ProjectAccordion({
  icon,
  title,
  isOpen,
  onToggle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-sm border overflow-hidden"
      style={{ borderColor: "oklch(0.88 0.01 80)", background: "oklch(0.995 0.003 85)" }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-opacity-80"
        onClick={onToggle}
        style={{ background: isOpen ? "oklch(0.97 0.006 82)" : "transparent" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ color: "oklch(0.62 0.12 75)" }}>{icon}</span>
          <span
            className="font-semibold text-sm tracking-wide"
            style={{ fontFamily: "var(--font-heading)", color: "oklch(0.22 0.02 240)" }}
          >
            {title}
          </span>
        </div>
        <span style={{ color: "oklch(0.62 0.12 75)" }}>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t" style={{ borderColor: "oklch(0.88 0.01 80)" }}>
          {children}
        </div>
      )}
    </div>
  );
}
