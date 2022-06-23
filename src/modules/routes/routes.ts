import { request, Request, Response, Router } from "express";
import { prisma } from "../../prisma";
import { CreateClientController } from "../useCases/createClient/createClientController";
import { GetClientByNameController } from "../useCases/getClient/getClientByNameController";

const createClientController = new CreateClientController();
const getClientsByNameController = new GetClientByNameController();

const clientRoutes = Router(); 

clientRoutes.post("/", createClientController.handle);
clientRoutes.get("/get", getClientsByNameController.handle);
clientRoutes.put("/:id", async (req, res) => {
  const {name,adress,phone} = req.body;
  const { id } = req.params;
  const result = await prisma.client.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      adress: adress,
      phone: phone,
    },
  });

  res.json(result);

})


  
export default clientRoutes;