import "reflect-metadata";
import express from "express";
import "./database";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(
  cors({
    origin: "https://fullstack-test-imts-group.onrender.com",
  })
);

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running"));
