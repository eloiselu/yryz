/**
 * Created by lupan on 2018/10/21.
 */

var texturePage = function () {
    return this;
}

// 初始化
texturePage.prototype.init = function () {
    // 加载顶部导航模板
    // $(".nav-wrap").load("../view/nav.html");
}

$(function () {
    var texturePageObj = new texturePage();
    texturePageObj.init();
})