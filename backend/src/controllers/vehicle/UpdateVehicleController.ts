import { Request, Response } from "express";
import { UpdateVehicleService } from "../../services/vehicle/UpdateVehicleService";
import { ValidatePlateService } from "../../services/vehicle/ValidatePlateService";

export class UpdateVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { brand, model, color, plate } = request.body;

    const plateValidate = new ValidatePlateService();

    if (!(await plateValidate.execute(plate))) {
      return response
        .status(400)
        .json("Invalid plate format. Accepted format AAA0000 or AAA0A00");
    }

    const service = new UpdateVehicleService();

    const result = await service.execute({
      id: Number(id),
      brand,
      model,
      color,
      plate,
      // apartment_id: apartment_id ? Number(apartment_id) : undefined,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
