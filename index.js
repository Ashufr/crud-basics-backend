require('dotenv').config()
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const userModal = require("./models/User");
const { get } = require("mongoose");

const productRouter = require("./routes/user");

const app = express();

app.use(cors({
    origin: 'https://crud-basics-frontend.vercel.app/'
}));
app.use(express.json());
app.use(productRouter)


app.get("/", async (req, res) => {
    let users = [];
    try {
        users = await userModal.find({});
    } catch (error) {
        console.log(error);
    }
    res.status(201).json(users);
});


app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});
