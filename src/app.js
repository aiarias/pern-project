import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { pool } from "./db.js";
import { ORIGIN } from "./config.js";

const app = express();

// Middlewares
app.use(cors({
  origin: ORIGIN, // TODO: cambiar por el dominio de produccion
  credentials: true,
}));// esto dice cualquier dominio que se conecte a mi api puede hacerlo. pero al colocar el orgin se restringe a solo ese dominio
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //TODO: se envia folmulario simple

// Routes
app.get("/", (req, res) => res.json({ message: "Welcome to my API" }));
app.get("/api/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json({ message: result.rows[0] });
});

app.use('/api', taskRoutes);
app.use('/api', authRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
