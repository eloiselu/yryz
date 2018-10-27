/**
 * Created by Mtime on 2018/10/16.
 */

var navPage = function () {
    return this;
}

// 初始化
navPage.prototype.init = function () {
    // 加载顶部导航模板
    $(".nav-wrap").load("./nav.html");
    // 初始化事件
    this.initEvent();
}

// 初始化事件
navPage.prototype.initEvent = function () {
    var that = this;

    $('body').on('click', 'a.scroll', function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var isFinish = true;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length || isFinish) {
                isFinish = true;
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    isFinish = true;
                });
                return false;
            }
        }
    });

    // 导航鼠标移入与移除事件
    $('body').on('mouseenter mouseleave', '.nav-list', function (e) {


        // 判断导航类型
        if (e.type === 'mouseenter') {

            // 判断导航动画状态
            if (that.isNavAnimal === true) {
                return;
            }

            // 标记导航动画状态为true
            that.isNavAnimal = true;

            // 导航选中状态
            $(this).addClass('active');
            // 显示对应的导航下拉列表
            $(this).find('.nav-pulldown').slideDown(100, function () {
                // 标记导航动画状态为结束
                that.isNavAnimal = false;
            });
        }
        else if (e.type === 'mouseleave') {
            $(this).removeClass('active');
            $(this).find('.nav-pulldown').slideUp(100, function () {
                // 标记导航动画状态为结束
                that.isNavAnimal = false;
            });
        }
    });

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