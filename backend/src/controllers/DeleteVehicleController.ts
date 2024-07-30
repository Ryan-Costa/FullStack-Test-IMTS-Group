import { Request, Response } from "express";
import { DeleteVehicleService } from "../services/DeleteVehicleService";

export class DeleteVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteVehicleService();

    const result = await service.execute(Number(id));

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response
      .status(200)
      .json({ message: `Vehicle with ID ${id} deleted successfully.` });
  }
}
