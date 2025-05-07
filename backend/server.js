// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(
    "mongodb+srv://macedoweslley2004:blmcxgtVnzHZca7c@todolist.entvdpc.mongodb.net/ToDoList?retryWrites=true&w=majority&appName=ToDoList"
  )
  .then(() => {
    console.log("MongoDB Atlas conectado");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

// Schema de Tarefa
const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

// Rotas

// Obter todas as tarefas
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Adicionar uma nova tarefa
app.post("/tasks", async (req, res) => {
  const task = new Task({
    text: req.body.text,
    completed: false,
  });
  try {
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Atualizar uma tarefa
app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = req.body.completed;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deletar uma tarefa
app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
