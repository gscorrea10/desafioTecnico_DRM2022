import { Client } from "@prisma/client";
import { prisma } from "../../../prisma";
import { CreateClientDTO } from "../../dto/CreateClientDTO";

export class UpdateClientUseCase {
  async execute({name,adress,phone}: CreateClientDTO): Promise<Client>{
    const clients = await prisma.client.update({
      where: {
        id: "id",
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