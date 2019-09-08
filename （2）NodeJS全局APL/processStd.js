var mycars=new Array();
var my=new Array();
mycars[0]="name:";
mycars[1]="email:";
mycars[2]="qq:";
mycars[3]="mobile:";
var i=0;
console.log(mycars[i]);
var list = {};
process.stdin.on("data",function(data){
    my[i]=data.toString();
    i++;
    console.log(mycars[i]);
    if(i==4){
        for (var key in mycars) {
            list[mycars[key]]= my[key];
        }
        console.log(list);
    }
})

 