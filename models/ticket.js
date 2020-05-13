const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\D?/,
        required: true
    },
    price: {
        type: Number,
        min: 100
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, { timestamps: true });

// compile it into a model
module.exports = mongoose.model('Ticket', ticketSchema);