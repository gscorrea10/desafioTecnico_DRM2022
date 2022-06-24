import { Client } from "@prisma/client";
import { prisma } from "../../../prisma";

export class DeleteClientUseCase {
  async execute(): Promise<Client> {
    
    const clients = await prisma.client.delete({
        where: {
          id: "id",
        },
        
      });
  
       return clients;
       
    }
    
    
}
