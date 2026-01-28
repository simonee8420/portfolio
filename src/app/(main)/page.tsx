"use client";

import React from "react";
import { Column, Heading, Text, Button, Line } from "@once-ui-system/core";

export default function Home() {
  return (
    <Column
      fillWidth
      center
      style={{
        minHeight: "100vh",
        color: "white", 
        textAlign: "center",
      }}
      gap="xl"
    >
      {/* ===== Hero Section ===== */}
      <Column
        padding="l"
        align="center"
        gap="m"
        style={{
          marginTop: "40px",
          borderRadius: "28px",
          backdropFilter: "blur(10px)",
          background: "rgba(0,0,0,0.22)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 60px rgba(0,0,0,0.35)",
          maxWidth: "980px",
          width: "92%",
        }}
      >
        <Heading
          variant="display-strong-xl"
          marginTop="20"
          style={{
            color: "#FFFFFF",
            textShadow: "0 0 20px rgba(255,255,255,0.4)",
          }}
        >
          Welcome to my portfolio.
          <br />
          I&apos;m Simone A. Lattimore.
        </Heading>

        <Text
          variant="heading-default-l"
          wrap="balance"
          marginBottom="16"
          style={{
            color: "#FFFFFF",
            textShadow: "0 0 12px rgba(255,255,255,0.3)",
          }}
        >
          Computer Science graduate & incoming UI/UX researcher and designer.
        </Text>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            href="#projects"
            weight="default"
            style={{
              marginTop: "12px",
              boxShadow: "0 0 15px rgba(255,255,255,0.25)",
            }}
          >
            Explore my work
          </Button>
        </div>
      </Column>

      {/* ===== About Me Section ===== */}
      <Column
        id="about"
        align="center"
        padding="l"
        style={{
          background: "rgba(0,0,0,0.35)",
          color: "white",
          borderRadius: "24px",
          margin: "80px auto 60px",
          maxWidth: "950px",
          width: "92%",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 50px rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
        }}
        gap="l"
      >
        <Heading variant="display-strong-l">About Me</Heading>

        <Column
          align="center"
          gap="m"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/images/og/profile.jpg"
            alt="Simone Lattimore"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 25px rgba(255,255,255,0.25)",
              marginRight: "20px",
            }}
          />

          <Text
            onBackground="neutral-medium"
            style={{
              maxWidth: "550px",
              lineHeight: "1.8",
              textAlign: "left",
            }}
          >
            I&apos;m a <b>Georgia State University</b> Computer Science graduate dedicated to understanding the psychological principles behind digital interaction[cite: 70, 73]. 
            I apply programming and behavioral research to design accessible tools that align with human cognition by studying how users process information in digital environments[cite: 71].
            <br /><br />
            With a GPA of <b>3.47/4.00</b> and experience ranging from IT infrastructure to graphic design, I focus on building software that solves real-world problems with a human-centered approach[cite: 75, 87, 113].
          </Text>
        </Column>
      </Column>

      <Line background="neutral-alpha-weak" marginY="64" />

      {/* ===== Featured Projects Section ===== */}
      <Column
        id="projects"
        align="center"
        gap="xl"
        style={{ width: "100%", scrollMarginTop: "80px" }}
      >
        <Heading variant="display-strong-l" marginBottom="48">Featured Projects</Heading>

        <Column gap="70" align="center">
          {/* Hive Calendar Project */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="xl"
            style={{
              width: "80%",
              maxWidth: "850px",
              boxShadow: "0 0 40px rgba(255,215,0,0.15)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Heading variant="heading-default-l" marginBottom="12">Hive Calendar Project</Heading>
            <Text onBackground="neutral-medium" marginBottom="20">
              Architected an automated dashboard using Power BI and Power Automate to display real-time availability of meeting rooms[cite: 119]. 
              Leveraged HTML/CSS/JS and Java/SQL to deploy status displays for office navigation[cite: 120].
            </Text>
          </Column>

          {/* TIYA Project */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="xl"
            style={{
              width: "80%",
              maxWidth: "850px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src="/projects/tiya-preview.png"
              alt="TIYA Project"
              style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
            />
            <Heading variant="heading-default-l" marginBottom="12">Tutor In Your Area (TIYA)</Heading>
            <Text onBackground="neutral-medium">
              Engineered a platform for students to find tutors based on proximity, translating user needs into clear JS interfaces[cite: 123, 124]. 
              Built with Java, JavaScript, MySQL, Firebase, and designed in Figma[cite: 125].
            </Text>
          </Column>

          {/* Taste of Freedom */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="xl"
            style={{
              width: "80%",
              maxWidth: "850px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src="/projects/freedom-preview.png"
              alt="A Taste of Freedom"
              style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }}
            />
            <Heading variant="heading-default-l" marginBottom="12">A Taste of Freedom Flyer</Heading>
            <Text onBackground="neutral-medium">
              Designed brochures to drive community participation by improving font legibility and visual hierarchy, ensuring invitations remained accessible to a diverse demographic[cite: 125, 126].
            </Text>
          </Column>
        </Column>
      </Column>

      {/* ===== Contact Section ===== */}
      <Column
        id="contact"
        align="center"
        padding="l"
        style={{
          background: "rgba(0,0,0,0.30)",
          marginTop: "80px",
          paddingBottom: "80px",
          width: "100%",
        }}
        gap="m"
      >
        <Heading variant="display-strong-l">Contact Me</Heading>
        <Column gap="m" align="center">
          <Text variant="body-default-l">📧 Slattimore2@student.gsu.edu [cite: 66]</Text>
          <Text variant="body-default-l">🔗 linkedin.com/in/simonee8420 [cite: 68]</Text>
          <Text variant="body-default-l">💻 github.com/simonee8420 [cite: 68]</Text>

          <a
            href="/images/og/SIMONE_LATTIMORE_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: "18px",
              fontWeight: "600",
              padding: "12px 24px",
              borderRadius: "30px",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            📄 View My Résumé
          </a>
        </Column>
      </Column>
    </Column>
  );
}