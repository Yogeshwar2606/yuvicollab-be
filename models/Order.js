const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  address: {
    fullName: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  paymentId: { type: String, default: '' },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema); 