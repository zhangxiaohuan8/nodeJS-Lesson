const fs=require("fs");
const http =require("http");
const path=require("path");
http.createServer(function(req,res){
    var file=process.argv[2];
    if(file==undefined){
        var reader=fs.createReadStream(process.argv[1]);
        reader.pipe(res);
    }
    else{
        var filePath=path.join(__dirname,file);
        if(fs.existsSync(filePath)){
            var reader=fs.createReadStream(filePath);
            reader.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
     
}).listen(8080);
console.log("server is listening 8080");