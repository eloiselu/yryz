/**
 * Created by lupan on 2019/1/3.
 */
$(document).ready(function(){
    $('.cart-right').each(function(){
        var _this=$(this);
        var add=$(_this).find(".button-up");//添加数量
        var reduce=$(_this).find(".button-down");//减少数量
        var num=1;//数量初始值
        var num_txt=$(_this).find(".button-count");//接受数量的文本框
        $(add).click(function(){
            num = $(num_txt).val();
            num++;
            num_txt.val(num);
            //ajax代码可以放这里传递到数据库实时改变总价
        });
        /*减少数量的方法*/
        $(reduce).click(function(){
            //如果文本框的值大于0才执行减去方法
            num =  $(num_txt).val();
            if(num >0){
                //并且当文本框的值为1的时候，减去后文本框直接清空值，不显示0
                if(num==1)
                { num--;
                    num_txt.val("1");
                }
                //否则就执行减减方法
                else
                {
                    num--;
                    num_txt.val(num);
                }

            }
        });
    })
});