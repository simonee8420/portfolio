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
    id: "hive-meeting-rooms",
    title: "Hive Financial System Site",
    description:
      "A full-stack financial platform developed with Python, JavaScript, and SQL to optimize internal workflows. The site features secure authentication, structured database design, and a responsive admin dashboard to manage client accounts, payrolls, and transactions efficiently.",
    type: "iframe",
    src: "https://hivefs-meetingrooms.netlify.app/",
  },
  {
    id: "tiya",
    title: "T.I.Y.A – Tutor In Your Area",
    description:
      "A web platform built with React and Firebase, integrating Google Maps API and Stripe payments to connect tutors and students locally. It features ZIP-based location search, price filtering, real-time booking, and user authentication — blending functional design with clean, intuitive interfaces.",
    type: "image",
    src: "/projects/tiya-preview.png",
    alt: "TIYA preview",
  },
  {
    id: "taste-of-freedom",
    title: "A Taste of Freedom",
    description:
      "A visual identity and flyer design for a community campaign by Flaming Heart Ministries, focusing on accessibility, diversity, and emotional connection. The design combines warm, organic colors and legible typography to reflect unity and inclusivity in a modern, approachable layout.",
    type: "image",
    src: "/projects/freedom-preview.png",
    alt: "A Taste of Freedom preview",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <section
      style={{
        width: "min(1100px, 92%)",
        margin: "0 auto",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "28px",
        boxShadow: "0 18px 70px rgba(0,0,0,0.45)",
        padding: "28px",
      }}
    >
      {/* Preview ON TOP */}
      <div
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.80)",
          borderRadius: "22px",
          padding: "18px",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
          }}
        >
          {project.type === "iframe" ? (
            <iframe
              src={project.src}
              title={project.title}
              style={{
                width: "100%",
                height: "360px",
                border: "0",
                display: "block",
                background: "#fff",
              }}
              // helps embedded sites behave better in many cases
              loading="lazy"
            />
          ) : (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                background: "#fff",
              }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 900px) 92vw, 1100px"
                style={{
                  objectFit: "contain",
                  background: "white",
                }}
                priority={project.id === "hive-meeting-rooms"}
              />
            </div>
          )}
        </div>
      </div>

      {/* Title + Description BELOW preview */}
      <h3
        style={{
          marginTop: "22px",
          marginBottom: "10px",
          fontSize: "28px",
          fontWeight: 800,
          color: "rgba(255,255,255,0.92)",
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.7,
          fontSize: "16px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        {project.description}
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        background:
          "radial-gradient(1200px 800px at 50% 0%, rgba(255,255,255,0.08), rgba(0,0,0,0.90))",
        paddingBottom: "90px",
      }}
    >
      {/* ===== Featured Projects ===== */}
      <section style={{ paddingTop: "70px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(34px, 4vw, 54px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            margin: "0 0 36px",
            textShadow: "0 0 22px rgba(255,255,255,0.18)",
          }}
        >
          Featured Projects
        </h2>

        <div style={{ display: "grid", gap: "36px" }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section
        id="contact"
        style={{
          marginTop: "80px",
          padding: "40px 18px 0",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 900,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Contact Me
        </h2>

        <div style={{ display: "grid", gap: "10px", justifyContent: "center" }}>
          <p style={{ margin: 0, fontSize: 18 }}>📧 Slattimore2@student.gsu.edu</p>

          <p style={{ margin: 0, fontSize: 18 }}>
            🔗{" "}
            <Link
              href="https://linkedin.com/in/simonee8420"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "underline" }}
            >
              linkedin.com/in/simonee8420
            </Link>
          </p>

          <a
            href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: 18,
              fontWeight: 800,
              padding: "12px 24px",
              borderRadius: 999,
              textDecoration: "none",
              marginTop: 14,
              display: "inline-block",
            }}
          >
            📄 View My Résumé
          </a>
        </div>
      </section>
    </main>
  );
}
