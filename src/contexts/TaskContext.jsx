import { createContext, useState } from 'react';

const TaskContext = createContext();

function TaskProvider(props) {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			task: 'Do the dishes',
		},
		{
			id: 1,
			task: 'Study',
		},
		{
			id: 2,
			task: 'Clean up your room',
		},
	]);

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
