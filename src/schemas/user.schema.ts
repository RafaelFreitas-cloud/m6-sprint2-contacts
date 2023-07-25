import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
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
