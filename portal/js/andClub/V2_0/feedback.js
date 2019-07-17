/**
 * Created by Administrator on 2017/3/2.
 */
$(function(){

    $('.lb_feedItem').keyup(function(){
        var valLength=$(this).val().length;//获取到本输入框的字数
        var self=this;
        if(valLength>=20)//判断是否超过20个字符
        {
           $(this).next('label').fadeIn();//显示警告
            setTimeout(function(){
                $(self).next('label').fadeOut();//1.5秒后关闭警告
            },1500);
        }else{
            $(this).next('label').fadeOut();//关闭警告
        }
    });




});









