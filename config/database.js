const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

// shortcut variable
const db = mongoose.connection;

db.on('connected', () => {
    // will show localhost : 27017
    console.log(`connected to MongoDB at ${db.name} : 
    ${db.port}`)
});