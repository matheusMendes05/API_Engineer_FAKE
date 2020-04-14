// const connection = require('../dataBase/connection');
const engineer = require('../models/engineer');

module.exports = {
    // List All Engineer
    async index(req, res) {
        const Engineer = await engineer.find({});
        return res.send({ Engineer });
    },

    // create Engineer
    async create(req, res) {
        const { card_n } = req.body;
        try {

            if (await engineer.findOne({ card_n }))
                return res.status(400).send({ error: "Engineer already exists." });

            const engineers = await engineer.create(req.body);
            return res.status(200).send({ engineers });
            
        } catch{
            return res.status(400).send({ error: "Could not register engineer" });
        }
    },

}