export type Project = {
  num: string;
  role: string;
  name: string;
  blurb: string;
  chips: { label: string; hot?: boolean }[];
  variant?: "feat" | "tease";
};

export const projects: Project[] = [
  {
    num: "01",
    role: "Featured · Youxel",
    name: "TORUK — AI Platform",
    blurb:
      "Frontend architecture for TORUK Core, Connect & SDK — Document Store and Vector Store refactors, dynamic AI-provider flows, embeddable SDK toward npm.",
    chips: [{ label: "AI / LLMs", hot: true }, { label: "React" }, { label: "SDK" }],
    variant: "feat",
  },
  {
    num: "02",
    role: "Cultiv Bureau · EN / AR",
    name: "Rwafi",
    blurb:
      "Bilingual business-operations platform for the Saudi market — multi-role access control, RTK Query at scale.",
    chips: [{ label: "i18n / RTL" }, { label: "RTK Query" }],
  },
  {
    num: "03",
    role: "Cultiv Bureau",
    name: "WorkHole",
    blurb:
      "Workforce management — attendance, leaves and analytics with real-time dashboards on a modular architecture.",
    chips: [{ label: "React" }, { label: "Dashboards" }],
  },
  {
    num: "04",
    role: "Cultiv Bureau",
    name: "TrueChat",
    blurb:
      "Real-time chat experience — messaging UI, live state sync, and a component system built to stay fast.",
    chips: [{ label: "React" }, { label: "Realtime" }],
  },
  {
    num: "05",
    role: "Cultiv Bureau",
    name: "RECLIX",
    blurb:
      "Client web platform built end-to-end on the frontend — from design handoff to production-ready UI.",
    chips: [{ label: "React" }, { label: "UI Systems" }],
  },
  {
    num: "06",
    role: "Graduation project · Cairo University",
    name: "SiteCraft",
    blurb:
      "Low-code e-commerce platform for SMEs — a customizable template system built with Next.js and Tailwind.",
    chips: [{ label: "Next.js" }, { label: "Low-code" }],
  },
  {
    num: "07",
    role: "Landing page",
    name: "RAG Landing Page",
    blurb:
      "Marketing site for a retrieval-augmented-generation product — pixel-perfect, responsive, and fast where it counts.",
    chips: [{ label: "Next.js" }, { label: "Tailwind" }, { label: "AI" }],
  },
  {
    num: "",
    role: "",
    name: "your project next?",
    blurb: "this card is reserved ✦",
    chips: [],
    variant: "tease",
  },
];
