import { z } from "zod";
// import { ContactGender } from "../entities/contact.entity";

export const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(15),
  // gender: z.nativeEnum(ContactGender).nullish(),
  createdAt: z.string().or(z.date()),
});

export const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});


export const contactSchemaList = z.array(contactSchema);

export const contactSchemaUpdate = contactSchema
  .omit({ id: true, createdAt: true })
  .partial();
