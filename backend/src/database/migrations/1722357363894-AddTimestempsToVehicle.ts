import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTimestempsToVehicle1722357363894 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("vehicle", [
      new TableColumn({
        name: "createdAt",
        type: "timestamp",
        default: "now()",
      }),
      new TableColumn({
        name: "updatedAt",
        type: "timestamp",
        default: "now()",
        onUpdate: "now()",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("vehicle", ["createdAt", "updatedAt"]);
  }
}
