import { Request, Response } from "express";
import { UpdateApartmentService } from "../../services/apartment/UpdateApartmentService";
import { ValidatePhoneService } from "../../services/apartment/ValidatePhoneService";
import { ValidateEmailService } from "../../services/apartment/ValidateEmailService";

export class UpdateApartmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { block, apartmentNumber, resident, phone, email } = request.body;

    const phoneValidate = new ValidatePhoneService();
    const emailValidate = new ValidateEmailService();

    if (!(await phoneValidate.execute(phone))) {
      return response.status(400).json("Invalid phone format");
    }

    if (email && email !== "" && !(await emailValidate.execute(email))) {
      return response.status(400).json("Invalid email format");
    }

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
