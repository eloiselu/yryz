/**
 * Created by lupan on 2019/1/19.
 */
var measureStep5Page = function () {
    return this;
};

//初始化
measureStep5Page.prototype.init = function () {
    //初始化事件
    this.initEvent();
    //初始化数据
    this.initData();
};

//初始化数据
measureStep5Page.prototype.initData = function () {
    // 获取链接中的参数
    var avatarId = window.location.search ? window.location.search.split('?')[1].split('=')[1] : "";

    // 如果链接有用户id，则根据用户id获取数据
    if (avatarId) {
        // 根据用户id获取数据
        this.getDataByAvatarid(avatarId);
    }
    else {

    }

    // 假数据
    // this.data = {
    //     "data_id": "e34kkdjlsjd65l44",
    //     "ac": "5.23",
    //     "bc": "5.34",
    //     "head_neck": "7.34",
    //     "head_shoulder": "7.55",
    //     "body_url": "http://",
    //     "avatar_url": "http://"
    // }
};

// 根据用户id获取数据
measureStep5Page.prototype.getDataByAvatarid = function (id) {
    var that = this;

    // 获取头像接口
    var data = {};
    data.data_id = id;
    var url = commonJs.apiUrl + "/webpillow/detail.html";
    ajax.load(url, data, function (resultData) {
        console.log("根据用户id获取数据: ", resultData);

        // 设置数据
        that.data = resultData.content;
        // 绑定数据
        that.setData();
    });
};

// 绑定数据
measureStep5Page.prototype.setData = function () {
    console.log("a", this.data.ac);

    // 数据为mm，转换为cm
    var ac = Math.round(this.data.ac * 10) / 100;
    var bc = Math.round(this.data.bc * 10) / 100;
    var head_neck = Math.round(this.data.head_neck * 10) / 100;
    var head_shoulder = Math.round(this.data.head_shoulder * 10) / 100;

    //头部高度
    $('#acNum').html(ac + 'cm');
    // 设置ac的偏差，为了让下边的滑动块更精准一些
    ac = 3.4;
    console.log(ac);
    ac = (ac >= 1 && ac < 3.5) ? (ac + (1/ac)) : ac;
    console.log(ac);
    console.log("------------------");
    ac = (ac > 8) ? 8: ac;
    $('#acBar').css("width", (ac - 2) / 6 * 100 + '%');

    //颈部高度
    $('#bcNum').html(bc + 'cm');
    // 设置bc的偏差，为了让下边的滑动块更精准一些
    bc = (bc >= 9 && bc <= 10) ? bc + 0.5 : bc;
    bc = (bc > 11) ? 11: bc;
    $('#bcBar').css("width", (bc - 3.5) / 8 * 100 + '%');

    //头颈高度差
    $('#headNeckNum').html(head_neck + 'cm');
    // $('#headNeckBar').css("width", head_neck / 20 * 100 + '%');
    $('#headNeckBar').css("width", 6 / 20 * 100 + '%');

    //头肩距离
    $('#headShoulderNum').html(head_shoulder + 'cm');
    $('#headShoulderBar').css("width", head_shoulder / 35 * 100 + '%');
};

//初始化事件
measureStep5Page.prototype.initEvent = function () {

};

$(function () {
    var measureStep5PageObj = new measureStep5Page();
    measureStep5PageObj.init();
});