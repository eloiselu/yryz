var choiseAssistant = function () {
    return this;
}

//初始化
choiseAssistant.prototype.init = function () {
    // 初始化事件
    this.initEvent();

    // 从本地获取数据
    this.bindData();
}

//处理枕头标签
choiseAssistant.prototype.setPillowLabel = function () {
    this.pillowLabel = [
        'cheese'
    'gray'
    'brown'
    'pink'
    'blue'
    'lightgray'
    'white'
    ]
}

//从本地获取数据
choiseAssistant.prototype.bindData = function () {
    this.chooseGender = localStorage.getItem("chooseGender");
    this.chooseAge = localStorage.getItem("chooseAge");
    this.chooseTexture = localStorage.getItem("chooseTexture");
    this.chooseComfort = localStorage.getItem("chooseComfort");
    this.chooseHight = localStorage.getItem("chooseHight");
}

// 初始化事件
choiseAssistant.prototype.initEvent = function () {


}


$(function () {
    var choiseAssistantObj = new choiseAssistant();
    choiseAssistantObj.init();
})