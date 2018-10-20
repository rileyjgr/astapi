const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const astSchema = new Schema({
    name: String,
    ip: Number,
    diameter: Number,
    mass: Number,
    v_imp: Number,
    energy: Number,
    blastRadius: Number,
    fireball: Number,
    richterScale: Number
});

const Ast = mongoose.model('ast', astSchema);

module.exports = Ast;

