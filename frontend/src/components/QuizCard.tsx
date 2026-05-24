import { useState } from "react";

interface QuizCardProps {
  question: string;
  options: string[];
  correctLetter: string;
  index: number;
}

const QuizCard = ({ question, options, correctLetter, index }: QuizCardProps) => {
 
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (letter: string) => {
    // lock after first answer — can't change
    if (selected) return;
    setSelected(letter);
  };
 

  const getStyle = (letter: string) => {
    // not answered yet — show neutral
    if (!selected) {
      return "border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:bg-purple-50";
    }

    // this is the correct answer — always green
    if (letter === correctLetter) {
      return "border-green-400 bg-green-50 text-green-700 font-medium";
    }

    // this is what user picked but it's wrong — red
    if (letter === selected && letter !== correctLetter) {
      return "border-red-400 bg-red-50 text-red-700";
    }

    // other options — grey out
    return "border-slate-100 bg-slate-50 text-slate-400";
  };

  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
      
      {/* Question */}
      <p className="mb-4 font-medium text-slate-800">
        <span className="mr-2 text-purple-400">Q{index + 1}.</span>
        {question}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {options.map((option) => {
          // Extract just the letter from "A) some text"
          const letter = option[0].toUpperCase();

          return (
            <button
              key={letter}
              onClick={() => handleSelect(letter)}
              disabled={!!selected}
              className={`
                w-full rounded-xl border px-4 py-2.5 text-left text-sm
                transition-all duration-200
                ${getStyle(letter)}
              `}
            >
              {option}

              {/* Show tick or cross after answering */}
              {selected && letter === correctLetter && (
                <span className="float-right">✓</span>
              )}
              {selected && letter === selected && letter !== correctLetter && (
                <span className="float-right">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Result message */}
      
      {selected && (
        <p className={`mt-3 text-xs font-medium ${
          selected === correctLetter ? "text-green-600" : "text-red-500"
        }`}>
          {selected === correctLetter
            ? "✓ Correct!"
            : `✗ Wrong — correct answer was ${correctLetter}`
          }
        </p>
      )}
    </div>
  );
};

export default QuizCard;