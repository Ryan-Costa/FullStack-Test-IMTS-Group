import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Apartment } from "./entities/Apartment";
import { Vehicle } from "./entities/Vehicle";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "localhost",
  port: Number(process.env.TYPEORM_PORT) || 5432,
  username: process.env.TYPEORM_USERNAME || "admin",
  password: process.env.TYPEORM_PASSWORD || "admin",
  database: process.env.TYPEORM_DATABASE || "crud",
  synchronize: false,
  logging: true,
  entities: [Apartment, Vehicle],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: [],
});
