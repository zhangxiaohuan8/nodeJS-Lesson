var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var blogsys=require("../config/blogsys.json");
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render("login");
  
});
router.post('/list',function(req, res, next) {
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
router.get('/addChapter',function(req,res,next){
  res.render("addChapter")
})
router.post("/addChapter",function(req,res){
  var title=req.body.title;
  var content=req.body.content;
  var con=mysql.createConnection(blogsys);
  con.connect();//连接上数据库
  con.query("insert into chapters(title,content,posttime,autor,views) values(?,?,?,?,?)",[title,content,"12","aaa","10"]);
  con.query("select * from chapters",function(err,result){//err执行报错,result返回结果
   if(err){
     console.log(err);
   }
   else{
     console.log(result);
     res.render('ChapterList',{result:result})
   }

  })
})
router.get('/Chapter',function(req,res,next){
  var con=mysql.createConnection(blogsys);
  con.connect();//连接上数据库
  con.query("select * from chapters",function(err,result){
    res.render("Chapter",{result:result});
  })
})
module.exports = router;
