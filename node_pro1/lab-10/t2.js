const http=require('http');
const {load}=require('./t1.js');
const writer = require('./t1.js');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
const port=8080;
app.listen(port,()=>console.log("server is running..."));
app.get('/user',(req,res)=>
{
    res.send(load());
    
});



//github code
//
//
//
//const express = require("express");
// const path = require("path");

// //const app = express();
// //const port = process.env.PORT || 8080;

// // Setting path for public directory
// const static_path = path.join(__dirname, "public");
// app.use(express.static(static_path));
// app.use(express.urlencoded({ extended: true }));

// // Handling request
// app.post("/request", (req, res) => {
// var newdata=res.json([{
//     id: req.body.id,
// 	name: req.body.name,
//     age: req.body.age,
// 	course: req.body.course
// }]);
// });
// console.log(newdata);

// // Server Setup
// app.listen(port, () => {
// console.log(`server is running at ${port}`);
// });
//end of github code

app.get('/add/:id/:name/:phone/:designation',(req,res)=>
{
    var newdata={
        "id":req.params.id,"name":req.params.name,"age":req.params.age,"course":req.params.course}
        writer.filewriter(newdata,(err,result)=>
    {
        if(err) throw err;
        res.send("Inserted new rows....");
    });

});




//writer.filewriter(newdata);