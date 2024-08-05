import { AppDataSource } from "../../data-source";
import { Apartment } from "../../entities/Apartment";
import { Vehicle } from "../../entities/Vehicle";

type VehicleRequest = {
  id: number;
  brand: string;
  model: string;
  color: string;
  plate: string;
  // apartment_id: number;
};

export class UpdateVehicleService {
  async execute({
    id,
    brand,
    model,
    color,
    plate,
  }: // apartment_id,
  VehicleRequest): Promise<Vehicle | Error> {
    const vehicleRepo = AppDataSource.getRepository(Vehicle);
    const apartmentRepo = AppDataSource.getRepository(Apartment);

    const vehicle = await vehicleRepo.findOne({ where: { id } });
    if (!vehicle) {
      return new Error(`Vehicle does not exist`);
    }

    if (plate !== undefined) {
      const existingVehicle = await vehicleRepo.findOne({ where: { plate } });

      if (existingVehicle && existingVehicle.id !== id) {
        return new Error(`A vehicle with the same plate already exists`);
      }
    }

    // if (apartment_id !== undefined) {
    //   const apartment = await apartmentRepo.findOne({
    //     where: { id: apartment_id },
    //   });

    //   if (!apartment) {
    //     return new Error(`Apartment does not exist`);
    //   }

    //   vehicle.apartment = apartment;
    // }

    if (brand !== undefined) vehicle.brand = brand;
    if (model !== undefined) vehicle.model = model;
    if (color !== undefined) vehicle.color = color;
    if (plate !== undefined) vehicle.plate = plate;

    vehicle.updatedAt = new Date();

    await vehicleRepo.save(vehicle);

    return vehicle;
  }
}
