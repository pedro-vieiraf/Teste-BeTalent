import Customer from '#models/customer'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Customer.createMany([
      {
        name: 'teste1',
        cpf: 12345678910,
      },
      {
        name: 'teste2',
        cpf: 10987654321,
      },
      {
        name: 'teste3',
        cpf: 13579111315,
      },
    ])
  }
}
