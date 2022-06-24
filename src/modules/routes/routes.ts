import { request, Request, Response, Router } from "express";
import { prisma } from "../../prisma";
import { CreateClientController } from "../useCases/createClient/createClientController";
import { GetClientByNameController } from "../useCases/getClient/getClientByNameController";
import { DeleteClientController } from "../useCases/deleteClient/deleteClientController";
import { UpdateClientController } from "../useCases/updateClient/updateClientController";

const createClientController = new CreateClientController();
const getClientsByNameController = new GetClientByNameController();
//const deleteClientController = new DeleteClientController();
//const updateClientController = new UpdateClientController();

const clientRoutes = Router(); 

clientRoutes.post("/", createClientController.handle);
clientRoutes.get("/get", getClientsByNameController.handle);
//clientRoutes.put("/:id", updateClientController.handle);
//clientRoutes.delete("/:id", deleteClientController.handle);
clientRoutes.delete("/:id", async (req,res) => {
  const { id } = req.params;
  const result = await prisma.client.delete({
    where: {
      id,
    },
  });
  res.status(200).json(result);
});
clientRoutes.put("/:id", async (req, res) => {
  const {name,adress,phone} = req.body;
  const { id } = req.params;
  const result = await prisma.client.update({
    where: {
      id,
    },
    data: {
      name,
      adress,
      phone,
    },
  });

  res.status(204).json(result);

});

export default clientRoutes;