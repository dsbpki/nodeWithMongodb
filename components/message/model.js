const moongose = require('mongoose');
const Schema = moongose.Schema;

const mySchema = new Schema({
    user:  String,
    message:{
        type:String,
        required:true,
    } ,
    date: Date,
});

const model = moongose.model('Message',mySchema);
module.exports = model;