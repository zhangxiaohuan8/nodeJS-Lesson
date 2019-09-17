
// function circleFun(r){
//     this.r=r;
//     return a;
// }
// circleFun.prototype.circumference=function(){
//     return 2*3.14*this.r;
// }
// circleFun.prototype.area=function(){
//     return 3.14*this.r*this.r;
// }
// var circle=new circleFun(2);
// var a={circumference:circle.circumference(),area:circle.area()}
// console.log(circle.circumference());
// console.log(circle.area());
// module.exports={
//     circumference:circle.circumference,
//     area:circle.area
// }
function circleFun(r){
    function Circumference(){
        var cum = r*2*Math.PI;
        return cum;
    }
    function area(){
        var area = Math.PI*r*r;
        return area;
    }
    return{circumference:Circumference,area:area}    
}
module.exports={
    circleFun:circleFun
}

 