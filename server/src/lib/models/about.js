const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const about = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: {
        type: String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    image: {
        type: String
    }
});
module.exports = mongoose.model("About", about);
