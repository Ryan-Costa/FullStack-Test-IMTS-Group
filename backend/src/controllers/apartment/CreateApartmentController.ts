import { Request, Response } from "express";
import { CreateApartmentService } from "../../services/apartment/CreateApartmentService";
import { ValidatePhoneService } from "../../services/apartment/ValidatePhoneService";
import { ValidateEmailService } from "../../services/apartment/ValidateEmailService";

export class CreateApartmentController {
  async handle(request: Request, response: Response) {
    const { block, apartmentNumber, resident, phone, email } = request.body;

    const phoneValidate = new ValidatePhoneService();
    const emailValidate = new ValidateEmailService();

    if (!(await phoneValidate.execute(phone))) {
      return response.status(400).json("Invalid phone format");
    }

    if (email && email !== "" && !(await emailValidate.execute(email))) {
      return response.status(400).json("Invalid email format");
    }

    const service = new CreateApartmentService();

    const result = await service.execute({
      block,
      apartmentNumber,
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
