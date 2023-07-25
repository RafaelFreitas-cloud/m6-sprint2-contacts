import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";


export const deleteUserService = async (userId:number, logedUserId:number):Promise<void> => {
    if(userId!==logedUserId){
        throw new AppError("Insufficient permission", 403)
    }

    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({id:userId})

    if(!user){
        throw new AppError("User not found", 404)
    }
    await userRepository.remove(user)
    
}