import { Client } from "@prisma/client";
import { CreateClientDTO } from "../../dto/CreateClientDTO";
import { prisma } from "../../../prisma";

export class CreateClientUseCase {
  async execute ({ name, adress, phone }:  CreateClientDTO): Promise<Client> {

    const client = await prisma.client.create({
      data: {
        name,
        adress,
        phone,
      },
    });

    return client;

  }
}