const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playgrounds = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    playground_name: {
        type: String,
        required: [true ,'Please add a playground_name']
    },
    stadium_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Stadiums'
    },
    description: {
        type: String,
    },
    detailsPrice: {
        type: [detailsPrice],
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    capacity: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    avaiable: {
        type: Boolean,
        required: true
    }
});
module.exports = mongoose.model("Playgrounds", playgrounds);
