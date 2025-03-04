import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books_libraries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('book_isbn13').unsigned().references('books.isbn13')
      table.integer('library_id').unsigned().references('libraries.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
