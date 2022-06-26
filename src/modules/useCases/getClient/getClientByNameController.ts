import { Request, Response } from "express";
import { GetClientByNameUseCase } from "./getClientByNameUseCase";

export class GetClientByNameController {
  async handle(req: Request, res: Response) {

    const getClientsByNameUseCase = new GetClientByNameUseCase();
    const result = await getClientsByNameUseCase.execute();
    return res.status(200).json(result);
  }
}