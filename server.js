// server creation
const http = require("http");

const port = 8082;
const todosList =["need to learn","need to code"];

http.createServer((req,res)=>{
    // res.writeHead(200,{ "content-Type" : "text/html"});
    // res.write("<h4>Hello,this is from my new server</h4>");
    // res.end();
    const {method,url} =req;
    if(url === "/todos"){
        // http://localhost:8082/todos
        if(method ==="GET"){
            res.writeHead(200);
            res.write(todosList.toString());
            res.end();
        }
        else if(method === "POST"){
            let body="";
            req.on("error",(err) =>{
                console.log(err);
            }).on('data',(chunk)=>{
                body += chunk;
                console.log(chunk);
            }).on('end',() => {
                body=JSON.parse(body);
                // console.log("body data",body);
                let newtodo=todosList;
                newtodo.push(body.item);
                console.log(newtodo);
                res.writeHead(204);
            });
        }
        else if(method === "DELETE"){
            let body ="";
            req.on("error", (err) => {
                console.log(err);
            })
            .on("data",(chunk) => {
                body +=chunk;
            })
            .on("end",() => {
                body=JSON.parse(body);
                let deleteItem =body.item;
                for(let i=0;i < todosList.length();i++){
                    if(deleteItem == todosList[i]){
                        todosList.splice(i,1);
                        break;
                    }
                }
                res.writeHead(204);
            });
        }
        else{
            res.writeHead(501);
        }
    }
    else{
        res.writeHead(404);
    }
    res.end();
})
.listen(port,() => {
    console.log(`My NodeJS server started on port ${port}`);
});

// http://localhost:8082
// http://localhost:8082/
// http://localhost:8082/home
// http://localhost:8082/AboutUs
// http://localhost:8082/ContactUs