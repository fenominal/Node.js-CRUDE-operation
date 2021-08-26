ar mysql=require("mysql");
var http=require('http');
var con=mysql.createConnection(
{
 host:'localhost',
 user:'root',
 password:"",
 database:"node_test"
});
function f1(req,res)
{
 var sql="select * from product1";
 con.query(sql,function(err,result)
 {
 res.write('<html><body');
 var l=result.length;
 for(var i=0;i<l; i++)
 {
 res.write(result[i].Name+" "+result[i].Brand+" "+result[i].Quantity+" 
"+result[i].price);
 res.write("<br>");
 }
 res.write('</body></html>');
 res.end();
 })
}
http.createServer(f1).listen(8080);
console.log("Server is running on port 8080");
