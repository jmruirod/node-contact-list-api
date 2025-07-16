import express from "express";
import swaggerUi from "swagger-ui-express";
import { specs } from "./docs/swagger";
import { userRoute } from "./routes/person";
import { logger, unknownEndpoint } from "./middlewares";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/", logger);
app.use("/api", userRoute);
app.get("/", swaggerUi.setup(specs));
app.use("/", swaggerUi.serve);
app.use("/", unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
