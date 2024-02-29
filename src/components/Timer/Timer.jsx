import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import style from "./Timer.module.css";
import Button from "../Button/Button";
import { useTimer } from "../../hooks/useTimer";

function Timer() {
  const { timeRemaining, isActive } = useTimer();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  // Force update title when the tab becomes active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // This will trigger a re-render when the tab becomes active
        // React Helmet will update the title based on the current state
        document.title = isActive
          ? formatTime(timeRemaining)
          : "FocusBoost - Increase your focus";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [timeRemaining, isActive]); // Dependency array ensures effect runs when timeRemaining or isActive changes

  return (
    <div className={style.timer}>
      <Helmet>
        <title>
          {isActive
            ? formatTime(timeRemaining)
            : "FocusBoost - Increase your focus"}
        </title>
      </Helmet>
      <Button alpha="3" className={style.clock}>
        {formatTime(timeRemaining)}
      </Button>
      <Button alpha="3" className={style.mantra}>
        &quot;Discipline is the bridge between goals and accomplishments&quot;.
      </Button>
    </div>
  );
}

export default Timer;
