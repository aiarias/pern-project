import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost", //en caso de estar en la nube aqui se coloca el dominio
  user: "postgres",
  password: "password",
  database: "tasksdb",

});


pool.on("connect", () => {
    console.log("Database connected");
});