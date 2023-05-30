const users = require('../models/users')

// getUsers = async (req,res) => {
async function getUsers(req,res) {
    const response = await users.find();
    try{
        res.status(200).json(response);
    }catch(err){
        res.status(500).json("Erro", err);
    }
}

function setUser(req,res){
    const user = req.body;
    try{
        const id = users.create(user);
        res.status(201).json(id);       
    }catch(err){
        res.status(500).json("Erro", err);
    }
}

module.exports = {getUsers,setUser};