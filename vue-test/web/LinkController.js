let timeUtil = require("../util/TimeUtil");
let respUtil = require("../util/RespUtil");
let LinkDao = require("../dao/LinkDao");

let path = new Map();


function queryLink(request,response){
    console.log("1")
    LinkDao.queryLink((result) => {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    })
}

path.set("/queryLink",queryLink);


module.exports.path = path;