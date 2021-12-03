const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nome:String,
    descricao:String,
    preco:Number,
    quantidade:{type:Number, default:0}
}, {
    timestamps:true
});

const produto = mongoose.model('Produtos',dataSchema);
module.exports = produto;