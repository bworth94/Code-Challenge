const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
    id: { type: Number, unique: true },
    message: String,
});


module.exports = mongoose.model('Message', MessageSchema);