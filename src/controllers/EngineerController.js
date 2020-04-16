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
            return res.status(201).send({ engineers });

        } catch{
            return res.status(400).send({ error: "Could not register engineer" });
        }
    },
    // delete Engineer
    async delete(req, res) {
        try {
            const { id } = req.params;
            const search = await engineer.findById({ _id: id });

            if (!search) {
                return res.status(400).send({ error: "Engineer does not exist in the database" });
            } else {
                const engineers = await engineer.deleteOne({ _id: id });
                return res.status(200).send({ message: "Engineer deleted Successfully" });
            }
        } catch{
            return res.status(400).send({ error: "The deletion failed." });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const engineers = req.body;
            const search = await engineer.findById({ _id: id });

            if (!search) {
                return res.status(400).send({ message: "Record not Exist in Data Base" });
            } else {
                await engineer.findByIdAndUpdate(search, engineers, {
                    new: true
                });
                return res.status(201).send({ message: "Record successfully updated" });
            }

        } catch{
            return res.status(400).send({ error: " Update failed." });
        }
    }
}