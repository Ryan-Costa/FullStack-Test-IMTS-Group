import { Request, Response } from "express";
import { CreateApartmentService } from "../services/CreateApartmentService";

export class CreateApartmentController {
  async handle(request: Request, response: Response) {
    const { block, apartmentNumber, resident, phone, email } = request.body;

    const service = new CreateApartmentService();

    const result = await service.execute({
      block,
      apartmentNumber,
      resident,
      phone,
      email,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
