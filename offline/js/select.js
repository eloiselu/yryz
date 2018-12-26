/**
 * Created by lupan on 2018/12/25.
 */
var selectPage = function () {
    return this;
}

//初始化
selectPage.prototype.init = function () {
    this.setDate();
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
}

//枕头列表数据
selectPage.prototype.setDate = function () {
    this.listDate = {
        'white': {
            'selectImg': 'select-img.png',
        }
    }
}

//数据列表
selectPage.prototype.setDataListHtml = function () {
    var htmlArr = [];

//    获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
//    获取对应的数据
    var data = this.listDate[type];

    var htmlArr = [];
    <!--主题部分-->
    htmlArr.push('<div class="main">');
    htmlArr.push('<img class="select-img" src="../images/' + data.selectImg + '">');
    htmlArr.push('<div class="select-pillow">');
    htmlArr.push('<p>专属定制</p>');
    htmlArr.push('<p>One PILLOW</p>');
    htmlArr.push('</div>');

    htmlArr.push('<div class="select-pillow select-sleep">');
    htmlArr.push('<p>好睡专题</p>');
    htmlArr.push('<p>Good Sleep</p>');
    htmlArr.push('</div>');

    htmlArr.push('<div class="select-pillow select-assistant">');
    htmlArr.push('<p>选枕助手</p>');
    htmlArr.push('<p>Assistant</p>');
    htmlArr.push('</div>');

    htmlArr.push('<div class="select-pillow select-choose">');
    htmlArr.push('<p>购物车</p>');
    htmlArr.push('<p>Choose Assistant</p>');
    htmlArr.push('</div>');

    $('.main').html(htmlArr.join(''));
}

//初始化事件
selectPage.prototype.initEvent = function () {

}

$(function () {
    var selectPageObj = new selectPage();
    selectPageObj.init();
})
