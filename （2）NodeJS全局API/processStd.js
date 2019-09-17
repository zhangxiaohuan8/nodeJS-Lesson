
var my=new Array();
var mycars=["name","email","qq","mobile"];
var i=0;
console.log(mycars[i]+":");
var list = {};
process.stdin.on("data",function(data){
    my[i]=data.toString("utf8");
    i++;
    console.log(mycars[i]);

    if(i==4){
        for (var key in mycars) {
            list[mycars[key]]= my[key];
        }
        console.log(list);
        process.exit();
    }
})

 