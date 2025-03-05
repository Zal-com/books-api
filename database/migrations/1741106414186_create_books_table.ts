import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.primary().integer('isbn13')
      table.string('publisher').nullable()
      table.string('title')
      table.json('authors').nullable()
      table.text('description').nullable()
      table.text('thumbnail').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
