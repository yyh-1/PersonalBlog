const express = require('express')
const app = express()
const port = 8080
const path = require("path");
let loader = require("./loader")
const bodyParser = require('body-parser');

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据


app.use(express.static("./dist"));

app.get("/queryHots.json",loader.get("/queryHots"));
app.get("/queryLink.json",loader.get("/queryLink"));
app.get("/queryText.json",loader.get("/queryText"));


// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
//   });
  



app.listen(port,() => {
    console.log(`服务器启动端口为${port}`)
})