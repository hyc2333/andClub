/**
 * Created by Administrator on 2016/12/16.
 */
$(function(){
    var bodyHeight=$(window).height();//设备高度
    var bodyWidth=$(window).width();//设备宽度
    var certainInfo=$('#certainInfo');//确定信息弹窗
    var successWindow=$('#successWindow');//成功弹窗
    var failWindow=$('#failWindow');//失败弹窗
    var mask=$('.mask');//遮罩
    //点击立即支付
    $('.sub_btn').click(function(){
        var pay=$('input[name="pay"]:checked');//支付方式信息
        var cdType=$('#cd_type');//场地编号
        var cdType_prj=$('input[name="inc_type"]:checked');//场地
        var yyTime=$('input[name="yy_time"]:checked');//预约时间段
        var datestr='';//时间段文字
        var yyDate=$('#yytime');//预约日期

        var cHeight=certainInfo.innerHeight();
        var cWidth=certainInfo.innerWidth();
        mask.show();
        //支付信息
        $('#order_payInfo').text($("#"+pay.attr('data-id')).text());
        //场地信息
        $('#order_add').text($("#"+cdType_prj.attr('data-id')).text()+cdType.val());
        //预约日期
        $('#order_date').text(yyDate.val());
        //预约时间
        for(var i=0;i<yyTime.length;i++)//循环遍历已选择的时间段
        {
            datestr+=' ';
            datestr+=$('#'+yyTime.eq(i).attr('data-id')).text();
        }
        $('#order_time').text(datestr);
        certainInfo.show().css({left:(bodyWidth/2-cWidth/2)+'px',top:(bodyHeight/2-cHeight/2)+'px'});
    });
    //点击确定信息弹窗中的取消按钮
    $('.cancel').click(function(){
        $(this).parent().parent().hide();
        mask.hide();
    });
    //点击确定信息弹窗中的确定按钮
    $('.confirm').click(function(){
        var aHeight=successWindow.innerHeight();
        var aWidth=successWindow.innerWidth();
        $(this).parent().parent().hide();
        //确定弹窗居中
        successWindow.show().css({left:(bodyWidth/2-aWidth/2)+'px',top:(bodyHeight/2-aHeight/2)+'px'});//打开成功弹窗
    });
    //点击成功弹窗中的知道按钮
    $('#successBtn').click(function(){
        $(this).parent().hide();
        //打开失败弹窗并居中
        var fHeight=failWindow.innerHeight();
        var fWidth=failWindow.innerWidth();
        failWindow.show().css({left:(bodyWidth/2-fWidth/2)+'px',top:(bodyHeight/2-fHeight/2)+'px'})
    });
    //点击失败弹窗中的按钮
    $('#failBtn').click(function(){
        $(this).parent().hide();
        mask.hide();
    });
    //点击我已知晓那一行（方便用户选中与取消）
    $('.inc_blueblock_input').click(function(){
        var KnowRule=$('#KnowRule');
        if(KnowRule.is(':checked'))
        {
            KnowRule.prop('checked',false);
            //置灰立即支付按钮
            $('.sub_btn').attr('disabled',true);
        }else{
            KnowRule.prop('checked',true);
            //激活立即支付按钮
            $('.sub_btn').attr('disabled',false);
        }
    });
});










