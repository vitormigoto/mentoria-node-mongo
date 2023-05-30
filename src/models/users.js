const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String},
    userId: {type: Number, required: true},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true}
});

const users = mongoose.model('users', userSchema)

module.exports = users;