import { Request, Response } from "express";
import { createUsersService } from "../services/users/createUsers.service";
import { TUserList, TUserRequest, TUserUpdate } from "../interfacers/user.interface";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

export const createUsersController = async (req: Request, res: Response): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const user = await createUsersService(userData);

  return res.status(201).json(user);
};

export const listUsersControler = async (req:Request, res:Response):Promise<Response> => {
    
  const users:TUserList = await listUsersService()
  
  return res.status(200).json(users)
}

export const updateUserControler = async (req:Request, res:Response):Promise<Response> => {
  const userId:number = parseInt(req.params.id)
  const updateData:TUserUpdate = req.body
  const logedUserId:number = parseInt(res.locals.userId)
  

  const updatedUser = await updateUserService(userId,updateData, logedUserId)
  return res.status(200).json(updatedUser)
}

export const deleteUsersControler = async (req:Request, res:Response):Promise<Response> => {
  const userId = parseInt(req.params.id)
  const logedUserId:number = parseInt(res.locals.userId)

  const deleteUser = await deleteUserService(userId, logedUserId)
  return res.status(204).send()
}