/* eslint-disable react-hooks/exhaustive-deps */
import style from "./Pomodoro.module.css";

import Timer from "../components/Timer/Timer";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { TimerContext } from "../contexts/TimerContext";
import { useContext, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { IoArrowForwardCircle } from "react-icons/io5";

function Pomodoro() {
  const { currentTimer } = useContext(TimerContext);
  const { username, setUsername } = useContext(UserContext);
  const userRef = useRef(null);
  const isStudy = currentTimer.type === "FOCUS";

  function submitHandler(e) {
    e.preventDefault();
    const name = userRef.current.value;

    localStorage.setItem("user", name);

    setUsername(name);
  }

  if (!username) {
    return (
      <form className={`${style.form}`} onSubmit={submitHandler}>
        <h3 className="fade">Welcome to FocusBoost App👋</h3>
        <input
          placeholder="What is your name?"
          className={`${style.userInput} fade`}
          ref={userRef}
        />
        <button className={`${style.submit} fade`}>
          <IoArrowForwardCircle />
        </button>
      </form>
    );
  }

  return (
    <div className={`${style.main} ${isStudy ? style.study : style.break}`}>
      <NavBar />

      <Timer />

      <Footer />
    </div>
  );
}

export default Pomodoro;
