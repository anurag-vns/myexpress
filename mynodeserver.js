const http= require('http');
const server= http.createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/plain"})
res.end("learnin node js");
})
server.listen(4000,()=>{
    console.log("server started");
})
