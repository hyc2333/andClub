/**
 * Created by Administrator on 2017/2/28.
 */
$(function(){

    //点击顶部按钮（可预约/已预约）课程选择
    $('.lb_coaclassTab>div').on('click',function(){
        var ListClass=$(this).data('lbclass'),//获取到对应的列表ClassName
        BtnClass=$(this).data('btnclass');
        $(this).addClass('pageActive').siblings('div').removeClass('pageActive');//更改选中背景
        $('.'+ListClass).removeClass('d_none').siblings('ul').addClass('d_none');//显示当前菜单列表，隐藏其他菜单列表
        $('.'+BtnClass).removeClass('d_none').siblings('.lb_CancelYuyue').addClass('d_none');//显示当前菜单对应的按钮，隐藏其他菜单的按钮
    });



    //可预约列表选择
    $('.lb_coaclassKYY>li').on('click',function(){
        var button=$('.lb_yyBtnWindow>button');//预约课程按钮
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

    //已预约列表选择
    $('.lb_coaclassYYY>li').on('click',function(){
        var button=$('.lb_CancelBtnWindow>button');//取消预约课程按钮
        var courseIcon=$('#lb_courseNum_2');//按钮上的数字icon
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



    //点击预约课程  按钮
    $('.lb_yyBtnWindow>button').on('click',function(){

        //new一个双按钮模态框（完整属性可以参照public_popwindow.js中说明）
        new twoButtonPop({
            parentId:'#Popwindow_content',//父ID或者classname（必须，字符串）
            Info:'确定预约已选中的课程？<br/><span style="color:#d27a80;font-weight:normal;">（课程开始前2个小时不可取消预约） </span>',//成功信息（必须，字符串，也可插入HTML标签）
            InfoAlign:'center',//信息对齐方式（可选，默认居中，left为左对齐，right为右对齐）
            CancelName:'取消',//取消按钮名称（可选，默认为‘取消’）
            SuccessBtnName:'确定',//确认按钮名称（可选，默认为‘确认’）；
            Success:function(){alert('我是确定的回调函数');}//必选（点击确认按钮的事件！）;
        });

    });


    //点击取消预约课程  按钮
    $('.lb_CancelBtnWindow>button').on('click',function(){

        //new一个双按钮模态框（完整属性可以参照public_popwindow.js中说明）
        new twoButtonPop({
            parentId:'#Popwindow_content',//父ID或者classname（必须，字符串）
            Info:'确定取消已选中的课程？',//成功信息（必须，字符串，也可插入HTML标签）
            InfoAlign:'center',//信息对齐方式（可选，默认居中，left为左对齐，right为右对齐）
            CancelName:'取消',//取消按钮名称（可选，默认为‘取消’）
            SuccessBtnName:'确定',//确认按钮名称（可选，默认为‘确认’）；
            Success:function(){alert('我是确定的回调函数');}//必选（点击确认按钮的事件！）;
        });

    });

});












