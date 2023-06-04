const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique : true,
    },
    movieLanguage:{
        type: String,
        required:true
    },
    movieGenre:{
        type: String,
        required:true
    },
    releaseYear:{
        type: Number,
        required:true
    },
    movieRating:{
        type: Number,
    }
});
module.exports = mongoose.model('movieModel', movieSchema);