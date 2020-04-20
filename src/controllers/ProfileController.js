const eng = require('../models/engineer');

module.exports = {
    // List Unique Engineer
    async index(req, res) {
        const { card_n } = req.body;
        const engineer = await eng.findOne({ card_n });

        try {
            if (card_n === '') {
                return res.status(400).send({ error: "Empty field" });
            }
            if (!engineer) {
                return res.status(400).send({ error: "Engineer does not exist in the database" });
            } else {
                return res.status(200).json({ engineer });
            }
        } catch{
            return res.status(400).send({ error: "The search failed" });
        }
    },
}