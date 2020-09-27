const express = require('express');
const router = express.Router();
var process = require('./process');
router
    .get('/login',process.getLogin)
    .post('/login',process.postLogin)
    .get('/',process.getIndex)
    .get('/category/queryTopCategory',process.getTopCategory)
    .get('/category/querySecondCategory',process.getSecondCategory);
module.exports = router;