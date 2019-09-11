var Dogdog =require("./dog.js");
 
var dog = new Dogdog.Dog("taidi","4");
var dog1 = new Dogdog.Dog("zanggao","8");
dog.on("bark",function(){
    console.log(this.name+" barked! energy:"+this.energy--);
    if(this.energy==-1){
        process.exit();
    }
})
dog1.on("bark",function(){
    console.log(this.name+" barked! energy:"+this.energy--);
    if(this.energy==-1){
        process.exit();
    }
})
