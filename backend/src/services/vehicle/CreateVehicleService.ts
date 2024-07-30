import { AppDataSource } from "../../data-source";
import { Apartment } from "../../entities/Apartment";
import { Vehicle } from "../../entities/Vehicle";

type VehicleRequest = {
  brand: string;
  model: string;
  color: string;
  plate: string;
  apartment_id: number;
};

export class CreateVehicleService {
  async execute({
    brand,
    model,
    color,
    plate,
    apartment_id,
  }: VehicleRequest): Promise<Vehicle | Error> {
    const vehicleRepo = AppDataSource.getRepository(Vehicle);
    const apartmentRepo = AppDataSource.getRepository(Apartment);

    const apartment = await apartmentRepo.findOne({
      where: { id: apartment_id },
    });
    if (!apartment) {
      return new Error("Apartment not found");
    }

    const vehicles = await vehicleRepo.find({
      where: { apartment: { id: apartment_id } },
    });
    const apartmentFloor = Math.floor(apartment.apartmentNumber / 100);

    if (apartmentFloor >= 10 && apartmentFloor <= 12) {
      if (vehicles.length >= 2) {
        return new Error("This apartment can have at most 2 vehicles.");
      }
    } else {
      if (vehicles.length >= 1) {
        return new Error("This apartment can have at most 1 vehicle.");
      }
    }

    const existingVehicle = await vehicleRepo.findOne({
      where: { plate },
    });

    if (existingVehicle) {
      return new Error("A vehicle with this plate already exists.");
    }

    const vehicle = vehicleRepo.create({
      brand,
      model,
      color,
      plate,
      apartment,
    });

    await vehicleRepo.save(vehicle);

    return vehicle;
  }
}
