/**
 * Created by Administrator on 2017/3/2.
 */
$(function(){

    //点击顶部按钮（已预约/已结束）课程选择
    $('#lb_PcenterHeader>div').on('click',function(){
        var ListClass=$(this).data('lbclass');//获取到对应的列表ClassName
        $(this).addClass('pageActive').siblings('div').removeClass('pageActive');//更改选中背景
        $('.'+ListClass).removeClass('d_none').siblings('ul').addClass('d_none');//显示当前菜单列表，隐藏其他菜单列表
    });


});