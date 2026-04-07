import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="app">
      <h1>⚡ Task Manager</h1>

      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addBtn" onClick={addTask}>➕</button>
      </div>

      <div className="taskList">
        {tasks.map((t, i) => (
          <div className={`taskCard ${t.done ? "done" : ""}`} key={i}>
            <span>{t.text}</span>

            <div className="actions">
              <button className="doneBtn" onClick={() => toggleDone(i)}>✔</button>
              <button className="deleteBtn" onClick={() => deleteTask(i)}>✖</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;