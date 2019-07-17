/**
 * Created by Administrator on 2017/2/23.
 */
$(function(){

    //点击解绑按钮
    $('.lb_unbBtn').on('click',function(){

        //new一个模态框
        new twoButtonPop({
            parentId:'#Popwindow_content',//父ID或者classname（必须，字符串）
            Info:'确定要解绑吗',//成功信息（必须，字符串，也可插入HTML标签）
            CancelName:'取消',//取消按钮名称（可选，默认为‘取消’）
            SuccessBtnName:'确定',//确认按钮名称（可选，默认为‘确认’）
            //CancelEvent:function(){alert('我是取消键');},//(可选，默认取消事件是关闭弹窗，这里可以自定义取消事件！)；
            Success:function(){alert('我是确认键回调函数');}//必选（点击确认按钮的事件！）;
        });

    });
});














