function loop(){
    console.log('I will loop forever!');
}
setInterval(loop,500);
setTimeout(function(){
    console.log("Game over");
    process.kill(process.pid);
},5000)
 