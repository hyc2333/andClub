/**
 * Created by Administrator on 2017/2/23.
 */


$(function(){

    //点击顶部按钮（已预约/已结束）课程选择
    $('#lb_PcenterHeader>div').on('click',function(){
        var ListClass=$(this).data('lbclass');//获取到对应的列表ClassName
        if(ListClass=='lb_overlist')
        {
            $('.lb_CancelYuyue').hide();
        }else{
            $('.lb_CancelYuyue').show();
        }
        $(this).addClass('pageActive').siblings('div').removeClass('pageActive');//更改选中背景
        $('.'+ListClass).removeClass('d_none').siblings('ul').addClass('d_none');//显示当前菜单列表，隐藏其他菜单列表
    });


    //已预约列表选择
    $('.lb_yuyuelist>li').on('click',function(){
        var button=$('.lb_btnCancel');//取消预约按钮
        var courseIcon=$('#lb_courseNum');//按钮上的数字icon
        var courseNum=parseInt(courseIcon.text());//课程数
        if($(this).hasClass('lb_courseNon') || $(this).hasClass('lb_wyyImage'))//如果Class=lb_courseNon（超时不可选）或者Class=lb_wyyImage（未预约）则不可选
        {
            return false;
        }
        else if($(this).hasClass('lb_courseCheacked'))//如果Class=lb_courseCheacked则是当前选中状态
        {
            $(this).removeClass('lb_courseCheacked');//取消选中
            courseNum--;//课程数递减
            if(courseNum<=0)//当课程数小于或者等于0时
            {
                button.attr('disabled',true);//按钮颜色变暗，隐藏课程数，不可点击
                courseNum=0;//防止多次点击继续递减
            }
            courseIcon.text(courseNum);
        }
        else{
            button.attr('disabled',false);//激活按钮
            $(this).addClass('lb_courseCheacked');//添加选中状态
            courseNum++;//课程数递增
            courseIcon.text(courseNum);
        }
    });


    //点击取消预约  按钮
    $('.lb_btnCancel').on('click',function(){

        //new一个双按钮模态框（完整属性可以参照public_popwindow.js中说明）
        new twoButtonPop({
            parentId:'#Popwindow_content',//父ID或者classname（必须，字符串）
            Info:'确定取消预约已选中的课程？<br/><span style="color:#d27a80;font-weight:normal;">（课程开始前2个小时不可取消预约） </span>',//成功信息（必须，字符串，也可插入HTML标签）
            InfoAlign:'center',//信息对齐方式（可选，默认居中，left为左对齐，right为右对齐）
            CancelName:'取消',//取消按钮名称（可选，默认为‘取消’）
            SuccessBtnName:'确定',//确认按钮名称（可选，默认为‘确认’）；
            Success:function(){alert('我是确定的回调函数');}//必选（点击确认按钮的事件！）;
        });

    });

});













