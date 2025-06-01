import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("created");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskInput.trim()) return alert("Task cannot be empty.");
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
      created: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "created") return new Date(b.created) - new Date(a.created);
    if (sort === "alphabetical") return a.text.localeCompare(b.text);
    return 0;
  });

  return (
    <div className="container">
      <h1>React To-Do List</h1>
      <div className="controls">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add</button>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="created">Sort by Time</option>
          <option value="alphabetical">Sort A-Z</option>
        </select>
      </div>
      <ul>
        {sortedTasks.map(task => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
