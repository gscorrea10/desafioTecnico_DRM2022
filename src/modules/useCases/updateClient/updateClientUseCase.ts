import { Client } from "@prisma/client";
import { prisma } from "../../../prisma";
import { UpdateClientData} from "../../types/ClientData";

export class UpdateClientUseCase {
  
  async execute({ id, name, adress, phone }:  UpdateClientData):Promise<Client>{
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