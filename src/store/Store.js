import gvr1 from "../assets/gvr_1.png";
import gvr2 from "../assets/gvr_2.png";
import gvr3 from "../assets/gvr_3.png";
import gvr4 from "../assets/gvr_4.png";

import dw1 from "../assets/dw_1.png";
import dw2 from "../assets/dw_2.png";
import dw3 from "../assets/dw_3.png";

export const projects = [
  {
    key: 0,
    title: "Pantry",
    period: "Mar 2026",
    description:
      "Conversational agentic kitchen assistant that parses language inputs into automated inventory updates and dynamic, context-aware meal recommendations. Built on a local-first SQLite backend with cron scheduling that dynamically sets expiration and meal reminders.",
    minidesc:
      "Conversational agentic kitchen assistant for inventory and meal automation.",
    highlights: [
      "Parses natural language into automated pantry inventory updates",
      "Generates context-aware meal recommendations from available ingredients",
      "Local-first SQLite backend with dynamic expiration and meal reminder scheduling",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "AI/LLM APIs",
      "SQLite",
      "Cron Scheduling",
      "Docker",
      "Jest",
      "Telegram/CLI",
    ],
  },
  {
    key: 1,
    title: "SageRouter",
    period: "Nov 2025",
    description:
      "Policy-driven, model-agnostic LLM router for scalable and cost-efficient AI inference. Supports dynamic routing across OSS and proprietary models to reduce vendor lock-in and optimize cost-latency tradeoffs.",
    minidesc:
      "Policy-driven, model-agnostic LLM routing for cost-latency optimized inference.",
    highlights: [
      "Dynamic routing across OSS and proprietary models to reduce vendor lock-in",
      "Policy-as-code YAML framework for model selection, retries, and guardrails",
      "Circuit breakers and fallback strategies for resilient inference traffic",
    ],
    tech: [
      "Java",
      "LLMs",
      "Ollama",
      "PostgreSQL",
      "Redis",
      "Docker",
      "YAML",
      "Prometheus/Grafana",
    ],
  },
  {
    key: 2,
    title: "Dwelio",
    period: "Mar 2024",
    description:
      "A web application that allows users to search for apartments in the Dallas area. Users can filter by price, number of bedrooms, and number of bathrooms. Users can also save apartments to their favorites list and view them later.",
    minidesc:
      "User-friendly web platform that simplifies the house rental process.",
    pictures: [dw1, dw2, dw3],
    tech: ["ReactJS", "HTML", "CSS", "NodeJS", "PostgreSQL", "Express"],
    // links: ["link1", "link2"],
  },
  {
    key: 3,
    title: "Great VR Cook Off",
    period: "Apr 2024",
    description:
      "A virtual reality multiplayer game where the player is a chef in a kitchen. The player must cook and serve food in a timely manner by adhereing to the provided recipie. Play this game along with your friends to see who is the best chef!",
    minidesc: "A virtual reality multiplayer cook off game in a kitchen.",
    pictures: [gvr1, gvr2, gvr3, gvr4],
    tech: ["Unity", "C#"],
    //links: ["link1", "link2"],
  },
  {
    key: 4,
    title: "Placement Portal",
    period: "Mar 2022",
    description:
      "A web applicaton designed to help scores of students to get hired by tech companies. The portal is a one stop solution, allowing students to register and apply for jobs, and departments to keep track of validated and up to date applications.",
    minidesc:
      "Web application for on-campus recruitment, eliminating redundant groups and forms. Get hired with Placement Portal!",
    //pictures: ["link1", "link2"],
    tech: ["ReactJS", "Flask", "HTML", "Python", "CSS", "PostgreSQL"],
    //links: ["link1", "link2"],
  },
  {
    key: 5,
    title: "Secure Parkk",
    period: "Nov 2021",
    description:
      "Full-stack application that tracks user parking using RF technology. Users register vehicles, reserve designated spots, pay for sessions, and review parking history from a single portal.",
    minidesc:
      "RF-based parking tracking with payments, reservations, and history.",
    tech: ["React", "Python", "PostgreSQL", "REST", "HTML", "CSS"],
  },
];
