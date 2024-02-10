import style from "./TaskForm.module.css";

function TaskForm() {
  return (
    <form className={style.form}>
      <input type="text" className={style.field} placeholder="Task Name" />
      <div className={style.actions}>
        <button className={style.submitBtn}>Save</button>
        <button className={style.cancelBtn}>Cancel</button>
      </div>
    </form>
  );
}

export default TaskForm;
