import { pool } from "../db.js";

// aqui no consideramos try catch porque express-promise-router se encarga de los errores
export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task");
  return res.json(result.rows);
};

export const getTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *", //TODO: retorna lo que se inserto
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "La tarea ya existe" }); //Error 409: Conflict
    }
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3",
    [title, description, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ message: `No existe una tarea con ese id` });
  }
  return res.json({ message: "Tarea actualizada" });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({ message: `No existe una tarea con ese id` });
  }
  return res.sendStatus(204); // Error No Content
};
