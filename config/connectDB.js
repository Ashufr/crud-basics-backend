const mongoose =  require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Connectin Failed");
        // process.exit(1);
    }
}
connectDB();

module.exports = connectDB;