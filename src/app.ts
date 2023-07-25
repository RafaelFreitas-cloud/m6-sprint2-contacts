import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express"
import { userRoutes } from "./routes/users.routes"
import { handleErrors } from "./errors"

const app: Application = express()

app.use(json())

app.use("/users" ,userRoutes)

app.use(handleErrors)

export default app