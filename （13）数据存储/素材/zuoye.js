const http =require("http");
const url =require("url");
const fs=require("fs");
const path=require("path");
const querystring=require("querystring");
var data=require("./file.js");
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName == "/favicon.ico"){
        return; 
    }
    switch(pathName){
        case'/list':
            List(res);
            break;
        case"/getfilelist":
            showList(res);
            break;
        case'/detail':
            Del(res);
            break;
        case'/getDetail':
            showList(res);;
            break;
        case'/login':
            Login(res,req);
            break;
        
        case'/listmanager':
            L(res,req);
            break;
        case'll':
            showList(res);
        case'/addChapter':
            Add(res);
            break;
        case'/add':
            add(req,res);
            break;
        case'/delet':
            delet(req,res);
            break;
        default:
            var file1=path.extname(__dirname+pathName);
            var file=fs.readFileSync(__dirname+pathName);
            switch(file1){
                case'.css':
                    res.writeHead(200,{"Content-Type":"text/css"});
                    res.write(file);
                    res.end();
                    break;
                case'.js':
                    res.writeHead(200,{"Content-Type":"text/javasrcipt"});
                    res.write(file);
                    res.end();
                    break
                case'.jpeg':
                case'.jpg':
                    res.writeHead(200,{"Content-Type":"image/jpg"});
                    res.write(file);
                    res.end();
                    break;
                case'.png':
                    res.writeHead(200,{"Content-Type":"image/png"});
                    res.write(file);
                    res.end();
                    break;
            }
    }
    
}).listen(8083)
console.log("server 8083 is listening");
function List(res){
    var indexPath = path.join(__dirname,"./chapterList.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function Del(res){
    var indexPath = path.join(__dirname,"./chapter.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
 
function showList(res){
 
     
    var listStr = JSON.stringify(data);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();

}
function Login(res,req){
    var indexPath = path.join(__dirname,"./login.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function L(res,req){
    var indexPath = path.join(__dirname,"./list.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function Add(res){
    var indexPath = path.join(__dirname,"./addChapter.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function add(req,res){
    var strData="";
     req.on("data",function(chunk){
         strData+=chunk;
     })
     req.on("end",function(){
         var dataObj=querystring.parse(strData);
         var dataL={
            "chapterId": data.length+1,
            "chapterName": dataObj.title,
            "chapterContent":dataObj.content,
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 1022
         }
         data.push(dataL);
         var listStr = JSON.stringify(data);
         res.writeHead(200,{"Content-Type":"text/html"});
         res.write(listStr);
         res.end();
     })
}
function delet(req,res){
    // for(var i = 0;i < data.length;i++){
    //     if(id==data.chapterId){
    //         data.splice
    //     }
    // }
    var listStr = JSON.stringify(data);
    // for(var i = 0;i < data.length;i++){
    //     if(listStr.chapterId==data[i].chapterId){
    //         console.log(data[i].chapterId);
    //     }
    // }
    var urlObj=url.parse(req.url,true);
    // console.log(urlObj.query.chapterId);
    for(var i = 0;i < data.length;i++){
        if(urlObj.query.chapterId==data[i].chapterId){
            // console.log(data[i].chapterId);
            // data.splice(data[i].chapterId-1,1);
           for(var j=i+1;j<data.length;j++){
               data[j].chapterId--;
           }
           data.splice(data[i].chapterId-1,1);
        }
    }
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}
 