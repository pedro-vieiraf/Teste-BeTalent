import Sale from '#models/sale'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Sale.updateOrCreateMany(
      ['customer_id', 'product_id', 'quantity', 'unitPrice', 'totalPrice'],
      [
        {
          customer_id: 1,
          product_id: 1,
          quantity: 2,
          unitPrice: 100,
          totalPrice: 200,
          // createdAt: new Date(), <- Não sei como fazer isso exatamente
        },
        {
          customer_id: 2,
          product_id: 2,
          quantity: 1,
          unitPrice: 200,
          totalPrice: 200,
        },
        {
          customer_id: 3,
          product_id: 3,
          quantity: 3,
          unitPrice: 300,
          totalPrice: 900,
        },
      ]
    )
  }
}
