const express = require('express');
const router = express.Router();

const messageController = require('./controller')

router.post('/message', messageController.create);
module.exports = router;