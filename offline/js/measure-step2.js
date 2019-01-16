/**
 * Created by lupan on 2019/1/15.
 */
// 视频大小
var constraints = {audio: true, video: {width: 24,height: 37}};
// 开启视频
navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
    console.log('getUserMedia:', mediaStream)
    var video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
        video.play();
    };

    // 使用canvas进行拍照
    var canvas = document.getElementById('canvas')
    $('button').on('click', function () {
        canvas.getContext('2d').drawImage(video, 0, 0, 2494, 3776);
        $('img').css('src', canvas.toDataURL("image/png"))
    })

}).catch(function(err) {
    console.log(err.name + ": " + err.message);
});