import ActionBtn from "../Button/ActionBtn";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { GoListUnordered } from "react-icons/go";
import { useTimer } from "../../hooks/useTimer";

function Footer() {
  const { startTimer, isActive, stopTimer } = useTimer();
  return (
    <div className={style.footer}>
      <ActionBtn size="mid">
        <GoListUnordered />
      </ActionBtn>
      <ActionBtn
        alpha="1"
        onClick={isActive ? stopTimer : startTimer}
        size="big"
      >
        {isActive ? "Stop" : "Start"}
      </ActionBtn>
      <Link to={isActive ? null : "tasks"}>
        <ActionBtn size="mid">
          <GoListUnordered />
        </ActionBtn>
      </Link>
    </div>
  );
}

export default Footer;
