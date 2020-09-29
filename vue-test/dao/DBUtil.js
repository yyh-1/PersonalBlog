let mysql = require("mysql");

function createConnection(){
    let connection = mysql.createConnection({
        host:"127.0.0.1",
        port:"3306",
        user:"root",
        password:"123123",
        database:"my_blog"
    });
    return connection;
}


module.exports.createConnection = createConnection;
// 错误原因
// mysql库相关api的文档以及函数声明的查看
// ajax的使用， 以及怎么用vue来实现这部分代码
// 调试
// postman 怎么触发nodejs中http的某个特定的handler /index.html /api/getproduct 