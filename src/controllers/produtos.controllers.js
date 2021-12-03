const { Mongoose } = require('mongoose');
const produto = require('../models/produto.model');


module.exports = {

    async index(req,res) {
        const product = await produto.find();
        res.json(product);
        console.log("Rota produto get all");
    },

  async create(req,res) {
        console.log("Rota produto create");
        const {nome,descricao,preco,quantidade} = req.body;

        let data = {};

        let product = produto.findOne({nome})
        if(product) {
            data = {nome,descricao,preco,quantidade};
            product = await produto.create(data);

            return res.status(200).json(product);
        } else {
            return res.status(500).json("Erro");
        }
       
    },

    async details(req,res) {
        console.log("Rota produto get by id");
        const id = req.params.id.trim();
        const product = await produto.findOne({id});
        res.json(product);
    },

    async delete(req,res) {
        console.log("Rota delete");
        const id = req.params.id.trim();
        const product = await produto.findByIdAndDelete(id);
        return res.json(product);
    },

    async update(req,res) {
        console.log("rota update");
        const {_id,nome,descricao,preco,quantidade} = req.body;
        const data = {nome,descricao,preco,quantidade};
        const product = await produto.findOneAndUpdate({_id},data,{new:true});
        res.json(product);
    }
}