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
        background: "radial-gradient(circle at top, #0a0a0a, #000000)",
        color: "white",
        textAlign: "center",
      }}
      gap="xl"
    >
      {/* ===== Hero Section ===== */}
      <Column padding="l" align="center" gap="m">
        <Heading variant="display-strong-xl" marginTop="32">
          Welcome to my portfolio.<br />I'm Simone.
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
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
          >
            Explore my work
          </Button>
        </div>
      </Column>

      {/* ===== Featured Projects Section ===== */}
      <Column
        id="projects"
        align="center"
        gap="xxl"
        style={{
          marginTop: "70px",
          width: "100%",
        }}
      >
        <Heading variant="display-strong-l" marginBottom="32">
          Featured Projects
        </Heading>

        <Column
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Hive Financial Systems */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="2xl"
            style={{
              width: "85%",
              maxWidth: "900px",
              boxShadow: "0 0 35px rgba(255,215,0,0.1)",
              padding: "35px",
              alignItems: "center",
            }}
          >
            <Heading variant="heading-default-l" marginBottom="12">
              Hive Financial System Site
            </Heading>
            <Text onBackground="neutral-medium" marginBottom="20">
              Developed a full-stack financial management platform using Python,
              JavaScript, and SQL to streamline internal workflows. The site supports
              client onboarding, secure authentication, and integrated financial tools.
            </Text>
            <iframe
              src="https://hivefs.com"
              width="100%"
              height="300"
              style={{
                border: "none",
                borderRadius: "16px",
                boxShadow: "0 0 40px rgba(255,215,0,0.15)",
              }}
            ></iframe>
          </Column>

          {/* TIYA */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="2xl"
            style={{
              width: "85%",
              maxWidth: "900px",
              boxShadow: "0 0 45px rgba(255,182,193,0.15)",
              padding: "35px",
              alignItems: "center",
              transform: "scale(1.03)",
            }}
          >
            <img
              src="/projects/tiya-preview.png"
              alt="TIYA Project Preview"
              style={{
                width: "85%",
                borderRadius: "16px",
                marginBottom: "20px",
                boxShadow: "0 0 25px rgba(255,182,193,0.15)",
              }}
            />
            <Heading variant="heading-default-l" marginBottom="12">
              T.I.Y.A – Tutor In Your Area
            </Heading>
            <Text onBackground="neutral-medium">
              A React and Firebase-based tutoring platform featuring Google Maps API
              integration and Stripe payments. Built to connect tutors and students
              locally using real-time booking, location filtering, and secure payment
              processing. Designed with accessibility, scalability, and user-focused
              design at its core.
            </Text>
          </Column>

          {/* A Taste of Freedom */}
          <Column
            background="neutral-strong"
            padding="l"
            radius="2xl"
            style={{
              width: "85%",
              maxWidth: "900px",
              boxShadow: "0 0 45px rgba(255,200,150,0.25)",
              padding: "35px",
              alignItems: "center",
            }}
          >
            <img
              src="/projects/freedom-preview.png"
              alt="A Taste of Freedom Flyer"
              style={{
                width: "65%",
                borderRadius: "16px",
                marginBottom: "20px",
                objectFit: "contain",
              }}
            />
            <Heading variant="heading-default-l" marginBottom="12">
              A Taste of Freedom
            </Heading>
            <Text onBackground="neutral-medium">
              A community-focused design project highlighting accessibility, diversity,
              and inclusivity. Created for Flaming Heart Ministries to communicate
              togetherness through warm visuals, high contrast, and visual hierarchy.
              The design uses organic color balance and clean type to maintain legibility
              and emotional connection.
            </Text>
          </Column>
        </Column>
      </Column>

      <Line background="neutral-alpha-weak" marginY="48" />

      {/* ===== About Me Section ===== */}
      <Column
        id="about"
        align="center"
        padding="l"
        style={{
          background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 80%)",
          color: "white",
          borderRadius: "24px",
          margin: "60px auto 80px",
          maxWidth: "950px",
          boxShadow: "0 0 70px rgba(255,255,255,0.08)",
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
            src="/images/og/profile.JPG"
            alt="Simone Lattimore Profile"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 40px rgba(255,182,193,0.3)",
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
            Hi 👋 I’m <b>Simone Lattimore</b> — a future UI/UX designer and software engineer
            passionate about crafting modern, accessible digital experiences. With
            experience across front-end development, data-driven design, and IT
            infrastructure, I focus on blending creativity with clean, efficient code.
            <br />
            <br />
            When I’m not coding or designing, I love exploring new tech trends,
            mentoring peers, and refining my personal design systems.
          </Text>
        </Column>
      </Column>

      {/* ===== Contact Section ===== */}
      <Column
        id="contact"
        align="center"
        padding="l"
        style={{
          background: "linear-gradient(to bottom, #0a0a0a, #000000)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "80px",
          color: "white",
        }}
        gap="m"
      >
        <Heading variant="display-strong-l">Contact Me</Heading>
        <Text onBackground="neutral-medium" style={{ maxWidth: "600px" }}>
          Interested in collaborating, hiring, or just want to say hi? I’d love to
          connect.
        </Text>
        <Column gap="m" align="center" style={{ marginTop: "20px" }}>
          <a
            href="mailto:simonee8420@gmail.com"
            style={{
              color: "#ffb6c1",
              fontSize: "18px",
              textDecoration: "none",
            }}
          >
            📧 simonee8420@gmail.com
          </a>
          <a
            href="https://github.com/simonee8420"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffb6c1",
              fontSize: "18px",
              textDecoration: "none",
            }}
          >
            💻 github.com/simonee8420
          </a>
        </Column>
      </Column>
    </Column>
  );
}
