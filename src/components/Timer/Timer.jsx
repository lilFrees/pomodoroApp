import style from "./Timer.module.css";
import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";
import Button from "../Button/Button";

function Timer() {
  const { timeRemaining } = useContext(TimerContext);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className={style.timer}>
      <Button alpha="3" className={style.clock}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Button>
      <Button alpha="3" className={style.mantra}>
        &quot;Discipline is the bridge between goals and accomplishments&quot;.
      </Button>
    </div>
  );
}

export default Timer;
