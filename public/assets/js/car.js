const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: String,
    pricePerDay: Number,
    isAvailable: { type: Boolean, default: true },
    description: String,
    image: String
});

module.exports = mongoose.model('Car', CarSchema);
