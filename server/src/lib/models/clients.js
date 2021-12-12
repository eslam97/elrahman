const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slip = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    link: {
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
module.exports = mongoose.model("Slip", slip);
