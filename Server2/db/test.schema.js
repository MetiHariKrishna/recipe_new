const mongoose = require("mongoose")

const dbDetails = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    Textmessage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})



const dbModule = mongoose.model("table", dbDetails)
module.exports.Items = dbModule;
