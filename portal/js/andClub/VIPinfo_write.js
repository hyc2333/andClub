/**
 * Created by Administrator on 2016/12/16.
 */
$(function(){
    $('#ulevel').css('border','none');
    //单位获得焦点
    $('#unit').click(function(){
        $('#main_page').hide();//隐藏首页
        $('#unitname_page').show();//显示单位搜索页
    });
    //点击搜索按钮（单位搜索）
    $('#searchBtn').click(function(){
        var searchInput=$(this).siblings('input');//输入框
        var searchitem=searchInput.val();//获得输入框内容
        var ucontent=$('.unitname_content');//显示内容框

        if(searchitem.length>=2)//用户需要输入两个以上字符
        {
            //这里的正则表达式匹配包含'烟草'这个词，如果用户输入‘烟草’将会列出单位名称
            //否则将会提示没有此单位
            if(/[\u70df\u8349]/.test(searchitem))
            {
                searchInput.val('');//清空输入框
                var arr=['福建省烟草公司福州市公司','中国烟草福建海晟连锁','中国烟草','中国烟草2'];
                new datacontent({Data:arr,Parentid:'.unitname_content'},function(){
                    //把选中的内容放到主页面中的单位去
                    $('#unit').children('span').text($(this).text()).removeClass('grayfont');
                    $('#unitname_page').hide().children('.unitname_content').empty();//隐藏当前页并且清空列表;
                    $('#main_page').show();//显示首页
                });
            }else{
                new datacontent({Data:['搜索失败，没有找到该单位'],Parentid:'.unitname_content'});
            }
        }else{
            new datacontent({Data:['搜索失败，请至少输入两个字'],Parentid:'.unitname_content'});
        }
    });
    //点击职级
    $('#ulevel').click(function(){
       $('.mask').show();//打开遮罩
       $('#ulevel_select').fadeIn('fast');//打开职级选择框
    });
    //职级选择
    $('#ulevel_select .level_content li').click(function(){
        var Ulevel=$(this).text();
        //当用户选择处级时
        if(Ulevel=='处级')
        {
            $('#ulevel').css('border-bottom','1px solid #dfe8f1');
           $('#department').parent().show();
        }else{
            $('#ulevel').css('border-bottom','none');
            $('#department').parent().hide();
        }
        $('#ulevel').children('span').text(Ulevel).removeClass('grayfont');
        $('#ulevel_select').fadeOut('fast');//隐藏职级选择框
        $('.mask').hide();//隐藏遮罩
    });
    //职级选择框里的返回按钮
    $('#down_window_retin').click(function(){
        $('#ulevel_select').fadeOut('fast');//隐藏职级选择框
        $('.mask').hide();//隐藏遮罩
    });

    //部门选择
    $('#dptm_select .level_content li').click(function(){
        var Ubranch=$(this).text();
        $('#department').text(Ubranch).removeClass('grayfont');
        $('#dptm_select').fadeOut('fast');//隐藏职级选择框
        $('.mask').hide();//隐藏遮罩
    });
    //部门选择里面的返回按钮
    $('#dptm_window_retin').click(function(){
        $('#dptm_select').fadeOut('fast');//隐藏职级选择框
        $('.mask').hide();//隐藏遮罩
    });
    //点击提交
    $('#userInfo_submit').click(function(){
        //姓名
        var Uname=$('#uname').val();
        $('#page_userInfo_name').text(Uname);
        //单位
        var Unit=$('#unit').children('span').text();
        $('#page_userInfo_unit').text(Unit);
        //职级
        var Ulevel=$('#ulevel').children('span').text();
        $('#page_userInfo_ulevel').text(Ulevel);
        //任职部门
        var Department=$('#department').val();
        $('#page_userInfo_department').text(Department);

        //关闭编辑页//打开个人信息页面
        $('#page_writeInfo').hide().siblings('#page_userInfo').show();
    });
});
//数据构造函数
//obj包含2个参数{Data:一个数组，Parentid:父元素}，callback：点击此li产生的回调函数
function datacontent(obj,callback)
{
    var that=this;
    this.udata=obj;
    this.cback=callback;
    this.creatlist=function(){
        for(var i=0;i<that.udata.Data.length;i++)
        {
            var li=$('<li></li>');
            li.text(that.udata.Data[i]);
            li.on('click',that.cback);//添加事件
            li.appendTo($(that.udata.Parentid));
        }
    };
    //清除父元素里的内容
    $(this.udata.Parentid).empty();
    //增加内容
    this.creatlist();
}
