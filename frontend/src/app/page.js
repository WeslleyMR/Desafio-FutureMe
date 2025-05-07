// src/app/page.js
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/tasks", {
        text: newTask,
      });
      setTasks([...tasks, res.data]);
      setNewTask("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, {
        completed: !completed,
      });
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, completed: !completed } : task
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>📝 To-Do List</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task._id, task.completed)}
              style={{ marginRight: "0.5rem" }}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "1rem",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
