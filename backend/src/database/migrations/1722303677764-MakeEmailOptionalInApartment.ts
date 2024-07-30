import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class MakeEmailOptionalInApartment1722303677764
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "apartment",
      "email",
      new TableColumn({
        name: "email",
        type: "varchar",
        length: "100",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "apartment",
      "email",
      new TableColumn({
        name: "email",
        type: "varchar",
        length: "100",
        isNullable: false,
      })
    );
  }
}
