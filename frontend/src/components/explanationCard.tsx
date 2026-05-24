import React from "react";
import AppContext from "../context/generateContext";
import parseOutput from "../utils/praseOutput";
import FlashCard from "./FlashCard";
import QuizCard from "./QuizCard"
const ExplanationCard = () => {
  const { output, error, loading } = React.useContext(AppContext);

  

  if (loading) {
    return (
      <div className="mt-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
          >
            <div className="mb-4 h-5 w-32 animate-pulse rounded-full bg-slate-200" />
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded-full bg-slate-100" />
              <div className="h-3 w-5/6 animate-pulse rounded-full bg-slate-100" />
              <div className="h-3 w-4/6 animate-pulse rounded-full bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-6 py-4">
        <p className="font-medium text-red-600">⚠ {error}</p>
      </div>
    );
  }

  if (!output) {
    return (
      <div className="mt-10 text-center text-slate-400">
        <p className="text-5xl">📚</p>
        <p className="mt-3 text-sm">Your study material will appear here</p>
      </div>
    );
  }

  const { explanation, quiz, flashcards } = parseOutput(output);
  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="mb-3 flex items-center gap-2 font-semibold text-blue-700">
          <span>📖</span> Explanation
        </h2>
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
          {explanation}
        </p>
      </div>

     <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
  <h2 className="mb-4 flex items-center gap-2 font-semibold text-purple-700">
    <span>🧠</span> Quiz
  </h2>
  <div className="space-y-4">
    {quiz.map((q, index) => (
      <QuizCard
        key={index}
        index={index}
        question={q.question}
        options={q.options}
        correctLetter={q.correctLetter}
      />
    ))}
  </div>
</div>

      <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
        <h2 className="mb-4 flex items-center gap-2 font-semibold text-green-700">
          <span>🗂</span> Flashcards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {flashcards.map((card, index) => (
            <FlashCard
              key={index}
              term={card.term}
              definition={card.definition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplanationCard;
