import Router from "express-promise-router"; // Importo el enrutador de express nos ayuda con la toam de los errores

import { createTask, getAllTasks, getTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
