var sql=require("mysql2");
var express=require("express");
var cors=require("cors");
var parser=require("body-parser");
const res = require("express/lib/response");
var app=express();
app.use(parser.json());
app.use(cors({origin:"*"}));

var connection=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"hello",
    database:"cucs"
});
connection.connect((err)=>{
    if(!err)console.log("Connected to DB");
    else console.log("failed to connect to db");
    })
app.listen(8000,()=>{console.log("Server is live....")});

app.get("/start",(req,res)=>
{
    connection.query("select * from BLOSSOMS",(err,rec,fields)=>{
        if(!err) {res.send(rec);console.log("Success in fetching from table")}
        else console.log("fail to fetch from  table");

    });
});

app.get('/add/:reg_no/:name/:class/:event/:team',(req,res)=>
{
    var sql="insert into BLOSSOMS SET ?";
    var data={S_RegNo:[req.params.reg_no],S_Name:[req.params.name],S_Class:[req.params.class],S_Events:[req.params.event],S_Team:[req.params.team]};
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw err;
        res.send("Inserted new rows....");
    });

});
app.get('/delete/:id',(req,res)=>
{
    
    var sql=`delete from BLOSSOMS where S_RegNo=${req.params.id}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("deleted from the table...");
    });
});
app.get('/update/:id/:from/:to',(req,res)=>
{
    var sql=`update BLOSSOMS set S_Events='${req.params.to}'where S_Events='${req.params.from}'`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("<h3>updated the table......</h3>");
    });

});

app.get('/search1/:event',(req,res)=>
{
    connection.query("select * from BLOSSOMS where S_Events=?",[req.params.event],(err,rows,fields)=>
    {
        if(!err){res.send(rows);}
        else {console.log("error");}
    });
});
app.get('/search2/:team',(req,res)=>
{
    connection.query("select * from BLOSSOMS where S_Team=?",[req.params.team],(err,rows,fields)=>
    {
        if(!err){res.send(rows);}
        else {console.log("error");}
    });
});

