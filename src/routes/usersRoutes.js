const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');

router.get('/', usersController.getUsers);
router.post('/', usersController.setUser);

module.exports = router;