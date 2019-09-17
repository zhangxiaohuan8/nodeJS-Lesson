function Bomb(){
    this.message="bomb!!!";
}
Bomb.prototype.explode =function(){
    console.log(this.message);
}
var boo=new Bomb();
setTimeout( boo.explode.bind(boo),2000);