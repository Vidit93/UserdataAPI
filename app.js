require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const user_routes = require("./routes/user");
const connectDB = require("./db/connect");

app.use(cors());

app.get("/",(req,res)=> {
    res.send("hello ji");
});

app.use(express.json());
app.use("/api/users",user_routes);

const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} connected`);;
        });
    } catch (error) {
        console.log(error);
    }
};

start();  