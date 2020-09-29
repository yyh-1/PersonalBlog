let dbutil = require("./DBUtil");

// function insertText(title,content,views,tags,ctime,utime){
//     let insertSql = "insert into blog(`title`,`content`,`views`,`tags`,`ctime`,`utime`) values (?,?,?,?,?,?)"
//     let params = [title,content,views,tags,ctime,utime];
//     // console.log(params)
//     let connection = dbutil.createConnection();
//     connection.connect();
//     connection.query(insertSql,params,(err,results) => {

//     });
//     connection.end();
// }

function queryText(success){
    let querySql =  "SELECT * FROM blog;";
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,(err,results) => {
        if(err == null){
            success(results)
        }else{
            console.log(err)
        }
    });
    connection.end();
}

// module.exports.insertText = insertText;
module.exports.queryText = queryText;