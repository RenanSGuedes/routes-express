const mongoose = require('mongoose');
const PointSchema = require('./PointSchema')

mongoose.connect('mongodb+srv://omnistack_database:canto4789@cluster0-efbho.mongodb.net/new_base?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const EntitySchema = new mongoose.Schema({
    username: String,
    age: Number,
    location: {
        type: PointSchema,
        index: '2dsphere',
        required: true
    },
    avatar_url: String
    
})

module.exports = mongoose.model('Entity', EntitySchema)