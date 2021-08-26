var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var mysql = require('mysql');
var bodyparser = require('body-parser');
var con=mysql.createConnection({
 host: "localhost",
 user: "root",
 password:"",
 database:"node_test"
 });
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//app.set('home','html');
con.connect(function(err){
 if(err) throw err;
});
app.get('/my',function(req,res){
 con.query("UPDATE product1 SET Price=150 WHERE Name='Shampoo'",function(err,result){
 if(err) throw err;
 res.json(result);
 console.log("Result display successfull....");
 });
});
server.listen(8080)
