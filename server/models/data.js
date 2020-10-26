'use strict'
const mongoose = require('mongoose');

// Schema replicating the dummy information dump in Mongo Atlas
const animal_names = new mongoose.Schema({
    common_names: { type: String },
    scientific_name: { type: String },
    image_urls: { type: String }
})

module.exports = mongoose.model('Animal_names', animal_names)