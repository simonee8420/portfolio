// src/app/(main)/page.tsx

import Image from "next/image";
import Link from "next/link";

type Project =
  | {
      id: string;
      title: string;
      description: string;
      type: "iframe";
      src: string;
      height?: number;
    }
  | {
      id: string;
      title: string;
      description: string;
      type: "image";
      src: string;
      alt: string;
    };

const projects: Project[] = [
  {
    id: "hive",
    title: "Hive Meeting Rooms Display",
    description:
      "Designed a live meeting room display experience that helps teams quickly understand availability at a glance. Built as a clean, readable interface intended for shared screens, with a focus on clarity, accessibility, and smooth real-world usability.",
    type: "iframe",
    src: "https://hivefs-meetingrooms.netlify.app/",
    height: 380,
  },
  {
    id: "tiya",
    title: "T.I.Y.A – Tutor In Your Area",
    description:
      "A tutor discovery platform built with React and Firebase that supports ZIP-based location search, sorting, and booking flows. Designed in Figma and implemented with user-centered UI decisions that make searching, comparing, and choosing tutors feel simple and confident.",
    type: "image",
    src: "/projects/tiya-preview.png",
    alt: "Tutor In Your Area preview",
  },
  {
    id: "freedom",
    title: "A Taste of Freedom",
    description:
      "A visual identity and flyer design for a community campaign by Flaming Heart Ministries. The layout balances warmth with legibility, using strong hierarchy and accessible typography so the message is clear, inviting, and easy to scan.",
    type: "image",
    src: "/projects/freedom-preview.png",
    alt: "A Taste of Freedom flyer preview",
  },
];

function SectionShell({
  id,
  children,
  width = "min(1100px, 92%)",
}: {
  id?: string;
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <section
      id={id}
      style={{
        width,
        margin: "0 auto",
      }}
    >
      {children}
    </section>
  );
}

function GlassCard({
  children,
  padding = "28px",
}: {
  children: React.ReactNode;
  padding?: string;
}) {
  return (
    <div
      style={{
        borderRadius: "28px",
        padding,
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 30px 90px rgba(0,0,0,0.55), 0 0 70px rgba(255,255,255,0.06)",
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const iframeHeight = project.type === "iframe" ? project.height ?? 360 : 360;

  return (
    <GlassCard padding="26px">
      {/* Preview ABOVE description */}
      <div
        style={{
          width: "100%",
          borderRadius: "22px",
          padding: "18px",
          background: "rgba(255,255,255,0.82)",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
          }}
        >
          {project.type === "iframe" ? (
            <iframe
              src={project.src}
              title={project.title}
              loading="lazy"
              style={{
                width: "100%",
                height: `${iframeHeight}px`,
                border: "0",
                display: "block",
                background: "white",
              }}
            />
          ) : (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: `${iframeHeight}px`,
              }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 900px) 92vw, 1100px"
                style={{ objectFit: "contain", background: "white" }}
                priority={project.id === "hive"}
              />
            </div>
          )}
        </div>
      </div>

      <h3
        style={{
          marginTop: "22px",
          marginBottom: "10px",
          fontSize: "28px",
          fontWeight: 900,
          color: "rgba(255,255,255,0.94)",
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "rgba(255,255,255,0.74)",
          lineHeight: 1.8,
          fontSize: "16px",
          maxWidth: "920px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        {project.description}
      </p>
    </GlassCard>
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        background:
          "radial-gradient(1100px 750px at 50% 0%, rgba(255,255,255,0.10), rgba(0,0,0,0.92))",
        paddingBottom: "90px",
      }}
    >
      {/* Local CSS for animation + glow */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .heroFloat {
          animation: floatSlow 6.5s ease-in-out infinite;
          will-change: transform;
        }
        .softGlow {
          text-shadow: 0 0 26px rgba(255,255,255,0.18);
        }
      `}</style>

      {/* HERO */}
      <SectionShell>
        <div style={{ paddingTop: "70px" }}>
          <div
            className="heroFloat"
            style={{
              textAlign: "center",
              padding: "42px 18px 22px",
            }}
          >
            <h1
              className="softGlow"
              style={{
                fontSize: "clamp(46px, 5.2vw, 86px)",
                fontWeight: 950,
                letterSpacing: "-0.04em",
                margin: 0,
                lineHeight: 1.02,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Welcome to my portfolio.
              <br />
              I&apos;m Simone.
            </h1>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 820,
                fontSize: "clamp(16px, 1.8vw, 22px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              I design and build digital experiences that feel intuitive, thoughtful, and worth exploring.
              Scroll to see projects where research meets real implementation, from interface concepts to working systems.
            </p>

            <div
              style={{
                marginTop: "26px",
                display: "flex",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <a
                href="#projects"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  color: "black",
                  padding: "12px 22px",
                  borderRadius: 999,
                  fontWeight: 900,
                  textDecoration: "none",
                  boxShadow: "0 0 22px rgba(255,255,255,0.22)",
                  display: "inline-block",
                }}
              >
                Explore my work
              </a>

              <a
                href="#about"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.90)",
                  padding: "12px 22px",
                  borderRadius: 999,
                  fontWeight: 800,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                About me
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ABOUT */}
      <SectionShell id="about">
        <div style={{ marginTop: "60px" }}>
          <GlassCard>
            <h2
              className="softGlow"
              style={{
                textAlign: "center",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 950,
                letterSpacing: "-0.03em",
                margin: "0 0 22px",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              About Me
            </h2>

            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 0 40px rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  flex: "0 0 auto",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <Image
                  src="/images/og/profile.jpg"
                  alt="Simone Lattimore"
                  width={220}
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              </div>

              <div style={{ maxWidth: 720 }}>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.9,
                    fontSize: 16,
                  }}
                >
                  I&apos;m Simone Lattimore, a Computer Science graduate focused on UI and UX research and design. I care about the moments where users hesitate, feel confused, or lose trust, and I like turning those moments into clear, calm interactions.
                </p>

                <p
                  style={{
                    marginTop: 16,
                    marginBottom: 0,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.9,
                    fontSize: 16,
                  }}
                >
                  My goal is to create products that are accessible, efficient, and empowering for everyone. I enjoy connecting behavioral thinking with implementation, so designs are not just visually strong, they also hold up under real constraints and real user needs.
                </p>

                <p
                  style={{
                    marginTop: 16,
                    marginBottom: 0,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.9,
                    fontSize: 16,
                  }}
                >
                  I&apos;m especially interested in how research can improve everyday experiences, like search flows, scheduling, onboarding, and accessibility, so people can move through products with less friction and more confidence.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionShell>

      {/* PROJECTS */}
      <SectionShell id="projects">
        <div style={{ marginTop: "70px" }}>
          <h2
            className="softGlow"
            style={{
              textAlign: "center",
              fontSize: "clamp(34px, 4vw, 54px)",
              fontWeight: 950,
              letterSpacing: "-0.03em",
              margin: "0 0 34px",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Featured Projects
          </h2>

          <div style={{ display: "grid", gap: 34 }}>
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </SectionShell>

      {/* CONTACT */}
      <SectionShell id="contact">
        <div style={{ marginTop: "80px" }}>
          <GlassCard>
            <h2
              className="softGlow"
              style={{
                textAlign: "center",
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 950,
                margin: "0 0 18px",
                letterSpacing: "-0.03em",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Contact Me
            </h2>

            <div
              style={{
                display: "grid",
                gap: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0, fontSize: 18, color: "rgba(255,255,255,0.82)" }}>
                📧 Slattimore2@student.gsu.edu
              </p>

              <p style={{ margin: 0, fontSize: 18, color: "rgba(255,255,255,0.82)" }}>
                🔗{" "}
                <Link
                  href="https://linkedin.com/in/simonee8420"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
                >
                  linkedin.com/in/simonee8420
                </Link>
              </p>

              <a
                href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  color: "black",
                  fontSize: 18,
                  fontWeight: 900,
                  padding: "12px 24px",
                  borderRadius: 999,
                  textDecoration: "none",
                  marginTop: 12,
                  display: "inline-block",
                  boxShadow: "0 0 22px rgba(255,255,255,0.20)",
                }}
              >
                📄 View My Résumé
              </a>
            </div>
          </GlassCard>
        </div>
      </SectionShell>
    </main>
  );
}
