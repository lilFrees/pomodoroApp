/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useCallback } from "react";
import alarm from "../assets/alarm.mp3";

export const TimerContext = createContext();

const TIMERS = [
  { type: "FOCUS", time: 25 * 60, count: 0 },
  { type: "SHORT", time: 5 * 60, count: 0 },
  { type: "LONG", time: 15 * 60, count: 0 },
];

const TimerProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(20 * 60);
  const [currentTimer, setCurrentTimer] = useState(TIMERS[0]);

  const startTimer = useCallback(() => setIsActive(true), []);

  const stopTimer = useCallback(() => {
    setTimeRemaining(currentTimer.time);
    setIsActive(false);
  }, [currentTimer.time]);

  function clearCounts() {
    localStorage.setItem(JSON.stringify(TIMERS));
  }

  // Change Timers
  const switchTimerType = useCallback(
    (type) => {
      if (type !== currentTimer.type) {
        setCurrentTimer(TIMERS[type]);
        setTimeRemaining(TIMERS[type].time);
      }
    },
    [currentTimer.type]
  );

  // Place timers to localStorage
  useEffect(() => {
    const timersData = localStorage.getItem("timers")
      ? JSON.parse(localStorage.getItem("timers"))
      : TIMERS;

    !localStorage.getItem("timers") &&
      localStorage.setItem("timers", JSON.stringify(timersData));
  }, []);

  // Play and stop the timer

  useEffect(() => {
    let interval = null;

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (!isActive || timeRemaining === 0) {
      clearInterval(interval);
    }

    if (timeRemaining === 0) {
      let timersData = JSON.parse(localStorage.getItem("timers"));
      const currentIndex = timersData.findIndex(
        (timer) => timer.type === currentTimer.type
      );

      timersData[currentIndex].count += 1;

      localStorage.setItem("timers", JSON.stringify(timersData));

      setIsActive(false);

      // Alarm

      const audio = new Audio(alarm);
      audio.play();

      const timerCount = timersData.reduce(
        (acc, current) => acc + current.count,
        1
      );

      if (timerCount % 8 === 0) {
        switchTimerType(2);
      } else if (timerCount % 2 === 0) {
        switchTimerType(1);
      } else {
        switchTimerType(0);
      }
    }

    return () => clearInterval(interval);
  }, [currentTimer.type, isActive, switchTimerType, timeRemaining]);

  useEffect(() => {
    setTimeRemaining(currentTimer.time);
  }, [currentTimer]);

  const value = {
    currentTimer,
    timeRemaining,
    isActive,
    startTimer,
    stopTimer,
    clearCounts,
    switchTimerType,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
