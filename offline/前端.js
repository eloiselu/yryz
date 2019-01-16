/**
 * Created by lupan on 2019/1/10.
 */
$.ajax({
    type:"GET", //请求方式
    url:"service.php?number="+$("#keyword").val(), //发起请求的地址
    data:{
        "name": "小明",
        "age": "18",
    },//请求发送到服务器的数据
    dataType:"json", //预期服务器返回数据的类型
    success:function(data){ //请求成功时执行的回调函数
    if(data.success){
        $("searchResult").html(data.msg);
    }else{
        $("#searchResult").html("出现错误：" + data.msg);
    }
},
error:function(jqXHR){
    aler("发生错误："+ jqXHR.status);
}
});


//前端是什么:
// 通过html，css,js,ajax,DOM等技术，
// 接受后台所给数据使用ajax渲染在页面上，实现网站在移动、pc端的正确显示和交互功能
