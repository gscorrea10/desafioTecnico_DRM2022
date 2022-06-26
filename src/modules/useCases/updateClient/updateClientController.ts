import { Request, Response } from "express";
import { UpdateClientUseCase } from "./updateClientUseCase";

export class UpdateClientController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const {name, adress, phone} = req.body;

    const updateClientUseCase = new UpdateClientUseCase();
    const result = await updateClientUseCase.execute({id,name,adress,phone});
   
    res.status(202).json(result);
  }
}