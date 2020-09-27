const express = require('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 处理静态资源
app.use('/mobile',express.static('mobile'));
// app.use('/public/css/mobile.css',express.static('public/css/mobile.css'));
app.use('/node_modules', express.static('node_modules'));
// app.engine('html', require('express-art-template'));
app.use(router);

app.listen(3000,() =>{
  console.log('running');
});