import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config('../.env')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export class ModeloMetodoPago {
  static async crearMetodoPago (input) {
    const total = input.reduce((acc, item) => acc + (item.precio * item.quantity), 0)
    console.log('Total a pagar:', total)
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'bob',
        automatic_payment_methods: {
          enabled: true
        }
      })
      return paymentIntent.client_secret
    } catch (error) {
      console.error('Error al crear el método de pago:', error)
      return { error: 'Error al crear el método de pago' }
    }
  }
}
