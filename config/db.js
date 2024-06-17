const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://kppankaj1843:yVvFEG3lpEBFZUAw@cluster0.uzienq9.mongodb.net/"
      , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
