/**
 * Skill matrices for the Skills HUD — one source of truth per category.
 * Icons: choose from react-icons/*; omit Icon for text-only chips.
 */
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaJava,
  FaAws,
  FaDocker,
  FaLinux,
  FaProjectDiagram,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  TbBrandNextjs,
  TbSparkles,
  TbSearch,
  TbBrain,
  TbApi,
  TbPuzzle,
  TbArrowsExchange,
} from "react-icons/tb";
import {
  SiTailwindcss,
  SiMysql,
  SiFlask,
  SiKubernetes,
  SiCircleci,
  SiYaml,
  SiPytorch,
  SiOpenai,
  SiGo,
  SiElasticsearch,
  SiReactquery,
  SiPodman,
  SiJenkins,
  SiGitlab,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import { MdSmartToy } from "react-icons/md";

export const SKILL_SECTIONS = [
  {
    id: "ai",
    title: "AI · ML Systems",
    skills: [
      { name: "LLMs & RAG", Icon: SiOpenai },
      { name: "Semantic Search", Icon: TbSearch },
      { name: "Agent Workflows", Icon: MdSmartToy },
      { name: "A2A Framework", Icon: TbArrowsExchange },
      { name: "PyTorch", Icon: SiPytorch },
      { name: "Python ML", Icon: FaPython },
      { name: "NLP / Evals", Icon: TbBrain },
      { name: "Orchestration", Icon: TbSparkles },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", Icon: FaReact },
      { name: "Next.js", Icon: TbBrandNextjs },
      { name: "Module Federation", Icon: TbPuzzle },
      { name: "TanStack", Icon: SiReactquery },
      { name: "React Flow", Icon: FaProjectDiagram },
      { name: "JavaScript", Icon: IoLogoJavascript },
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: FaBootstrap },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Python", Icon: FaPython },
      { name: "Go", Icon: SiGo },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "REST", Icon: TbApi },
      { name: "PostgreSQL", Icon: BiLogoPostgresql },
      { name: "Elasticsearch", Icon: SiElasticsearch },
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: BiLogoMongodb },
      { name: "Firebase", Icon: IoLogoFirebase },
      { name: "Java", Icon: FaJava },
      { name: "Flask", Icon: SiFlask },
      { name: "GraphQL", Icon: GrGraphQl },
    ],
  },
  {
    id: "devops",
    title: "Infrastructure · DevOps",
    skills: [
      { name: "AWS", Icon: FaAws },
      { name: "Docker", Icon: FaDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Linux", Icon: FaLinux },
      { name: "YAML", Icon: SiYaml },
      { name: "Circle CI", Icon: SiCircleci },
      { name: "Podman", Icon: SiPodman },
      { name: "Jenkins", Icon: SiJenkins },
      { name: "GitLab", Icon: SiGitlab },
      { name: "Azure", Icon: SiMicrosoftazure },
      { name: "GCP", Icon: SiGooglecloud },
    ],
  },
];
