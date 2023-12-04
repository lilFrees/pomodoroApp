import style from "./NavBar.module.css";
import { CgMenuLeftAlt } from "react-icons/cg";
import Button from "../Button/Button";
import { useContext, useState, useEffect } from "react";
import { TimerContext } from "../../contexts/TimerContext";
import { UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";

function NavBar() {
  const { switchTimerType, currentTimer, isActive, timeRemaining } =
    useContext(TimerContext);
  const { username } = useContext(UserContext);

  const [timerCount, setTimerCount] = useState([0, 0, 0]);
  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    setIsOpen(true);
  }
  function closeHandler() {
    setIsOpen(false);
  }

  useEffect(() => {
    const timers = JSON.parse(localStorage.getItem("timers"));
    if (timers) {
      setTimerCount(timers.map((timer) => timer.count));
    }
  }, [currentTimer]);

  return (
    <div className={style.navbar}>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${(timeRemaining / currentTimer.time) * 100}%` }}
        transition={{
          type: "spring",
          stiffness: 30,
        }}
        className={style.progress}
      />
      <h2 className={style.username}>{username}</h2>
      <div className={style.actions}>
        <Button
          type="button"
          alpha="1"
          className={style.action}
          onClick={() => {
            switchTimerType(0);
          }}
          disabled={isActive}
          title={isActive ? "Stop the timer to switch it" : ""}
        >
          {timerCount[0]} pomodoros
        </Button>
        <Button
          type="button"
          alpha="1"
          className={style.action}
          onClick={() => {
            switchTimerType(1);
          }}
          disabled={isActive}
          title={isActive ? "Stop the timer to switch it" : ""}
        >
          {timerCount[1]} breaks
        </Button>
        <Button
          type="button"
          alpha="1"
          className={style.action}
          onClick={() => {
            switchTimerType(2);
          }}
          disabled={isActive}
          title={isActive ? "Stop the timer to switch it" : ""}
        >
          {timerCount[2]} long breaks
        </Button>
      </div>
      <Button
        type="button"
        alpha="1"
        className={style.navToggleBtn}
        onClick={openHandler}
      >
        <CgMenuLeftAlt />
      </Button>
      {isOpen && <NavMenu onClose={closeHandler} />}
    </div>
  );
}

export default NavBar;
