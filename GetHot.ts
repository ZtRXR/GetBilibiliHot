import axios from "axios";

const maxLimits:number = 50;

interface aBilihot{
    keyword:string 
    showname:string 
    icon:string 
    uri:string 
    goto:string 
}

export const searchStr = `https://api.bilibili.com/x/web-interface/wbi/search/square`

export async function BiliHot(limits:number):Promise<aBilihot[]> {
    let ret:aBilihot[] = []

    if (limits>maxLimits||limits<1) {
        throw Error(`错误的limits,应该小于等于${maxLimits},且大于${0}`)
    }
    await axios.get(`${searchStr}?limit=${limits}`)
        .then(e=>{
            try {
                ret = e.data.data.trending.list as unknown as aBilihot[]
            } catch (error) {
                throw Error("解析返回参数错误,请检查搜索字符串")
            }
            return ret
            // console.log(list)
        }).catch(e=>{
            throw e
        })
    return ret
}