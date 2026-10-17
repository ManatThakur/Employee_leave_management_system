const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
module.exports = connectDB;
