var http=require('http');
var mysql=require('mysql');

var con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'node_test1'
    }
);

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="create table product1 ( `id` INT(20) NOT NULL AUTO_INCREMENT , `Name` VARCHAR(30) NOT NULL , `Brand` VARCHAR(30) NOT NULL , `Quantity` INT(20) NOT NULL , `Price` INT(20) NOT NULL , PRIMARY KEY (`id`) )";
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
