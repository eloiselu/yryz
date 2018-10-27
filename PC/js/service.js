/**
 * Created by Mtime on 2018/10/18.
 */

var servicePage = function () {
    return this;
}

// 初始化
servicePage.prototype.init = function () {
    // 加载顶部导航模板
    // $(".nav-wrap").load("../view/nav.html");
}

$(function () {
    var servicePageObj = new servicePage();
    servicePageObj.init();
})