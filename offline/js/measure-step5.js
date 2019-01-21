/**
 * Created by lupan on 2019/1/19.
 */
var measureStep5Page = function () {
    return this;
}

//初始化
measureStep5Page.prototype.init = function () {
    //初始化事件
    this.initEvent();

    this.initData();

    this.setData();
};

//初始化数据
measureStep5Page.prototype.initData = function () {
    this.data = {
        "data_id": "e34kkdjlsjd65l44",
        "ac": "5.23",
        "bc": "5.34",
        "head_neck": "7.34",
        "head_shoulder": "7.55",
        "body_url": "http://",
        "avatar_url": "http://"
    }
}

//绑定数据
measureStep5Page.prototype.setData = function () {

    //头部高度
    $('#acNum').html(this.data.ac + 'cm');
    $('#acBar').css("width", this.data.ac / 8 * 100 + '%');
    //颈部高度
    $('#bcNum').html(this.data.bc + 'cm');
    $('#bcBar').css("width", this.data.bc / 11 * 100 + '%');
    //头颈高度差
    $('#headNeckNum').html(this.data.head_neck + 'cm');
    $('#headNeckBar').css("width", this.data.head_neck / 20 * 100 + '%');
    //头肩距离
    $('#headShoulderNum').html(this.data.head_shoulder + 'cm');
    $('#headShoulderBar').css("width", this.data.head_shoulder / 35 * 100 + '%');

}

//初始化事件
measureStep5Page.prototype.initEvent = function () {

};

$(function () {
    var measureStep5PageObj = new measureStep5Page();
    measureStep5PageObj.init();

    console.log(measureStep5PageObj);
});