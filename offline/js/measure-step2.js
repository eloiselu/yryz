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
        video: {
            width: {ideal: 1280},
            height: {ideal: 720}
        }
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
    navigator.mediaDevices.getUserMedia(this.constraints)
        .then(function (mediaStream) {
            console.log('getUserMedia:', mediaStream);

            that.video = document.querySelector('#video');
            that.video.srcObject = mediaStream;

            that.video.onloadedmetadata = function (e) {
                console.log(e);
                that.video.play();

                // 获取视频的宽度
                console.log(that.video.clientWidth);
                console.log(that.video.clientHeight);
                // 获取屏幕的宽度
                console.log(document.body.clientWidth);

                // 设置video的位置偏移
                $(that.video).css({left: -((that.video.clientWidth -document.body.clientWidth) / 2)});
                // $(that.video).offsetLeft((that.video.clientWidth -document.body.clientWidth) / 2);
            };
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
};

//初始化事件
measureStep2.prototype.initEvent = function () {
    var that = this;

    $('#take').on('click', function () {
        // 使用canvas进行拍照
        var canvas = document.getElementById('canvas');

        // 获取video的宽高
        // canvas.getContext('2d').drawImage(video, 0, 0, that.video.clientWidth, that.video.clientHeight);
        // $('#picture').css('src', canvas.toDataURL("image/png"))


        //绘制canvas图形
        // canvas.getContext('2d').drawImage(video, 0, 0, that.video.clientWidth, that.video.clientHeight);
        canvas.getContext('2d').drawImage(video, -432, -191, that.video.clientWidth, that.video.clientHeight);

        //把canvas图像转为img图片
        document.getElementById('picture').src = canvas.toDataURL("image/png");
    })
};

$(function () {
    var measureStep2Obj = new measureStep2();
    measureStep2Obj.init();
});