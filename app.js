const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const message = require('./routes');
app.use('/messages', message);
let dev_db_url = 'mongodb://superuser:glory123@ds247377.mlab.com:47377/lifewaycodingchallenge';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




let port = 3002;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});