import { createContext, useEffect, useState } from 'react';

const TaskContext = createContext();

function TaskProvider(props) {
	const initialTasks = JSON.parse(localStorage.getItem('todo')) || [
		{
			id: 0,
			task: 'Mathematics',
		},
		{
			id: 1,
			task: 'Physics',
		},
		{
			id: 2,
			task: 'Social Economics',
		},
	];

	const [tasks, setTasks] = useState(initialTasks);

	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(tasks));
	}, [tasks]);

	function addTask(taskDescription) {
		const addedTask = {
			id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
			task: taskDescription,
		};

		setTasks([...tasks, addedTask]);
	}

	function removeTask(id) {
		const updatedTasks = tasks.filter((task) => task.id !== id);

		setTasks(updatedTasks);
	}

	function updateTask(id, newTaskDescription) {
		const updatedTasks = tasks.map((task) =>
			task.id === id ? { ...task, task: newTaskDescription } : task
		);
		setTasks(updatedTasks);
	}

	const value = {
		tasks,
		addTask,
		removeTask,
		updateTask,
	};

	return (
		<TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
	);
}

export { TaskProvider, TaskContext };
