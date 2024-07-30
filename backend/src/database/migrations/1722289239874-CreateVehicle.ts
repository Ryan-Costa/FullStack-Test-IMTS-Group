import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class CreateVehicle1722289239874 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vehicle",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "apartment_id",
            type: "int",
          },
          {
            name: "brand",
            type: "varchar",
            length: "50",
          },
          {
            name: "model",
            type: "varchar",
            length: "30",
          },
          {
            name: "color",
            type: "varchar",
            length: "15",
          },
          {
            name: "plate",
            type: "varchar",
            length: "7",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "vehicle",
      new TableForeignKey({
        columnNames: ["apartment_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "apartment",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createUniqueConstraint(
      "vehicle",
      new TableUnique({
        name: "UQ_vehicle_plate",
        columnNames: ["plate"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("vehicle");

    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("apartment_id") !== -1
      );
      if (foreignKey) {
        await queryRunner.dropForeignKey("vehicle", foreignKey);
      }

      const uniqueConstraint = table.uniques.find(
        (uq) => uq.name === "UQ_vehicle_plate"
      );
      if (uniqueConstraint) {
        await queryRunner.dropUniqueConstraint("vehicle", uniqueConstraint);
      }

      await queryRunner.dropTable("vehicle");
    }
  }
}
