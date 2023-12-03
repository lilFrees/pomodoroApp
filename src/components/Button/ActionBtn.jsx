/* eslint-disable react/prop-types */
import style from "./ActionBtn.module.css";

function ActionBtn(props) {
  return (
    <button
      type="button"
      className={`${style.btn} ${props?.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ActionBtn;
