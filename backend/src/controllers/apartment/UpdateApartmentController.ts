import { Request, Response } from "express";
import { UpdateApartmentService } from "../../services/apartment/UpdateApartmentService";

export class UpdateApartmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { block, apartmentNumber, resident, phone, email } = request.body;

    const service = new UpdateApartmentService();

    const result = await service.execute({
      id: Number(id),
      block: block !== undefined ? Number(block) : undefined,
      apartmentNumber:
        apartmentNumber !== undefined ? Number(apartmentNumber) : undefined,
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
