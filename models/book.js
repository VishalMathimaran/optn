const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let books = new Schema({
    name: {type:String,required: true},
    email: {type:String,required: true},
    phonenumber: {type:Number,required: true},
    books:{type:Array,required: true},
});

const bookSchema = mongoose.model('books', books);
module.exports = { books:bookSchema}
