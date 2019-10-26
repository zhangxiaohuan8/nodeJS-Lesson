const http=require("http");
const cheerio=require("cheerio");
const url=require("url");
const https=require("https");
const fs=require("fs");
http.createServer(function(req,res){
     var urlObj=url.parse(req.url,true);
     var pathName=urlObj.pathname;
     if(pathName=='/'){
         var fileContent=fs.readFileSync("index.html");
         res.writeHead(200,{"Content-Type":"text/html"});
         res.write(fileContent);
         res.end();
     }
     else if(pathName=="/getlist"){
        https.get("https://maoyan.com/films",function(resObj){
            var result=" ";
            resObj.on("data",function(chunk){
                result+=chunk;
            })
            resObj.on("end",function(){
                 console.log(result);
                 var $=cheerio.load(result);
                 var movieList = [];
                 $(".movie-item-title a").each(function(){
                    var movie = {};
                    movie.movieId = $(this).attr('data-val').slice(9, -1);
                    movie.movieName = $(this).text();
                    movie.movieOrange = $(this).parent().next();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        movie.movieOrange = '暂无评分';
                    }
                    else{
                        console.log($(this).parent().next().children());
                        movie.movieOrange = $(this).parent().next().children('integer');
                    }
                    movie.movieOrange == '暂无评分';
                    console.log(movie);
                    movieList.push(movie);
                 })
            })
        })
     }
     
}).listen(8082);
console.log("server is listening 8082");