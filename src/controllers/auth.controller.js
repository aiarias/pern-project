import { pool } from "../db.js";
import bcyrpt from "bcrypt"; //sirve para encriptar contraseñas
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({ message: "El correo no esta registrado" });
  }

  const validPassword = await bcyrpt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }

  const token = await createAccessToken({ id: result.rows[0].id }); //aqui se puede enviar mas informacion en el token por ej {name: result.rows[0].name, id: result.rows[0].id, email: result.rows[0].email} esto va a frontend

  res.cookie("token", token, {
    // httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, //1 dia
  });

  return res.json({
    result: result.rows[0],
  });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    //TODO: antes del insertar en la base de datos, encriptamos la contraseña
    const hashedPassword = await bcyrpt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;

    const result = await pool.query(
      "INSERT INTO users (name, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id }); //aqui se puede enviar mas informacion en el token por ej {name: result.rows[0].name, id: result.rows[0].id, email: result.rows[0].email} esto va a frontend

    res.cookie("token", token, {
      // httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, //1 dia
    });

    return res.json({
      result: result.rows[0],
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({
        message: "El correo ya esta registrado",
      }); //Error 400: Conflict
    }
    next(error);
  }
};

export const singout = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Sesion cerrada" });
}


export const profile = async (req, res) => {
    const result  = await pool.query("SELECT * FROM users WHERE id = $1", [req.userId]);
    return res.json(result.rows[0]);
};
