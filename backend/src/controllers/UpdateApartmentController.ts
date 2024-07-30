import { Request, Response } from "express";
import { UpdateApartmentService } from "../services/UpdateApartmentService";

export class UpdateApartmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { block, apartmentNumber, resident, phone, email } = request.body;

    const service = new UpdateApartmentService();

    const result = await service.execute({
      id,
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
