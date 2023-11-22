import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, time]);

  const StartTimer = () => {
    setIsRunning(true);
  };

  const PauseTimer = () => {
    setIsRunning(false);
  };

  const ResetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const SnoozeTimer = () => {
    setTime((prevTime) => prevTime + 60);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown Timer For Finishing The Tzom</h1>
      <div>
        <h2>{formatTime()}</h2>
        {!isRunning ? (
          <button onClick={StartTimer}>Start</button>
        ) : (
          <>
            <button onClick={PauseTimer}>Pause</button>
            <button onClick={ResetTimer}>Reset</button>
          </>
        )}
        <button onClick={SnoozeTimer}>Snooze</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
