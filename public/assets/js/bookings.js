const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startDate: Date,
    endDate: Date,
    totalPrice: Number
});

module.exports = mongoose.model('Booking', BookingSchema);
