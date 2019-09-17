const fs=require("fs");
const http =require("http");
const path=require("path");
http.createServer(function(req,res){
    var file=process.argv[2];
    if(file==undefined){
        var filePath=path.join(__dirname,"/fileReader1.js");
        var fileContent=fs.readFileSync(filePath);
        res.write(fileContent.toString());
        res.end();
    }
    else{
        var filePath=path.join(__dirname,file);
        var fileContent=fs.readFileSync(filePath);
        if(fs.existsSync(filePath)){
            res.write(fileContent.toString());
            res.end();
        }
        else {
            res.write("<h1>404<h1>");
            res.end();
        }
    }
}).listen(8080);
console.log("server is listening 8080");