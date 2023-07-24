import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express"

const app: Application = express()

app.use(json())

app.get("/", (req,res)=>{return res.json("hello world")})

export default app