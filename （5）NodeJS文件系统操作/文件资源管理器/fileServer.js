const fs=require("fs");
const http =require("http");
const path=require("path");
const url = require("url");
http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    if(urlPathName == "/") { 
        var filePath=path.join(__dirname,"/index.html");
        fs.readFile(filePath,function(err,data){
         
            if(err){
                console.log(err);
            }
            else{
                res.end(data);
            }
        })
    }
    else if(urlPathName == "/1.png") {
        fs.readFile('./1.png',function(err,data){
         
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"image/png"});
                res.end(data);
            }
        })
    }
}).listen(8081);
console.log("server is listening 8081");