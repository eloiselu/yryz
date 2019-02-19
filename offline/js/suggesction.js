var suggesction = function () {
    return this;
}

//初始化
suggesction.prototype.init = function () {
//    初始化事件
    this.initEvent();

    //从本地获取数据
    this.bindData()
}

//从本地获取数据
suggesction.prototype.bindData = function () {
    var texture = localStorage.getItem("texture");
    var comfort = localStorage.getItem("comfort");
    var hight = localStorage.getItem("hight");

    if (texture) {
        $("#texture .sugges-link[data-type='" + texture + "']").addClass("active");
    }
    if (comfort) {
        $("#comfort .sugges-link[data-type='" + comfort + "']").addClass("active");
    }
    if (hight) {
        $("#hight .sugges-link[data-type='" + hight + "']").addClass("active");
    }
}

// 初始化事件
suggesction.prototype.initEvent = function () {
    //点击年龄添加选中、兄弟之间不选
    $(".sugges-link").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");

        //    接收值
        var texture = $("#texture .sugges-link[class*='active']").attr("data-type");
        var comfort = $("#comfort .sugges-link[class*='active']").attr("data-type");
        var hight = $("#hight .sugges-link[class*='active']").attr("data-type");

        localStorage.setItem("texture", texture);
        localStorage.setItem("comfort", comfort);
        localStorage.setItem("hight", hight);
    });
}


$(function () {
    var suggesctionObj = new suggesction();
    suggesctionObj.init();
})