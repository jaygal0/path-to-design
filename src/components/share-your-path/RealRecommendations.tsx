"use client";

import { RecommendationCard } from "./Recommendation";

export function RealRecommendations() {
  return (
    <div className="space-y-8">
      <div className="spacy-y-3 mx-auto w-1/2 text-center">
        <h2 className="mb-2 text-5xl font-semibold text-foreground">
          Recommendations from real designers
        </h2>
        <p className="text-xl font-light text-muted-foreground">
          Learn which tools designers actually use, the products they rely on,
          and the books they recommend.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <RecommendationCard
          heading="Explore the best design apps"
          image="/home/recommended-apps.png"
          href="/best-design-apps"
        />
        <RecommendationCard
          heading="Explore the best design books"
          image="/home/recommended-apps.png"
          href="/best-design-books"
        />
        <RecommendationCard
          heading="Explore the best design tools"
          image="/home/recommended-apps.png"
          href="/best-design-tools"
        />
      </div>
    </div>
  );
}
