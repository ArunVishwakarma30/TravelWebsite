const mongoose = require("mongoose");

// Creating schema
const yatraSchema = new mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },

    LastName : {
        type:String,
        required:true
    },

    EmailAdd : {
        type:String,
        required:true,
        unique:true
    },
    Pswd : {
        type:String,
        required:true
    },
    cnfrmPswd : {
        type:String,
        required:true
    }
})

// creating modal

const Register = new mongoose.model("Register", yatraSchema);

module.exports = Register;