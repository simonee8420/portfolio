// src/app/(main)/page.tsx

"use client";

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
      "A TV-first meeting-room availability display built for fast, low-effort scanning in a real office environment. Designed with large-type hierarchy, high-contrast states, and clear status cues so teams can make quick decisions from a distance without hunting for details.",
    type: "iframe",
    src: "https://hivefs-meetingrooms.netlify.app/",
    height: 380,
  },
  {
    id: "tiya",
    title: "T.I.Y.A – Tutor In Your Area",
    description:
      "A tutor discovery experience that turns a messy search into a clean decision path. Implemented location-based filtering and sorting to help students compare tutors quickly, with UI choices that prioritize clarity, accessibility, and trust while browsing profiles and booking.",
    type: "image",
    src: "/projects/tiya-preview.png",
    alt: "Tutor In Your Area preview",
  },
  {
    id: "freedom",
    title: "A Taste of Freedom",
    description:
      "A campaign flyer and visual layout designed to guide attention in seconds. Built with strong typography, readable spacing, and approachable color contrast so the message stays clear on first glance and remains accessible across audiences and print contexts.",
    type: "image",
    src: "/projects/freedom-preview.png",
    alt: "A Taste of Freedom flyer preview",
  },
];

function SectionShell({
  id,
  children,
  width = "min(1120px, 92%)",
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
        scrollMarginTop: 96,
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
        borderRadius: 28,
        padding,
        background: "rgba(255,255,255,0.62)",
        border: "1px solid rgba(20, 20, 20, 0.08)",
        boxShadow:
          "0 26px 70px rgba(30, 30, 30, 0.10), 0 1px 0 rgba(255,255,255,0.9) inset",
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const previewHeight = project.type === "iframe" ? project.height ?? 360 : 360;

  return (
    <GlassCard padding="26px">
      <div
        style={{
          width: "100%",
          borderRadius: 22,
          padding: 16,
          background: "rgba(255,255,255,0.92)",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: 18,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 18px 44px rgba(0,0,0,0.10)",
          }}
        >
          {project.type === "iframe" ? (
            <iframe
              src={project.src}
              title={project.title}
              loading="lazy"
              style={{
                width: "100%",
                height: `${previewHeight}px`,
                border: 0,
                display: "block",
                background: "white",
              }}
            />
          ) : (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: `${previewHeight}px`,
              }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 900px) 92vw, 1120px"
                style={{ objectFit: "contain", background: "white" }}
              />
            </div>
          )}
        </div>
      </div>

      <h3
        style={{
          marginTop: 22,
          marginBottom: 10,
          fontSize: 30,
          fontWeight: 950,
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "rgba(20,20,20,0.92)",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "rgba(20,20,20,0.72)",
          lineHeight: 1.9,
          fontSize: 16,
          maxWidth: 980,
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
        color: "rgba(20,20,20,0.92)",
        background:
          "radial-gradient(900px 520px at 15% 10%, rgba(255, 120, 190, 0.18), rgba(255,255,255,0) 60%)," +
          "radial-gradient(820px 520px at 85% 15%, rgba(120, 160, 255, 0.20), rgba(255,255,255,0) 62%)," +
          "radial-gradient(820px 520px at 55% 75%, rgba(255, 210, 120, 0.20), rgba(255,255,255,0) 62%)," +
          "linear-gradient(180deg, #fbfaf6 0%, #f7f6f2 38%, #f3f2ee 100%)",
        paddingBottom: 100,
      }}
    >
      <style>{`
        :root{
          /* OMBRE ACCENT (matches S + primary buttons) */
          --accentA: #8b5cf6;
          --accentB: #ec4899;
          --accentC: #f59e0b;
          --accentGradient: linear-gradient(135deg, var(--accentA) 0%, var(--accentB) 55%, var(--accentC) 120%);
          --accentGlow: 0 22px 55px rgba(236,72,153,0.22), 0 10px 22px rgba(139,92,246,0.16);
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .heroFloat {
          animation: floatSlow 7s ease-in-out infinite;
          will-change: transform;
        }
        .headlineGlow {
          text-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .navLink {
          color: rgba(25,25,25,0.72);
          text-decoration: none;
          font-weight: 800;
          padding: 10px 12px;
          border-radius: 999px;
        }
        .navLink:hover {
          background: rgba(0,0,0,0.04);
          color: rgba(15,15,15,0.88);
        }

        /* PRIMARY BUTTON = OMBRE */
        .pillBtn {
          background: var(--accentGradient);
          color: rgba(255,255,255,0.98);
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 950;
          text-decoration: none;
          box-shadow: var(--accentGlow);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
        }
        .pillBtn:hover { 
          transform: translateY(-1px);
          filter: brightness(1.03) saturate(1.03);
          box-shadow: 0 26px 62px rgba(236,72,153,0.26), 0 12px 26px rgba(139,92,246,0.18);
        }

        .softBtn {
          background: rgba(255,255,255,0.78);
          color: rgba(15,15,15,0.92);
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          border: 1px solid rgba(0,0,0,0.08);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 160ms ease, background 160ms ease;
        }
        .softBtn:hover { 
          background: rgba(255,255,255,0.92);
          transform: translateY(-1px);
        }
      `}</style>

      {/* Sticky Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "14px 0",
          backdropFilter: "blur(10px)",
          background: "rgba(251, 250, 246, 0.70)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <SectionShell width="min(1120px, 94%)">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {/* LEFT: just the S badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 12,
                  background: "var(--accentGradient)",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 950,
                  letterSpacing: "-0.02em",
                  boxShadow: "var(--accentGlow)",
                }}
                aria-label="Logo"
                title="Simone"
              >
                S
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <a className="navLink" href="#about">
                About
              </a>
              <a className="navLink" href="#projects">
                Work
              </a>
              <a className="navLink" href="#contact">
                Contact
              </a>

              {/* Résumé button = same ombre as S + other primary buttons */}
              <a
                className="pillBtn"
                href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "11px 16px" }}
              >
                Résumé
              </a>
            </div>
          </div>
        </SectionShell>
      </div>

      {/* HERO */}
      <SectionShell>
        <div style={{ paddingTop: 64, paddingBottom: 28 }}>
          <div className="heroFloat" style={{ textAlign: "left" }}>
            {/* REMOVED: Portfolio / UI and UX Design badge */}

            <h1
              className="headlineGlow"
              style={{
                marginTop: 18,
                marginBottom: 14,
                fontSize: "clamp(48px, 5.2vw, 88px)",
                fontWeight: 1000,
                letterSpacing: "-0.05em",
                lineHeight: 0.98,
              }}
            >
              Welcome to my portfolio.
              <br />
              I&apos;m Simone.
            </h1>

            <p
              style={{
                margin: 0,
                maxWidth: 820,
                fontSize: "clamp(16px, 1.7vw, 20px)",
                lineHeight: 1.8,
                color: "rgba(20,20,20,0.72)",
                fontWeight: 700,
              }}
            >
              I build human-centered interfaces with engineering discipline and
              design taste. Explore my work below, from polished UI screens to
              fully working web experiences.
            </p>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a className="pillBtn" href="#projects">
                View featured work <span aria-hidden>↓</span>
              </a>

              <a className="softBtn" href="#about">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ABOUT */}
      <SectionShell id="about">
        <div style={{ marginTop: 34 }}>
          <GlassCard>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(30px, 3vw, 44px)",
                fontWeight: 1000,
                letterSpacing: "-0.04em",
                margin: "0 0 22px",
              }}
            >
              About Me
            </h2>

            <div
              style={{
                display: "flex",
                gap: 26,
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
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 18px 44px rgba(0,0,0,0.10)",
                  background: "rgba(255,255,255,0.55)",
                  flex: "0 0 auto",
                }}
              >
                {/* FIXED: use your new headshot file */}
                <Image
                  src="/images/og/headshot.jpg"
                  alt="Simone Lattimore"
                  width={220}
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              </div>

              <div style={{ maxWidth: 760 }}>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(20,20,20,0.74)",
                    lineHeight: 1.95,
                    fontSize: 16,
                    fontWeight: 650,
                  }}
                >
                  I&apos;m Simone Lattimore, a Computer Science graduate focused
                  on UI and UX design. I care about the moments where users
                  pause, second-guess, or abandon a task, and I like turning
                  those moments into clear, calm interactions.
                </p>

                <p
                  style={{
                    marginTop: 14,
                    marginBottom: 0,
                    color: "rgba(20,20,20,0.74)",
                    lineHeight: 1.95,
                    fontSize: 16,
                    fontWeight: 650,
                  }}
                >
                  My goal is to create products that are accessible, efficient,
                  and intuitive for everyone. I enjoy connecting behavioral
                  thinking with implementation, so designs are not just visually
                  strong, they also hold up under real constraints and real user
                  needs.
                </p>

                <p
                  style={{
                    marginTop: 14,
                    marginBottom: 0,
                    color: "rgba(20,20,20,0.74)",
                    lineHeight: 1.95,
                    fontSize: 16,
                    fontWeight: 650,
                  }}
                >
                  I&apos;m especially interested in how people navigate everyday
                  experiences like search, scheduling, onboarding, and
                  accessibility, and how small interface decisions can make
                  those experiences feel clearer and easier to complete.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionShell>

      {/* PROJECTS */}
      <SectionShell id="projects">
        <div style={{ marginTop: 64 }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(34px, 3.6vw, 56px)",
              fontWeight: 1000,
              letterSpacing: "-0.04em",
              margin: "0 0 28px",
            }}
          >
            Featured Work
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
        <div style={{ marginTop: 70 }}>
          <GlassCard>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 1000,
                letterSpacing: "-0.04em",
                margin: "0 0 18px",
              }}
            >
              Contact
            </h2>

            <div
              style={{
                display: "grid",
                gap: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  color: "rgba(20,20,20,0.72)",
                  fontWeight: 750,
                }}
              >
                📧 Simonee8420@gmail.com
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  color: "rgba(20,20,20,0.72)",
                  fontWeight: 750,
                }}
              >
                🔗{" "}
                <Link
                  href="https://linkedin.com/in/simonee8420"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(20,20,20,0.86)",
                    textDecoration: "underline",
                    fontWeight: 900,
                  }}
                >
                  linkedin.com/in/simonee8420
                </Link>
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  color: "rgba(20,20,20,0.72)",
                  fontWeight: 750,
                }}
              >
                💻{" "}
                <Link
                  href="https://github.com/simonee8420"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(20,20,20,0.86)",
                    textDecoration: "underline",
                    fontWeight: 900,
                  }}
                >
                  github.com/simonee8420
                </Link>
              </p>

              <a
                href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pillBtn"
                style={{ marginTop: 10, justifySelf: "center" }}
              >
                View My Résumé
              </a>
            </div>
          </GlassCard>
        </div>
      </SectionShell>
    </main>
  );
}
