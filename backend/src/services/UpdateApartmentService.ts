import { AppDataSource } from "../data-source";
import { Apartment } from "../entities/Apartment";

type ApartmentUpdateRequest = {
  id: string;
  block: number;
  apartmentNumber: number;
  resident: string;
  phone: string;
  email?: string | null;
};

export class UpdateApartmentService {
  async execute({
    id,
    block,
    apartmentNumber,
    resident,
    phone,
    email,
  }: ApartmentUpdateRequest): Promise<Apartment | Error> {
    const repo = AppDataSource.getRepository(Apartment);

    const apartment = await repo.findOne({ where: { id } });

    if (!apartment) {
      return new Error("Apartment not found");
    }

    if (block !== undefined) apartment.block = block;
    if (apartmentNumber !== undefined)
      apartment.apartmentNumber = apartmentNumber;
    if (resident !== undefined) apartment.resident = resident;
    if (phone !== undefined) apartment.phone = phone;
    if (email !== undefined) apartment.email = email;

    apartment.updatedAt = new Date();

    await repo.save(apartment);

    return apartment;
  }
}
