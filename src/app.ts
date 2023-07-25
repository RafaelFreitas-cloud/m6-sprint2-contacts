import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express"
import { userRoutes } from "./routes/users.routes"

const app: Application = express()

app.use(json())

app.use("/users" ,userRoutes)

app.get("/", (req,res)=>{return res.json("hello world")})

export default app