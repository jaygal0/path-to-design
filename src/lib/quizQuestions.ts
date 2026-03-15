import type { RoleKey } from "@/lib/roles";

export interface QuizAnswer {
  id: string;
  label: string;
  score: Partial<Record<RoleKey, number>>;
  resultHint: string;
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
      },
      {
        id: "improving-products",
        label: "Improving how products work and flow",
        score: { ux: 3, product: 2 },
        resultHint: "improving how products work and flow",
      },
      {
        id: "visual-systems",
        label: "Designing interfaces and visual systems",
        score: { ui: 4 },
        resultHint: "designing interfaces and visual systems",
      },
      {
        id: "visual-identities",
        label: "Creating visual identities and branding",
        score: { brand: 4 },
        resultHint: "creating visual identities and branding",
      },
      {
        id: "animation-motion",
        label: "Animation and motion in interfaces",
        score: { motion: 4 },
        resultHint: "bringing motion into interface design",
      },
      {
        id: "designing-with-code",
        label: "Designing and building with code",
        score: { engineer: 4 },
        resultHint: "designing and building with code",
      },
      {
        id: "shaping-products",
        label: "Shaping products from idea to launch",
        score: { product: 4 },
        resultHint: "shaping products from idea to launch",
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
      },
      {
        id: "usability-structure",
        label: "Improving usability and structure",
        score: { ux: 3 },
        resultHint: "improving usability and structure",
      },
      {
        id: "beautiful-interfaces",
        label: "Crafting beautiful visual interfaces",
        score: { ui: 3 },
        resultHint: "crafting beautiful visual interfaces",
      },
      {
        id: "product-problems",
        label: "Defining features and solving product problems",
        score: { product: 3 },
        resultHint: "solving product problems",
      },
      {
        id: "animating-experiences",
        label: "Animating experiences and interactions",
        score: { motion: 3 },
        resultHint: "animating experiences and interactions",
      },
      {
        id: "interactive-components",
        label: "Building interactive components",
        score: { engineer: 3 },
        resultHint: "building interactive components",
      },
      {
        id: "brand-systems",
        label: "Designing brand systems and visuals",
        score: { brand: 3 },
        resultHint: "designing brand systems and visuals",
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
      },
      {
        id: "figma-prototyping",
        label: "Figma and prototyping tools",
        score: { ux: 2, ui: 2, product: 1 },
        resultHint: "working with prototyping tools",
      },
      {
        id: "branding-tools",
        label: "Illustrator or branding tools",
        score: { brand: 2 },
        resultHint: "using branding tools",
      },
      {
        id: "motion-tools",
        label: "After Effects or motion tools",
        score: { motion: 2 },
        resultHint: "using motion tools",
      },
      {
        id: "code-editors",
        label: "Code editors like VS Code",
        score: { engineer: 2 },
        resultHint: "working in code editors",
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
      },
      {
        id: "ease-of-use",
        label: "Making products easier to use",
        score: { ux: 3 },
        resultHint: "making products easier to use",
      },
      {
        id: "beautiful-experiences",
        label: "Crafting visually beautiful experiences",
        score: { ui: 3 },
        resultHint: "crafting visually beautiful experiences",
      },
      {
        id: "build-products",
        label: "Building products people use daily",
        score: { product: 3 },
        resultHint: "building products people use daily",
      },
      {
        id: "motion-life",
        label: "Bringing interfaces to life with motion",
        score: { motion: 3 },
        resultHint: "bringing interfaces to life with motion",
      },
      {
        id: "design-code-systems",
        label: "Designing systems that connect design and code",
        score: { engineer: 3 },
        resultHint: "designing systems that connect design and code",
      },
      {
        id: "brand-identities",
        label: "Creating visual identities for brands",
        score: { brand: 3 },
        resultHint: "creating visual identities for brands",
      },
    ],
  },
];
