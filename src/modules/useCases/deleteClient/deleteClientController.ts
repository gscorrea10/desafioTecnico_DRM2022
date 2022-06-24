import { Request, Response } from "express";
import { DeleteClientUseCase } from "./deleteClientUseCase";

export class DeleteClientController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const {name, adress, phone} = req.body;

    const deleteClientUseCase = new DeleteClientUseCase();
    const result = await deleteClientUseCase.execute();
   
    return res.status(200).json(result);
  }
}