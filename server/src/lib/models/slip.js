const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slip = new Schema({
    size: {
        type: String
    },
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
module.exports = mongoose.model("Slip", slip);
