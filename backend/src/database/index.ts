import "reflect-metadata";
import { AppDataSource } from "../data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    // Adicione aqui a lógica adicional, como iniciar o servidor
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
