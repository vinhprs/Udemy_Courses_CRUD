const mongoose = require('mongoose')
const  slug = require('mongoose-slug-generator')
mongoose.plugin(slug)


const Schema = mongoose.Schema

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String,  required: true},
    image: {type: String},
    slug:{type:String,maxLength:255}, 
    videoID: {type: String},
    slug: { type: String, slug: 'name', unique: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Course', Course)