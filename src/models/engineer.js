const mongoose = require('../dataBase/conection');

const EngineerSchema = new mongoose.Schema({
    /**
     * Atributes
     * ------------------
     * nome
     * titulo profissional,
     * carteina n.,
     * registro nacional n.,
     * email,
     * situacao
     */
    name: {
        type: String,
        require: true,
        unique: true,
    },
    professional_tittle: {
        type: String,
        require: true,
        unique: true,
    },
    card_n: {
        type: String,
        require: true,
        unique: true,
    },
    national_registry: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    situation: {
        type: String,
        require: true
    }
});

const Engineer = mongoose.model('Engineer', EngineerSchema);

module.exports = Engineer;