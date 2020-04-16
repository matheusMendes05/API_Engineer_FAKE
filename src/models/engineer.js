const mongoose = require('../database/connection');

const EngineerSchema = new mongoose.Schema({
    /**
     * Atributes
     * ------------------
     * nome |CAMPO OBRIGATORIO,
     * titulo profissional |CAMPO OBRIGATORIO, 
     * carteina n.|CAMPO OBRIGATORIO|CAMPO UNICO,
     * registro nacional n. |CAMPO UNICO,
     * email |CAMPO UNICO,
     * situacao |CAMPO OBRIGATORIO
     */
    name: {
        type: String,
        require: true
    },
    professional_tittle: {
        type: String,
        require: true,
    },
    card_n: {
        type: String,
        unique: true,
        require: true,
    },
    national_registry: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        item: true,
    },
    situation: {
        type: String,
        require: true
    }
});

const Engineer = mongoose.model('Engineer', EngineerSchema);
module.exports = Engineer;