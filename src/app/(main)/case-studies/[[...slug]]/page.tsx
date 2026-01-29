// src/app/(main)/case-studies/[[...slug]]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudyId = "hive" | "tiya" | "freedom";

type CaseStudy = {
  id: CaseStudyId;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;

  overview: string;
  context: string;

  whatIBuilt: string[];
  designChoices: string[];
  outcome: string[];

  previewType: "iframe" | "image";
  previewSrc: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "hive",
    title: "Hive Meeting Rooms Display",
    subtitle: "A lobby TV calendar that shows availability for five meeting rooms",
    role: "Developer, UX-focused implementation",
    timeline: "Work project",
    overview:
      "A TV-friendly calendar view that shows meeting room availability in a day format. Designed for quick scanning in a shared public space.",
    context:
      "This display runs on a TV in Hive’s Headquarters building. Clients, employees, and guests can check room availability without asking staff or opening another tool.",
    whatIBuilt: [
      "A day-style calendar layout optimized for distance viewing",
      "A consolidated view of availability across five meeting rooms",
      "A stable display experience intended for continuous use on a TV",
    ],
    designChoices: [
      "Large readable sections so people can scan quickly while walking by",
      "Simple layout that avoids visual noise on shared screens",
      "A clear structure that supports quick decisions without explanation",
    ],
    outcome: [
      "Makes availability obvious in high-traffic areas",
      "Helps reduce basic availability questions directed to staff",
      "Creates a more polished experience for visitors in the lobby",
    ],
    previewType: "iframe",
    previewSrc: "https://hivefs-meetingrooms.netlify.app/",
  },
  {
    id: "tiya",
    title: "T.I.Y.A – Tutor In Your Area",
    subtitle: "Tutor discovery with account-based access and flexible session types",
    role: "Full-stack contributor, UI design",
    timeline: "Course project",
    overview:
      "A tutoring platform that helps students find nearby tutors and choose how they want to meet: in person, virtual, or group.",
    context:
      "Students need a simple way to browse tutors, compare options, and decide what session format works best. The platform supports accounts and flows that guide users from discovery to session choice.",
    whatIBuilt: [
      "An account-based experience for browsing and interacting with tutors",
      "UI that supports browsing, comparing, and decision-making",
      "Session type options built into the experience: in person, virtual, group",
    ],
    designChoices: [
      "Clear information hierarchy so users can compare tutors quickly",
      "Simple structure so the experience feels easy to navigate",
      "Preview image highlights the product layout and overall feel",
    ],
    outcome: [
      "Helps students discover local tutor options more easily",
      "Supports different learning preferences through multiple session formats",
      "Creates a structured experience from browsing to choosing how to meet",
    ],
    previewType: "image",
    previewSrc: "/projects/tiya-preview.png",
  },
  {
    id: "freedom",
    title: "A Taste of Freedom",
    subtitle: "Community-facing promotional flyer for Flaming Heart Ministries",
    role: "Graphic designer",
    timeline: "Design project",
    overview:
      "A flyer created to invite the community to Flaming Heart Ministries events, including food-focused gatherings.",
    context:
      "The goal was to make something inviting and easy to read across both print and digital formats. The layout needed to communicate the message quickly while still feeling warm and welcoming.",
    whatIBuilt: [
      "A flyer layout with clear hierarchy and strong readability",
      "Typography choices that make key details easy to locate",
      "A design that works for print and for sharing online",
    ],
    designChoices: [
      "Headline-first structure so people instantly understand the purpose",
      "Readable type sizes and spacing for quick scanning",
      "Balanced layout so information feels organized, not crowded",
    ],
    outcome: [
      "Supports outreach by making the event message easy to understand",
      "Designed to be shareable across community channels",
      "Keeps details clear and readable at a glance",
    ],
    previewType: "image",
    previewSrc: "/projects/freedom-preview.png",
  },
];

function SectionShell({
  children,
  width = "min(1000px, 92%)",
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return <section style={{ width, margin: "0 auto" }}>{children}</section>;
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
        background: "rgba(255,255,255,0.66)",
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

function BackgroundShell({ children }: { children: React.ReactNode }) {
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
      {children}
    </main>
  );
}

function ListView() {
  return (
    <BackgroundShell>
      <SectionShell>
        <div style={{ paddingTop: 40 }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              fontWeight: 900,
              color: "rgba(20,20,20,0.78)",
            }}
          >
            ← Back to home
          </Link>

          <h1
            style={{
              marginTop: 18,
              marginBottom: 10,
              fontSize: "clamp(40px, 4.6vw, 72px)",
              fontWeight: 1000,
              letterSpacing: "-0.05em",
              lineHeight: 1.05,
              textAlign: "center",
            }}
          >
            Case Studies
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: 820,
              fontSize: "clamp(16px, 1.7vw, 19px)",
              lineHeight: 1.8,
              color: "rgba(20,20,20,0.72)",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            A closer look at what I built, who it was for, and why the interface was shaped the way it is.
          </p>
        </div>

        <div style={{ marginTop: 34, display: "grid", gap: 34 }}>
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
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
                      height: 340,
                    }}
                  >
                    {study.previewType === "iframe" ? (
                      <iframe
                        src={study.previewSrc}
                        title={study.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: 0,
                          display: "block",
                          background: "white",
                        }}
                      />
                    ) : (
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image
                          src={study.previewSrc}
                          alt={study.title}
                          fill
                          sizes="(max-width: 900px) 92vw, 1000px"
                          style={{ objectFit: "cover", background: "white" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <h2
                  style={{
                    marginTop: 18,
                    marginBottom: 6,
                    fontSize: 28,
                    fontWeight: 950,
                    letterSpacing: "-0.03em",
                    color: "rgba(20,20,20,0.92)",
                    textAlign: "center",
                  }}
                >
                  {study.title}
                </h2>

                <p
                  style={{
                    marginTop: 0,
                    marginBottom: 12,
                    fontSize: 15,
                    fontWeight: 800,
                    color: "rgba(20,20,20,0.62)",
                    textAlign: "center",
                  }}
                >
                  {study.subtitle}
                </p>

                <div style={{ marginTop: 10, textAlign: "center", fontWeight: 900, color: "rgba(20,20,20,0.78)" }}>
                  Open case study →
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </SectionShell>
    </BackgroundShell>
  );
}

function DetailView({ id }: { id: CaseStudyId }) {
  const study = caseStudies.find((s) => s.id === id);
  if (!study) notFound();

  return (
    <BackgroundShell>
      <SectionShell width="min(900px, 92%)">
        <div style={{ paddingTop: 40 }}>
          <Link
            href="/case-studies"
            style={{
              textDecoration: "none",
              fontWeight: 900,
              color: "rgba(20,20,20,0.78)",
            }}
          >
            ← Back to case studies
          </Link>

          <h1
            style={{
              marginTop: 18,
              marginBottom: 10,
              fontSize: "clamp(34px, 4.2vw, 62px)",
              fontWeight: 1000,
              letterSpacing: "-0.05em",
              lineHeight: 1.08,
            }}
          >
            {study.title}
          </h1>

          <p
            style={{
              marginTop: 0,
              marginBottom: 16,
              fontSize: "clamp(16px, 2vw, 21px)",
              fontWeight: 800,
              color: "rgba(20,20,20,0.62)",
            }}
          >
            {study.subtitle}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 900,
                color: "rgba(20,20,20,0.72)",
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.06)",
                padding: "6px 10px",
                borderRadius: 999,
              }}
            >
              {study.timeline}
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 900,
                color: "rgba(20,20,20,0.72)",
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.06)",
                padding: "6px 10px",
                borderRadius: 999,
              }}
            >
              {study.role}
            </span>
          </div>
        </div>

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
                height: 420,
              }}
            >
              {study.previewType === "iframe" ? (
                <iframe
                  src={study.previewSrc}
                  title={study.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                    background: "white",
                  }}
                />
              ) : (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={study.previewSrc}
                    alt={study.title}
                    fill
                    sizes="(max-width: 900px) 92vw, 900px"
                    style={{ objectFit: "contain", background: "white" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div style={{ marginTop: 20, display: "grid", gap: 18 }}>
            <Block title="Overview" body={study.overview} />
            <Block title="Context" body={study.context} />
            <ListBlock title="What I Built" items={study.whatIBuilt} />
            <ListBlock title="Design Choices" items={study.designChoices} />
            <ListBlock title="Outcome" items={study.outcome} />
          </div>
        </GlassCard>
      </SectionShell>
    </BackgroundShell>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 950 }}>{title}</h2>
      <p style={{ marginTop: 8, marginBottom: 0, lineHeight: 1.85, color: "rgba(20,20,20,0.72)", fontWeight: 650 }}>
        {body}
      </p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 950 }}>{title}</h2>
      <ul style={{ marginTop: 10, marginBottom: 0, lineHeight: 1.8, color: "rgba(20,20,20,0.72)", fontWeight: 650 }}>
        {items.map((item) => (
          <li key={item} style={{ marginBottom: 6 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudiesUnifiedPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  // /case-studies -> list
  // /case-studies/[id] -> detail
  const slug = params.slug;
  if (!slug || slug.length === 0) return <ListView />;

  const id = slug[0] as CaseStudyId;
  if (!["hive", "tiya", "freedom"].includes(id)) notFound();

  return <DetailView id={id} />;
}
