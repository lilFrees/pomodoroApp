import style from "./Tasks.module.css";
import TodoList from "../components/Todo/TodoList";
import TodoAdd from "../components/Todo/TodoAdd";

function Tasks() {
  return (
    <div className={style.tasks}>
      <div className={style.container}>
        <TodoList />
        <TodoAdd />
      </div>
      <div className={style.balls}>
        <div className={style.overlay}></div>
        <div className={style.ball1}></div>
        <div className={style.ball2}></div>
        <div className={style.ball3}></div>
      </div>
    </div>
  );
}

export default Tasks;
