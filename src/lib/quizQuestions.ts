import type { QuizScoreRoleKey } from "@/lib/roles";

export type QuizOptionVisual =
  | {
      type: "icon";
      name:
        | "users"
        | "workflow"
        | "interface"
        | "brand"
        | "motion"
        | "code"
        | "product"
        | "conversation"
        | "research"
        | "visuals"
        | "strategy"
        | "insight"
        | "ease"
        | "beauty"
        | "systems"
        | "beginner"
        | "learn"
        | "portfolio"
        | "designer"
        | "switch"
        | "tools";
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

export interface QuizAnswer {
  id: string;
  label: string;
  score: Partial<Record<QuizScoreRoleKey, number>>;
  resultHint: string;
  visual?: QuizOptionVisual;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  answers: QuizAnswer[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "interest",
    prompt: "What part of design interests you the most?",
    answers: [
      {
        id: "understanding-people",
        label: "Understanding people and behaviour",
        score: { research: 4 },
        resultHint: "understanding people and behaviour",
        visual: { type: "icon", name: "users" },
      },
      {
        id: "improving-products",
        label: "Improving how products work and flow",
        score: { ux: 3, product: 2 },
        resultHint: "improving how products work and flow",
        visual: { type: "icon", name: "workflow" },
      },
      {
        id: "visual-systems",
        label: "Designing interfaces and visual systems",
        score: { ui: 4 },
        resultHint: "designing interfaces and visual systems",
        visual: { type: "icon", name: "interface" },
      },
      {
        id: "visual-identities",
        label: "Creating visual identities and branding",
        score: { brand: 4 },
        resultHint: "creating visual identities and branding",
        visual: { type: "icon", name: "brand" },
      },
      {
        id: "animation-motion",
        label: "Animation and motion in interfaces",
        score: { motion: 4 },
        resultHint: "bringing motion into interface design",
        visual: { type: "icon", name: "motion" },
      },
      {
        id: "designing-with-code",
        label: "Designing and building with code",
        score: { engineer: 4 },
        resultHint: "designing and building with code",
        visual: { type: "icon", name: "code" },
      },
      {
        id: "shaping-products",
        label: "Shaping products from idea to launch",
        score: { product: 4 },
        resultHint: "shaping products from idea to launch",
        visual: { type: "icon", name: "product" },
      },
    ],
  },
  {
    id: "energy",
    prompt: "What type of work energises you?",
    answers: [
      {
        id: "talking-to-users",
        label: "Talking to users and analysing behaviour",
        score: { research: 3 },
        resultHint: "talking to users and analysing behaviour",
        visual: { type: "icon", name: "conversation" },
      },
      {
        id: "usability-structure",
        label: "Improving usability and structure",
        score: { ux: 3 },
        resultHint: "improving usability and structure",
        visual: { type: "icon", name: "research" },
      },
      {
        id: "beautiful-interfaces",
        label: "Crafting beautiful visual interfaces",
        score: { ui: 3 },
        resultHint: "crafting beautiful visual interfaces",
        visual: { type: "icon", name: "visuals" },
      },
      {
        id: "product-problems",
        label: "Defining features and solving product problems",
        score: { product: 3 },
        resultHint: "solving product problems",
        visual: { type: "icon", name: "strategy" },
      },
      {
        id: "animating-experiences",
        label: "Animating experiences and interactions",
        score: { motion: 3 },
        resultHint: "animating experiences and interactions",
        visual: { type: "icon", name: "motion" },
      },
      {
        id: "interactive-components",
        label: "Building interactive components",
        score: { engineer: 3 },
        resultHint: "building interactive components",
        visual: { type: "icon", name: "code" },
      },
      {
        id: "brand-systems",
        label: "Designing brand systems and visuals",
        score: { brand: 3 },
        resultHint: "designing brand systems and visuals",
        visual: { type: "icon", name: "brand" },
      },
    ],
  },
  {
    id: "tools",
    prompt: "Which tools sound most exciting?",
    answers: [
      {
        id: "research-tools",
        label: "Research tools and surveys",
        score: { research: 2 },
        resultHint: "using research tools and surveys",
        visual: {
          type: "image",
          src: "/apps/typeform.jpg",
          alt: "Typeform",
        },
      },
      {
        id: "figma-prototyping",
        label: "Figma and prototyping tools",
        score: { ux: 2, ui: 2, product: 1 },
        resultHint: "working with prototyping tools",
        visual: {
          type: "image",
          src: "/apps/figma.jpg",
          alt: "Figma",
        },
      },
      {
        id: "branding-tools",
        label: "Illustrator or branding tools",
        score: { brand: 2 },
        resultHint: "using branding tools",
        visual: {
          type: "image",
          src: "/apps/adobe-illustrator.jpg",
          alt: "Adobe Illustrator",
        },
      },
      {
        id: "motion-tools",
        label: "After Effects or motion tools",
        score: { motion: 2 },
        resultHint: "using motion tools",
        visual: {
          type: "image",
          src: "/apps/adobe-after-effects.jpg",
          alt: "Adobe After Effects",
        },
      },
      {
        id: "code-editors",
        label: "Code editors like VS Code",
        score: { engineer: 2 },
        resultHint: "working in code editors",
        visual: {
          type: "image",
          src: "/apps/vs-code.jpg",
          alt: "VS Code",
        },
      },
    ],
  },
  {
    id: "motivation",
    prompt: "What motivates you most about design?",
    answers: [
      {
        id: "people-insights",
        label: "Discovering insights about people",
        score: { research: 3 },
        resultHint: "discovering insights about people",
        visual: { type: "icon", name: "insight" },
      },
      {
        id: "ease-of-use",
        label: "Making products easier to use",
        score: { ux: 3 },
        resultHint: "making products easier to use",
        visual: { type: "icon", name: "ease" },
      },
      {
        id: "beautiful-experiences",
        label: "Crafting visually beautiful experiences",
        score: { ui: 3 },
        resultHint: "crafting visually beautiful experiences",
        visual: { type: "icon", name: "beauty" },
      },
      {
        id: "build-products",
        label: "Building products people use daily",
        score: { product: 3 },
        resultHint: "building products people use daily",
        visual: { type: "icon", name: "product" },
      },
      {
        id: "motion-life",
        label: "Bringing interfaces to life with motion",
        score: { motion: 3 },
        resultHint: "bringing interfaces to life with motion",
        visual: { type: "icon", name: "motion" },
      },
      {
        id: "design-code-systems",
        label: "Designing systems that connect design and code",
        score: { engineer: 3 },
        resultHint: "designing systems that connect design and code",
        visual: { type: "icon", name: "systems" },
      },
      {
        id: "brand-identities",
        label: "Creating visual identities for brands",
        score: { brand: 3 },
        resultHint: "creating visual identities for brands",
        visual: { type: "icon", name: "brand" },
      },
    ],
  },
];
