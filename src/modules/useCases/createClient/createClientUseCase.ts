import { Client } from "@prisma/client";
import { CreateClientData } from "../../types/ClientData";
import { prisma } from "../../../prisma";

export class CreateClientUseCase {
  async execute ({ name, adress, phone }:  CreateClientData): Promise<Client> {

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