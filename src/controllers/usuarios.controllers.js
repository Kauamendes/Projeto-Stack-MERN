const { Mongoose } = require('mongoose');
const usuario = require('../models/usuario.model');


module.exports = {

    async index(req,res) {
        const user = await usuario.find();
        res.json(user);
        console.log("Rota usuario get all");
    },

  async create(req,res) {
        console.log("Rota usuario create");
        const {nome,email,tipo_usuario,senha} = req.body;

        let data = {};

        let user = usuario.findOne({email})
        if(user) {
            data = {nome,email,tipo_usuario,senha};
            user = await usuario.create(data);

            return res.status(200).json(user);
        } else {
            return res.status(500).json("Erro");
        }
       
    },

    async details(req,res) {
        console.log("Rota usuario get by id");
        const id = req.params.id.trim();
        const user = await usuario.findOne({id});
        res.json(user);
    },

    async delete(req,res) {
        console.log("Rota delete");
        const id = req.params.id.trim();
        const user = await usuario.findByIdAndDelete(id);
        return res.json(user);
    },

    async update(req,res) {
        console.log("rota update");
        const {_id,nome,email,tipo_usuario,senha} = req.body;
        const data = {nome,email,tipo_usuario,senha};
        const user = await usuario.findOneAndUpdate({_id},data,{new:true});
        res.json(user);
    }
}