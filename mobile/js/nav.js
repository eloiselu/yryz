/**
 * Created by Mtime on 2018/10/16.
 */

var navPage = function () {
    return this;
}

// 初始化
navPage.prototype.init = function () {
    var that = this;

    // 初始化事件
    this.initEvent();

    // 加载顶部导航模板
    $(".nav-wrap").load("./nav.html", function () {
        that.setNav();
    });
}

// 设置导航选中
navPage.prototype.setNav = function () {
    var link = window.location.href;
    
    // 判断是否包含对应的关键词
    if (link.indexOf('texture.html') > -1 && link.indexOf('jump') < 0) {
        $('.nav-list li[data-index="texture"]').trigger('click');
    }
    else if (link.indexOf('texture') > -1) {
        $('.nav-list li[data-index="texture"]').addClass("active");
    }
    else if (link.indexOf('measure.html') > -1) {
        $('.nav-list li[data-index="measure"]').trigger('click');
    }
    else if (link.indexOf('measure') > -1) {
        $('.nav-list li[data-index="measure"]').addClass("active");
    }
    else if (link.indexOf('service.html') > -1) {
        $('.nav-list li[data-index="service"]').trigger('click');
    }
    else if (link.indexOf('service') > -1) {
        $('.nav-list li[data-index="service"]').addClass("active");
    }
}

// 初始化事件
navPage.prototype.initEvent = function () {
    // 导航点击事件
    $('body').on('click', '#navList li', function (e) {
        // 获取对应的导航下拉框内容元素
        var navPulldown = $('#navPulldown .nav-pulldown-list[data-index="' + $(this).attr('data-index') + '"]');

        // 判断当前导航是否为选中状态
        if ($(this).hasClass('active')) {
            // 判断导航下拉框是否显示
            if (!navPulldown.is(':hidden')) {
                // 设置小三角旋转
                $(this).removeClass("rotate180");
                // 设置隐藏
                navPulldown.slideUp(100);
                return false;
            }
            // else {
            //     // 设置小三角旋转
            //     $(this).addClass("rotate180");
            //     // 设置显示
            //     navPulldown.slideDown(100);
            // }

        }

        // 导航选中状态
        $(this).addClass('active').siblings().removeClass('active');
        // 设置小三角旋转
        $(this).addClass("rotate180");
        // 显示对应的导航下拉列表
        navPulldown.slideDown(100).siblings().slideUp(100);

        // 阻止冒泡
        e.stopPropagation();
    })

    $(window).on("touch", function () {
        // 设置小三角旋转
        $('.nav-list li[class*="active"]').removeClass("rotate180");
        // 设置导航下拉框隐藏
        $('#navPulldown .nav-pulldown-list').slideUp(100);
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