import { FaPlus } from "react-icons/fa";
import style from "./TodoAdd.module.css";

function TodoAdd() {
  return (
    <button className={style.add}>
      <FaPlus />
    </button>
  );
}

export default TodoAdd;
