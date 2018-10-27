/**
 * Created by Mtime on 2018/10/22.
 */

var measureStorePage = function () {
    return this;
}

// 初始化
measureStorePage.prototype.init = function () {
    // 加载顶部导航模板
    // $(".nav-wrap").load("../view/nav.html");
}

$(function () {
    var measureStorePageObj = new measureStorePage();
    measureStorePageObj.init();
})