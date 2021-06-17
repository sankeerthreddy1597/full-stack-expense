const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("MongoDB connected");
};

module.exports = connectDB;
