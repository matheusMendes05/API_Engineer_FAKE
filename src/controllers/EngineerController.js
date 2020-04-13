const connection = require('../database/connection');
const Engineer = require('../models/engineer');

module.exports = {

    async index(req, res){
        return res.send({message: "list all Engineer"});
    },
    async create(req, res){
        return res.send({message: "Create Engineer"});
    }
}