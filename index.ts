import { get } from "http";
import { BiliHot } from "./GetHot";

let getLimits = 1;

getLimits = Number.parseInt(process.argv[2])

if(Number.isNaN(getLimits)){
    throw Error("在运行参数中输入获取大小")
}

BiliHot(getLimits).then(e=>{
    e.forEach((each,index)=>{
        console.log(index+1,each.keyword)
    })
    console.log("总共",e.length,"个项目")
})
