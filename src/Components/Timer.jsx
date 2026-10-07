import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  // Start timer
  useEffect(() => {
    // Stop timer when time reaches zero
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Decrease timer every second
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Clear interval when component is removed
    return () => clearInterval(interval);
  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className="text-xl font-semibold">
      Time Left: <span className="text-red-400">{timeLeft}</span>
    </div>
  );
};

export default Timer;
