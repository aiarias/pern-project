import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api";

//este resume para no tener que escribir la url completa cada vez que se haga una peticion

const client = axios.create({
    baseURL,
    withCredentials: true,
})

export default client;