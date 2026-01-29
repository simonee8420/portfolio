// src/app/(main)/case-studies/[[...slug]]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudyId = "hive" | "tiya" | "freedom";

type MediaItem = {
  src: string;
  alt: string;
  caption: string;
  fit?: "contain" | "cover";
};

type CaseStudy = {
  id: CaseStudyId;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;

  problem: string;
  goals: string[];
  contributions: string[];
  approach: string[];
  successes: string[];
  keyInsight?: string;

  visuals: MediaItem[];

  previewType: "iframe" | "image";
  previewSrc: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "tiya",
    title: "T.I.Y.A – Tutor In Your Area",
    subtitle: "Tutor discovery with flexible session types and account-based access",
    role: "UI design and full-stack contributor",
    timeline: "Course project",

    problem:
      "Students can find tutors online, but deciding who is actually a good match is harder. The early UI made it easy to browse, but harder to compare tutors quickly and feel confident about the next step.",
    goals: [
      "Make tutor browsing feel simple and structured",
      "Help students compare options faster",
      "Support in-person, virtual, and group sessions without confusion",
      "Make the tutor dashboard easier to read at a glance",
    ],
    contributions: [
      "Helped shape the Search and browsing experience so the layout supports scanning and quick comparison",
      "Worked on the tutor-facing dashboard direction and how information should be grouped",
      "Aligned UI decisions with what users would need first, not what we wanted to show first",
      "Helped plan dashboard changes with the team, including what to remove and what to emphasize",
    ],
    approach: [
      "Prioritized clarity over density and removed sections that added space but not value",
      "Grouped related information so tutors can see what matters without scrolling",
      "Kept the structure consistent across pages so the product feels predictable",
    ],
    successes: [
      "Tutor discovery feels less overwhelming because key info is easier to spot",
      "Dashboard layout focuses attention on the calendar and reviews, which are more actionable",
      "The product supports multiple session formats without making the experience feel messy",
    ],
    keyInsight:
      "When users feel unsure, the problem is often not missing features. It is the order and grouping of information.",

    visuals: [
      {
        src: "/case-studies/tiya-search.png",
        alt: "TIYA search results screen",
        caption:
          "Search results layout showing tutor cards and filters. Designed to support quick scanning and comparison.",
        fit: "contain",
      },
      {
        src: "/case-studies/tiya-dashboard-markup.png",
        alt: "Tutor dashboard layout markup with red notes",
        caption:
          "Tutor dashboard improvement plan. We removed low-value panels and used the space for a larger, clearer calendar and supporting performance insights.",
        fit: "contain",
      },
      {
        src: "/case-studies/tiya-dashboard-after.png",
        alt: "Updated tutor dashboard layout",
        caption:
          "Updated dashboard direction. The layout prioritizes the calendar and makes sessions easier to interpret without scrolling through empty sections.",
        fit: "contain",
      },
    ],

    previewType: "image",
    previewSrc: "/projects/tiya-preview.png",
  },

  {
    id: "hive",
    title: "Hive Meeting Rooms Display",
    subtitle: "A lobby TV calendar that shows availability for five meeting rooms",
    role: "Developer, UX-focused implementation",
    timeline: "Work project",

    problem:
      "The original meeting room calendar was sharp and aligned with Hive’s branding, but it was not ideal for a TV display. From a distance, the layout felt cluttered and details were harder to read quickly.",
    goals: [
      "Make availability obvious from across the room",
      "Keep Hive’s palette and brand feel without sacrificing readability",
      "Reduce confusion for guests and employees in a shared lobby space",
      "Support a stable, always-on display experience",
    ],
    contributions: [
      "Worked with the software team to keep the visual system consistent with Hive branding",
      "Adjusted layout decisions for TV viewing, including spacing, contrast, and visual hierarchy",
      "Helped move from a design that looked perfect on a laptop to one that reads clearly on a TV",
      "Supported the workflow where calendar data from automation could be used with TeamUp for the display",
    ],
    approach: [
      "Designed for distance. Large blocks, clear separation, fewer tiny details",
      "Kept the Hive color direction while simplifying the visual noise",
      "Focused on the one question viewers care about most: what is available right now",
    ],
    successes: [
      "Visitors can understand availability without asking staff",
      "The display feels clean and readable even on a large screen",
      "The result stayed on-brand while becoming more practical for real use",
    ],
    keyInsight:
      "A design can be polished and still fail if it does not match how and where it is viewed.",

    visuals: [
      {
        src: "/case-studies/hive-original.png",
        alt: "Original Hive calendar look",
        caption:
          "Earlier calendar look. It matched Hive’s sharp style but felt busier on a TV where text and spacing need more breathing room.",
        fit: "contain",
      },
      {
        src: "/case-studies/hive-teamup.png",
        alt: "TeamUp calendar view used for TV display",
        caption:
          "Updated display approach. The layout is easier to scan quickly while still using Hive’s colors and structure.",
        fit: "contain",
      },
    ],

    previewType: "iframe",
    previewSrc: "https://hivefs-meetingrooms.netlify.app/",
  },

  {
    id: "freedom",
    title: "A Taste of Freedom",
    subtitle: "Community-facing promotional flyer for Flaming Heart Ministries",
    role: "Graphic designer",
    timeline: "Design project",

    problem:
      "Flaming Heart Ministries hosts many kinds of events, but some event types consistently pulled larger attendance. The flyer needed to attract new visitors while staying clear, friendly, and easy to share.",
    goals: [
      "Create a welcoming, community-first flyer",
      "Make key info scannable for both print and online sharing",
      "Use food events as a strong hook without losing the ministry purpose",
    ],
    contributions: [
      "Designed the flyer layout with clear hierarchy and readable type choices",
      "Chose the structure so the purpose is understood within a few seconds",
      "Built a design that works on phones, social posts, and printed handouts",
    ],
    approach: [
      "Led with the event purpose, then supported it with location and timing",
      "Balanced warmth and clarity so the flyer feels inviting but still structured",
      "Designed for real sharing, not just a nice-looking mockup",
    ],
    successes: [
      "The flyer communicates the point quickly and feels approachable",
      "The design is easy to repost and easy to print without losing readability",
      "Food events become a natural entry point for broader community participation",
    ],
    keyInsight:
      "Good outreach design does not feel like marketing. It feels like an invitation.",

    visuals: [
      {
        src: "/case-studies/freedom-flyer.png",
        alt: "A Taste of Freedom flyer",
        caption:
          "Final flyer design. Built for quick scanning, clear hierarchy, and easy sharing across community channels.",
        fit: "contain",
      },
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
      <style>{`
        .metaPill {
          fontSize: 13px;
          fontWeight: 900;
          color: rgba(20,20,20,0.72);
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.06);
          padding: 6px 10px;
          border-radius: 999px;
        }
        .pullQuote {
          border-left: 4px solid rgba(0,0,0,0.10);
          padding-left: 14px;
          fontWeight: 900;
          color: rgba(20,20,20,0.82);
          fontSize: 20px;
          lineHeight: 1.55;
          margin: 0;
        }
        .subhead {
          margin: 0;
          fontSize: 22px;
          fontWeight: 950;
          letterSpacing: "-0.02em";
        }
        .bodyP {
          marginTop: 8px;
          marginBottom: 0px;
          lineHeight: 1.85;
          color: rgba(20,20,20,0.72);
          fontWeight: 650;
        }
        .list {
          marginTop: 10px;
          marginBottom: 0px;
          lineHeight: 1.85;
          color: rgba(20,20,20,0.72);
          fontWeight: 650;
        }
      `}</style>
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
            Short stories about real problems, what I built, and how design choices changed the outcome.
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

function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      {items.map((m) => (
        <figure key={m.src} style={{ margin: 0 }}>
          <div
            style={{
              width: "100%",
              borderRadius: 18,
              overflow: "hidden",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 18px 44px rgba(0,0,0,0.10)",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: 420 }}>
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(max-width: 900px) 92vw, 900px"
                style={{
                  objectFit: m.fit ?? "contain",
                  background: "white",
                }}
              />
            </div>
          </div>
          <figcaption
            style={{
              marginTop: 10,
              color: "rgba(20,20,20,0.68)",
              fontWeight: 750,
              lineHeight: 1.65,
            }}
          >
            {m.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function SimpleEventChart() {
  // Made-up but believable breakdown, since you asked for a chart concept.
  // You can change these numbers later without changing the design.
  const rows = [
    { label: "Food events", value: 52 },
    { label: "Worship nights", value: 18 },
    { label: "Youth events", value: 16 },
    { label: "Readings and talks", value: 14 },
  ];

  return (
    <div style={{ marginTop: 10 }}>
      <p className="bodyP" style={{ marginTop: 0 }}>
        Concept chart used to explain why the flyer leaned into food events as the main hook.
      </p>

      <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
        {rows.map((r) => (
          <div key={r.label}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 850, color: "rgba(20,20,20,0.78)" }}>
              <span>{r.label}</span>
              <span>{r.value}%</span>
            </div>
            <div
              style={{
                marginTop: 6,
                height: 12,
                borderRadius: 999,
                background: "rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${r.value}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #7b6cff, #ff6aa2, #ff9f4d)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
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
            <span className="metaPill">{study.timeline}</span>
            <span className="metaPill">{study.role}</span>
          </div>
        </div>

        <GlassCard padding="26px">
          <div style={{ display: "grid", gap: 20 }}>
            <div>
              <h2 className="subhead">The problem</h2>
              <p className="bodyP">{study.problem}</p>
            </div>

            {study.keyInsight ? (
              <p className="pullQuote">{study.keyInsight}</p>
            ) : null}

            <TwoCol
              left={<ListBlock title="Goals" items={study.goals} />}
              right={<ListBlock title="My contributions" items={study.contributions} />}
            />

            <TwoCol
              left={<ListBlock title="How I approached it" items={study.approach} />}
              right={<ListBlock title="Wins" items={study.successes} />}
            />

            <div>
              <h2 className="subhead">Visuals</h2>
              <p className="bodyP">
                I keep case studies visual so they feel quick to read. These show what the interface looked like and what changed.
              </p>

              <div style={{ marginTop: 14 }}>
                <MediaGrid items={study.visuals} />
              </div>

              {study.id === "freedom" ? (
                <div style={{ marginTop: 22 }}>
                  <h2 className="subhead">Why the flyer focused on food</h2>
                  <SimpleEventChart />
                </div>
              ) : null}
            </div>
          </div>
        </GlassCard>
      </SectionShell>
    </BackgroundShell>
  );
}

function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 18,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="subhead">{title}</h2>
      <ul className="list">
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
