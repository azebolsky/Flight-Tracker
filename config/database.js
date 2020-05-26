const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/flights", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// shortcut variable
const db = mongoose.connection;

db.on("connected", () => {
  // will show localhost : 27017
  console.log(`connected to MongoDB at ${db.host} : 
    ${db.port}`);
});
