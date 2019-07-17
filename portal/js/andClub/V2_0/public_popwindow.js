/**
 * Created by Administrator on 2017/1/6.
 */


/*
通用模态框应用说明--------------------------------------------------------


单按钮模态框例子：

 new oneButtonPop({
     parentId:'#Popwindow_content',//父ID或者classname（必须，字符串）
     Title:'领取成功',//标题（可选，字符串）
     Info:'成功信息成功信息成功信息成功信息成功信息成功信息',//成功信息（必须，字符串，也可插入HTML标签）
     InfoAlign:'left',//信息对齐方式（可选，默认居中，left为左对齐，right为右对齐）
     buttonColor:'red',//按钮颜色（可选，可用十六进制）
     buttonName:'好的',//按钮名称（可选，默认为‘确定’）
     Confirm:function(){alert('这是“知道了”按钮的回调函数');}//(可选，点击知道了的回调函数，如果不设置则默认关闭弹窗和遮罩)
 });

双按钮模态框例子：

 new twoButtonPop({
     parentId:'#Popwindow_content',//父ID或者classname（必须，字符串）
     Title:'领取成功',//标题（可选，字符串）
     Info:'成功信息成功信息成功信息成功信息成功信息成功信息',//成功信息（必须，字符串，也可插入HTML标签）
     InfoAlign:'left',//信息对齐方式（可选，默认居中，left为左对齐，right为右对齐）
     CancelName:'离开',//取消按钮名称（可选，默认为‘取消’）
     SuccessBtnName:'知道了',//确认按钮名称（可选，默认为‘确认’）
     cancelColor:'blue',//取消键颜色（可选）
     successColor:'red',//确认键颜色（可选）
     CancelEvent:function(){alert('我是取消键');},//(可选，默认取消事件是关闭弹窗，这里可以自定义取消事件！)；
     Success:function(){alert('我是确认键');}//必选（点击确认按钮的事件！）;
});

*/




//含有一个按钮的弹框开始--------------------------------------------

function oneButtonPop(obj)
{
    var that=this;
    this.objectData=obj;
    //创建函数
    this.createPop=function()
    {
        $(that.objectData.parentId).empty();//清空父元素
        var Pop=$('<div></div>');
        Pop.addClass('onePop');
        $(that.objectData.parentId).append(Pop);
        var PopContent=$('<div></div>');
        PopContent.addClass('PopContent');
        Pop.append(PopContent);
        var PopTitle=$('<p></p>');
        PopTitle.addClass('PopTitle POPfont_4');
        var PopItem=$('<p></p>');
        PopItem.addClass('PopItem POPfont_1');
        if(that.objectData.InfoAlign)//如果有对齐方式则设置对齐方式
        {
            PopItem.css('text-align',that.objectData.InfoAlign);
        }
        PopItem.html(that.objectData.Info);
        if(that.objectData.Title)//如果有标题则设置标题
        {
            PopTitle.text(that.objectData.Title);
            PopContent.append(PopTitle);
        }else{
            PopItem.css('padding','10%');//没有标题的话则设置内容的padding保证整体协调
        }
        PopContent.append(PopItem);
        var Button=$('<button></button>');
        Button.attr('type','button').addClass('PopButton_one POPfont_1');
        if(that.objectData.buttonName)
        {
            Button.text(that.objectData.buttonName);
        }else{
            Button.text('确认');
        }
        if(that.objectData.Confirm)
        {
            Button.on('click',that.objectData.Confirm);//‘知道了按钮’挂事件
        }
        else
        {
            //知道了默认事件
            Button.on('click',function(){
                $('.mask,'+that.objectData.parentId).hide();//隐藏遮罩和父元素
            });
        }
        if(that.objectData.buttonColor)//如果有设置按钮颜色
        {
            Button.css('background-color',that.objectData.buttonColor)
        }
        Pop.append(Button);
    };
    $('.mask,'+that.objectData.parentId).show();//显示遮罩和父元素
    this.createPop();
}

//含有一个按钮的弹框结束--------------------------------------------




//含有一个两个按钮的弹框开始--------------------------------------------

function twoButtonPop(obj)
{
    var that=this;
    this.objectData=obj;
    //创建函数
    this.createPop=function(){
        $(that.objectData.parentId).empty();//清空父元素
        var Pop=$('<div></div>');
        Pop.addClass('onePop');
        $(that.objectData.parentId).append(Pop);
        var PopContent=$('<div></div>');
        PopContent.addClass('PopContent');
        Pop.append(PopContent);
        var PopTitle=$('<p></p>');
        PopTitle.addClass('PopTitle POPfont_4');
        var PopItem=$('<p></p>');
        PopItem.addClass('PopItem POPfont_1');
        if(that.objectData.InfoAlign)//如果有对齐方式则设置对齐方式
        {
            PopItem.css('text-align',that.objectData.InfoAlign);
        }
        PopItem.html(that.objectData.Info);
        if(that.objectData.Title)//如果有标题则设置标题
        {
            PopTitle.text(that.objectData.Title);
            PopContent.append(PopTitle);
        }else{
            PopItem.css('padding','10%');//没有标题的话则设置内容的padding保证整体协调
        }
        PopContent.append(PopItem);
        var btngrounp=$('<div></div>');
        btngrounp.addClass('PopBtn_grounp POPfont_1');//按钮组
        Pop.append(btngrounp);
        var btn1=$('<button></button>');
        if(that.objectData.CancelName)
        {
            btn1.text(that.objectData.CancelName);
        }else{
            btn1.text('取消');
        }
        btn1.attr('type','button');
        if(that.objectData.CancelEvent)//如果有定义取消键事件则添加事件，否则用默认事件
        {
            btn1.on('click',that.objectData.CancelEvent);
        }else{
            //取消键的默认事件
            btn1.on('click',function(){
                $('.mask,'+that.objectData.parentId).hide();//隐藏遮罩和父元素
            });
        }
        var btn2=$('<button></button>');
        if(that.objectData.SuccessBtnName)
        {
            btn2.text(that.objectData.SuccessBtnName);
        }else{
            btn2.text('确定');
        }
        btn2.attr('type','button').on('click',that.objectData.Success);
        if(that.objectData.cancelColor){btn1.css('background-color',that.objectData.cancelColor);}//取消键颜色
        if(that.objectData.successColor){btn2.css('background-color',that.objectData.successColor);}//确认键颜色
        btngrounp.append(btn1);
        btngrounp.append(btn2);
    };
    $('.mask,'+that.objectData.parentId).show();//显示遮罩和父元素
    this.createPop();
}


//含有一个两个按钮的弹框结束--------------------------------------------
