import Image from "next/image";
import {
  BookOpen,
  Bot,
  Briefcase,
  Brush,
  Clapperboard,
  CodeXml,
  Compass,
  FileSearch,
  GitBranch,
  LayoutTemplate,
  Lightbulb,
  MessageSquareMore,
  MonitorSmartphone,
  PenTool,
  RefreshCw,
  Rocket,
  Sparkles,
  Target,
  Users,
  WandSparkles,
} from "lucide-react";

import type { QuizOptionVisual } from "@/lib/quizQuestions";

const quizOptionIcons = {
  users: Users,
  workflow: GitBranch,
  interface: LayoutTemplate,
  brand: Brush,
  motion: Clapperboard,
  code: CodeXml,
  product: Rocket,
  conversation: MessageSquareMore,
  research: FileSearch,
  visuals: MonitorSmartphone,
  strategy: Target,
  insight: Lightbulb,
  ease: Compass,
  beauty: Sparkles,
  systems: WandSparkles,
  beginner: Sparkles,
  learn: BookOpen,
  portfolio: Briefcase,
  designer: PenTool,
  switch: RefreshCw,
  tools: Bot,
} as const;

interface QuizOptionContentProps {
  label: string;
  visual?: QuizOptionVisual;
}

export function QuizOptionContent({
  label,
  visual,
}: QuizOptionContentProps) {
  return (
    <div className="flex items-center gap-4">
      {visual?.type === "image" ? (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/95">
          <Image
            src={visual.src}
            alt={visual.alt}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
      ) : visual?.type === "icon" ? (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-stone-100">
          {(() => {
            const Icon = quizOptionIcons[visual.name];
            return <Icon className="h-5 w-5" />;
          })()}
        </div>
      ) : null}
      <span>{label}</span>
    </div>
  );
}
