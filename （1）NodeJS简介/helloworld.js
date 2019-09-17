const http =require("http");

var server = http.createServer(function(req,res){
    /**
     * http 协议，协议的结构 协议胡请求响应过程
     * 状态码
     */
	//res.write("hello world");
    //res.end();
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("<h1>hello world<h1>");
    //响应结束
    res.end();
});

server.listen(8081);
console.log("server is listening 8081");
/*
1、shift + 鼠标右键 点击打开power shell 窗口
2、编译node.js文件 node +文件名
3、每次修改js文件后，需要重新执行 node+文件名
4、在node的js文件中必须编译才能执行
5、WebStorm
 */