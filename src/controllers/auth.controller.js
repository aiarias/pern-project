import { pool } from "../db.js";
import bcyrpt from "bcrypt"; //sirve para encriptar contraseñas
import { createAccessToken } from "../libs/jwt.js";

export const signin = (req, res) => {
  res.send("Iniciando sesion");
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //TODO: antes del insertar en la base de datos, encriptamos la contraseña
    const hashedPassword = await bcyrpt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    return res.json({
      token: token,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "El usuario ya existe",
      }); //Error 409: Conflict
    }
    next(error);
  }
};

export const singout = (req, res) => res.send("Cerrando sesion");

export const profile = (req, res) => res.send("Perfil");
