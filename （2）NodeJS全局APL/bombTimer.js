function Bomb(){
    this.message="bomb!!!";
    this.explode=function(){
        console.log(this.message);
    }
}
var boo=new Bomb();
setTimeout(function(){
    console.log(boo.explode());
},5000)