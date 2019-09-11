const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy=energy;
    var that = this;
    setInterval(function(){
        that.emit("bark");
    },3000)
}
Dog.prototype.__proto__ = EventEmitter.prototype;
module.exports={
    Dog: Dog
}
