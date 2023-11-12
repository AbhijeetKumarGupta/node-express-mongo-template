// Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL;

// DB connection and error handling
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

// Adding middlewares (Sequence is important)
// Note : With Express 4 we dont need body parser
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    }),
);
app.use('/api', routes);

// Start Server
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})