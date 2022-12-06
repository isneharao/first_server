// server creation
const http = require("http");

const port = 8082;

http.createServer((req,res)=>{
    res.writeHead(200,{ "content-Type" : "text/html"});
    res.write("<h4>Hello,this is from my new server</h4>");
    res.end();
})
.listen(port,() => {
    console.log(`My NodeJS server started on port ${port}`);
});

// https://localhost:8082