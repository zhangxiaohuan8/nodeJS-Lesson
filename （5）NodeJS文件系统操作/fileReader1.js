const fs=require("fs");
const http =require("http");
const path=require("path");
http.createServer(function(req,res){
    var file=process.argv[2];
    if(file==undefined){
        // var filePath=path.join(__dirname,"/fileReader1.js");
        // var fileContent=fs.readFileSync(filePath);
        // res.write(fileContent.toString());
        // res.end();
        var str="";
        fs.readFile(process.argv[1],function(err,data){
            /**
             * fs.readFile是一个异步函数，执行到该剧不会等待到文件读取完成，就直接执行后面的语句
             * 回调函数是等到文件读取完成之后才执行
             */
            if(err){
                console.log(err);
            }
            else{
                str=data.toString();
                res.end(str);
            }
        })
    }
    else{
        var filePath=path.join(__dirname,file);
        // if(fs.existsSync(filePath)){
        //     var fileContent=fs.readFileSync(filePath);
        //     res.write(fileContent.toString());
        //     res.end();
        // }
        // else{
        //     res.write("<h1>404<h1>");
        //     res.end();
        // }
        if(fs.existsSync(filePath)){
            fs.readFile(filePath,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString())
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
     
}).listen(8080);
console.log("server is listening 8080");