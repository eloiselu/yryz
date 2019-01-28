var goBack = function () {
    return this;
};

goBack.prototype.init = function () {
    // this.pageArr = [];
    //
    // this.addPage();
    this.initEvent();
};

goBack.prototype.addPage = function () {
    // var href = window.location.href;
    // if (this.pageArr[this.pageArr.length - 1] != href) {
    //     this.pageArr.push(href);
    // }
};

goBack.prototype.initEvent = function () {
    $(".head-back").on("click", function () {
        // this.pageArr.pop();
        // window.location.href = this.pageArr[this.pageArr.length - 1];

        window.location.href = document.referrer;
    });
};

$(function () {
    var goBackObj = new goBack();
    goBackObj.init();
});