import { pool } from "../db.js";

export const getAllTasks = (req, res) => res.send("obteniendo tareas");

export const getTask = (req, res) => res.send("obteniendo tarea unica");

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const { rows } = await pool.query(
        "INSERT INTO task (title, description) VALUES ($1, $2)",
        [title, description]);
    
        console.log(rows);
        res.send("creando tarea")
    
  } catch (error) {
    console.log(error);
    return res.send("Error al crear tarea");

    
  }
};


export const updateTask = (req, res) => res.send("actualizando tarea");

export const deleteTask = (req, res) => res.send("eliminando tarea");
