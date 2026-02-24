/*
 * About Me Page — ISM Digital Portfolio
 * Sections: Professional photo, bio, mission statement, contact, LinkedIn
 */
import { Mail, Linkedin } from "lucide-react";

const ABOUT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/ivkqiNDYPPXSyzHOt4C5d2/sandbox/uQDUnILwMOMu7A9ukSr2qT-img-2_1771817468000_na1fn_aXNtLWFib3V0LWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXZrcWlORFlQUFhTeXpIT3Q0QzVkMi9zYW5kYm94L3VRRFVuSUx3TU9NdTdBOXVrU3IycVQtaW1nLTJfMTc3MTgxNzQ2ODAwMF9uYTFmbl9hWE50TFdGaWIzVjBMV0puLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AxJu-i93fX9KP73U8cboTlTD~IyFVtA59SaPoyezpBipKbDps~NY5Ucy5wElig4r5XsAPF7XoBF2vcvTP8gIgYo3I-tKF5uGQ2C97ysVL4I0RD5Wg36rBV6hojHhmFSXyDtdTy9Z2lqTKBaFqngx6S5gmPz-8km9krrv3sYlTgbj3Hl0yMMUESn78sDJHJaNUbNZpuG3rpYmJxIBuTSe5PP4I1f7iK9cf0265o-LZXNsG9dt8g9VZt5ug4Z-sdEK7Ny8cHGAnb5kKTJCOUs7TRosirecVdm6PbLq91cDrejOUA__";

export default function AboutMe() {
  return (
    <div className="pt-16">
      {/* ─── Page Header ─── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(30,42,58,0.65)" }} />
        <div className="container relative z-10">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ fontFamily: "var(--font-heading)", color: "oklch(0.75 0.08 75)" }}>
            Portfolio
          </p>
          <h1
            className="display-font font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.97 0.005 80)", lineHeight: 1.1 }}
          >
            About Me
          </h1>
          <div className="gold-line" />
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Left: Photo + Contact */}
            <div className="lg:col-span-1 fade-up">
              {/* Professional Photo */}
              <img
                src="/arjun-profile.png"
                alt="Arjun Sharma"
                className="rounded-sm overflow-hidden mb-6 shadow-lg w-full"
                style={{ aspectRatio: "3/4", objectFit: "cover" }}
              />

              {/* Contact Card */}
              <div
                className="rounded-sm p-5 border"
                style={{ background: "oklch(0.995 0.003 85)", borderColor: "oklch(0.88 0.01 80)" }}
              >
                <h3 className="section-heading text-sm mb-4">Contact</h3>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={16} style={{ color: "oklch(0.62 0.12 75)" }} />
                  <a
                    href="mailto:arjun.sharma.332@k12.friscoisd.org"
                    className="text-sm hover:underline"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)" }}
                  >
                    arjun.sharma.332@k12.friscoisd.org
                  </a>
                </div>
                <a
                  href="https://www.linkedin.com/in/arjun-sharma-382987320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-sm text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#0A66C2",
                    color: "#fff",
                  }}
                >
                  <Linkedin size={15} />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Right: Bio + Mission */}
            <div className="lg:col-span-2 fade-up" style={{ animationDelay: "0.1s" }}>
              {/* Bio */}
              <div className="mb-10">
                <h2 className="section-heading text-base mb-6">Personal &amp; Professional Bio</h2>
                <div className="space-y-4" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 240)", lineHeight: 1.8 }}>
                  <p>
                    Hello! I am Arjun Sharma, a current Senior at Independence High School with extensive experience in Full-Stack Development. Beyond academics, I am passionate about exploring mechanical engineering and its real-world applications. In my free time, I love to play sports such as basketball, football, and tennis, hang out with friends, and explore new machine learning algorithms.
                  </p>
                  <p>
                    This year in ISM, I have been researching the mechanical engineering workspace, from which I hope to finalize my Original Work. In the past, I have worked with various organizations such as Penn State, MIT, and UCSC, ensuring a grounded approach to my aspiring profession. These experiences have given me a deep appreciation for rigorous engineering principles and collaborative problem-solving.
                  </p>
                  <p>
                    Currently, I am working with the FISD ISM program to leverage opportunities in the field of mechanical engineering to further expand my knowledge and utilize my expertise. Through ISM, I am developing both technical skills and professional maturity, preparing myself for a future in engineering innovation and design.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div
                className="rounded-sm p-8 mb-8"
                style={{
                  background: "oklch(0.22 0.02 240)",
                  color: "oklch(0.92 0.005 80)",
                }}
              >
                <h2
                  className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "oklch(0.62 0.12 75)" }}
                >
                  Mission Statement
                </h2>
                <blockquote
                  className="italic text-xl leading-relaxed"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.92 0.005 80)" }}
                >
                  "To design and build mechanical solutions that solve real-world problems while continuously learning from mentors and peers. I am committed to excellence, innovation, and using my skills to create positive impact in the engineering field."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
