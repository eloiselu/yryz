var choiseAge = function () {
    return this;
}

//初始化
choiseAge.prototype.init = function () {
//    初始化事件
    this.initEvent();
}

// 初始化事件
choiseAge.prototype.initEvent = function () {
    $(".age-choose").on('click',function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    // $('.choice').on('click',function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    // })
}


$(function () {
    var choiseAgeObj = new choiseAge();
    choiseAgeObj.init();
})