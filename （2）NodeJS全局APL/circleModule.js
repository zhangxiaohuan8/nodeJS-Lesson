function circleFun(r){
    this.circumference=function(){
        return 2*3.14*r;
    }
    this.area=function(){
        return 3.14*r*r;
    }
    return{
        circumference:this.circumference,
        area:this.area
    }
}
module.exports={
    circumference:circumference,
    area:area
}