var suggesction = function () {
    return this;
}

//初始化
suggesction.prototype.init = function () {
//    初始化事件
    this.initEvent();
}

// 初始化事件
suggesction.prototype.initEvent = function () {
    //点击年龄添加选中、兄弟之间不选
    $(".sugges-link").on('click',function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

}


$(function () {
    var suggesctionObj = new suggesction();
    suggesctionObj.init();
})