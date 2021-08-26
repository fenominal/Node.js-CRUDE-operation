var http=require('http');
var mysql=require('mysql');

var con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:''
    }
);

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="create database node_test1";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("db created");

    });
}
);

var server=http.createServer(function (req,res)
{
    res.write("coneted");
    res.end();

});

server.listen(8080);
console.log("server on port 8080");
