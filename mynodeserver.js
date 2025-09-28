const http= require('http');
const server= http.createServer((req,res)=>{
    const obj={
        name:"Anurag",
        surname:"shukla"
    }
res.writeHead(200,{"content-type":"application/json"})
res.end(JSON.stringify(obj));
})
server.listen(4000,()=>{
    console.log("server started");
})
