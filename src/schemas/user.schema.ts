import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(15),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

export const userSchemaResponse = userSchema.omit({
  password: true,
});

export const userSchemaList = z.array(userSchemaResponse);

export const userSchemaUpdate = userSchema
  .omit({ id: true, createdAt: true })
  .partial();
