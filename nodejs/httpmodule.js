const http=require("http");
const servar = http.createServer(function(require,res){
    // res.writeHead(200,{"content-tyoe":"text/html"});
res.write("http noode js and predifine funtion");
res.end();
}).listen(3000,()=>console.log("servarrunning on port 3000")); 