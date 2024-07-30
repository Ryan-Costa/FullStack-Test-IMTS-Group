import { AppDataSource } from "../data-source";
import { Apartment } from "../entities/Apartment";

export class DeleteApartmentService {
  async execute(id: string): Promise<string | Error> {
    const repo = AppDataSource.getRepository(Apartment);

    const apartment = await repo.findOne({ where: { id } });

    if (!apartment) {
      return new Error(`Apartment does not exist`);
    }

    await repo.delete(id);

    return "Apartment deleted successfully";
  }
}
