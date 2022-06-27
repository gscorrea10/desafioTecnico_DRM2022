import { prisma } from "../../../prisma";
import { UpdateClientData, ClientOutput} from "../../types/ClientData";

export class UpdateClientUseCase {
  
  async execute({ id, name, adress, phone }:  UpdateClientData):Promise<ClientOutput>{
    const clients = await prisma.client.update({
      where: {
        id,
      },
      data: {
        name,
        adress,
        phone,
      },
    });

  return clients;

  }
}