let dbutil = require("./DBUtil");


function queryHots(success){
    let selectSql =  "SELECT * FROM hots;"
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(selectSql,(err,results) => {
        if(err == null){
            success(results)
        }else{
            console.log(err)
        }
    });
    connection.end();
}

module.exports.queryHots = queryHots;