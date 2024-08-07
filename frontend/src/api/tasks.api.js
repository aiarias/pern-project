import axios from './axios';


export const getAllTaskRequest = () => axios.get('/tasks'); // Esto va a enviar un GET a la ruta /tasks (es decir al backend)


export const createTaskRequest = (task) => axios.post('/tasks', task); // Esto va a enviar un POST a la ruta /tasks con el objeto task (es decir al backend)

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`); // Esto va a enviar un DELETE a la ruta /tasks/:id (es decir al backend)