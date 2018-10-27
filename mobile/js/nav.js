/**
 * Created by Mtime on 2018/10/16.
 */

/**
 * Created by Mtime on 2018/10/16.
 */

var navPage = function () {
    return this;
}

// 初始化
navPage.prototype.init = function () {
    // 初始化事件
    this.initEvent();
}

// 初始化事件
navPage.prototype.initEvent = function () {
    // 导航点击事件
    $('body').on('click', '#navList li', function () {
        // 导航选中状态
        $(this).addClass('active').siblings().removeClass('active');
        // 显示对应的导航下拉列表
        $('#navPulldown .nav-pulldown-list[data-index="' + $(this).attr('data-index') + '"]').slideDown(100).siblings().slideUp(100);
    })

    // 绑定页面滚动事件
    $(window).scroll(function () {
        // 获取页面移动高度
        var scrollTop = $(window).scrollTop();
        // 获取header高度
        var headerHeight = $('.header').outerHeight();
        // 获取nav的高度
        var navHeight = $('.nav').outerHeight();

        // 判断如果滚动距离大于头部标题的高度，则固定导航的位置
        if (scrollTop > headerHeight) {
            $('.nav').addClass('fixed');
            $('.main').css({
                'marginTop': navHeight
            })
        }
        else {
            $('.nav').removeClass('fixed');
            $('.main').css({
                'marginTop': 0
            })
        }
    })
}

$(function () {
    var navPageObj = new navPage();
    navPageObj.init();
})