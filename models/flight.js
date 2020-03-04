const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX', 'SAN', 'DEN']
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const nextYear = new Date().getFullYear() + 1;
            date.setFullYear(nextYear);
            return date;
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX', 'SAN', 'DEN'],
        default: 'SAN'
    },
    destinations: {
        type: [destinationSchema]
    },
}, {
    timestamps: true
});

// invoke model method export model
// flightSchema is the name of the schema
module.exports = mongoose.model('Flight', flightSchema);