import { createContext, useState, useContext } from "react";
import {
  getAllTaskRequest,
  deleteTaskRequest,
  createTaskRequest,
} from "../api/tasks.api";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks debe estar dentro del proveedor TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  const loadTasks = async () => {
    const res = await getAllTaskRequest(); // Aquí se hace la petición a la API al backend para obtener todas las tareas
    setTasks(res.data); // Aquí se setea el estado con las tareas obtenidas
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task); // Aquí se hace la petición a la API al backend para crear una tarea
      setTasks([...tasks, res.data]); // Aquí se agrega la tarea creada al estado
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const deleteTask = async (id) => {
    const res = await deleteTaskRequest(id); // Aquí se hace la petición a la API al backend para eliminar una tarea

    if (res.status === 204) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
    console.log(res);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        loadTasks,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
