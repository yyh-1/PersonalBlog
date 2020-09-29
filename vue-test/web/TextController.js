let timeUtil = require("../util/TimeUtil");
let respUtil = require("../util/RespUtil");
let TextDao = require("../dao/TextDao");
let url = require("url");
let path = new Map();


// function editText(request,response){
//     let params = url.parse(request.url,true).query;
//     let tags = params.tags.replace(/ /g,"").replace("，",",");
//     request.on("data",function(data){
//         // console.log(data.toString().trim());
//         // console.log(params.title);
//         // console.log(tags);
//         TextDao.insertText(params.title,data.toString(),tags,0,timeUtil.getNow(),timeUtil.getNow(),timeUtil.getNow(),function(result){
//             response.writeHead(200);
//             response.write(respUtil.writeResult("success","添加成功",null));
//             response.end();
//             // let blogId = result.insertId;
//             // let tagList = tags.split(",");
//             // for(let i=0;i<tagList.length;i++){
//             //     if(tagList[i] == ""){
//             //         continue;
//             //     }
//             //     queryTag(tagList[i],blogId);
//             // }
//         })
//     });
// }


// path.set("/editText",editText);

function queryText(request,response){
    TextDao.queryText((result) => {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    })
}

path.set("/queryText",queryText);

// function queryTag(tag,blogId){
//     tagsDao.queryTag(tag,function(result){
//         if(result == null || result.length == 0){
//             tagsDao.insertTag(tag,blogId);
//         }else{
//             tagBlogMapping.insertTagBlogMapping(result[0].id,blogId);
//         }
//     });
// }

// function insertTag(tag,blogId){
//     tagsDao.insertTag(tag,timeUtil.getNow(),timeUtil.getNow(),function(result){
//         insertTagBlogMapping(result,insertId,blogId);
//     });
// }

// function insertTagBlogMapping(tagId,blogId){
//     tagBlogMapping.insertTagBlogMapping(tagId,blogId,timeUtil.getNow(),timeUtil.getNow(),(result) => {

//     })
// }


module.exports.path = path;