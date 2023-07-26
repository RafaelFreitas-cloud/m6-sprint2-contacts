import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactResponse, TContactUpdate } from "../../interfacers/contact.interface";
import Contact from "../../entities/contact.entity";
import { contactSchema } from "../../schemas/contact.schema";
import User from "../../entities/user.entity";

export const updateContactService = async (
  userId:number,
  contactId: number,
  updateData: TContactUpdate,
): Promise<TContactResponse> => {

  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepository.findOneBy({
    id: contactId,
  });

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const loggedUser = await userRepository.findOneBy({id:userId})

  const newContactData: Contact = contactRepository.create({
    ...oldContactData,
    ...updateData,
  });

  await contactRepository.save(newContactData);

  const newContact: TContactResponse = contactSchema.parse(newContactData);

  return newContact;
};
