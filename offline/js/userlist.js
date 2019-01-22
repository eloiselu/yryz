var userlist = function () {
    return this;
};

// 初始化
userlist.prototype.init = function () {
    // 获取用户列表数据
    this.getUserData();
    // 初始化事件
    this.initEvent();
};

// 获取用户列表数据
userlist.prototype.getUserData = function () {
    var data = {};
    data.device_sn = "test_lp";
    data.page = "1";
    data.pageSize = "100";
    var url = "https://store.1001pillows.com/webpillow/list.html";
    ajax.load(url, data, function (result) {
        console.log(result);
    });
};

// 初始化事件
userlist.prototype.initEvent = function () {

};

$(function () {
    var userlistObj = new userlist();
    userlistObj.init();
});