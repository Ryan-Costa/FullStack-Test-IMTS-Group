import { Request, Response } from "express";
import { GetApartmentsWithVehiclesService } from "../../services/apartment/GetApartmentWithVehiclesService";

export class GetApartmentsWithVehiclesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetApartmentsWithVehiclesService();

    const apartments = await service.execute();

    return response.json(apartments);
  }
}
