import { Router } from "express";
import { CreateApartmentController } from "./controllers/apartment/CreateApartmentController";
import { GetAllApartmentsController } from "./controllers/apartment/GetAllApartmentsController";
import { DeleteApartmentController } from "./controllers/apartment/DeleteApartmentController";
import { UpdateApartmentController } from "./controllers/apartment/UpdateApartmentController";
import { CreateVehicleController } from "./controllers/vehicle/CreateVehicleController";
import { GetAllVehiclesController } from "./controllers/vehicle/GetAllVehiclesController";
import { DeleteVehicleController } from "./controllers/vehicle/DeleteVehicleController";
import { UpdateVehicleController } from "./controllers/vehicle/UpdateVehicleController";
import { GetApartmentsWithVehiclesController } from "./controllers/apartment/GetApartmentWithVehiclesController";

const routes = Router();

routes.post("/apartments", new CreateApartmentController().handle);
routes.get("/apartments", new GetAllApartmentsController().handle);
routes.delete("/apartments/:id", new DeleteApartmentController().handle);
routes.put("/apartments/:id", new UpdateApartmentController().handle);
routes.get(
  "/apartments-with-vehicles",
  new GetApartmentsWithVehiclesController().handle
);

routes.post("/vehicles", new CreateVehicleController().handle);
routes.get("/vehicles", new GetAllVehiclesController().handle);
routes.delete("/vehicles/:id", new DeleteVehicleController().handle);
routes.put("/vehicles/:id", new UpdateVehicleController().handle);

export { routes };
