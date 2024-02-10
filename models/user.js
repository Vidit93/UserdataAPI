const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
     },
    number:{
        type: Number,
        required: true,
    },
    e_mail:{
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true,
    },
    cpass:{
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("UserData",userSchema);