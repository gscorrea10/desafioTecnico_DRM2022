import { Request, Response } from "express";
import { DeleteClientUseCase } from "./deleteClientUseCase";

export class DeleteClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteClientUseCase = new DeleteClientUseCase();
    await deleteClientUseCase.execute({ id });

    return res.status(204).send();
  }
}