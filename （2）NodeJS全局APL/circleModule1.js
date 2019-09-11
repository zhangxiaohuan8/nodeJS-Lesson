 

function Circumference(r){
    var cum = r*2*Math.PI;
    return cum;
}
function area(r){
    var area = Math.PI*r*r;
    return area;
}
var arr={Circumference:Circumference,area:area};
module.exports=arr