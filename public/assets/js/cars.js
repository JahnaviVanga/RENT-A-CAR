const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

// Add a new car (admin only)
router.post('/', async (req, res) => {
    const newCar = new Car(req.body);
    await newCar.save();
    res.json(newCar);
});

module.exports = router;
