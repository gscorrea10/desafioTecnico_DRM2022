import { prisma } from "../../../prisma";
import { DeleteClientData, ClientOutput } from "../../types/ClientData";

export class DeleteClientUseCase {

  async execute ({ id}:  DeleteClientData): Promise<ClientOutput> {
    const clients = await prisma.client.delete({
      where: {
        id,
      },
    });

    return clients;
  }
}
