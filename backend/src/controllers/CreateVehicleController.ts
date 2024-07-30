import { Request, Response } from "express";
import { CreateVehicleService } from "../services/CreateVehicleService";

export class CreateVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, model, color, plate, apartment_id } = request.body;

    const service = new CreateVehicleService();

    const result = await service.execute({
      brand,
      model,
      color,
      plate,
      apartment_id: Number(apartment_id),
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
