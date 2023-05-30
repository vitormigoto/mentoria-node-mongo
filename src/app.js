const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//importando a rota
const usersRoutes = require('./routes/usersRoutes');
const db = require("./config/dbConnect");

//Testando conexão com o banco de dados
db.on("error", console.log.bind(console,'Erro de Conexão'));
db.once("open",()=>{
    console.log("Conexão realizada com sucesso!")
});

//middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//rotas
app.use('/users',usersRoutes);

module.exports = app;