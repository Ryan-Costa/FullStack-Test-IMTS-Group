import { Request, Response } from "express";
import { DeleteApartmentService } from "../../services/apartment/DeleteApartmentService";

export class DeleteApartmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteApartmentService();

    const result = await service.execute(Number(id));

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response
      .status(200)
      .json({ message: `Apartment with ID ${id} deleted successfully.` });
  }
}
