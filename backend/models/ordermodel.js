import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        Product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    sheepingAddress: {
      address: { type: String, required: true },
      city: { type: Number, required: true },
      postalCode: { type: String, required: true },
      country: { type: Number, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
