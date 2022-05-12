import {MigrationInterface, QueryRunner} from "typeorm";


export class init implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE DATABASE IF NOT EXISTS opera;');
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP database opera`);
    }
}