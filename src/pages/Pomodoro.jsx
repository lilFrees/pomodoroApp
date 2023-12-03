/* eslint-disable react-hooks/exhaustive-deps */
import style from "./Pomodoro.module.css";

import Timer from "../components/Timer/Timer";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { TimerContext } from "../contexts/TimerContext";
import { useContext } from "react";

function Pomodoro() {
  const { currentTimer } = useContext(TimerContext);
  const isStudy = currentTimer.type === "FOCUS";

  return (
    <div className={`${style.main} ${isStudy ? style.study : style.break}`}>
      <NavBar />

      <Timer />

      <Footer />
    </div>
  );
}

export default Pomodoro;
