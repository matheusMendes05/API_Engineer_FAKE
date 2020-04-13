const mongoose = require('mongoose');

// Connection Data Base mongoose
mongoose.connect('mongodb://localhost:27017/APIEngineer', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conectado");
    }).catch((err) => {
        console.log("ERRO" + err);
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;