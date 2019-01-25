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

    //从本地获取数据
    this.bindData();
};

//从本地获取数据
measureStep1.prototype.bindData = function () {
    var chooseGender = localStorage.getItem("chooseGender");
    var chooseHair = localStorage.getItem("chooseHair");
    if(chooseGender){
        $("#gender .choose[class='active']").addClass("active");
    }
}

//初始化事件
measureStep1.prototype.initEvent = function () {
    $('.choose').on('click', function () {
        //添加选中、兄弟之间不选
        $(this).addClass("active").siblings().removeClass("active");

        //接收男女、长中短发值
        var chooseGender = $("#gender .choose[class*='active']").attr("data-type");
        var chooseHair = $("#hair .choose[class*='active']").attr("data-type");

        if(chooseGender && chooseHair){
            //存到本地存储
            localStorage.setItem("chooseGender",chooseGender);
            localStorage.setItem("chooseHair",chooseHair);
            $(location).attr("href","../view/measure-step2.html");
        }

    })
};

$(function () {
    var measureStep1Obj = new measureStep1();
    measureStep1Obj.init();
});