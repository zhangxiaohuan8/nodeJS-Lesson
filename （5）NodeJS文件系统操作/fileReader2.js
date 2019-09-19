const fs=require("fs");
const http =require("http");
const path=require("path");
http.createServer(function(req,res){
    var file=process.argv[2];
    if(file==undefined){
       fs.open(process.argv[1],"r+",function(err,fd){
           var statObj=fs.statSync(process.argv[1]);
           var buf=Buffer.alloc(statObj.size);
           fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
           })
       }) 
    }
    else{
        var filePath=path.join(__dirname,file);
        if(fs.existsSync(filePath)){
            fs.open(filePath,"r+",function(err,fd){
                var statObj=fs.statSync(filePath);
                var buf=Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                     if(err){
                         console.log(err);
                     }
                     else{
                         res.end(buf.toString());
                         fs.closeSync(fd);
                     }
                })
            }) 
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
     
}).listen(8080);
console.log("server is listening 8080");