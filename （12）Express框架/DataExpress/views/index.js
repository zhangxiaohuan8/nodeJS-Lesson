var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var blogsys=require("../config/blogsys.json");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login");
  
});
router.post('/list',function(req, res, next) {
  var username=req.body.username;
  var pwd=req.body.pwd;
  var con=mysql.createConnection(blogsys);
  con.connect();//连接上数据库
  con.query("select username from users",function(err,result){
    if(err){
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      res.write("用户名、密码错误。");
      res.end();
    }
    else{
      console.log(result);
      res.render("list");
    }
  });
})
module.exports = router;
