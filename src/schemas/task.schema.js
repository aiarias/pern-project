import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Titulo es requerido",
      invalid_type_error: "El titulo debe ser un texto",
    })
    .min(1)
    .max(255),
  description: z
    .string({
      required_error: "Descripcion es requerida",
      invalid_type_error: "La descripcion debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional()
});


export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "Titulo es requerido",
      invalid_type_error: "El titulo debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional(),
  description: z
    .string({
      required_error: "Descripcion es requerida",
      invalid_type_error: "La descripcion debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional()
});

