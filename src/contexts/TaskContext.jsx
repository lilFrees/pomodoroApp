/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProvier(props) {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      task: "Clean Your Room",
    },
    {
      id: 1,
      task: "Study",
    },
    {
      id: 2,
      task: "Code",
    },
  ]);

  function addTask(taskDescription) {
    const addedTask = {
      id: tasks[tasks.length - 1].id + 1,
      task: taskDescription,
    };

    console.log(addedTask);

    setTasks([...tasks, addedTask]);
  }

  function removeTask(id) {
    const removedTask = tasks.find((task) => task.id === id);
    console.log(removedTask);
  }

  const value = {
    tasks,
    addTask,
    removeTask,
  };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export { TaskProvier, TaskContext };
