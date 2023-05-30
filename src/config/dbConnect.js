const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.usuario;
const password = process.env.senha;

mongoose.connect(`mongodb+srv://${user}:${password}@mentoria-dnc.cm2zvh3.mongodb.net/?retryWrites=true&w=majority`);

let db = mongoose.connection;

module.exports = db;