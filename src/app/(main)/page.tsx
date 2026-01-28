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
        color: "white", // Ensures global text is white
        textAlign: "center",
        transition: "opacity 0.6s ease-in-out",
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
          className="float"
          style={{
            color: "#FFFFFF", // Bright white
            textShadow: "0 0 20px rgba(255,255,255,0.4)", // Increased glow
          }}
        >
          Welcome to my portfolio.
          <br />
          I&apos;m Simone.
        </Heading>

        <Text
          variant="heading-default-l"
          wrap="balance"
          marginBottom="16"
          className="float-delay"
          style={{
            color: "#FFFFFF", // Bright white
            textShadow: "0 0 12px rgba(255,255,255,0.3)",
          }}
        >
          I’m an inspired UI/UX designer and software engineer.
        </Text>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            id="explore"
            href="#projects"
            data-border="rounded"
            weight="default"
            arrowIcon
            style={{
              marginTop: "12px",
              transform: "translateX(-2px)",
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
          {/* PROFILE PICTURE */}
          <img
            src="/images/og/profile.jpg"
            alt="Simone Lattimore Profile"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 25px rgba(255,255,255,0.25)",
              marginRight: "50px",
            }}
          />

          <Text
            onBackground="neutral-medium"
            style={{
              maxWidth: "550px",
              lineHeight: "1.8",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            Hi 👋 I’m <b>Simone Lattimore</b>. <br />
            I am a future UI/UX designer and software engineer passionate about
            crafting modern, accessible digital experiences. With experience
            across front-end development, data-driven design, and IT
            infrastructure, I blend creativity with clean, efficient code. I’m
            also a recent graduate from Georgia State University, where I built
            projects that connected design with real-world problem solving.
            <br />
            <br />
            When I’m not coding or designing, I love exploring new tech trends,
            mentoring peers, and refining my personal design systems.
          </Text>
        </Column>
      </Column>

      <Line background="neutral-alpha-weak" marginY="64" />

      {/* ===== Featured Projects Section ===== */}
      <Column
        id="projects"
        align="center"
        gap="xl"
        style={{
          marginTop: "20px",
          width: "100%",
          scrollMarginTop: "80px",
        }}
      >
        <Heading
          variant="display-strong-l"
          marginBottom="48"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.1)" }}
        >
          Featured Projects
        </Heading>

        <Column
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "70px",
          }}
        >
          {/* ===== Hive Calendar Project (Updated) ===== */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="xl"
            style={{
              width: "80%",
              maxWidth: "850px",
              boxShadow: "0 0 40px rgba(255,215,0,0.15)",
              padding: "35px",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <iframe
              src="https://hivefs-meetingrooms.netlify.app/"
              width="100%"
              height="400"
              style={{
                border: "none",
                borderRadius: "16px",
                marginBottom: "20px",
                boxShadow: "0 0 35px rgba(255,215,0,0.25)",
              }}
              title="Hive Calendar Site Preview"
            />

            <Heading variant="heading-default-l" marginBottom="12">
              Hive Calendar Project
            </Heading>

            <Text onBackground="neutral-medium" marginBottom="20">
              Architected an automated dashboard using Power BI and Power Automate to display the real-time availability of 5 meeting rooms. Leveraged HTML/CSS/JS and Java/SQL to deploy the status display for straightforward office navigation.
            </Text>
            
            <Button
              href="https://hivefs-meetingrooms.netlify.app/"
              target="_blank"
              variant="secondary"
              size="s"
            >
              View Live Site
            </Button>
          </Column>

          {/* ===== TIYA Project ===== */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="xl"
            style={{
              width: "80%",
              maxWidth: "850px",
              boxShadow: "0 0 35px rgba(255,255,255,0.1)",
              padding: "35px",
              alignItems: "center",
              transform: "scale(1.02)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src="/projects/tiya-preview.png"
              alt="TIYA Project Preview"
              style={{
                width: "80%",
                borderRadius: "16px",
                marginBottom: "20px",
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
            />

            <Heading variant="heading-default-l" marginBottom="12">
              T.I.Y.A – Tutor In Your Area
            </Heading>

            <Text onBackground="neutral-medium">
              A web platform built with React and Firebase, integrating Google
              Maps API and Stripe payments to connect tutors and students
              locally. It features ZIP-based location search, price filtering,
              real-time booking, and user authentication — blending functional
              design with clean, intuitive interfaces.
            </Text>
          </Column>

          {/* ===== A Taste of Freedom Project ===== */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="xl"
            style={{
              width: "80%",
              maxWidth: "850px",
              boxShadow: "0 0 35px rgba(255,200,150,0.15)",
              padding: "35px",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src="/projects/freedom-preview.png"
              alt="A Taste of Freedom Flyer"
              style={{
                width: "55%",
                borderRadius: "16px",
                marginBottom: "20px",
                objectFit: "contain",
              }}
            />

            <Heading variant="heading-default-l" marginBottom="12">
              A Taste of Freedom
            </Heading>

            <Text onBackground="neutral-medium">
              A visual identity and flyer design for a community campaign by
              Flaming Heart Ministries, focusing on accessibility, diversity,
              and emotional connection. The design combines warm, organic colors
              and legible typography to reflect unity and inclusivity in a
              modern, approachable layout.
            </Text>
          </Column>
        </Column>
      </Column>

      <Line background="neutral-alpha-weak" marginY="64" />

      {/* ===== Contact Section ===== */}
      <Column
        id="contact"
        align="center"
        padding="l"
        style={{
          background: "rgba(0,0,0,0.30)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "80px",
          color: "white",
          width: "100%",
          backdropFilter: "blur(10px)",
        }}
        gap="m"
      >
        <Heading variant="display-strong-l">Contact Me</Heading>

        <Text onBackground="neutral-medium" style={{ maxWidth: "600px" }}>
          Interested in collaborating, hiring, or just want to say hi? I’d love to connect.
        </Text>

        <Column gap="m" align="center" style={{ marginTop: "20px" }}>
          <a href="mailto:simonee8420@gmail.com" style={{ color: "white", fontSize: "18px", textDecoration: "none" }}>
            📧 simonee8420@gmail.com
          </a>
          <a href="https://github.com/simonee8420" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "18px", textDecoration: "none" }}>
            💻 github.com/simonee8420
          </a>
          <a href="https://www.linkedin.com/in/simonee8420" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "18px", textDecoration: "none" }}>
            🔗 linkedin.com/in/simonee8420
          </a>

          {/* Resume link */}
          <a
            id="resume"
            href="/SIMONE_LATTIMORE_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: "18px",
              fontWeight: "600",
              padding: "10px 20px",
              borderRadius: "30px",
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              marginTop: "20px",
              transition: "all 0.3s ease",
            }}
          >
            📄 View My Résumé
          </a>
        </Column>
      </Column>
    </Column>
  );
}