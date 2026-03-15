import type { Metadata } from "next";

import { Quiz } from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Find Your Design Career Path | Path to Design",
  description:
    "Answer 4 quick questions and discover which design role fits your interests.",
};

export default function DesignCareerQuizPage() {
  return <Quiz />;
}
