const mysql=require("mysql2");
const express=require("express");
var app=express();
const parser=require("body-parser");
app.use(parser.json());
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        password:"hello",
        database:"nodejs"
    }
);
connection.connect((err)=>
{
    if(!err)
    {console.log("DB connected");}
    else
    {console.log("Error");}


});
app.listen(8000,()=>console.log("Server started.."));
app.get('/employee',(req,res)=>
{
    connection.query("select * from employee",(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log("error");
    });
});
app.get('/employee/:id',(req,res)=>
{
    connection.query("select * from employee where empid=?",[req.params.id],(err,rows,fields)=>
    {
        if(!err){res.send(rows);}
        else {console.log("error");}
    });
});
app.get('/add',(req,res)=>
{
    var sql="insert into employee SET ?";
    var data={empid:3,name:"gayathri",phone:1575961250,designation:"HR"};
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw error;
        res.send("Inserted rows....");
    });

});
//empid int, name varchar(20),phone int,designation varchar(15)
app.get('/update/:id/:name',(req,res)=>
{
    var namel="MilkShake";
    var sql=`update employee set name='${req.params.name}'where empid=${req.params.id}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("updated the table......");
    });

});

app.get('/delete/:id',(req,res)=>
{
    var sql=`delete from employee where empid=${req.params.id}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("deleted from the table...");
    });
});
app.get('/add/:id/:name/:phone/:designation',(req,res)=>
{
    var sql="insert into employee SET ?";
    var data={empid:[req.params.id],name:req.params.name,phone:req.params.phone,designation:req.params.designation};
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw err;
        res.send("Inserted new rows....");
    });

});










