import { Router } from "express";
import { personController } from "~/controllers/person";

const route = Router();

route.get("/persons", personController.getAll);
route.get("/persons/info", personController.info);
route.get("/persons/:id", personController.getById);
route.delete("/persons/:id", personController.delete);
route.post("/persons", personController.create);

export { route as userRoute };
