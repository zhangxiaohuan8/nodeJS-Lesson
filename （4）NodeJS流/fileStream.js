const fs=require("fs");
const http =require("http");
const path=require("path");
http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/from.txt");
    var writePath = path.join(__dirname,"/to.txt");
    var streamReader=fs.createReadStream(filePath);
    var writeStream = fs.createWriteStream(writePath);
    streamReader.pipe( writeStream);

}).listen(8081);
console.log("server is listening 8081");