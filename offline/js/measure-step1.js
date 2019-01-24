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
        //接收男女、长中短发值
        var chooseGender = $(this).attr("data_type");
        var chooseHair = $(this).attr("data_type");

        if ((chooseGender = 1 && 2 ) || (chooseGender = !0)){
            // $(location).attr("href","../view/measure-step2.html")
            // window.location.href="../view/measure-step2.html";
            console.log(chooseType = 1 || 2);
        }else if('chooseType = 1 || 2 || 3'){
            console.log("chooseType = 1 || 2 || 3");
        }
    })
};

$(function () {
    var measureStep1Obj = new measureStep1();
    measureStep1Obj.init();
});