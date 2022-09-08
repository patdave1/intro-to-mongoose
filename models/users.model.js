const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true,
    }
})