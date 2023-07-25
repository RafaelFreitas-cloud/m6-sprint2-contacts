import { Router } from "express";
import { createUsersController } from "../controllers/users.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { userSchemaRequest } from '../schemas/user.schema';
import { ensureEmailNotExists } from "../middlewares/ensureEmailNotExists.middleware";

export const userRoutes: Router = Router()


userRoutes.post('',ensureBodyIsValid(userSchemaRequest), ensureEmailNotExists, createUsersController)