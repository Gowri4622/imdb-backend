const express = require('express')
const router = express.Router();
const movieModel = require('../models/movies');
const  {getAllMovies, addNewMovie, getMovieById, deleteMovie, updateMovie, getMovie}  =  require('../controllers/movies')


router.route('/').get(getAllMovies).post(addNewMovie);

router.route('/:id').get(getMovie,getMovieById).patch(getMovie,updateMovie).delete(getMovie,deleteMovie)


module.exports = router