
var ajax = {
    load:function(url, data, onsuccess,dataType){
        if(!dataType){
            dataType = "json";
        }
        $.ajax({
            url: url,
            type: "post",
            dataType: dataType,
            data:data,
            async: true,
            beforeSend: function () {
                var cookie_username = $.cookie("loginId");
                if(!cookie_username){
                    window.location.href = "/sign/login";
                }else{
//	        		console.log("--------: " +  document.cookie);
                    var date = new Date();
                    date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
                    $.cookie("loginId", cookie_username, { expires: date ,path:"/"});
//	        		console.log("xxxxxxxxxx: " +  document.cookie);
                }
            },
            success: function (data, textStatus) {
                if (data != null) {
                    if (onsuccess) {
                        onsuccess(data);
                    }
                }
            },
            error: function (x, e, c) {
                alert("查询失败！  : " + e);
            },
            complete: function (XMLHttpRequest, textStatus) {
            }
        });
    }
};