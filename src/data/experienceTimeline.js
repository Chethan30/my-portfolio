/**
 * Experience timeline entries. Optional `details` enables click-to-expand
 * summary + bullet list inside each card.
 */
export const EXPERIENCE_TIMELINE = [
  {
    id: "im-ai-2024",
    date: "Sep 2024 — Present",
    title: "Software Engineer II (AI Systems)",
    org: "Iron Mountain",
    location: "Tampa Bay, FL",
    icon: "smartToy",
    preview:
      "AI/ML, Semantic Search Engine, Agentic Workflows and Frameworks, RAG, Golang, Systems Design, React, TypeScript, Python",
    details: {
      summary:
        "AI Systems Engineer Bridging the gap between raw LLM capabilities and scalable enterprise production. I specialize in building high-throughput agentic frameworks, low latency vector search architectures, and reactive streaming systems that handle millions of records without breaking a sweat",
      bullets: [
        "Custom Agent Framework: Built an LLM-agnostic orchestration layer (AutoGen/Agents SDK) for deploying autonomous, tool-equipped agents.",
        "Smart Memory Module: Designed a tripartite memory system for hyper-personalized agent routing and strict Google A2A compliance.",
        "Next-Gen Data Prep: Co-architected a transformation platform processing millions of daily records to enable AI logic far beyond basic RAG.",
        "High-Scale Vector Search: Engineered a pgvector/Elasticsearch stack maintaining sub-second latency at 100K+ requests.",
        "Scalable Frontend: Rebuilt the conversational interface using Module Federation and Micro-frontends for independent scaling.",
      ],
    },
  },
  {
    id: "meta-jungle-2024",
    date: "Jul 2024 — Aug 2024",
    title: "Software Engineer (Fullstack)",
    org: "Meta Jungle",
    location: "Ozark, MO",
    icon: "react",
    preview:
      "React, TypeScript, Python, AWS, Jenkins, Webpack, Node.js, NFTs, Crypto",
    details: {
      summary:
        'focus on the "how" of software delivery—reducing AWS overhead by 15%, engineering shippable SDK-style packages, and architecting high-performance APIs that manage complex, real-time data flows with 25% faster frontend responsiveness.',
      bullets: [
        "Cloud Cost Efficiency: Optimized AWS infrastructure and CI/CD pipelines, slashing operational costs by 15% while hardening deployment reliability.",
        "Modular AI Delivery: Engineered a custom Webpack configuration to bundle a complex chat application into a high-performance, shippable NPM package.",
        "High-Concurrency Chat: Built a multi-chat engine capable of handling complex user flows and real-time notifications via high-performance APIs.",
        "State Logic Optimization: Boosted UI responsiveness by 25% by migrating to Redux Toolkit, streamlining state transitions for data-heavy AI interfaces.",
      ],
    },
  },
  {
    id: "veryable-2023",
    date: "May 2023 — Jan 2024",
    title: "Software Engineer",
    org: "Veryable Inc",
    location: "Dallas, TX",
    icon: "aws",
    preview:
      "Typescript, Python, AWS, Lambda, Docker, Kubernetes, Terraform, Circle CI, Automation",
    details: {
      summary:
        "Cloud-native engineering and automation for operational platforms.",
      bullets: [
        "K8s Secrets Operator: Integrated AWS Secrets Manager as the source of truth, increasing security standards by 25%.",
        "Zero-Trust IAM: Implemented time-based, short-term access policies for 100+ cloud resources to ensure total compliance.",
        "CI/CD Optimization: Slashed operational costs by 15% through parallel testing and modular pipeline automation.",
        "Workflow Automation: Reduced developer idle time by 30% via a custom Python/Lambda/Slack ticket-tracking engine.",
      ],
    },
  },
  {
    id: "utd-ms-2022",
    date: "Aug 2022 — May 2024",
    title: "Masters of Science in AI/ML",
    org: "University of Texas at Dallas",
    location: "Richardson, TX",
    icon: "cert",
    preview:
      "Machine Learning, Deep Learning, LLM, Computer Vision, Natural Language Processing, Data Analytics",
    details: {
      summary:
        "Graduate coursework and research-aligned study in ML, CV, and NLP.",
      bullets: [
        "Deep learning and classical ML",
        "Search Enginer and Retrieval Systems",
        "NLP and large language model",
        "Computer vision and data analytics",
        "Agentic Workflows and Frameworks",
      ],
    },
  },
  {
    id: "brane-devsecops-2021",
    date: "Jul 2021 — Jan 2022",
    title: "DevSecOps Engineer",
    org: "Brane Enterprises",
    location: "Bengaluru, IN",
    icon: "board",
    preview:
      "Python Scripting, Pen Testing, Linux, Jenkins, ArgoCD, Nmap, BurpSuite",
    details: {
      summary: "Security-oriented automation and delivery pipeline work.",
      bullets: [
        "CI/CD with Jenkins and Argo CD",
        "Security scanning and scripted hardening",
        "Pen-test tooling workflows (Burp Suite, Nmap)",
      ],
    },
  },
  {
    id: "dsce-be-2022",
    date: "May 2018 — Aug 2022",
    title: "Bachelor of Engineering in Computer Science",
    org: "Dayananda Sagar College of Engineering",
    location: "Bengaluru, IN",
    icon: "cert",
    preview: "AI/ML, Web Engineer, Logic Design",
    details: {
      summary:
        "Undergraduate CS with emphasis on fundamentals and early ML exposure.",
      bullets: [
        "Algorithms, systems, and logic design",
        "Web engineering projects",
        "Machine learning coursework",
      ],
    },
  },
];
