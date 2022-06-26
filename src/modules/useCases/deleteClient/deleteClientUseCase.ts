import { prisma } from "../../../prisma";
import { DeleteClientData } from "../../types/ClientData";
import { Client } from "@prisma/client";

export class DeleteClientUseCase {

  async execute ({ id}:  DeleteClientData): Promise<Client> {
    const clients = await prisma.client.delete({
      where: {
        id,
      },
    });

    return clients;
  }
}
