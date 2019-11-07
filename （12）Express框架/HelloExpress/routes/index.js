var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login");
});
router.post('/list',function(req, res, next) {
  var username=req.body.username;
  var pwd=req.body.pwd;
  console.log(username);
  console.log(pwd);
  var data=["zhangsan","123456"]
  if(data[0]==username&&data[1]==pwd){
    res.render("list");
  }
  else{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write("用户名、密码错误。");
    res.end();
  }
})
router.get('/addChapter',function(req,res,next){
  res.render("addChapter")
})
router.post("/addChapter",function(req,res){
  res.render('ChapterList')
})
module.exports = router;
