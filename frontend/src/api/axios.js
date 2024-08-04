import axios from "axios";

//este resume para no tener que escribir la url completa cada vez que se haga una peticion

const client = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})

export default client;