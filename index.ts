import { BiliHot } from "./GetHot";



BiliHot(50).then(e=>{
    e.forEach((each,index)=>{
        console.log(index+1,each.keyword)
    })
    console.log("总共",e.length,"个项目")
})
