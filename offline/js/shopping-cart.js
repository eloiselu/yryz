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
        'cheese': {
            'leftImg': 'assistant-img-white.png',
            'title': '芝士乳胶条枕/本白色',
            'subtitle': 'Cheese Latex',
            'feature': '颜色Color：本白 Creamy White 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High',
        },
        'gray': {
            'leftImg': 'assistant-img-gray.png',
            'title': 'TPE弹性体枕／深灰色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：深灰色 Dark Gray; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高High',
        },
        'brown': {
            'leftImg': 'assistant-img-brown.png',
            'title': '三角荞麦壳枕／深咖色',
            'subtitle': 'Cheese Latex',
            'feature': '颜色Color：深咖色 Dark Brown; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High',
        },
        'pink': {
            'leftImg': 'assistant-img-pink.png',
            'title': '粉色软管枕／浅粉色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：浅粉色 pink; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High'
        },
        'blue': {
            'leftImg': 'assistant-img-pink.png',
            'title': '蓝色软管枕／宝蓝色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：宝蓝色 blue; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High'
        },
        'lightgray': {
            'leftImg': 'assistant-img-lightgray.png',
            'title': 'TPE弹体枕／浅灰色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：浅灰色 White; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High'
        },
        'white': {
            'leftImg': 'assistant-img-white.png',
            'title': '纤维棉枕／白色 ',
            'subtitle': 'TPE Elastome',
            'feature': '颜色Color：白色 White; 硬度Hardness：中低 Lower-mid 弹性Elasticity：高 High'
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

    htmlArr.push('<ul class="cart-cont fix">');
    htmlArr.push('<li class="cart fix">');
    <!--左边介绍部分-->
    htmlArr.push('<div class="cart-left">');
    <!--左边图片-->
    htmlArr.push('<span class="left-img">');
    htmlArr.push('<img class="cart-img" src="../images/' + data.leftImg + '" alt="">');

    htmlArr.push('<div class="img-bottom"></div>');
    htmlArr.push('</span>');
    <!--右边文字-->
    htmlArr.push('<span class="right-text">');
    htmlArr.push('<p class="text-title">' + data.title + '</p>');
    htmlArr.push('<p class="text-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<p class="text-money">&yen;499</p>');
    htmlArr.push('<p class="text-intro">' + data.feature + '</p>');
    htmlArr.push('</span>');
    htmlArr.push('</div>');
    <!--增加数量-->
    htmlArr.push('<div class="cart-right">');
    htmlArr.push('<button type="button" class="but button-minus button-down">-</button>');
    htmlArr.push('<input type="text" class="button-count" value="1" readonly="readonly">');
    htmlArr.push('<button type="button" class="button-minus button-up">+</button>');
    htmlArr.push('</div>');
    htmlArr.push('</li>');

    htmlArr.push('</ul>');

    $('.main').html(htmlArr.join(''));
}


//初始化事件
shoppingCartPage.prototype.initEvent = function () {
// 减少按钮的点击事件
    $(".button-down").on("click", function () {
        // 获取购物数量
        var numText = Number($(".button-count").val());

        // 如果购物车数量为1
        if (numText > 1) {
            // 数量-1
            $(".button-count").val(numText - 1);
        }

        if (Number($(".button-count").val()) == 1) {
            // 添加禁用属性
            $(this).addClass("forbidden");
        }
    });

    // 添加按钮的点击事件
    $(".button-up").on("click", function () {
        // 获取购物数量
        var numText = Number($(".button-count").val());
        // 去掉减少按钮的禁用属性
        $(".button-down").removeClass("forbidden");
        // 数量+1
        $(".button-count").val(numText + 1);
    });

}

$(function () {
    var shoppingCartPageObj = new shoppingCartPage();
    shoppingCartPageObj.init();
})


