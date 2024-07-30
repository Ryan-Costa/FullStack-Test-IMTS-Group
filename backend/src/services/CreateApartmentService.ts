import { Apartment } from "../entities/Apartment";
import { AppDataSource } from "../data-source";

type ApartmentRequest = {
  block: number;
  apartmentNumber: number;
  resident: string;
  phone: string;
  email?: string | null;
};

export class CreateApartmentService {
  async execute({
    block,
    apartmentNumber,
    resident,
    phone,
    email,
  }: ApartmentRequest): Promise<Apartment | Error> {
    const repo = AppDataSource.getRepository(Apartment);

    const existingApartment = await repo.findOne({
      where: { block, apartmentNumber },
    });

    if (existingApartment) {
      return new Error(
        "Apartment already exists with the same block and apartment number"
      );
    }

    const apartment = repo.create({
      block,
      apartmentNumber,
      resident,
      phone,
      email: email || null,
    });

    await repo.save(apartment);

    return apartment;
  }
}
