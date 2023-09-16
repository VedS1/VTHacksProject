const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    skillset: String,
    // You can add more fields as needed
});


module.exports = mongoose.model('User', userSchema);
