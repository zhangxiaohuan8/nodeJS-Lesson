 const fs=require("fs");
const path=require("path");
console.log("请输入要创建的文件夹：");
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            console.log("文件目录创建成功!!");
            console.log("请输入要创建的文件:");
            break;
        case "touch":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            console.log("文件创建成功");
            console.log("请输入要删除的文件：");
            break;
        case "delete":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
        break;
    default:
        console.log("somethingv erro");
        break;
    }
})