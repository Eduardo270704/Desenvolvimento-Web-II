import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693869501749 implements MigrationInterface {
    name = 'Default1693869501749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "mail" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128" UNIQUE ("mail")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "mail" character varying NOT NULL`);
    }

}
