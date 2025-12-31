"use client";

import { RecommendationCard } from "./Recommendation";

export function RealRecommendations() {
  return (
    <div className="space-y-8">
      <div className="spacy-y-3 mx-auto text-center md:w-1/2">
        <h2 className="mb-2 text-3xl font-semibold text-foreground md:text-5xl">
          Recommendations from real designers
        </h2>
        <p className="text-lg font-light text-muted-foreground md:text-xl">
          Learn which tools designers actually use, the products they rely on,
          and the books they recommend.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <RecommendationCard
          heading="Explore the best design apps"
          image="/home/recommended-apps.png"
          href="/best-design-apps"
        />
        <RecommendationCard
          heading="Explore the best design books"
          image="/home/recommended-books.png"
          href="/best-design-books"
        />
        {/* TODO: Show when ready */}
        {/* <RecommendationCard
          heading="Explore the best design tools"
          image="/home/recommended-apps.png"
          href="/best-design-tools"
        /> */}
      </div>
    </div>
  );
}
