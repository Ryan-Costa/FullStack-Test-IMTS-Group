import { MigrationInterface, QueryRunner, TableUnique } from "typeorm";

export class AddUniqueConstraintToApartment1722351930603
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createUniqueConstraint(
      "apartment",
      new TableUnique({
        name: "UQ_apartment_block_apartmentNumber",
        columnNames: ["block", "apartmentNumber"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropUniqueConstraint(
      "apartment",
      "UQ_apartment_block_apartmentNumber"
    );
  }
}
