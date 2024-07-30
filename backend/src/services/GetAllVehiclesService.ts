import { AppDataSource } from "../data-source";
import { Vehicle } from "../entities/Vehicle";

export class GetAllVehiclesService {
  async execute(): Promise<Vehicle[]> {
    const repo = AppDataSource.getRepository(Vehicle);

    const vehicles = await repo.find({ relations: ["apartment"] });

    return vehicles;
  }
}
