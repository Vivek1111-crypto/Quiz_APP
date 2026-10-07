import React from "react";

const Result = ({ questions, answers, onRestart }) => {
  // Calculate score
  const score = questions.reduce((total, question, index) => {
    // Get user's answer
    const userAnswer = answers[index];

    // Check correct answer
    const correctAnswer = question.answer || question.correctAnswer;

    // Increase score if answer is correct
    if (userAnswer === correctAnswer) {
      return total + 1;
    }

    return total;
  }, 0);

  // Calculate percentage
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Result Heading */}
        <h1 className="!text-black text-4xl font-bold text-center mb-6">
          Quiz Completed!
        </h1>

        {/* Score */}
        <div className="text-center mb-8">
          <p className="!text-gray-600 text-xl">Your Score</p>

          <p className="!text-blue-600 text-5xl font-bold mt-2">
            {score} / {questions.length}
          </p>

          <p className="!text-gray-700 text-xl font-semibold mt-2">
            {percentage}%
          </p>
        </div>

        {/* Answer Review */}
        <div className="space-y-4">
          {questions.map((question, index) => {
            const correctAnswer = question.answer || question.correctAnswer;

            const userAnswer = answers[index];

            const isCorrect = userAnswer === correctAnswer;

            return (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl p-4"
              >
                {/* Question */}
                <p className="!text-black font-bold">
                  {index + 1}. {question.question}
                </p>

                {/* User Answer */}
                <p className="!text-gray-700 mt-2">
                  Your Answer:{" "}
                  <span
                    className={
                      isCorrect
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {userAnswer || "Not answered"}
                  </span>
                </p>

                {/* Correct Answer */}
                {!isCorrect && (
                  <p className="!text-green-600 mt-1 font-semibold">
                    Correct Answer: {correctAnswer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="
            w-full
            mt-8
            bg-blue-600
            text-white
            p-4
            rounded-xl
            text-lg
            font-bold
            hover:bg-blue-700
            transition
          "
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
