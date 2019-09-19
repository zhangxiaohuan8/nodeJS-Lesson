const fs=require("fs");
const http =require("http");
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var pathName=urlObj.pathname;
    if(pathName="/"){
        var fileContent=fs.readFileSync("index1.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName=="/getdata"){
        var list =[{"username":"zhangsan","age":20}];
        var str=JSON.stringify(list);
        res.end();
    }
}).listen(8081);
console.log("server is listening 8081");