import style from "./NavBar.module.css";
import { CgMenuLeftAlt } from "react-icons/cg";
import Button from "../Button/Button";
import { useContext, useState, useEffect, useRef } from "react";
import { TimerContext } from "../../contexts/TimerContext";
import { UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";

function NavBar() {
  const { switchTimerType, currentTimer, isActive, timeRemaining } =
    useContext(TimerContext);
  const { username } = useContext(UserContext);
  const navRef = useRef();

  const [timerCount, setTimerCount] = useState([0, 0, 0]);
  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    setIsOpen(true);
  }
  function closeHandler() {
    setIsOpen(false);
  }

  useEffect(() => {
    const navClick = function (e) {
      if (e.target === navRef.current && !isOpen) {
        openHandler();
        console.log("inside");
      } else {
        closeHandler();
        console.log("outside");
      }
    };

    window.addEventListener("click", navClick);

    return () => {
      window.removeEventListener("click", navClick);
    };
  }, []);

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
      <div ref={navRef}>
        <Button
          type="button"
          alpha="1"
          className={style.navToggleBtn}
          // onClick={openHandler}
        >
          <CgMenuLeftAlt />
        </Button>
      </div>
      {isOpen && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={spring}
          className={style.navMenu}
        >
          <div className={style.actions}></div>
          <ul className={style.list}></ul>
        </motion.div>
      )}
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 50,
};

export default NavBar;
