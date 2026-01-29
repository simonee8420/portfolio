// app/(main)/page.tsx
import Image from "next/image";
import Link from "next/link";

export const runtime = "nodejs";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingBottom: "80px",
        background:
          "radial-gradient(1200px 800px at 50% 0%, rgba(255,255,255,0.08), rgba(0,0,0,0.85))",
      }}
    >
      {/* Hero */}
      <section
        style={{
          margin: "40px auto 0",
          borderRadius: "28px",
          backdropFilter: "blur(10px)",
          background: "rgba(0,0,0,0.22)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 60px rgba(0,0,0,0.35)",
          maxWidth: "980px",
          width: "92%",
          padding: "28px 22px",
        }}
      >
        <h1
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.4)",
            fontSize: "clamp(34px, 4vw, 54px)",
            lineHeight: 1.1,
            margin: "8px 0 12px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Welcome to my portfolio.
          <br />
          I&apos;m Simone A. Lattimore.
        </h1>

        <p
          style={{
            textShadow: "0 0 12px rgba(255,255,255,0.3)",
            fontSize: "clamp(16px, 1.6vw, 20px)",
            margin: "0 auto 18px",
            maxWidth: 780,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Computer Science graduate & incoming UI/UX researcher and designer.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="#projects"
            style={{
              marginTop: 12,
              boxShadow: "0 0 15px rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.95)",
              color: "black",
              padding: "12px 20px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Explore my work
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          background: "rgba(0,0,0,0.35)",
          borderRadius: 24,
          margin: "80px auto 60px",
          maxWidth: 950,
          width: "92%",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 50px rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          padding: "28px 22px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 2.5vw, 34px)",
            margin: "8px 0 22px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 25px rgba(255,255,255,0.25)",
              flex: "0 0 auto",
            }}
          >
            <Image
              src="/images/og/profile.jpg"
              alt="Simone Lattimore"
              width={200}
              height={200}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>

          <p
            style={{
              maxWidth: 550,
              lineHeight: 1.8,
              textAlign: "left",
              margin: 0,
              fontSize: 16,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            I&apos;m a <b>Georgia State University</b> Computer Science graduate
            dedicated to understanding the psychological principles behind digital
            interaction. I apply programming and behavioral research to design
            accessible tools that align with human cognition.
            <br />
            <br />
            With a GPA of <b>3.47/4.00</b> and experience ranging from IT
            infrastructure to graphic design, I focus on building software that
            solves real-world problems with a human-centered approach.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          height: 1,
          width: "100%",
          background: "rgba(255,255,255,0.1)",
          margin: "64px 0",
        }}
      />

      {/* Projects */}
      <section id="projects" style={{ width: "100%", scrollMarginTop: 80 }}>
        <h2
          style={{
            fontSize: "clamp(26px, 2.5vw, 34px)",
            margin: "0 0 48px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Featured Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "center" }}>
          <article
            style={{
              width: "80%",
              maxWidth: 850,
              borderRadius: 20,
              padding: 22,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 40px rgba(255,215,0,0.15)",
              textAlign: "left",
            }}
          >
            <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 800 }}>
              Hive Calendar Project
            </h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
              Architected an automated dashboard using Power BI and Power Automate
              to display real-time availability of meeting rooms.
            </p>
          </article>

          <article
            style={{
              width: "80%",
              maxWidth: 850,
              borderRadius: 20,
              padding: 22,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "left",
            }}
          >
            <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 800 }}>
              Tutor In Your Area (TIYA)
            </h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
              Engineered a platform for students to find tutors based on proximity.
              Built with Java, JavaScript, MySQL, Firebase, and designed in Figma.
            </p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          background: "rgba(0,0,0,0.30)",
          marginTop: 80,
          width: "100%",
          padding: "38px 18px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 2.5vw, 34px)",
            margin: "0 0 18px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Contact Me
        </h2>

        <div style={{ display: "grid", gap: 10, justifyContent: "center" }}>
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
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 999,
              textDecoration: "none",
              marginTop: 18,
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
