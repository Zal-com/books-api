import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_libraries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('users.id')
      table.integer('library_id').unsigned().references('libraries.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
