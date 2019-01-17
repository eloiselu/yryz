/**
 * Created by lupan on 2019/1/16.
 */

var measureStep1 = function () {
    return this;
}

//初始化
measureStep1.prototype.init = function () {
    //初始化事件
    this.initEvent();
};

//初始化事件
measureStep1.prototype.initEvent = function () {
    $('.choose').on('click', function () {
        if($(this).hasClass('active')){
            $(this).siblings().removeClass('active');
        }
        else{
            $(this).addClass("active");
        }

    })
};

$(function () {
    var measureStep1Obj = new measureStep1();
    measureStep1Obj.init();
});