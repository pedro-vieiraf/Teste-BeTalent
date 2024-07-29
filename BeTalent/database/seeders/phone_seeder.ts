import Phone from '#models/phone'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Phone.updateOrCreateMany(
      ['customer_id', 'phone'],
      [
        {
          customer_id: 1,
          phone: '1234567890',
        },
        {
          customer_id: 2,
          phone: '0987654321',
        },
        {
          customer_id: 3,
          phone: '1231231231',
        },
      ]
    )
  }
}
