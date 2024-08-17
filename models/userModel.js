const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
    
    
    title: {
        type: String,
        required:true
    },
    joke_content: {
        type: String,
        required:true
    },
})

const JokeModel = mongoose.model('JokeModel', jokeSchema)

module.exports=JokeModel