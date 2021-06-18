const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    updateTime: {
        type: Date,
        default: Date.now().toString()
    },
    createDate: {
        type: Date,
        default: Date.now().toString()
    }
})

exports.User = mongoose.model('users', UserSchema, 'users');