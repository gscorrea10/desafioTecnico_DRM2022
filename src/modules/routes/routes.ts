import { Router } from "express";
import { CreateClientController } from "../useCases/createClient/createClientController";
import { GetClientByNameController } from "../useCases/getClient/getClientByNameController";
import { UpdateClientController } from "../useCases/updateClient/updateClientController";
import { DeleteClientController } from "../useCases/deleteClient/deleteClientController";

const createClientController = new CreateClientController();
const getClientsByNameController = new GetClientByNameController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();
const clientRoutes = Router(); 

clientRoutes.post("/", createClientController.handle);
clientRoutes.get("/get", getClientsByNameController.handle);
clientRoutes.put("/:id", updateClientController.handle);
clientRoutes.delete("/:id", deleteClientController.handle);
export default clientRoutes;