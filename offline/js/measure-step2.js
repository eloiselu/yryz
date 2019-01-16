/**
 * Created by lupan on 2019/1/15.
 */
var measureStep2 = function () {
    return this;
}

//初始化
measureStep2.prototype.init = function () {
    // 视频大小
    this.constraints = {
        audio: false,
        video: true
        // video: {
        //     width: {ideal: 1280},
        //     height: {ideal: 1280}
        // }
    };
    // 视频元素
    this.video;


    // 初始化摄像头
    this.initMediaDevices();
    //初始化事件
    this.initEvent();
};

// 初始化摄像头
measureStep2.prototype.initMediaDevices = function () {
    var that = this;

    // 开启视频
    navigator.mediaDevices.getUserMedia(this.constraints).then(function (mediaStream) {
        console.log('getUserMedia:', mediaStream);

        that.video = document.querySelector('#video');
        that.video.srcObject = mediaStream;
        that.video.onloadedmetadata = function (e) {
            that.video.play();
        };

    }).catch(function (err) {
        console.log(err.name + ": " + err.message);
    });
};

//初始化事件
measureStep2.prototype.initEvent = function () {
    $('#take').on('click', function () {
        // 使用canvas进行拍照
        var canvas = document.getElementById('canvas')
        canvas.getContext('2d').drawImage(video, 0, 0, 2494, 3776);
        $('#picture').css('src', canvas.toDataURL("image/png"))
    })
};

$(function () {
    var measureStep2Obj = new measureStep2();
    measureStep2Obj.init();
});