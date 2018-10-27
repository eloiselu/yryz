/**
 * Created by Mtime on 2018/10/22.
 */

var measureWayPage = function () {
    return this;
}

// 初始化
measureWayPage.prototype.init = function () {
    // 加载顶部导航模板
    // $(".nav-wrap").load("../view/nav.html");
}

$(function () {
    var measureWayPageObj = new measureWayPage();
    measureWayPageObj.init();
})