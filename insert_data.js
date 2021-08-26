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
    var sql="INSERT INTO `product1` ( `Name`, `Brand`, `Quantity`, `Price`) VALUES ('Soap', 'Dettol', '3', '20')";
   // var sql="INSERT INTO `product1` ( `Name`, `Brand`, `Quantity`, `Price`) VALUES ('Shampoo', 'Loreal', '5', '100')";
   // var sql="INSERT INTO `product1` ( `Name`, `Brand`, `Quantity`, `Price`) VALUES ('Toothpaste', 'Colgate', '2', '50')";
   // var sql="INSERT INTO `product1` ( `Name`, `Brand`, `Quantity`, `Price`) VALUES ('Sanitizer', 'LifeBuoy', '2', '60')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(" value insert ");

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
