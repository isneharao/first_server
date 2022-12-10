const express = require("express");

const app = express();

app.use(express.json());
const port =8081;

const todosList =["need to learn","need to code","hello my love"];

//http://localhost:8081/todos
app.get('/todos',(req,res)=>{
    res.status(200).send(todosList);
});

app.post("/todos",(req,res) =>{
    const Newtodoitem =req.body.item;

    todosList.push(Newtodoitem);
    res.status(201).send({
        message:"The to do get addeed succesfully",
    });
});

app.delete("/todos",(req,res) =>{
    const itemtodeleted = req.body.item;

    todosList.find((Element,index) =>{
        if(Element === itemtodeleted){
            todosList.splice(index,1);
        }
    });
    res.status(202).send({
        message:`Delete item is ${itemtodeleted}`,
    });
});

app.all("/todos", (req,res) => {
    res.status(404).send();
});
app.all("*", (req,res) => {
    res.status(501).send();
});
app.listen(port, ()=> {
    console.log(`Nodejs server is on port ${port}`);
});