const mysql = require('mysql');
const dbpassword = process.env['PASSWORD']
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: "elms",
  password: dbpassword,
})
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/form.html");
})

app.post('/insert', function(req, res){
  const sql = "INSERT INTO Users (username, password, email) VALUES (?, ?, ?)";
  conn.query(sql, [req.body.username, req.body.password, req.body.email], function(err, result){
    if (err) throw err;
    res.send("Insert succefull");
  });
});

app.post('/retrieve', function(req, res){
  const sql = 'SELECT * FROM Users WHERE email = ?';
  console.log("Form contents: " + req.body.email);
  conn.query(sql, [req.body.email], function (err, result){
    if (err) throw err;
    if (result.length == 0) {res.send("Email not found");}
    else { console.log(result);
           res.send(result)
  } } )
})
app.listen(8080);