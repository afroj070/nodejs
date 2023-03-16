const fs = require("fs");

// const http=require("http");
// const servar = http.createServer(function(req,res){ 

// fs.readFile(__dirname+"/hello.txt","utf8",(error,data)=>{
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.write(data);
//     res.end();
// });
//}).listen(3000,()=>console.log("servarrunning on port 3000")); 

try{
    fs.readFileSync(__dirname+"/hello.txt","utf8");

}catch(e){
    console.log(e)
}
console.log("file ended successfully");