const md5 = require('md5');
const fs = require('fs');
const uurl = require('url');
var db = require('./data');
module.exports.getLogin = function(req,res) {
  
};
module.exports.postLogin = function(req,res) {
  var params = req.body;
  var data1 = JSON.stringify(params);
  params = JSON.parse(data1);
  var sql = `select * from user`;
  db.query(sql,(err,result,fields) => {
    if(err) throw err;
    //验证登录信息
    result.forEach((item,index) => {
      if(item.username == params.username) {
        //验证成功
        //保存session
        req.session.username = params.username;
        //响应会浏览器
        res.json({msg: "登录成功",status: 201});
      } else {
        res.json({msg: "验证失败,请重新登录",status: 400})
      }
    });
  });
};
module.exports.getIndex = function(req,res) {
  
};
module.exports.getTopCategory = function(req,res) {
  var url = req.url;
  var sql = 'select * from category';
  db.query(sql,(err,result,fields) => {
    if(err) throw err;
    res.json({rows: result});
  });
};
module.exports.getSecondCategory = function(req,res) {
  var url = req.url;
  var id = uurl.parse(url, true).query.id;
  var sql = `select * from brand where categoryId = ${id}`;
  db.query(sql,(err,result,fields) => {
    if(err) throw err;
    for(var i =0;i<result.length;i++) {
      result[i].brandLogo = 'http://localhost:3000'+ result[i].brandLogo;
    }
    res.json({rows: result});
  });
};
module.exports.getProduct = function(req,res) {
  var url = req.url;
  var query = uurl.parse(url,true).query;
  var data = JSON.stringify(query);
  var paramsObj = JSON.parse(data); 
  var obj = {};
  var sql0 = 'select *from product';
  db.query(sql0,(err0,result0,fields0) => {
    if(err0) throw err0;
    obj.count = result0.length;
  });
  var sql = `select * from product where proName like '%${paramsObj.proName}%' LIMIT ${paramsObj.page},${paramsObj.pageSize}`;
  db.query(sql, (err, result, fields) =>{
    if(err) throw err;
    obj.page= Number(paramsObj.page);
    obj.pageSize = Number(paramsObj.pageSize);
    // obj.list = result;
    obj.list = result;
    res.json(obj);
  });  
};
module.exports.getProductDetail = function(req,res) {
  var url = req.url;
  var pId = uurl.parse(url,true).query.id;
  var sql = `select * from product where id = ${pId}`;
  db.query(sql,(err,result,fields) => {
    if(err) throw err;
    res.json({data: result});
  });
};
module.exports.postAddCart = function(req,res) {
  var paramsObj = req.body;
  var data1 = JSON.stringify(paramsObj);
  paramsObj = JSON.parse(data1);
  res.json({ msg: "添加成功",status:200});
  
};