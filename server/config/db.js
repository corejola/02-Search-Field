const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUri = process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cyea3.mongodb.net/search-field?retryWrites=true&w=majority`

mongoose.connect(mongodbUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", () => {
    console.log("Mongoose connection successful")
})
