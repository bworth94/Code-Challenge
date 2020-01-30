const express = require('express');
const router = express.Router();

const messageController = require('./controller')

router.post('/', messageController.create);
module.exports = router;