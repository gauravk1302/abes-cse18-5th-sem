
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addHandler = () => {
    if (task.trim() === "") {
      alert("Please add some task");
    } else {
      if (editIndex !== null) {
        // Update task
        const updatedList = [...todoList];
        updatedList[editIndex] = task;
        setTodoList(updatedList);
        setEditIndex(null);
      } else {
        // Add task
        setTodoList([...todoList, task]);
      }

      setTask("");
    }
  };

  const deleteHandler = (index) => {
    const updatedList = todoList.filter(
      (d, i) => i !== index
    );

    setTodoList(updatedList);

    if (editIndex === index) {
      setEditIndex(null);
      setTask("");
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <div className="todo-container">

        {/* Header */}
        <div className="header">
          <div className="logo">✓</div>
          <p className="subtitle">YOUR PERSONAL SPACE</p>

          <h1>
            My ToDo List
          </h1>

          <p className="description">
            Plan your day. Make it count.
          </p>
        </div>

        {/* Task Statistics */}
        <div className="stats">
          <div className="stat-card">
            <span className="stat-icon">📝</span>
            <div>
              <p>Total Tasks</p>
              <h2>{todoList.length}</h2>
            </div>
          </div>

          <div className="stat-card completed">
            <span className="stat-icon">⚡</span>
            <div>
              <p>Stay Focused</p>
              <h2>Keep Going!</h2>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="input-section">
          <label htmlFor="taskInput">
            {editIndex !== null
              ? "UPDATE YOUR TASK"
              : "ADD A NEW TASK"}
          </label>

          <div className="input-row">
            <input
              id="taskInput"
              type="text"
              placeholder="Enter your task here..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addHandler();
                }
              }}
            />

            <button
              className="add-btn"
              onClick={addHandler}
              type="button"
            >
              {editIndex !== null ? "✓ UPDATE" : "+ ADD"}
            </button>
          </div>
        </div>

        {/* Task List Heading */}
        <div className="list-header">
          <h2>
            Your Tasks <span>✳</span>
          </h2>

          <span className="task-count">
            {todoList.length} TASKS
          </span>
        </div>

        {/* Task List */}
        <div className="todo-list">
          {todoList.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✦</div>
              <h3>No Tasks Yet!</h3>
              <p>Add your first task to get started.</p>
            </div>
          ) : (
            todoList.map((data, index) => (
              <div
                className={`todo-item item-${index % 4}`}
                key={index}
              >
                <div className="task-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="task-content">
                  <p>{data}</p>
                  <span>Let's get it done!</span>
                </div>

                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => editHandler(index)}
                    title="Edit task"
                    aria-label="Edit task"
                    type="button"
                  >
                    ✎
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteHandler(index)}
                    title="Delete task"
                    aria-label="Delete task"
                    type="button"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <footer>
          BUILT FOR PRODUCTIVITY <span>♥</span>
        </footer>

      </div>
    </div>
  );
};

export default App;
