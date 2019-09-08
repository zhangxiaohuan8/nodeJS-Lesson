if(process.argv[2]==undefined){
    console.log("命令行参数错误");
}
else if(process.argv[2]=="-h"){
    console.log("传入命令行参数,应该是一个算术运算符");
}
else{
    var result=eval(process.argv[2]);
    console.log(process.argv[2]+"=%s",result);
}

