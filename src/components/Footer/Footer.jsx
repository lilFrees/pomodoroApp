import ActionBtn from "../Button/ActionBtn";
import style from "./Footer.module.css";
import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";

function Footer() {
  const { startTimer, isActive, stopTimer } = useContext(TimerContext);
  return (
    <div className={style.footer}>
      <ActionBtn alpha="1" onClick={isActive ? stopTimer : startTimer}>
        {isActive ? "Stop" : "Start"}
      </ActionBtn>
    </div>
  );
}

export default Footer;
