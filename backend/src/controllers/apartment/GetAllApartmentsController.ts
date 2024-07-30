import { Request, Response } from "express";
import { GetAllApartmentService } from "../../services/apartment/GetAllApartmentsService";

export class GetAllApartmentsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllApartmentService();
    const apartments = await service.execute();

    return response.json(apartments);
  }
}
