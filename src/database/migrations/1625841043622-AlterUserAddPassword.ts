import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUserAddPassword1625841043622 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona uma nova coluna a table
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: true, // Permite modificar os users que já existem
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password')
  }
}
