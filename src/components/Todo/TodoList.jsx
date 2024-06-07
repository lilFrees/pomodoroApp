import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import TodoItem from './TodoItem';
import style from './TodoList.module.css';

function TodoList() {
	const { tasks } = useContext(TaskContext);
	return (
		<div className={style.list}>
			{tasks.map((item) => (
				<TodoItem key={item.id} item={item} />
			))}
		</div>
	);
}

export default TodoList;
