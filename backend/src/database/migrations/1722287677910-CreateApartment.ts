import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateApartment1722287677910 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "apartment",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "block",
            type: "int",
          },
          {
            name: "apartmentNumber",
            type: "int",
          },
          {
            name: "resident",
            type: "varchar",
            length: "150",
          },
          {
            name: "phone",
            type: "varchar",
            length: "13",
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
            onUpdate: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("apartment");
  }
}
