const fs = require('fs');
const uurl = require('url');
var db = require('./data');
module.exports.getLogin = function(req,res) {
  
};
module.exports.postLogin = function(req,res) {

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