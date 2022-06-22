import { Router } from "express";
import { CreateClientController } from "../useCases/createClient/createClientController";

const createClientController = new CreateClientController();
const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle);

export default clientRoutes;