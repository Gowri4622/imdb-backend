const movieModel =require('../models/movies')


const getAllMovies = async(request, response)=>{
    try{
        const movieList = await movieModel.find();
        response.status(200).json(movieList);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}



const addNewMovie = async(request, response)=>{
    const newMovie = new movieModel({
        name : request.body.name,
        movieGenre : request.body.movieGenre,
        movieLanguage : request.body.movieLanguage,
        releaseYear : request.body.releaseYear,
        movieRating : request.body.movieRating,
    });
    try{
        const movie = await newMovie.save();
        response.status(200).json(movie);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}


const getMovieById = (request, response)=>{
    response.status(200).json(response.movie);
}


const updateMovie = async(request,response)=>{
    if(request.body.name!=null){
        response.movie.name = request.body.name;
    }
    try{
        const updateMovie = await response.movie.save()
        response.status(201).json(updateMovie)
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}


const deleteMovie = async(request,response)=>{
    try{
        await response.movie.deleteOne();
        response.json({message:`Deleted movie ${response.user.name}`})
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

async function getMovie(request,response,next){
    let movie;
    try{
        movie = await movieModel.findById(request.params.id)
        if(movie===null){
            response.status(404).send({message: `Cannot find movie with is ${request.params.id}`})
        }
    }
    catch(error){
        return response.status(500).send({message:error.message})
    }
    response.movie = movie;
    next();
}


module.exports = {getAllMovies, addNewMovie, getMovieById, deleteMovie, updateMovie, getMovie}