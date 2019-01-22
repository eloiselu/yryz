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
    data.areaId = $("#areaPermit").val();
    data.dateId = $("#dateId").val();
    data.queryFrom = "business"
    data.pageChoose = $("#pageChoose").val();
    var url = "/dashboard/getCinemaByArea";
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