const engineer = require('../models/engineer');

module.exports = {
    // List Unique Engineer
    async index(req, res) {
        const { card_n } = req.body;
        try {
            const search = await engineer.findOne({ card_n });
            if (!search) {
                res.status(400).send({ error: "Engineer does not exist in the database" });
            } else {
                res.status(200).send({ search });
            }
        } catch{
            res.status(400).send({ error: "The search failed" });
        }
    },
}