import { Request, Response } from "express";
import { createUsersService } from "../services/users/createUsers.service";
import { TUserRequest } from "../interfacers/user.interface";

export const createUsersController = async (req: Request, res: Response): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const user = await createUsersService(userData);

  return res.status(201).json(user);
};
