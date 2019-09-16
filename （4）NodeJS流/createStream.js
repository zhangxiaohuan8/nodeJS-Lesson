const stream=require("stream");
var MyReadable=new stream.Readable();
MyReadable.push("a-z");
MyReadable.push(null);
MyReadable.pipe(process.stdout);