import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUsersPhoneTable1690313427122 implements MigrationInterface {
    name = 'ChangeUsersPhoneTable1690313427122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")`);
    }

}
