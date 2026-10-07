import React from "react";

const Questions = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
}) => {
  return (
    <div className="flex justify-center px-6">
      {/* Question Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Question Number */}
        <p className="!text-gray-600 text-base font-semibold mb-4">
          Question {currentIndex + 1} of {totalQuestions}
        </p>

        {/* Question */}
        <h2 className="!text-black text-3xl font-extrabold mb-8">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className={`
                w-full
                p-4
                rounded-xl
                border-2
                text-lg
                font-semibold
                transition
                duration-200

                ${
                  selectedAnswer === option
                    ? "bg-blue-600 !text-white border-blue-600"
                    : "bg-gray-200 !text-black border-gray-300 hover:bg-blue-600 hover:!text-white hover:border-blue-600"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className="
            w-full
            mt-8
            bg-green-600
            text-white
            p-4
            rounded-xl
            text-lg
            font-bold
            hover:bg-green-700
            disabled:bg-gray-400
            disabled:cursor-not-allowed
            transition
          "
        >
          {currentIndex === totalQuestions - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default Questions;
