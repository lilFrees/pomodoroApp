/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

function TodoItem({ item }) {
  return (
    <div className={style.taskItem}>
      <button className={style.item}>{item.task}</button>
      <div className={style.action}>
        <button className={style.btn}>
          <RiEditFill />
        </button>
        <button className={style.btn}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
