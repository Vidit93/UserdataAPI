require("dotenv").config();
const connectDB = require("./db/connect")
const User = require("./models/user")
const UserJson = require("./user.json")

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await User.deleteMany();
        await User.create(UserJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();