import { Request, Response } from "express";
import { UpdateVehicleService } from "../services/UpdateVehicleService";

export class UpdateVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { brand, model, color, plate, apartment_id } = request.body;

    const service = new UpdateVehicleService();

    const result = await service.execute({
      id: Number(id),
      brand,
      model,
      color,
      plate,
      apartment_id: apartment_id ? Number(apartment_id) : undefined,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
