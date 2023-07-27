import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserPerfil } from "../../interfacers/user.interface";
import User from "../../entities/user.entity";
import { userSchemaPerfil } from "../../schemas/user.schema";

export const retrieveLoggedUsersService = async (
  userLoggedId: number
): Promise<TUserPerfil> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userLoggedId,
    },
    relations: {
      contacts: true,
    },
  });

  const userReturn = userSchemaPerfil.parse(user);

  return userReturn;
};
