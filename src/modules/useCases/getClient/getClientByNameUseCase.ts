import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../prisma";
import { ClientOutput } from "../../types/ClientData";

export class GetClientByNameUseCase {
  async execute(): Promise<ClientOutput[]> {
    const clients = await prisma.client.findMany({
      orderBy: {
        name: "asc"
      }
    });
    return clients;
  }
}