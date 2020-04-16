const eng = require('../models/engineer');

module.exports = {
    // List Unique Engineer
    async index(req, res) {
        const { card_n } = req.body;
        try {
            if (await card_n)
                const engineer = await eng.findOne({ card_n });
            if (!engineer) {
                res.status(400).send({ error: "Engineer does not exist in the database" });
            } else {
                res.status(200).json({ engineer });
            }
        } catch{
            res.status(400).send({ error: "The search failed" });
        }
    },
}