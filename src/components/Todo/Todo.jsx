import style from './ToDo.module.css';
import { useContext, useState } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import image from '../../assets/meme.jpg';
import { TaskContext } from '../../contexts/TaskContext';

function Todo() {
	const [showInput, setShowInput] = useState(false);
	const [taskInput, setTaskInput] = useState('');

	const { tasks, addTask } = useContext(TaskContext);

	function addTaskHandler(e) {
		e.preventDefault();
		if (taskInput.trim().length === 0) {
			return;
		}
		setTaskInput('');
		addTask(taskInput);
		setShowInput(false);
	}

	return (
		<div className={style.container}>
			{!showInput && (
				<TodoAdd
					onClick={() => {
						setShowInput(true);
					}}
				/>
			)}
			{showInput && (
				<form onSubmit={addTaskHandler} className={style.form}>
					<input
						type='text'
						className={style.input}
						value={taskInput}
						onChange={(e) => {
							setTaskInput(e.target.value);
						}}
						placeholder='What do you plan to do?'
					/>
					<button className={style.submit} type='submit'>
						Add to List
					</button>
				</form>
			)}
			{tasks.length === 0 && (
				<div className={style.no}>
					<img src={image} alt='No Tasks?' />
				</div>
			)}
			{tasks.length > 0 && <TodoList />}
		</div>
	);
}

export default Todo;
