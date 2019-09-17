const http =require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/1.png");
    var imgBuffer=fs.readFileSync(imgPath);
    var base64Data=imgBuffer.toString("base64");
    var imgSrc="data:image/jpg;base64,"+base64Data;
    var htmlStr="<DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();

}).listen(8080);
console.log("server is listening 8080");