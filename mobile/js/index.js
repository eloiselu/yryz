/**
 * Created by Mtime on 2018/10/16.
 */

var indexPage = function () {
    return this;
}

// 初始化
indexPage.prototype.init = function () {
    // 初始化轮播图
    this.initSwiper();
    // 初始化事件
    this.initEvent();
}

// 初始化轮播图
indexPage.prototype.initSwiper = function () {
    this.mySwiper = new Swiper ('.swiper-container', {
        // 循环模式选项
        loop: true,
        speed: 300,
        autoplay : {
            delay: 2000,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        }
    })
}

// 初始化事件
indexPage.prototype.initEvent = function () {

}

$(function () {
    var indexPageObj = new indexPage();
    indexPageObj.init();
})