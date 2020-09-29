let dbutil = require("./DBUtil");

function queryLink(success){
    console.log("2")
    let selectSql =  "SELECT * FROM link;"
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(selectSql,(err,results) => {
        if(err == null){
            console.log(results)
            success(results)
        }else{
            console.log(err)
        }
    });
    connection.end();
}

module.exports.queryLink = queryLink;