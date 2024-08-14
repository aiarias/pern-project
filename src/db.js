import pg from "pg";
import { PG_PORT, PG_DATABASE, PG_HOST
, PG_PASSWORD, PG_USER
 } from "./config.js";

export const pool = new pg.Pool({
  port: PG_PORT,
  host: PG_HOST, //en caso de estar en la nube aqui se coloca el dominio
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,

});


pool.on("connect", () => {
    console.log("Database connected");
});