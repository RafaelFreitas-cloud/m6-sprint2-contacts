import { Router } from "express";
import {
  createUsersController,
  deleteUsersControler,
  listUsersControler,
  updateUserControler,
} from "../controllers/users.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { ensureEmailNotExists } from "../middlewares/ensureEmailNotExists.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureIdExists } from "../middlewares/ensureIdExists.middleware";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureBodyIsValid(userSchemaRequest),
  ensureEmailNotExists,
  createUsersController
);

userRoutes.get("", ensureTokenIsValid, listUsersControler);

userRoutes.patch(
  "/:id",
  ensureTokenIsValid,
  ensureIdExists,
  ensureBodyIsValid(userSchemaUpdate),
  updateUserControler
);

userRoutes.delete(
  "/:id",
  ensureTokenIsValid,
  ensureIdExists,
  deleteUsersControler
);
