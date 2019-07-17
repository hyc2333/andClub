/**
 * Created by Administrator on 2016/12/16.
 */
$(function(){
    var phonenumber=false;//判断条件，true为手机号码验证正确,false反之；
    //输入验证手机号
    $('input[type="tel"]').keyup(function(){
        var totest=/^1(3|4|5|7|8)\d{9}$/;//手机号码正则
        var btn=$(".hqyzm");//验证码按钮
        if(totest.test($(this).val()))
        {
            //激活发送验证码按钮
            btn.addClass('hqyzm_jh').attr("disabled",false);
            phonenumber=true;
        }
        else{
            //未激活发送验证码按钮
            btn.removeClass('hqyzm_jh').attr("disabled",true);
            phonenumber=false;
        }
    });

    //输入验证码
    $('input[type="text"]').keyup(function(){

        var code=true;//这里是从session里取出的验证码，我默认OK的,默认6位数
        //判断条件：验证码等于6位，手机号正确
        if(code && $(this).val().length===6 && phonenumber)
        {
            $('.login_btn').attr("disabled",false).addClass('login_btn_jh');//激活认证会员身份

        }else
        {
            $('.login_btn').attr("disabled",true).removeClass('login_btn_jh');//置灰认证会员身份
        }
    });

    //点击获取验证码
    $(".hqyzm").click(function(){
        $('input[type="text"]').val('');//清除验证码
        $('.login_btn').attr("disabled",true).removeClass('login_btn_jh');//置灰认证会员身份
        var num=60;//设定60秒
        var button=$(this);
        var timer;//倒计时
        djs();
        //倒计时函数
        function djs(){
            var Telinput=$('input[type="tel"]');
            button.removeClass('hqyzm_jh').attr("disabled",true);//置灰认证会员身份
            Telinput.attr("disabled",true);
            if(num<=10 && num>1)
            {
                --num;
                button.text('0'+num+'秒');
            }else if(num<=1)
            {
                clearInterval(timer);
                num=60;
                button.addClass('hqyzm_jh').attr("disabled",false).text('获取验证码');
                Telinput.attr("disabled",false);
                return false;
            }else{
                --num;
                button.text(num+'秒');
            }
            timer=setTimeout(djs,1000);
        }
    });
});