const parseOutput = (output: string) => {
  const explanation = output.split("## Quiz")[0]
    .replace("## Explanation", "").trim();

  const quizRaw = output.split("## Quiz")[1]
    ?.split("## Flashcards")[0].trim() || "";

  const flashcardsRaw = output.split("## Flashcards")[1]?.trim() || "";

  // Parse quiz questions
  const quiz = parseQuiz(quizRaw);

  const flashcards = flashcardsRaw
    .split("\n")
    .filter(line => line.includes(":"))
    .map(line => ({
      term: line.split(":")[0].trim(),
      definition: line.split(":").slice(1).join(":").trim()
    }));

  return { explanation, quiz, flashcards };
};

// Parses raw quiz text into array of question objects
const parseQuiz = (quizRaw: string) => {
  const questionBlocks = quizRaw
    .split(/\n\n+/)
    .filter(block => block.trim() && /\d/.test(block));

  return questionBlocks.map(block => {
    const lines = block
      .split("\n")
      .map(l => l.replace(/\*\*/g, "").trim()) // remove ** markdown
      .filter(l => l);

    const question = lines[0].replace(/^\d+[\.\)]\s*/, "").trim();

    // match both uppercase A) and lowercase a)
    const options = lines
      .filter(l => /^[A-Da-d][\)\.]/.test(l))
      .map(l => l.trim());

    const answerLine = lines.find(l =>
      l.toLowerCase().includes("correct")
    ) || "";

    // extract lowercase letter first, then uppercase
    const correctLetterRaw = answerLine
      .toLowerCase()
      .match(/correct answer[:\s]*([a-d])/)?.[1] || "";

    // convert to uppercase for comparison
    const correctLetter = correctLetterRaw.toUpperCase();


    return { question, options, correctLetter };
    
  });
};

export default parseOutput;