const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const station = new Schema({
    name: {
        type: String
    },
    master_images: {
        type: String
    },
    images: {
        type: Array
    },
    description: {
        type: String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    table_of_content: {
        type: Array
    },
    company: {
        type: String
    },


});
module.exports = mongoose.model("station", station);
