/**
 * Created by Mtime on 2018/10/16.
 */

var pillowPage = function () {
    return this;
}

// 初始化
pillowPage.prototype.init = function () {
    // 加载顶部导航模板
    $(".nav-wrap").load("../view/nav.html");

    // 设置购买枕头列表数据
    this.setData();
    // 设置购买枕头列表数据
    this.setDataListHtml();
    // 初始化事件
    this.initEvent();
}

// 设置购买枕头列表数据
pillowPage.prototype.setData = function () {
    this.listData = [
        {
            img: 'pillow-paperwhite.png',
            title: '芝士乳胶条枕／本白色',
            subtitle: 'Cheese Latex',
            desc: '精心选择的“天然芝士乳胶条”（天然乳胶含量达百分之八十）弹性好，有乳胶独特气味，很好的吸湿性和透气性无污染无毒'
        },
        {
            img: 'pillow-gray.png',
            title: 'TPE弹性体枕／浅灰色',
            subtitle: 'TPE Elastome',
            desc: '除螨抑菌触感柔软，环保无味极易清洁具有高强度，高回弹性等特点软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度，提高睡眠质量'
        },
        {
            img: 'pillow-brown.png',
            title: '三角荞麦壳枕／深咖色',
            subtitle: 'TPE Elastome',
            desc: '荞麦壳呈棱形，坚而不硬，凉爽舒适，壳与壳之间自然形成完美透气通道，透气性佳，在地下埋藏百年不变质'
        },
        {
            img: 'pillow-pink.png',
            title: '粉色软管枕／浅粉色',
            subtitle: 'TPE Elastome',
            desc: 'VCollection从日本精心选购的PE+TPE弹性体是一种热塑性弹性体材料软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量'
        },
        {
            img: 'pillow-blue.png',
            title: '粉色软管枕／蓝色',
            subtitle: 'TPE Elastome',
            desc: '从日本精心选购的PE+TPE弹性体是一种热塑性弹性体材料有良好的透气性，除螨抑菌，触感柔软，环保无味极易清洁，特点是能够有效排出枕头内的热量保持枕头内部温度提高睡眠质量'
        },
        {
            img: 'pillow-white.png',
            title: '纤维棉枕／白色',
            subtitle: 'TPE Elastome',
            desc: '云绒纤维棉是由两种不同结构的纤维通过一定比例交织在一起而形成，提供最细腻的睡眠头部支撑感同时拥有有软度又具有支撑力'
        },
        {
            img: 'pillow-deepgray.png',
            title: '竹炭软管枕／深灰色',
            subtitle: 'TPE Elastome',
            desc: '用崖柏做熏香让崖柏的香气环绕在病人周围，可以改善病人心情，提高免疫力竹炭弹性体＋天然的崖柏木颗粒，同时提供柔软和弹性对于是头部压力的两个重要体验要素'
        }
    ]
}

// 设置购买枕头列表数据
pillowPage.prototype.setDataListHtml = function () {
    var htmlArr = [];

    for(var i = 0; i < this.listData.length; i++) {
        htmlArr.push('<li class="fix">');
        // 左侧图片部分
        htmlArr.push('<div class="list-left">');
        htmlArr.push('<img src="../images/' + this.listData[i].img + '">');
        htmlArr.push('<div class="img-bottom"></div>');
        htmlArr.push('</div>');
        // 右侧文本部分
        htmlArr.push('<div class="list-right">');
        htmlArr.push('<p class="list-title">' + this.listData[i].title + '</p>');
        htmlArr.push('<p class="list-subtitle">' + this.listData[i].subtitle + '</p>');
        htmlArr.push('<button class="buy-button">立即购买</button>');
        htmlArr.push('<p class="list-desc">' + this.listData[i].desc + '</p>');
        htmlArr.push('</div>');
        htmlArr.push('</li>');
    }

    $('.main-list > ul').html(htmlArr.join(''));
}

// 初始化事件
pillowPage.prototype.initEvent = function () {

}

$(function () {
    var pillowPageObj = new pillowPage();
    pillowPageObj.init();
})