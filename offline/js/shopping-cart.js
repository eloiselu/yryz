
/**
 * Created by lupan on 2018/12/18.
 */
var shoppingCartPage = function () {
    return this;
}

//初始化
shoppingCartPage.prototype.init = function () {
    //设置购买枕头列表数据
    this.setData();
    //设置购买枕头列表数据
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
}

//枕头列表数据
shoppingCartPage.prototype.setData = function () {
    this.listData = {
        'white': {
            'leftImg': 'cart-img-cheese.png',
            'title': '芝士乳胶条枕/本白色',
            'subtitle': 'Cheese Latex',
            'feature': '颜色Color：本白 Creamy White 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High',
        },
        'gray': {
            'leftImg': 'cart-img-gray.png',
            'title': 'TPE弹性体枕／浅灰色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：浅灰 French grey; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高High',
        },
        'chocolate': {
            'leftImg': 'cart-img-chocolate.png',
            'title': '三角荞麦壳枕／深咖色',
            'subtitle': 'Cheese Latex',
            'feature': '颜色Color：浅灰 chocolate; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High',
        },
        'pink': {
            'leftImg': 'cart-img-pink.png',
            'title': '粉色软管枕／浅粉色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：浅粉色 pink; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High',
        }
    }
}

//数据列表
shoppingCartPage.prototype.setDataListHtml = function () {
    var htmlArr = [];

    //获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[type];

    var htmlArr = [];

    htmlArr.push('<div class="cart fix">');
    <!--左边介绍部分-->
    htmlArr.push('<div class="cart-left fix">');
    <!--左边图片-->
    htmlArr.push('<span class="left-img">');
    htmlArr.push('<img class="cart-img" src="../images/' + data.leftImg + '" alt="">');
    htmlArr.push('</span>');
    <!--右边文字-->
    htmlArr.push('<span class="right-text">');
    htmlArr.push('<p class="text-title">' + data.title + '</p>');
    htmlArr.push('<p class="text-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<p class="text-money">&yen;499</p>');
    htmlArr.push('<p class="text-intro">' + data.feature + '</p>');
    htmlArr.push('</span>');
    htmlArr.push('</div>');

    htmlArr.push('<ul class="cart-right">');
    htmlArr.push('<li><button type="button" class="button-minus button-down">-</button></li>');
    htmlArr.push('<li><input type="text" class="button-count" value="i" readonly="readonly"></li>');
    htmlArr.push('<li><button type="button" class="button-minus button-up">+</button></li>');
    htmlArr.push('</ul>');
    htmlArr.push('</div>');

    $('.main').html(htmlArr.join(''));
}


//初始化事件
shoppingCartPage.prototype.initEvent = function () {

}

$(function () {
    var shoppingCartPageObj = new shoppingCartPage();
    shoppingCartPageObj.init();
})


