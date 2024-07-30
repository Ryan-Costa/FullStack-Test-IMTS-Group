import { Request, Response } from "express";
import { GetAllVehiclesService } from "../../services/vehicle/GetAllVehiclesService";

export class GetAllVehiclesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVehiclesService();
    const vehicles = await service.execute();

    return response.json(vehicles);
  }
}
