const mongoose = require('mongoose');

const connectDB = async () => {
  try {

    await mongoose.connect('mongodb://localhost:27017/car_rental', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected to localhost:27017');
  } catch (err) {
    console.error(err.message);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;