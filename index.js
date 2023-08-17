"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetHot_1 = require("./GetHot");
(0, GetHot_1.BiliHot)(50).then(e => {
    e.forEach((each, index) => {
        console.log(index + 1, each.keyword);
    });
    console.log("总共", e.length, "个项目");
});
