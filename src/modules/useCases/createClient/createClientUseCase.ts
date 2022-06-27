import { PrismaClient } from "@prisma/client";
import { CreateClientData, ClientOutput } from "../../types/ClientData";
import { prisma } from "../../../prisma";

export class CreateClientUseCase {
  async execute ({ name, adress, phone }:  CreateClientData): Promise<ClientOutput> {

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