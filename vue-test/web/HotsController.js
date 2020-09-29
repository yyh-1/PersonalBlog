let timeUtil = require("../util/TimeUtil");
let respUtil = require("../util/RespUtil");
let HotsDao = require("../dao/HotsDao");
let url = require("url");
let path = new Map();

function queryHots(request,response){
    HotsDao.queryHots((result) => {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    })
}

path.set("/queryHots",queryHots);

module.exports.path = path;