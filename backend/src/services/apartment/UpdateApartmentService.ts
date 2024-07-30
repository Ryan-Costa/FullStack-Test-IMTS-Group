import { AppDataSource } from "../../data-source";
import { Apartment } from "../../entities/Apartment";

type ApartmentUpdateRequest = {
  id: number;
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
      return new Error("Apartment does not exist");
    }

    if (block !== undefined && apartmentNumber !== undefined) {
      const existingApartment = await repo.findOne({
        where: { block, apartmentNumber },
      });

      if (existingApartment && existingApartment.id !== id) {
        return new Error(
          "An apartment with the same block and number already exists"
        );
      }
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
