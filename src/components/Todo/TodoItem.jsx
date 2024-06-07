/* eslint-disable react/prop-types */
import style from './TodoItem.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiEditFill } from 'react-icons/ri';
import { IoMdCheckmark } from 'react-icons/io';
import { useTasks } from '../../hooks/useTasks';
import { useState } from 'react';

function TodoItem({ item }) {
	const { removeTask, updateTask } = useTasks();
	const [isEditing, setIsEditing] = useState(false);
	const [taskInput, setTaskInput] = useState(item.task);

	function removeHandler() {
		removeTask(item.id);
	}

	function editTaskHandler() {
		if (!isEditing) {
			setIsEditing(true);
		} else {
			if (taskInput.trim().length === 0) return;

			updateTask(item.id, taskInput);
			setIsEditing(false);
		}
	}

	return (
		<div className={style.taskItem}>
			<button className={style.item}>
				{!isEditing && item.task}

				{isEditing && (
					<input
						type='text'
						name=''
						id=''
						className={style.edit}
						value={taskInput}
						onChange={(e) => {
							setTaskInput(e.target.value);
						}}
					/>
				)}
			</button>
			<div className={style.action}>
				<button
					className={`${style.btn} ${isEditing && style.green}`}
					onClick={editTaskHandler}
				>
					{!isEditing && <RiEditFill />}
					{isEditing && <IoMdCheckmark />}
				</button>
				<button className={style.btn} onClick={removeHandler}>
					<FaRegTrashAlt />
				</button>
			</div>
		</div>
	);
}

export default TodoItem;
