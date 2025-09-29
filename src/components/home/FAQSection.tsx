"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Path to Design?",
    answer:
      "Path to Design is a curated directory of designers sharing their career journeys, experiences, and insights. Explore how designers got into tech and inspire others with your own story.",
  },
  {
    question: "Who can contribute to the directory?",
    answer:
      "Any designer, whether you’re a student, freelancer, or working in tech, can share your path. We welcome stories from all design disciplines: UX, UI, product, visual, motion, and more.",
  },
  {
    question: "How do I share my design journey?",
    answer:
      "You can submit your story using our “Share Your Path” form. Simply fill in your details, your design role, and the story of how you started in tech. Your story will be reviewed and published.",
  },
  {
    question: "Is there a cost to be listed in the directory?",
    answer: "No! Contributing or browsing the directory is completely free.",
  },
  {
    question: "How does this site generate revenue?",
    answer:
      "Path to Design is in its early stages. For now, I'm experimenting with affiliate links. The revenue model may change in the future as the site grows.",
  },
  {
    question: "Can I update my profile or story later?",
    answer:
      "Yes! Since the site is run by me personally, you can update your story or profile by contacting me at joshua@pathtodesign.com.",
  },
  {
    question: "How do I find designers in specific fields or locations?",
    answer:
      "Use the search and filter options on the directory page to explore designers by role, experience, location, or design discipline.",
  },
  {
    question: "Can I connect with designers I find here?",
    answer:
      "Absolutely. Each profile includes links to social media, portfolios, and contact options (if the designer chooses to share them).",
  },
  {
    question: "Why should I share my path?",
    answer:
      "By sharing your journey, you inspire others, help new designers navigate their careers, and contribute to a supportive design community.",
  },
  {
    question: "How is my privacy handled?",
    answer:
      "We respect your privacy. You choose what personal information to share, and you can remain anonymous if you prefer.",
  },
  {
    question: "Who runs Path to Design?",
    answer:
      "Path to Design is run by Joshua Galinato. I personally review submissions and maintain the site to ensure it stays a supportive space for designers.",
  },
];

export default function FaqSection() {
  return (
    <section className="col-span-1 my-8 p-3 md:p-6 xl:col-span-3">
      <div className="px-0 lg:px-72">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple" className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border"
            >
              <AccordionTrigger className="px-4 py-3 text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-lg text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
