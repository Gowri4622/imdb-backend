require('dotenv').config()
const express = require('express');
const movies = require('./routes/movies')
const PORT = 3500;
const app = express()

app.use(express.json())
const mongoose = require('mongoose');



mongoose.connect(process.env.DB_URL);
const db = mongoose.connection
db.on('error', errorMessage=>console.log(errorMessage))
db.once('open',()=>console.log("Connected to db"))


app.get('/',(request, response)=>{
    response.send("List of IMDB Movies")
});

app.use('/api/v1/movies', movies)
// console.log("This is app.js")

app.listen(PORT, console.log(`Server runs at http://localhost:${PORT}`))