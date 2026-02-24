/*
 * Research Page — ISM Digital Portfolio
 * Sections: Research Assessments (7 tabs) + Interview Assessments (3 tabs)
 */
import { useState } from "react";

const RESEARCH_BG = "https://private-us-east-1.manuscdn.com/sessionFile/ivkqiNDYPPXSyzHOt4C5d2/sandbox/uQDUnILwMOMu7A9ukSr2qT-img-3_1771817473000_na1fn_aXNtLXJlc2VhcmNoLWJhbm5lcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXZrcWlORFlQUFhTeXpIT3Q0QzVkMi9zYW5kYm94L3VRRFVuSUx3TU9NdTdBOXVrU3IycVQtaW1nLTNfMTc3MTgxNzQ3MzAwMF9uYTFmbl9hWE50TFhKbGMyVmhjbU5vTFdKaGJtNWxjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tPAa5oI2aUMLbdlI2j9lCdNd18ld~d~ZKXC4USZq27KQ6BGKNDYRmu2Hg-hUutN1GdrkekLEd7~BMdzT48aCa90lrdS7hE30~wSEQqYr138AaMzcS7TvgPJrVDu~M5nq-aeMFZsUqL413zTGXielUOq2ketogt~X9fNwJrxmoe0Nwa9UL9gXGypMroas~CVMWRksS6mMQ7v6NnWlQY21fnoV8aWN~o21p5tEmVkCbDlg~7Zz5zyE4l0E8p3jNjnNqXGKsSfWGlk84X2FDIe28Mun~tE77AT3SycJajMzgoRY90otmVmrHOn80gKYbERbGntkH8u2blD4Pk51CayFkw__";

type Tab = "research" | "interview";
type ResearchTab = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type InterviewTab = 1 | 2 | 3;

const RESEARCH_ASSESSMENTS: { id: ResearchTab; label: string; url: string }[] = [
  { id: 1, label: "Research Assessment 1", url: "https://docs.google.com/document/d/1GttkFQNoGLShttuQzpfRcC3kCiYEurrTcE9wMUfIcPI/edit?tab=t.0" },
  { id: 2, label: "Research Assessment 2", url: "https://docs.google.com/document/d/1yjN-uXJp-lF6uF2Sh0q7EZ5OIksd9Om60vds5fS9WgM/edit?tab=t.0" },
  { id: 3, label: "Research Assessment 3", url: "https://docs.google.com/document/d/1OwPXKzgqlhDm1_xwsGDKnyVBCZTqOs48_Y3-VpTU2Y0/edit?tab=t.0" },
  { id: 4, label: "Research Assessment 4", url: "https://docs.google.com/document/d/1z-_Yq0NkuyCs21yGrDjqPYivhWxuxRyP9K5geYhJGsI/edit?tab=t.0" },
  { id: 5, label: "Research Assessment 5", url: "https://docs.google.com/document/d/1MYx_yFkD1SA1fshTPSphKgNjrSAsyBw1jmphE4QG9uQ/edit?usp=sharing" },
  { id: 6, label: "Research Assessment 6", url: "https://docs.google.com/document/d/15JW2T4LVsgfIqfTY4KxgNOBEI257pMjCy79YBHXIaQQ/edit?usp=sharing" },
  { id: 7, label: "Research Assessment 7", url: "https://docs.google.com/document/d/1qF9K1I-etRRDgW2t0d7OMLp8ieAil2VUujW8rRf4Oas/edit?usp=sharing" },
];

const INTERVIEW_ASSESSMENTS: { id: InterviewTab; label: string; url: string }[] = [
  { id: 1, label: "Interview Assessment 1", url: "https://docs.google.com/document/d/1WV-sIUT4aijke1FExYzLVJV9hVdRruJOwITjdyl7cZ0/edit?tab=t.0" },
  { id: 2, label: "Interview Assessment 2", url: "https://docs.google.com/document/d/1ufkD8vanHBy-szJrjr9WuWO-sjcHTLAjVszF5nYxTEQ/edit?tab=t.0" },
  { id: 3, label: "Interview Assessment 3", url: "https://docs.google.com/document/d/1Gs7-Z8OPsEpWw1Vdh0UvBZRRtrCRwHmQzyFJN-rc0a8/edit?tab=t.0" },
];

export default function Research() {
  const [mainTab, setMainTab] = useState<Tab>("research");
  const [researchTab, setResearchTab] = useState<ResearchTab>(1);
  const [interviewTab, setInterviewTab] = useState<InterviewTab>(1);

  const currentResearchUrl = RESEARCH_ASSESSMENTS.find(a => a.id === researchTab)?.url || "";
  const currentInterviewUrl = INTERVIEW_ASSESSMENTS.find(a => a.id === interviewTab)?.url || "";

  return (
    <div className="pt-16">
      {/* ─── Page Header ─── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${RESEARCH_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(30,42,58,0.72)" }} />
        <div className="container relative z-10">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.75 0.08 75)" }}>
            Portfolio
          </p>
          <h1
            className="display-font font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.97 0.005 80)", lineHeight: 1.1 }}
          >
            Research
          </h1>
          <div className="gold-line mb-4" />
          <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "oklch(0.75 0.01 80)" }}>
            Assessments and reflections from my research journey.
          </p>
        </div>
      </section>

      {/* ─── Main Tabs ─── */}
      <section className="py-16">
        <div className="container">
          {/* Main Tab Buttons */}
          <div className="mb-8 flex gap-2 border-b" style={{ borderColor: "oklch(0.88 0.01 80)" }}>
            <button
              onClick={() => setMainTab("research")}
              className="px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px"
              style={{
                fontFamily: "var(--font-heading)",
                borderColor: mainTab === "research" ? "oklch(0.62 0.12 75)" : "transparent",
                color: mainTab === "research" ? "oklch(0.22 0.02 240)" : "oklch(0.52 0.015 240)",
              }}
            >
              Research Assessments
            </button>
            <button
              onClick={() => setMainTab("interview")}
              className="px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px"
              style={{
                fontFamily: "var(--font-heading)",
                borderColor: mainTab === "interview" ? "oklch(0.62 0.12 75)" : "transparent",
                color: mainTab === "interview" ? "oklch(0.22 0.02 240)" : "oklch(0.52 0.015 240)",
              }}
            >
              Interview Assessments
            </button>
          </div>

          {/* Research Assessments */}
          {mainTab === "research" && (
            <div className="fade-up">
              <div className="mb-6 flex flex-wrap gap-2">
                {RESEARCH_ASSESSMENTS.map((assessment) => (
                  <button
                    key={assessment.id}
                    onClick={() => setResearchTab(assessment.id)}
                    className="px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: researchTab === assessment.id ? "oklch(0.62 0.12 75)" : "oklch(0.995 0.003 85)",
                      color: researchTab === assessment.id ? "oklch(0.97 0.005 80)" : "oklch(0.22 0.02 240)",
                      border: `1px solid ${researchTab === assessment.id ? "oklch(0.62 0.12 75)" : "oklch(0.88 0.01 80)"}`,
                    }}
                  >
                    {assessment.label}
                  </button>
                ))}
              </div>

              {/* Embedded Google Doc */}
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: "oklch(0.88 0.01 80)" }}>
                <iframe
                  src={`${currentResearchUrl}#embedded=true`}
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                  title={`Research Assessment ${researchTab}`}
                />
              </div>
            </div>
          )}

          {/* Interview Assessments */}
          {mainTab === "interview" && (
            <div className="fade-up">
              <div className="mb-6 flex flex-wrap gap-2">
                {INTERVIEW_ASSESSMENTS.map((assessment) => (
                  <button
                    key={assessment.id}
                    onClick={() => setInterviewTab(assessment.id)}
                    className="px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: interviewTab === assessment.id ? "oklch(0.62 0.12 75)" : "oklch(0.995 0.003 85)",
                      color: interviewTab === assessment.id ? "oklch(0.97 0.005 80)" : "oklch(0.22 0.02 240)",
                      border: `1px solid ${interviewTab === assessment.id ? "oklch(0.62 0.12 75)" : "oklch(0.88 0.01 80)"}`,
                    }}
                  >
                    {assessment.label}
                  </button>
                ))}
              </div>

              {/* Embedded Google Doc */}
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: "oklch(0.88 0.01 80)" }}>
                <iframe
                  src={`${currentInterviewUrl}#embedded=true`}
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                  title={`Interview Assessment ${interviewTab}`}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
