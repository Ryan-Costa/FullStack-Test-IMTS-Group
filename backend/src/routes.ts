import { Router } from "express";
import { CreateApartmentController } from "./controllers/CreateApartmentController";
import { GetAllApartmentsController } from "./controllers/GetAllApartmentsController";
import { DeleteApartmentController } from "./controllers/DeleteApartmentController";
import { UpdateApartmentController } from "./controllers/UpdateApartmentController";

const routes = Router();

routes.post("/apartments", new CreateApartmentController().handle);
routes.get("/apartments", new GetAllApartmentsController().handle);
routes.delete("/apartments/:id", new DeleteApartmentController().handle);
routes.put("/apartments/:id", new UpdateApartmentController().handle);

export { routes };
