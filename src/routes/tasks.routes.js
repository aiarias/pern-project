import Router from "express-promise-router"; // Importo el enrutador de express nos ayuda con la toam de los errores

import { createTask, getAllTasks, getTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tasks", isAuth,getAllTasks); //isAuth es un middleware que se ejecuta antes de getAllTasks y lo que hace es verificar si el usuario esta autenticado

router.get("/tasks/:id", isAuth, getTask);

router.post("/tasks", isAuth, createTask);

router.put("/tasks/:id", isAuth, updateTask);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
