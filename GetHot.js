"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiliHot = exports.searchStr = void 0;
const axios_1 = __importDefault(require("axios"));
const maxLimits = 50;
class aBilihot {
    constructor() {
        this.keyword = "";
        this.showname = "";
        this.icon = "";
        this.uri = "";
        this.goto = "";
    }
}
exports.searchStr = `https://api.bilibili.com/x/web-interface/wbi/search/square`;
function BiliHot(limits) {
    return __awaiter(this, void 0, void 0, function* () {
        let ret = [];
        if (limits > maxLimits || limits < 1) {
            throw Error(`错误的limits,应该小于等于${maxLimits},且大于${0}`);
        }
        yield axios_1.default.get(`${exports.searchStr}?limit=${limits}`)
            .then(e => {
            try {
                ret = e.data.data.trending.list;
            }
            catch (error) {
                throw Error("解析返回参数错误,请检查搜索字符串");
            }
            return ret;
            // console.log(list)
        }).catch(e => {
            throw e;
        });
        return ret;
    });
}
exports.BiliHot = BiliHot;
