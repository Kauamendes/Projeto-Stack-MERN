const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema = new mongoose.Schema({
    nome:String,
    email:String,
    tipo_usuario:{type:Number, default:1},
    senha:String
}, {
    timestamps:true
});

dataSchema.pre('save',function(next) {
    if(!this.isModified("senha")) {
        return next();
    } else {
        this.senha = bcrypt.hashSync(this.senha,10);
        next();
    }
});

dataSchema.pre('findOneAndUpdate',function(next) {
    var password = this.getUpdate().senha+"";
    if(password.length < 55) {
        this.getUpdate().senha = bcrypt.hashSync(password,10);
    }
    next();
});

const usuario = mongoose.model('Usuarios',dataSchema);
module.exports = usuario;