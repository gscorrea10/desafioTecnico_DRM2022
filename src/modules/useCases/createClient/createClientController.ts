import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const {name, adress, phone} = req.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({name, adress, phone});
    return res.status(201).json(result);
  }
}