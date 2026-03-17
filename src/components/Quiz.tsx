"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { ProgressBar } from "@/components/ProgressBar";
import { Question } from "@/components/Question";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  analyticsEvents,
  experienceOptions,
  initialQuizState,
  logQuizEvent,
  type ExperienceValue,
} from "@/lib/quizFunnel";
import { quizQuestions } from "@/lib/quizQuestions";
import { calculateQuizResult } from "@/lib/quizScoring";
import { saveQuizState, type QuizState } from "@/lib/quizSessionCompat";

export function Quiz() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);
  const [showExperienceStep, setShowExperienceStep] = useState(false);
  const [showEmailStep, setShowEmailStep] = useState(false);
  const [email, setEmail] = useState("");

  const totalQuestions = quizQuestions.length + 2;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const scoredAnswers = useMemo(
    () =>
      quizState.answers.map(
        (answerIndex, questionIndex) =>
          quizQuestions[questionIndex].answers[answerIndex],
      ),
    [quizState.answers],
  );

  useEffect(() => {
    // This fires when the funnel is first opened and is the right place to
    // connect a real analytics client later.
    logQuizEvent(analyticsEvents.QUIZ_STARTED);
  }, []);

  const progressStep = showEmailStep
    ? totalQuestions
    : showExperienceStep
      ? quizQuestions.length + 1
      : currentQuestionIndex + 1;

  function handleAnswer(answerIndex: number) {
    const nextAnswers = [...quizState.answers, answerIndex];
    const nextRole =
      currentQuestionIndex === quizQuestions.length - 1
        ? calculateQuizResult(
            nextAnswers.map((index, questionIndex) => {
              return quizQuestions[questionIndex].answers[index];
            }),
          )
        : quizState.role;

    // This is where per-question analytics can be connected later.
    logQuizEvent(analyticsEvents.QUESTION_ANSWERED, {
      questionId: currentQuestion.id,
      answerId: currentQuestion.answers[answerIndex].id,
      step: currentQuestionIndex + 1,
    });

    setQuizState((previous) => ({
      ...previous,
      answers: nextAnswers,
      role: nextRole,
    }));

    if (currentQuestionIndex === quizQuestions.length - 1) {
      setShowExperienceStep(true);
      return;
    }

    // Advancing one question at a time keeps the quiz modular and makes it
    // straightforward to layer in analytics or persistence later.
    setCurrentQuestionIndex((previous) => previous + 1);
  }

  function handleExperienceSelect(experience: ExperienceValue) {
    logQuizEvent(analyticsEvents.QUESTION_ANSWERED, {
      questionId: "experience",
      answerId: experience,
      step: quizQuestions.length + 1,
    });

    setQuizState((previous) => ({
      ...previous,
      experience,
    }));
    setShowExperienceStep(false);
    setShowEmailStep(true);
  }

  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const role = quizState.role ?? calculateQuizResult(scoredAnswers);
    const completedState: QuizState = {
      ...quizState,
      role,
    };

    // Email provider integration belongs here. Once connected, persist the
    // email and send any follow-up resources before redirecting.
    logQuizEvent(analyticsEvents.EMAIL_ENTERED, {
      email,
      role,
      experience: completedState.experience,
    });
    logQuizEvent(analyticsEvents.QUIZ_COMPLETED, {
      role,
      experience: completedState.experience,
    });

    saveQuizState(completedState);
    router.push(`/design-career-quiz/result/${role}`);
  }

  return (
    <section className="mx-auto flex min-h-[42rem] max-w-4xl flex-col justify-center">
      <div className="space-y-8">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Design Career Quiz
          </p>
          <h1 className="text-4xl font-semibold text-stone-50 md:text-6xl">
            Find Your Design Career Path
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-300 md:text-xl">
            Answer 6 quick questions and discover which design role fits your
            interests.
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl space-y-6">
          <ProgressBar
            currentQuestion={progressStep}
            totalQuestions={totalQuestions}
            label="Step"
          />

          {showExperienceStep ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-stone-50 md:text-3xl">
                  What best describes your design experience?
                </h2>
              </div>

              <div className="grid gap-3">
                {experienceOptions.map((experience) => (
                  <button
                    key={experience.value}
                    type="button"
                    onClick={() => handleExperienceSelect(experience.value)}
                    className="rounded-2xl border border-stone-700 bg-stone-950 px-4 py-4 text-left text-stone-100 transition hover:border-stone-500 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300"
                  >
                    {experience.value}
                  </button>
                ))}
              </div>
            </div>
          ) : showEmailStep ? (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-stone-50 md:text-3xl">
                  Where should we send your result?
                </h2>
                <p className="text-muted-foreground">
                  We'll send your personalised design path and resources.
                </p>
              </div>

              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="h-12 rounded-2xl border-stone-700 bg-stone-900 px-4 text-stone-100 placeholder:text-stone-500"
              />

              <Button type="submit" className="w-full md:w-auto">
                Continue to your result
              </Button>
            </form>
          ) : (
            <Question question={currentQuestion} onAnswer={handleAnswer} />
          )}
        </div>
      </div>
    </section>
  );
}
