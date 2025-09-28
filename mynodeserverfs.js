const http= require('http');
const fs= require('fs');
const server= http.createServer((req,res)=>{
    const result = fs.readFileSync('./index.html',"utf-8")
    res.writeHead(200,{"content-type":"text/html"})
    res.end(result)
})
server.listen(5000,()=>{
    console.log("server is started now");
})