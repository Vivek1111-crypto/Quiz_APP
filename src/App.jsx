import React, { useState } from "react";
import Questions from "./Components/Questions";
import Timer from "./Components/Timer";
//import Result from "./Result";
import questions from "./Components/questions.json";
import Result from "./Components/Result";
const App = () => {
  // Store current question number
  const [currentIndex, setCurrentIndex] = useState(0);

  // Store user's selected answers
  const [answers, setAnswers] = useState([]);

  // Store whether quiz is completed
  const [quizFinished, setQuizFinished] = useState(false);

  // Time for each question
  const QUESTION_TIME = 5;

  // Store remaining time
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  // Get current question
  const currentQuestion = questions[currentIndex];

  // Handle option selection
  const handleAnswer = (selectedAnswer) => {
    // Create copy of previous answers
    const updatedAnswers = [...answers];

    // Store selected answer
    updatedAnswers[currentIndex] = selectedAnswer;

    // Update answers
    setAnswers(updatedAnswers);
  };

  // Move to next question
  const handleNext = () => {
    // Check if this is the last question
    if (currentIndex === questions.length - 1) {
      // Finish quiz
      setQuizFinished(true);
    } else {
      // Move to next question
      setCurrentIndex((prev) => prev + 1);

      // Reset timer
      setTimeLeft(QUESTION_TIME);
    }
  };

  // Called when timer reaches zero
  const handleTimeUp = () => {
    // Automatically move to next question
    handleNext();
  };

  // Restart quiz
  const restartQuiz = () => {
    // Go back to first question
    setCurrentIndex(0);

    // Clear answers
    setAnswers([]);

    // Start timer again
    setTimeLeft(QUESTION_TIME);

    // Show questions
    setQuizFinished(false);
  };

  // Show result page after quiz finishes
  if (quizFinished) {
    return (
      <Result questions={questions} answers={answers} onRestart={restartQuiz} />
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold">Quiz App</h1>
      </div>

      {/* Timer */}
      <div className="text-center mb-6">
        <Timer
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          onTimeUp={handleTimeUp}
        />
      </div>

      {/* Questions */}
      <Questions
        currentQuestion={currentQuestion}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        selectedAnswer={answers[currentIndex]}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
};

export default App;
