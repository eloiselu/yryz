/**
 * Created by lupan on 2019/1/2.
 */

var productsIntroductionPage = function () {
    return this;
}

//初始化
productsIntroductionPage.prototype.init = function () {
    //设置购买枕头列表数据
    this.setData();
    //设置购买枕头列表数据
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
}

//枕头列表数据
productsIntroductionPage.prototype.setData = function () {
    this.listData = {
        'child': {
            'bigImg': 'productsIntroduction-img-child.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅灰色3D网TPE弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'blue': {
            'bigImg': 'productsIntroduction-img-blue.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅灰色3D网TPE弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'gray': {
            'bigImg': 'productsIntroduction-img-gray.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅灰色3D网TPE弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'cheese': {
            'bigImg': 'productsIntroduction-img-cheese.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅灰色3D网TPE弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'white': {
            'bigImg': 'productsIntroduction-img-white.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅灰色3D网TPE弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        }
    }
}

//数据列表
productsIntroductionPage.prototype.setDataListHtml = function () {
    var htmlArr = [];

    //获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[type];

    var htmlArr = [];
    <!--图片介绍-->
    htmlArr.push('<img class="products-img" src="../images/' + data.bigImg + '" alt="">');
    htmlArr.push('<div class="products-imgtext">7天无忧退货<span class="imgtext-hg">-</span>48小时极速退款<span class="imgtext-hg">-</span>满200元免邮费</div>');
    <!--商品描述-->
    htmlArr.push('<div class="products-describe ">');
    htmlArr.push('<p class="products-title">' + data.title + '</p>');
    htmlArr.push('<p class="products-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<p class="products-text">' + data.feature + '</p>');
    htmlArr.push('<p class="products-text">' + data.feature + '热销' + data.hotNum + '万件</p>');
    htmlArr.push('<div class="products-select">');
    htmlArr.push('<a href="javascript:;" class="pro-link">更多选择</a>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');
    <!--请选择规格数量-->
    htmlArr.push('<div class="products-specification fix">');
    htmlArr.push('<span class="specification-num">请选择规格数量</span>');
    htmlArr.push('<a href="javascript:;" class="specification-gt">&gt;</a>');
    htmlArr.push('</div>');
    <!--商品参数-->
    htmlArr.push('<div class="products-parameter fix">');
    htmlArr.push('<p class="parameter-text">商品参数</p>');
    htmlArr.push('<div class="parameter-join">');
    htmlArr.push('<a href="javascript:;" class="par-join">加入购物车</a>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');

    $('.main').html(htmlArr.join(''));
}


//初始化事件
productsIntroductionPage.prototype.initEvent = function () {

}

$(function () {
    var productsIntroductionPageObj = new productsIntroductionPage();
    productsIntroductionPageObj.init();
})