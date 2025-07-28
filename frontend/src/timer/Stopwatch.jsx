import React, { useState, useEffect, useRef, useCallback } from "react";

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startRef = useRef(null);
  const animationRef = useRef(null);

  const update = () => {
    setElapsed(performance.now() - startRef.current);
    animationRef.current = requestAnimationFrame(update);
  };

  const start = () => {
    startRef.current = performance.now() - elapsed;
    animationRef.current = requestAnimationFrame(update);
    setIsRunning(true);
  };

  const stop = () => {
    cancelAnimationFrame(animationRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    cancelAnimationFrame(animationRef.current);
    setElapsed(0);
    setIsRunning(false);
  };

  const handleClick = () => {
    isRunning ? stop() : start();
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === " ") {
      event.preventDefault(); // prevent scrolling on space
      handleClick();
    }
  }, [isRunning]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const minutes = Math.floor((elapsed / 60000) % 60);
  const seconds = Math.floor((elapsed / 1000) % 60);
  const milliseconds = Math.floor(elapsed % 1000);

  return (
    <div className="stopwatch-container flex flex-col justify-center items-center bg-[#030712] text-6xl text-white">
      <p className="stopwatch-time font-mono">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(3, "0")}
      </p>
      <div className="stopwatch-buttons m-20 text-base">
        <button
          className="stopwatch-button mr-10 px-6 py-2 bg-green-600 rounded text-white"
          onClick={handleClick}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="stopwatch-button px-6 py-2 bg-red-600 rounded text-white"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
