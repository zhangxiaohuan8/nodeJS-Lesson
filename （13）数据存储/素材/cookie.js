const http=require("http");
const url=require("url");
const path=require("path");
const fs=require("fs");
const querystring=require("querystring");
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    if(urlObj.pathname == "/favicon.ico"){
        return; 
    }
    switch(urlObj.pathname){
        case'/':
            showHome(req,res);
            break;
        case'/login':
            loginIn(req,res);
            break;
        default:
            var file1=path.extname(__dirname+urlObj.pathname);
            var file=fs.readFileSync(__dirname+urlObj.pathname);
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
}).listen(8081)
console.log('server is listening 8081');
function showLogin(res){
    var filePath=path.join(__dirname,"login.html");
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text-html"});
    res.write(fileContent);
    res.end();
}
function showList(res){
    var filePath=path.join(__dirname,"list.html");
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text-html"});
    res.write(fileContent);
    res.end();
}
function loginIn(req,res){
    var formData="";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        // console.log(formData);
        var formObj=querystring.parse(formData);
        console.log(formObj);
        if(formObj.username=="admin"&&formObj.pwd=="admin"){
            res.setHeader("Set-Cookie","username=admin;pwd=admin;max-age=60");
            // res.end("success");
            showList(res)
        }
        else{
            showLogin(res);
        }
    })
     
}
function showHome(req,res){
    var cookie=req.headers['cookie'];
    if(cookie==undefined){
        showLogin(res);
    }
     else if(cookie.indexOf("username=")>=0){
        showList(res)
    }
    else{
        showLogin(res);
    }
}

