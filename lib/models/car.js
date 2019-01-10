const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    manufacturer: {
        type: String,
        require: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', schema);