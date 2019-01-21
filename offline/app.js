var express = require('express');
var path = require('path');
var app = express();

// 设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, 'public')));

// 首页
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// 选枕助手
app.get('/view/assistant.html', function (req, res) {
    res.sendFile(__dirname + '/view/assistant.html');
});

// 好睡专题
app.get('/view/good-sleep.html', function (req, res) {
    res.sendFile(__dirname + '/view/good-sleep.html');
});

// 曲线测量
app.get('/view/measure.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure.html');
});

// 曲线测量-第1步 选择
app.get('/view/measure-step1.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step1.html');
});

// 曲线测量-第2步 侧面曲线
app.get('/view/measure-step2.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step2.html');
});

// 曲线测量-第3步 正面曲线
app.get('/view/measure-step3.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step3.html');
});

// 曲线测量-第4步 计算中
app.get('/view/measure-step4.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step4.html');
});

// 曲线测量-第5步 我的曲线
app.get('/view/measure-step5.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step5.html');
});

// 曲线测量-第6步 二维码
app.get('/view/measure-step6.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step6.html');
});

//
app.get('/view/.html', function (req, res) {
    res.sendFile(__dirname + '/view/.html');
});

//
app.get('/view/.html', function (req, res) {
    res.sendFile(__dirname + '/view/.html');
});

//
app.get('/view/.html', function (req, res) {
    res.sendFile(__dirname + '/view/.html');
});

//
app.get('/view/.html', function (req, res) {
    res.sendFile(__dirname + '/view/.html');
});

//
app.get('/view/.html', function (req, res) {
    res.sendFile(__dirname + '/view/.html');
});

//
app.get('/view/.html', function (req, res) {
    res.sendFile(__dirname + '/view/.html');
});


app.listen(3010);