import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/Vehicle";

export class DeleteVehicleService {
  async execute(id: number): Promise<string | Error> {
    const repo = AppDataSource.getRepository(Vehicle);

    const vehicle = await repo.findOne({ where: { id } });

    if (!vehicle) {
      return new Error(`Vehicle doest not exist`);
    }

    await repo.delete(id);

    return "Vehicle deleted successfully";
  }
}
