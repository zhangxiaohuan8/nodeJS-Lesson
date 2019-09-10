var userName=process.argv[2];
var password=process.argv[3];
if(userName!=undefined&&password!=undefined){
    var a="用户名:"+userName+"密码:"+password;
    console.log(a);
    var b=userName+":"+password;
    var buf=Buffer.from(b,"utf-8");
    var base64Str=buf.toString("base64");
    console.log("base64加密"+":"+base64Str);
}
else{
    console.log("用户密码不能为空");
}