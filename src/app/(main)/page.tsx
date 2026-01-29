"use client";

import React from "react";
import { Column, Heading, Text, Button } from "@once-ui-system/core";

type Project =
  | {
      title: string;
      subtitle?: string;
      description: string;
      kind: "embed";
      src: string;
    }
  | {
      title: string;
      subtitle?: string;
      description: string;
      kind: "image";
      src: string;
      alt: string;
    };

const PROJECTS: Project[] = [
  {
    title: "Hive Meeting Rooms Display",
    subtitle: "Availability dashboard for office navigation",
    kind: "embed",
    src: "https://hivefs-meetingrooms.netlify.app/",
    description:
      "Built a live meeting-room availability display that makes it easy to spot open rooms at a glance. Designed the layout for fast scanning, clear status states, and smoother decision-making in shared spaces, then shipped it as a working system that stays updated for everyday use.",
  },
  {
    title: "T.I.Y.A – Tutor In Your Area",
    subtitle: "Proximity-based tutor discovery experience",
    kind: "image",
    src: "/projects/tiya-preview.png",
    alt: "TIYA project preview",
    description:
      "Designed and developed a tutor discovery flow centered on real user needs: quick searching, simple filtering, and an interface that helps students choose confidently. Balanced structure and clarity across key screens so users can move from browsing to booking without confusion.",
  },
  {
    title: "A Taste of Freedom",
    subtitle: "Visual identity and flyer design",
    kind: "image",
    src: "/projects/freedom-preview.png",
    alt: "Taste of Freedom flyer preview",
    description:
      "Created a print-ready flyer with stronger typography hierarchy and clearer reading order. Focused on legibility, spacing, and visual rhythm so the message stays welcoming and easy to understand for a wide audience.",
  },
];

export default function Home() {
  return (
    <Column
      id="top"
      fillWidth
      center
      gap="xl"
      style={{
        minHeight: "100vh",
        color: "var(--ink)",
        textAlign: "left",
      }}
    >
      {/* ===== Global styles for this page ===== */}
      <style jsx global>{`
        :root {
          --bg0: #fbfaf8;
          --bg1: #f6f2ff;
          --bg2: #eaf4ff;

          --ink: #16161d;
          --muted: rgba(22, 22, 29, 0.72);

          --card: rgba(255, 255, 255, 0.72);
          --cardBorder: rgba(22, 22, 29, 0.10);

          --accent: #6d28d9; /* violet */
          --accent2: #0ea5e9; /* sky */
          --accentSoft: rgba(109, 40, 217, 0.12);

          --btnPrimaryBg: #6d28d9;
          --btnPrimaryText: #ffffff;

          --btnAltBg: #0f172a; /* deep slate */
          --btnAltText: #ffffff;

          --pillBg: rgba(255, 255, 255, 0.80);
          --shadow: 0 18px 60px rgba(17, 24, 39, 0.10);
        }

        html,
        body {
          background: radial-gradient(
              1000px 650px at 18% 18%,
              rgba(109, 40, 217, 0.18),
              transparent 60%
            ),
            radial-gradient(
              900px 700px at 82% 22%,
              rgba(14, 165, 233, 0.16),
              transparent 60%
            ),
            linear-gradient(120deg, var(--bg0), var(--bg1), var(--bg2));
          color: var(--ink);
        }

        /* Subtle “float” animation for the hero content */
        @keyframes softFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Better iframe rendering inside rounded cards */
        .project-embed {
          width: 100%;
          height: 360px;
          border: 0;
          border-radius: 18px;
          background: white;
        }

        @media (min-width: 900px) {
          .project-embed {
            height: 420px;
          }
        }
      `}</style>

      {/* ===== Header ===== */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 30,
          backdropFilter: "blur(10px)",
          background: "rgba(251, 250, 248, 0.75)",
          borderBottom: "1px solid rgba(22, 22, 29, 0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "16px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          {/* Logo button (S) */}
          <a
            href="#top"
            aria-label="Home"
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              display: "grid",
              placeItems: "center",
              textDecoration: "none",
              background: "linear-gradient(135deg, var(--accent), var(--accent2))",
              color: "white",
              fontWeight: 800,
              boxShadow: "0 12px 30px rgba(109, 40, 217, 0.22)",
            }}
          >
            S
          </a>

          {/* Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a
              href="#about"
              style={{
                color: "var(--ink)",
                textDecoration: "none",
                fontWeight: 650,
              }}
            >
              About
            </a>
            <a
              href="#work"
              style={{
                color: "var(--ink)",
                textDecoration: "none",
                fontWeight: 650,
              }}
            >
              Work
            </a>
            <a
              href="#contact"
              style={{
                color: "var(--ink)",
                textDecoration: "none",
                fontWeight: 650,
              }}
            >
              Contact
            </a>

            <a
              href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: 750,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(109, 40, 217, 0.10)",
                border: "1px solid rgba(109, 40, 217, 0.25)",
                color: "var(--accent)",
              }}
            >
              Résumé
            </a>
          </div>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <div style={{ width: "100%", padding: "34px 0 10px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 18px",
          }}
        >
          <div
            style={{
              borderRadius: 30,
              padding: "44px 28px",
              background: "rgba(255,255,255,0.62)",
              border: "1px solid rgba(22,22,29,0.08)",
              boxShadow: "var(--shadow)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* glow */}
            <div
              style={{
                position: "absolute",
                inset: -2,
                background:
                  "radial-gradient(600px 260px at 20% 20%, rgba(109,40,217,0.14), transparent 55%), radial-gradient(520px 240px at 78% 30%, rgba(14,165,233,0.12), transparent 55%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", animation: "softFloat 6s ease-in-out infinite" }}>
              <Heading
                variant="display-strong-xl"
                style={{
                  color: "var(--ink)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                }}
              >
                Welcome to my portfolio.
                <br />
                I&apos;m Simone.
              </Heading>

              <Text
                variant="heading-default-l"
                style={{
                  marginTop: 14,
                  color: "var(--muted)",
                  maxWidth: 820,
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                I build human-centered interfaces with engineering discipline and design taste.
                Explore my work below, from polished UI screens to fully working web experiences.
              </Text>

              <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                <a
                  href="#work"
                  style={{
                    textDecoration: "none",
                    background: "var(--btnAltBg)",
                    color: "var(--btnAltText)",
                    padding: "12px 18px",
                    borderRadius: 999,
                    fontWeight: 800,
                    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.18)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  View featured work <span aria-hidden>↓</span>
                </a>

                <a
                  href="#about"
                  style={{
                    textDecoration: "none",
                    background: "var(--btnPrimaryBg)",
                    color: "var(--btnPrimaryText)",
                    padding: "12px 18px",
                    borderRadius: 999,
                    fontWeight: 800,
                    boxShadow: "0 14px 40px rgba(109, 40, 217, 0.22)",
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== About ===== */}
      <Column
        id="about"
        align="center"
        padding="l"
        gap="l"
        style={{
          width: "100%",
          marginTop: 22,
        }}
      >
        <div style={{ width: "100%", maxWidth: 1120, padding: "0 18px" }}>
          <div
            style={{
              borderRadius: 30,
              background: "rgba(255,255,255,0.70)",
              border: "1px solid rgba(22,22,29,0.08)",
              boxShadow: "var(--shadow)",
              padding: "34px 26px",
            }}
          >
            <Heading variant="display-strong-l" style={{ color: "var(--ink)" }}>
              About Me
            </Heading>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 22,
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <img
                src="/images/og/profile.jpg"
                alt="Simone Lattimore"
                style={{
                  width: 190,
                  height: 190,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "6px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 18px 50px rgba(17, 24, 39, 0.14)",
                }}
              />

              <Text
                variant="body-default-l"
                style={{
                  maxWidth: 820,
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  fontWeight: 600,
                }}
              >
                I&apos;m a Computer Science graduate focused on the psychology behind digital interaction. I care about how
                people scan, interpret, and act inside products, and I use that lens to shape clearer flows and cleaner
                interfaces.
                <br />
                <br />
                I&apos;m especially interested in improving everyday experiences like search, scheduling, onboarding, and
                accessibility so products feel easier to move through and more predictable from screen to screen.
                <br />
                <br />
                My goal is to create products that are accessible, efficient, and durable for everyone.
              </Text>
            </div>
          </div>
        </div>
      </Column>

      {/* ===== Work / Projects ===== */}
      <Column
        id="work"
        align="center"
        gap="l"
        style={{
          width: "100%",
          marginTop: 10,
          scrollMarginTop: "90px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 1120, padding: "0 18px" }}>
          <Heading
            variant="display-strong-l"
            style={{ marginTop: 8, marginBottom: 14, color: "var(--ink)" }}
          >
            Featured Work
          </Heading>

          <div style={{ display: "grid", gap: 18 }}>
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                style={{
                  borderRadius: 30,
                  background: "rgba(255,255,255,0.70)",
                  border: "1px solid rgba(22,22,29,0.08)",
                  boxShadow: "var(--shadow)",
                  padding: "22px 22px 24px",
                }}
              >
                {/* Visual first */}
                <div
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    border: "1px solid rgba(22,22,29,0.08)",
                    background: "white",
                  }}
                >
                  {p.kind === "embed" ? (
                    <iframe
                      className="project-embed"
                      src={p.src}
                      title={p.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <img
                      src={p.src}
                      alt={p.alt}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  )}
                </div>

                {/* Text under visual */}
                <div style={{ marginTop: 18, textAlign: "center" }}>
                  <Heading variant="heading-strong-l" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </Heading>

                  {p.subtitle ? (
                    <Text
                      variant="body-default-m"
                      style={{
                        marginTop: 6,
                        color: "rgba(22,22,29,0.70)",
                        fontWeight: 650,
                      }}
                    >
                      {p.subtitle}
                    </Text>
                  ) : null}

                  <Text
                    variant="body-default-l"
                    style={{
                      marginTop: 12,
                      color: "var(--muted)",
                      maxWidth: 920,
                      marginLeft: "auto",
                      marginRight: "auto",
                      lineHeight: 1.8,
                      fontWeight: 600,
                    }}
                  >
                    {p.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Column>

      {/* ===== Contact ===== */}
      <Column
        id="contact"
        align="center"
        padding="l"
        gap="m"
        style={{
          width: "100%",
          marginTop: 18,
          paddingBottom: 70,
        }}
      >
        <div style={{ width: "100%", maxWidth: 1120, padding: "0 18px" }}>
          <div
            style={{
              borderRadius: 30,
              background: "rgba(255,255,255,0.70)",
              border: "1px solid rgba(22,22,29,0.08)",
              boxShadow: "var(--shadow)",
              padding: "30px 22px",
              textAlign: "center",
            }}
          >
            <Heading variant="display-strong-l" style={{ color: "var(--ink)" }}>
              Contact
            </Heading>

            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              <Text variant="body-default-l" style={{ color: "var(--muted)", fontWeight: 650 }}>
                📧 Slattimore2@student.gsu.edu
              </Text>

              <Text variant="body-default-l" style={{ color: "var(--muted)", fontWeight: 650 }}>
                🔗 linkedin.com/in/simonee8420
              </Text>

              <Text variant="body-default-l" style={{ color: "var(--muted)", fontWeight: 650 }}>
                💻 github.com/simonee8420
              </Text>
            </div>

            <div style={{ marginTop: 18 }}>
              <a
                href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                  color: "white",
                  fontSize: 16,
                  fontWeight: 800,
                  padding: "12px 18px",
                  borderRadius: 999,
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 16px 44px rgba(109, 40, 217, 0.22)",
                }}
              >
                View My Résumé
              </a>
            </div>
          </div>
        </div>
      </Column>
    </Column>
  );
}
