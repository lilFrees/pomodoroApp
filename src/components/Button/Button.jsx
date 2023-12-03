/* eslint-disable react/prop-types */
import style from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${style.button} ${style[`alpha-${props.alpha}`]} ${
        props?.isActive ? style.active : ""
      } ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.title}
    >
      {props.children}
    </button>
  );
}

export default Button;
