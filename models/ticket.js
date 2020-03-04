const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\D?/
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'   
    }
}, {timestamps: true});

// compile it into a model
module.exports = mongoose.model('Ticket', ticketSchema);