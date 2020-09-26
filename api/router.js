const express = require('express');
const router = express.Router();
var process = require('./process');
router
    .get('/login',process.getLogin)
    .post('/login',process.postLogin)
    .get('/',process.getIndex);
module.exports = router;