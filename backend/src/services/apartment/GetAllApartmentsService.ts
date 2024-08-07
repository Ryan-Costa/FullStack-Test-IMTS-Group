import { AppDataSource } from "../../data-source";
import { Apartment } from "../../entities/Apartment";

export class GetAllApartmentService {
  async execute(): Promise<Apartment[]> {
    const repo = AppDataSource.getRepository(Apartment);

    const apartments = await repo.find({
      relations: ["vehicles"],
    });

    return apartments;
  }
}
