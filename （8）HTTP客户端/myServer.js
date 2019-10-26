const http=require("http");
const querystring=require("querystring");
const fs=require("fs");
http.createServer(function(req,res){
     var strData="";
     req.on("data",function(chunk){
         strData+=chunk;
     })
     req.on("end",function(){
        var dataObj=querystring.parse(strData);
        var fileContent=JSON.parse(fs.readFileSync("data.json"));
        var j=0;
        for(var i=0;i<fileContent.length;i++){
            if(dataObj.username==fileContent[i].username&&dataObj.pwd==fileContent[i].password){
                j+=1;
            }
        }
        if(j==1){
            console.log("登录成功");
        }
        else{
            console.log("用户名，密码不正确");    
        }
     })
}).listen(8001);
console.log("server is listening 8001"); 