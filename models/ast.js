const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const astSchema = new Schema({
    name: String,
    vel: String,
    mass: String,
    radius: String
});

const Ast = mongoose.model('ast', astSchema);

module.exports = Ast;

