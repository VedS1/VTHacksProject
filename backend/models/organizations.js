const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    name: String,
    password: String,
    email : String,
    location : String,
    purpose: String,
    lookingFor: String
    // You can add more fields as needed
});

module.exports = mongoose.model('Org', organizationSchema);
