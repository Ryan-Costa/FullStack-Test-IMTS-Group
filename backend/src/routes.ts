import { Router } from "express";
import { CreateApartmentController } from "./controllers/CreateApartmentController";
import { GetAllApartmentsController } from "./controllers/GetAllApartmentsController";
import { DeleteApartmentController } from "./controllers/DeleteApartmentController";
import { UpdateApartmentController } from "./controllers/UpdateApartmentController";
import { CreateVehicleController } from "./controllers/CreateVehicleController";
import { GetAllVehiclesController } from "./controllers/GetAllVehiclesController";
import { DeleteVehicleController } from "./controllers/DeleteVehicleController";
import { UpdateVehicleController } from "./controllers/UpdateVehicleController";
import { GetApartmentsWithVehiclesController } from "./controllers/GetApartmentWithVehiclesController";

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
