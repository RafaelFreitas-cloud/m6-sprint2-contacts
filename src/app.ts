import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleErrors } from "./errors";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app: Application = express();

app.use(json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
