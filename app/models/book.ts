import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Library from '#models/library'
import User from '#models/user'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare isbn13: number

  @column()
  declare title: string

  @column()
  declare publisher: string | null

  @column()
  declare authors: object | null

  @column()
  declare description: string | null

  @column()
  declare thumbnail: string | null

  @manyToMany(() => User)
  declare favoritedBy: relations.ManyToMany<typeof User>

  @manyToMany(() => Library)
  declare libraries: relations.ManyToMany<typeof Library>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
