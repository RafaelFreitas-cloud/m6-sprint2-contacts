import { Request, Response } from "express";
import { createUsersService } from "../services/users.service";


export const createUsersController = (req:Request, res:Response): Response => {
		const user = createUsersService()

		return res.status(201).json(user)
}